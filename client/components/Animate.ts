
import anime from "../modules/anime";
import { findEl } from "../utils/elman";
import { widget } from "../widgets/_ghost/WidgetProps";

export type animationValue = string | number | Record<string, any> | (string | number)[] | CallableFunction;

export interface animation {
	update?: CallableFunction,
  begin?: CallableFunction,
  loopBegin?: CallableFunction,
  changeBegin?: CallableFunction,
  change?: CallableFunction,
  changeComplete?: CallableFunction,
  loopComplete?: CallableFunction,
  complete?: CallableFunction,
  loop?: boolean | number,
  direction?: 'reverse' | 'alternate' | 'normal',
  autoplay?: boolean,
  timelineOffset?: CallableFunction,

	duration?: animationValue,
  delay?: animationValue,
  endDelay?: animationValue,
  easing?: animationValue,
  round?: animationValue,

	innerText?: animationValue,

	translateX?: animationValue,
	translateY?: animationValue,
	translateZ?: animationValue,
	translate?: animationValue,
	rotate?: animationValue,
	scale?: animationValue,
	scaleX?: animationValue,
	scaleY?: animationValue,
	scaleZ?: animationValue,
	skew?: animationValue,
	skewY?: animationValue,
	skewX?: animationValue,
	rotateX?: animationValue,
	rotateY?: animationValue,
	rotateZ?: animationValue,
	perspective?: animationValue,
	matrix?: animationValue,
	matrix3d?: animationValue,

	width?: animationValue;
  height?: animationValue;
  gap?: animationValue;
  marginTop?: animationValue;
  marginRight?: animationValue;
  marginBottom?: animationValue;
  marginLeft?: animationValue;
  paddingTop?: animationValue;
  paddingRight?: animationValue;
  paddingBottom?: animationValue;
  paddingLeft?: animationValue;
  borderTopWidth?: animationValue;
  borderRightWidth?: animationValue;
  borderBottomWidth?: animationValue;
  borderLeftWidth?: animationValue;
  borderTopStyle?: animationValue;
  borderRightStyle?: animationValue;
  borderBottomStyle?: animationValue;
  borderLeftStyle?: animationValue;
  borderTopColor?: animationValue;
  borderRightColor?: animationValue;
  borderBottomColor?: animationValue;
  borderLeftColor?: animationValue;
  borderRadius?: animationValue;
  borderTopLeftRadius?: animationValue;
  borderTopRightRadius?: animationValue;
  borderBottomLeftRadius?: animationValue;
  borderBottomRightRadius?: animationValue;
  boxShadow?: animationValue;
  overflow?: animationValue;
  overflowX?: animationValue;
  overflowY?: animationValue;
  visibility?: animationValue;
  display?: animationValue;
  position?: animationValue;
  top?: animationValue;
  right?: animationValue;
  bottom?: animationValue;
  left?: animationValue;
  float?: animationValue;
  clear?: animationValue;
  flex?: animationValue;
  flexDirection?: animationValue;
  flexWrap?: animationValue;
  justifyContent?: animationValue;
  alignItems?: animationValue;
  alignContent?: animationValue;
  flexGrow?: animationValue;
  flexShrink?: animationValue;
  flexBasis?: animationValue;
  order?: animationValue;
  fontFamily?: animationValue;
  fontSize?: animationValue;
  fontWeight?: animationValue;
  fontStyle?: animationValue;
  textAlign?: animationValue;
  textTransform?: animationValue;
  textDecoration?: animationValue;
  lineHeight?: animationValue;
  letterSpacing?: animationValue;
  whiteSpace?: animationValue;
  backgroundColor?: animationValue;
  backgroundImage?: animationValue;
  backgroundRepeat?: animationValue;
  backgroundPosition?: animationValue;
  backgroundSize?: animationValue;
  color?: animationValue;
  cursor?: animationValue;
  zIndex?: animationValue;
  opacity?: animationValue;
  content?: animationValue;
  transition?: animationValue;
  animation?: animationValue;
  transform?: animationValue;
  userSelect?: animationValue;

	[key: string]: any;
}

function makeOps(animations: animation){
	for(var i in animations){
		let anim = animations[i];
		if(typeof anim == "function"){
			animations[i] = (el: any, ...args: any[]) => {
				return anim(el.GUIWIDGET, ...args);
			}
		}
		if(typeof anim == "string"){
			let func = anim.match(/(random|stagger)\(([^)]+)\)/);
			let funcs = 'random|none'.split('|')
			if(func){
				let args: any = func[2].match(',') ? func[2].split(',').map(i => i.trim()) : [func[2]];
				args = args.map((g: any) => isNaN(parseInt(g)) ? g : parseInt(g))
				.map((g: any) => {
					if(typeof g == "string"){
						try{
							return JSON.parse(g);
						} catch(e){
							return g;
						}
					}
					return g;
				});
				animations[i] = funcs.includes(func[1]) ? () => (anime as any)[(func as any)[1]](...args) : (anime as any)[func[1]](...args);
			}
		}
	}
	console.log(animations);
	return animations;
}

function animateWidgets(widgets: widget[], animations: animation){
	animations = makeOps(animations);
	return anime({
		targets: widgets.map(widget => findEl(widget!.id!).at(0)),
		...animations
	});
}

function animateWidget(widget: widget, animations: animation){
	return animateWidgets([widget], animations);
};

export { animateWidget, animateWidgets };