import $ from "jquery";
import Widget from "../main/Widget.js";
import StateMan from "../../utils/stateman.js";

// const { state, update } = $useState('text');

function runOverWidget(component, widget){
	function doStates(widget){
		widget.setState(component.state);
		widget.children().forEach(widget => {
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

			this.setState(objects);

			let values = {};

			const setState = (newvalues) => {
				values = {...values, ...newvalues};
			}

			let __MainWidget = "";
			let $body;

			for(var i in objects){
				this[i] = $useState(objects[i]);
				values[i] = objects[i];
			}

			$on('pageBeforeIn', () => {
				$body = Widget.from($el.value[0]);
				if(typeof this._initState == "function"){
					this._initState(props, { $f7, $update, $useState, $ref, $body });
				}
			});
			
			$on('pageInit', () => {
				const element = $el.value[0];
				if(typeof this._onBuild == "function"){
					__MainWidget = this._onBuild(props, { $f7, $update, $useState, $ref, $body: Widget.from(element) });
					__MainWidget.setState(this.state);
					this.__MainWidget = __MainWidget;
					runOverWidget(__MainWidget);
					__MainWidget.to(element);
				}
			});

			$on('pageAfterIn', () => {
				const element = $el.value[0];
				if(typeof this._after == "function"){
					if(!__MainWidget) return;
					const widget = this._after(props, { $widget: __MainWidget, $f7, $update, $useState, $ref, $body: Widget.from(element) });
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
		runOverWidget(this, this.__MainWidget);
	}

}

export default Component;