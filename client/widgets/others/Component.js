;
import Widget from "../main/Widget.js";
import StateMan from "../../utils/stateman.js";

// const { state, update } = $useState('text');

function runOverWidget(component, widget, state){
	function doStates(widget){
		widget.setState({...state});
		widget.children().forEach(widget => {
			if(typeof widget._onBuilt == "function"){
				widget._onBuilt(component, component.state);
			}
			doStates(widget);
		});
	}
	if(widget) doStates(widget);
}

class Component extends StateMan {

	constructor(objects){
		super();
		const that = this;
		return (props, {
			$f7,
			$h,
			$on,
			$update,
			$useState,
			$el,
			$ref
		}) => {

			if(objects?.props){
				props = {...props, ...objects.props};
			}

			this.setState(objects);

			this.state.$app = $f7;

			let values = {};

			const setState = (newvalues) => {
				values = {...values, ...newvalues};
			}

			let __MainWidget = "";
			let $body;
			let size;

			for(var i in objects){
				this[i] = $useState(objects[i]);
				values[i] = objects[i];
			}

			$on('pageBeforeIn', () => {
				$body = Widget.from($el.value[0]);
				size = { width: $body.width(), height: $body.height() };
				if(typeof this._initState == "function"){
					this._initState(props, { $f7, $update, $useState, size, $ref, $body });
				}
			});
			
			$on('pageInit', () => {
				const element = $el.value[0];
				size = { width: $(element).width(), height: $(element).height() };
				if(typeof this._onBuild == "function"){
					__MainWidget = this._onBuild(props, { $f7, $update, $useState, $ref, size, $body: Widget.from(element) });
					this.__MainWidget = __MainWidget;
					__MainWidget.to(element);
				}
			});

			$on('pageAfterIn', () => {
				const element = $el.value[0];
				size = { width: $(element).width(), height: $(element).height() };
				if(typeof this._after == "function"){
					if(!__MainWidget) return;
					const widget = this._after(props, { $widget: __MainWidget, $f7, $update, size, $useState, $ref, $body: Widget.from(element) });
					if(widget instanceof Widget) runOverWidget(this, widget), widget.to(element);
				}
			});

			return () => $h `<div class="page widget"></div>`;
		};
	}

	_initState(){}
	
	_onBuild(){
		return new Widget();
	}

	_after(){}

	_onStateChange({new: state}){
		runOverWidget(this, this.__MainWidget, state);
	}

}

export default Component;