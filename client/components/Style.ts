import { WidgetEventTarget } from "../utils/eventtarget";
import voca from "../modules/voca";
import { findEl } from "../utils/elman";
import { isHTMLElement, isWidget } from "../utils/type";
import Widget from "../widgets/main/Widget";
import generateRandomID from "../utils/id";

type styleProp = string | number | (string | number | boolean)[] | boolean;
interface props {
	[key: string]: any;
	accentColor?: styleProp;
	additiveSymbols?: styleProp;
	alignContent?: styleProp;
	alignItems?: styleProp;
	alignSelf?: styleProp;
	alignmentBaseline?: styleProp;
	all?: styleProp;
	animation?: styleProp;
	animationComposition?: styleProp;
	animationDelay?: styleProp;
	animationDirection?: styleProp;
	animationDuration?: styleProp;
	animationFillMode?: styleProp;
	animationIterationCount?: styleProp;
	animationName?: styleProp;
	animationPlayState?: styleProp;
	animationRange?: styleProp;
	animationRangeEnd?: styleProp;
	animationRangeStart?: styleProp;
	animationTimeline?: styleProp;
	animationTimingFunction?: styleProp;
	appRegion?: styleProp;
	appearance?: styleProp;
	ascentOverride?: styleProp;
	aspectRatio?: styleProp;
	backdropFilter?: styleProp;
	backfaceVisibility?: styleProp;
	background?: styleProp;
	backgroundAttachment?: styleProp;
	backgroundBlendMode?: styleProp;
	backgroundClip?: styleProp;
	backgroundColor?: styleProp;
	backgroundImage?: styleProp;
	backgroundOrigin?: styleProp;
	backgroundPosition?: styleProp;
	backgroundPositionX?: styleProp;
	backgroundPositionY?: styleProp;
	backgroundRepeat?: styleProp;
	backgroundRepeatX?: styleProp;
	backgroundRepeatY?: styleProp;
	backgroundSize?: styleProp;
	basePalette?: styleProp;
	baselineShift?: styleProp;
	baselineSource?: styleProp;
	blockSize?: styleProp;
	border?: styleProp;
	borderBlock?: styleProp;
	borderBlockColor?: styleProp;
	borderBlockEnd?: styleProp;
	borderBlockEndColor?: styleProp;
	borderBlockEndStyle?: styleProp;
	borderBlockEndWidth?: styleProp;
	borderBlockStart?: styleProp;
	borderBlockStartColor?: styleProp;
	borderBlockStartStyle?: styleProp;
	borderBlockStartWidth?: styleProp;
	borderBlockStyle?: styleProp;
	borderBlockWidth?: styleProp;
	borderBottom?: styleProp;
	borderBottomColor?: styleProp;
	borderBottomLeftRadius?: styleProp;
	borderBottomRightRadius?: styleProp;
	borderBottomStyle?: styleProp;
	borderBottomWidth?: styleProp;
	borderCollapse?: styleProp;
	borderColor?: styleProp;
	borderEndEndRadius?: styleProp;
	borderEndStartRadius?: styleProp;
	borderImage?: styleProp;
	borderImageOutset?: styleProp;
	borderImageRepeat?: styleProp;
	borderImageSlice?: styleProp;
	borderImageSource?: styleProp;
	borderImageWidth?: styleProp;
	borderInline?: styleProp;
	borderInlineColor?: styleProp;
	borderInlineEnd?: styleProp;
	borderInlineEndColor?: styleProp;
	borderInlineEndStyle?: styleProp;
	borderInlineEndWidth?: styleProp;
	borderInlineStart?: styleProp;
	borderInlineStartColor?: styleProp;
	borderInlineStartStyle?: styleProp;
	borderInlineStartWidth?: styleProp;
	borderInlineStyle?: styleProp;
	borderInlineWidth?: styleProp;
	borderLeft?: styleProp;
	borderLeftColor?: styleProp;
	borderLeftStyle?: styleProp;
	borderLeftWidth?: styleProp;
	borderRadius?: styleProp;
	borderRight?: styleProp;
	borderRightColor?: styleProp;
	borderRightStyle?: styleProp;
	borderRightWidth?: styleProp;
	borderSpacing?: styleProp;
	borderStartEndRadius?: styleProp;
	borderStartStartRadius?: styleProp;
	borderStyle?: styleProp;
	borderTop?: styleProp;
	borderTopColor?: styleProp;
	borderTopLeftRadius?: styleProp;
	borderTopRightRadius?: styleProp;
	borderTopStyle?: styleProp;
	borderTopWidth?: styleProp;
	borderWidth?: styleProp;
	bottom?: styleProp;
	boxShadow?: styleProp;
	boxSizing?: styleProp;
	breakAfter?: styleProp;
	breakBefore?: styleProp;
	breakInside?: styleProp;
	bufferedRendering?: styleProp;
	captionSide?: styleProp;
	caretColor?: styleProp;
	clear?: styleProp;
	clip?: styleProp;
	clipPath?: styleProp;
	clipRule?: styleProp;
	color?: styleProp;
	colorInterpolation?: styleProp;
	colorInterpolationFilters?: styleProp;
	colorRendering?: styleProp;
	colorScheme?: styleProp;
	columnCount?: styleProp;
	columnFill?: styleProp;
	columnGap?: styleProp;
	columnRule?: styleProp;
	columnRuleColor?: styleProp;
	columnRuleStyle?: styleProp;
	columnRuleWidth?: styleProp;
	columnSpan?: styleProp;
	columnWidth?: styleProp;
	columns?: styleProp;
	contain?: styleProp;
	containIntrinsicBlockSize?: styleProp;
	containIntrinsicHeight?: styleProp;
	containIntrinsicInlineSize?: styleProp;
	containIntrinsicSize?: styleProp;
	containIntrinsicWidth?: styleProp;
	container?: styleProp;
	containerName?: styleProp;
	containerType?: styleProp;
	content?: styleProp;
	contentVisibility?: styleProp;
	counterIncrement?: styleProp;
	counterReset?: styleProp;
	counterSet?: styleProp;
	cursor?: styleProp;
	cx?: styleProp;
	cy?: styleProp;
	d?: styleProp;
	descentOverride?: styleProp;
	direction?: styleProp;
	display?: styleProp;
	dominantBaseline?: styleProp;
	emptyCells?: styleProp;
	fallback?: styleProp;
	fill?: styleProp;
	fillOpacity?: styleProp;
	fillRule?: styleProp;
	filter?: styleProp;
	flex?: styleProp;
	flexBasis?: styleProp;
	flexDirection?: styleProp;
	flexFlow?: styleProp;
	flexGrow?: styleProp;
	flexShrink?: styleProp;
	flexWrap?: styleProp;
	float?: styleProp;
	floodColor?: styleProp;
	floodOpacity?: styleProp;
	font?: styleProp;
	fontDisplay?: styleProp;
	fontFamily?: styleProp;
	fontFeatureSettings?: styleProp;
	fontKerning?: styleProp;
	fontOpticalSizing?: styleProp;
	fontPalette?: styleProp;
	fontSize?: styleProp;
	fontStretch?: styleProp;
	fontStyle?: styleProp;
	fontSynthesis?: styleProp;
	fontSynthesisSmallCaps?: styleProp;
	fontSynthesisStyle?: styleProp;
	fontSynthesisWeight?: styleProp;
	fontVariant?: styleProp;
	fontVariantAlternates?: styleProp;
	fontVariantCaps?: styleProp;
	fontVariantEastAsian?: styleProp;
	fontVariantLigatures?: styleProp;
	fontVariantNumeric?: styleProp;
	fontVariantPosition?: styleProp;
	fontVariationSettings?: styleProp;
	fontWeight?: styleProp;
	forcedColorAdjust?: styleProp;
	gap?: styleProp;
	grid?: styleProp;
	gridArea?: styleProp;
	gridAutoColumns?: styleProp;
	gridAutoFlow?: styleProp;
	gridAutoRows?: styleProp;
	gridColumn?: styleProp;
	gridColumnEnd?: styleProp;
	gridColumnGap?: styleProp;
	gridColumnStart?: styleProp;
	gridGap?: styleProp;
	gridRow?: styleProp;
	gridRowEnd?: styleProp;
	gridRowGap?: styleProp;
	gridRowStart?: styleProp;
	gridTemplate?: styleProp;
	gridTemplateAreas?: styleProp;
	gridTemplateColumns?: styleProp;
	gridTemplateRows?: styleProp;
	height?: styleProp;
	hyphenateCharacter?: styleProp;
	hyphenateLimitChars?: styleProp;
	hyphens?: styleProp;
	imageOrientation?: styleProp;
	imageRendering?: styleProp;
	inherits?: styleProp;
	initialLetter?: styleProp;
	initialValue?: styleProp;
	inlineSize?: styleProp;
	inset?: styleProp;
	insetBlock?: styleProp;
	insetBlockEnd?: styleProp;
	insetBlockStart?: styleProp;
	insetInline?: styleProp;
	insetInlineEnd?: styleProp;
	insetInlineStart?: styleProp;
	isolation?: styleProp;
	justifyContent?: styleProp;
	justifyItems?: styleProp;
	justifySelf?: styleProp;
	left?: styleProp;
	letterSpacing?: styleProp;
	lightingColor?: styleProp;
	lineBreak?: styleProp;
	lineGapOverride?: styleProp;
	lineHeight?: styleProp;
	listStyle?: styleProp;
	listStyleImage?: styleProp;
	listStylePosition?: styleProp;
	listStyleType?: styleProp;
	margin?: styleProp;
	marginBlock?: styleProp;
	marginBlockEnd?: styleProp;
	marginBlockStart?: styleProp;
	marginBottom?: styleProp;
	marginInline?: styleProp;
	marginInlineEnd?: styleProp;
	marginInlineStart?: styleProp;
	marginLeft?: styleProp;
	marginRight?: styleProp;
	marginTop?: styleProp;
	marker?: styleProp;
	markerEnd?: styleProp;
	markerMid?: styleProp;
	markerStart?: styleProp;
	mask?: styleProp;
	maskType?: styleProp;
	mathDepth?: styleProp;
	mathShift?: styleProp;
	mathStyle?: styleProp;
	maxBlockSize?: styleProp;
	maxHeight?: styleProp;
	maxInlineSize?: styleProp;
	maxWidth?: styleProp;
	minBlockSize?: styleProp;
	minHeight?: styleProp;
	minInlineSize?: styleProp;
	minWidth?: styleProp;
	mixBlendMode?: styleProp;
	negative?: styleProp;
	objectFit?: styleProp;
	objectPosition?: styleProp;
	objectViewBox?: styleProp;
	offset?: styleProp;
	offsetAnchor?: styleProp;
	offsetDistance?: styleProp;
	offsetPath?: styleProp;
	offsetPosition?: styleProp;
	offsetRotate?: styleProp;
	opacity?: styleProp;
	order?: styleProp;
	orphans?: styleProp;
	outline?: styleProp;
	outlineColor?: styleProp;
	outlineOffset?: styleProp;
	outlineStyle?: styleProp;
	outlineWidth?: styleProp;
	overflow?: styleProp;
	overflowAnchor?: styleProp;
	overflowClipMargin?: styleProp;
	overflowWrap?: styleProp;
	overflowX?: styleProp;
	overflowY?: styleProp;
	overlay?: styleProp;
	overrideColors?: styleProp;
	overscrollBehavior?: styleProp;
	overscrollBehaviorBlock?: styleProp;
	overscrollBehaviorInline?: styleProp;
	overscrollBehaviorX?: styleProp;
	overscrollBehaviorY?: styleProp;
	pad?: styleProp;
	padding?: styleProp;
	paddingBlock?: styleProp;
	paddingBlockEnd?: styleProp;
	paddingBlockStart?: styleProp;
	paddingBottom?: styleProp;
	paddingInline?: styleProp;
	paddingInlineEnd?: styleProp;
	paddingInlineStart?: styleProp;
	paddingLeft?: styleProp;
	paddingRight?: styleProp;
	paddingTop?: styleProp;
	page?: styleProp;
	pageBreakAfter?: styleProp;
	pageBreakBefore?: styleProp;
	pageBreakInside?: styleProp;
	pageOrientation?: styleProp;
	paintOrder?: styleProp;
	perspective?: styleProp;
	perspectiveOrigin?: styleProp;
	placeContent?: styleProp;
	placeItems?: styleProp;
	placeSelf?: styleProp;
	pointerEvents?: styleProp;
	position?: styleProp;
	prefix?: styleProp;
	quotes?: styleProp;
	r?: styleProp;
	range?: styleProp;
	resize?: styleProp;
	right?: styleProp;
	rotate?: styleProp;
	rowGap?: styleProp;
	rubyPosition?: styleProp;
	rx?: styleProp;
	ry?: styleProp;
	scale?: styleProp;
	scrollBehavior?: styleProp;
	scrollMargin?: styleProp;
	scrollMarginBlock?: styleProp;
	scrollMarginBlockEnd?: styleProp;
	scrollMarginBlockStart?: styleProp;
	scrollMarginBottom?: styleProp;
	scrollMarginInline?: styleProp;
	scrollMarginInlineEnd?: styleProp;
	scrollMarginInlineStart?: styleProp;
	scrollMarginLeft?: styleProp;
	scrollMarginRight?: styleProp;
	scrollMarginTop?: styleProp;
	scrollPadding?: styleProp;
	scrollPaddingBlock?: styleProp;
	scrollPaddingBlockEnd?: styleProp;
	scrollPaddingBlockStart?: styleProp;
	scrollPaddingBottom?: styleProp;
	scrollPaddingInline?: styleProp;
	scrollPaddingInlineEnd?: styleProp;
	scrollPaddingInlineStart?: styleProp;
	scrollPaddingLeft?: styleProp;
	scrollPaddingRight?: styleProp;
	scrollPaddingTop?: styleProp;
	scrollSnapAlign?: styleProp;
	scrollSnapStop?: styleProp;
	scrollSnapType?: styleProp;
	scrollTimeline?: styleProp;
	scrollTimelineAxis?: styleProp;
	scrollTimelineName?: styleProp;
	scrollbarGutter?: styleProp;
	shapeImageThreshold?: styleProp;
	shapeMargin?: styleProp;
	shapeOutside?: styleProp;
	shapeRendering?: styleProp;
	size?: styleProp;
	sizeAdjust?: styleProp;
	speak?: styleProp;
	speakAs?: styleProp;
	src?: styleProp;
	stopColor?: styleProp;
	stopOpacity?: styleProp;
	stroke?: styleProp;
	strokeDasharray?: styleProp;
	strokeDashoffset?: styleProp;
	strokeLinecap?: styleProp;
	strokeLinejoin?: styleProp;
	strokeMiterlimit?: styleProp;
	strokeOpacity?: styleProp;
	strokeWidth?: styleProp;
	suffix?: styleProp;
	symbols?: styleProp;
	syntax?: styleProp;
	system?: styleProp;
	tabSize?: styleProp;
	tableLayout?: styleProp;
	textAlign?: styleProp;
	textAlignLast?: styleProp;
	textAnchor?: styleProp;
	textCombineUpright?: styleProp;
	textDecoration?: styleProp;
	textDecorationColor?: styleProp;
	textDecorationLine?: styleProp;
	textDecorationSkipInk?: styleProp;
	textDecorationStyle?: styleProp;
	textDecorationThickness?: styleProp;
	textEmphasis?: styleProp;
	textEmphasisColor?: styleProp;
	textEmphasisPosition?: styleProp;
	textEmphasisStyle?: styleProp;
	textIndent?: styleProp;
	textOrientation?: styleProp;
	textOverflow?: styleProp;
	textRendering?: styleProp;
	textShadow?: styleProp;
	textSizeAdjust?: styleProp;
	textTransform?: styleProp;
	textUnderlineOffset?: styleProp;
	textUnderlinePosition?: styleProp;
	textWrap?: styleProp;
	timelineScope?: styleProp;
	top?: styleProp;
	touchAction?: styleProp;
	transform?: styleProp;
	transformBox?: styleProp;
	transformOrigin?: styleProp;
	transformStyle?: styleProp;
	transition?: styleProp;
	transitionBehavior?: styleProp;
	transitionDelay?: styleProp;
	transitionDuration?: styleProp;
	transitionProperty?: styleProp;
	transitionTimingFunction?: styleProp;
	translate?: styleProp;
	unicodeBidi?: styleProp;
	unicodeRange?: styleProp;
	userSelect?: styleProp;
	vectorEffect?: styleProp;
	verticalAlign?: styleProp;
	viewTimeline?: styleProp;
	viewTimelineAxis?: styleProp;
	viewTimelineInset?: styleProp;
	viewTimelineName?: styleProp;
	viewTransitionName?: styleProp;
	visibility?: styleProp;
	webkitAlignContent?: styleProp;
	webkitAlignItems?: styleProp;
	webkitAlignSelf?: styleProp;
	webkitAnimation?: styleProp;
	webkitAnimationDelay?: styleProp;
	webkitAnimationDirection?: styleProp;
	webkitAnimationDuration?: styleProp;
	webkitAnimationFillMode?: styleProp;
	webkitAnimationIterationCount?: styleProp;
	webkitAnimationName?: styleProp;
	webkitAnimationPlayState?: styleProp;
	webkitAnimationTimingFunction?: styleProp;
	webkitAppRegion?: styleProp;
	webkitAppearance?: styleProp;
	webkitBackfaceVisibility?: styleProp;
	webkitBackgroundClip?: styleProp;
	webkitBackgroundOrigin?: styleProp;
	webkitBackgroundSize?: styleProp;
	webkitBorderAfter?: styleProp;
	webkitBorderAfterColor?: styleProp;
	webkitBorderAfterStyle?: styleProp;
	webkitBorderAfterWidth?: styleProp;
	webkitBorderBefore?: styleProp;
	webkitBorderBeforeColor?: styleProp;
	webkitBorderBeforeStyle?: styleProp;
	webkitBorderBeforeWidth?: styleProp;
	webkitBorderBottomLeftRadius?: styleProp;
	webkitBorderBottomRightRadius?: styleProp;
	webkitBorderEnd?: styleProp;
	webkitBorderEndColor?: styleProp;
	webkitBorderEndStyle?: styleProp;
	webkitBorderEndWidth?: styleProp;
	webkitBorderHorizontalSpacing?: styleProp;
	webkitBorderImage?: styleProp;
	webkitBorderRadius?: styleProp;
	webkitBorderStart?: styleProp;
	webkitBorderStartColor?: styleProp;
	webkitBorderStartStyle?: styleProp;
	webkitBorderStartWidth?: styleProp;
	webkitBorderTopLeftRadius?: styleProp;
	webkitBorderTopRightRadius?: styleProp;
	webkitBorderVerticalSpacing?: styleProp;
	webkitBoxAlign?: styleProp;
	webkitBoxDecorationBreak?: styleProp;
	webkitBoxDirection?: styleProp;
	webkitBoxFlex?: styleProp;
	webkitBoxOrdinalGroup?: styleProp;
	webkitBoxOrient?: styleProp;
	webkitBoxPack?: styleProp;
	webkitBoxReflect?: styleProp;
	webkitBoxShadow?: styleProp;
	webkitBoxSizing?: styleProp;
	webkitClipPath?: styleProp;
	webkitColumnBreakAfter?: styleProp;
	webkitColumnBreakBefore?: styleProp;
	webkitColumnBreakInside?: styleProp;
	webkitColumnCount?: styleProp;
	webkitColumnGap?: styleProp;
	webkitColumnRule?: styleProp;
	webkitColumnRuleColor?: styleProp;
	webkitColumnRuleStyle?: styleProp;
	webkitColumnRuleWidth?: styleProp;
	webkitColumnSpan?: styleProp;
	webkitColumnWidth?: styleProp;
	webkitColumns?: styleProp;
	webkitFilter?: styleProp;
	webkitFlex?: styleProp;
	webkitFlexBasis?: styleProp;
	webkitFlexDirection?: styleProp;
	webkitFlexFlow?: styleProp;
	webkitFlexGrow?: styleProp;
	webkitFlexShrink?: styleProp;
	webkitFlexWrap?: styleProp;
	webkitFontFeatureSettings?: styleProp;
	webkitFontSmoothing?: styleProp;
	webkitHyphenateCharacter?: styleProp;
	webkitJustifyContent?: styleProp;
	webkitLineBreak?: styleProp;
	webkitLineClamp?: styleProp;
	webkitLocale?: styleProp;
	webkitLogicalHeight?: styleProp;
	webkitLogicalWidth?: styleProp;
	webkitMarginAfter?: styleProp;
	webkitMarginBefore?: styleProp;
	webkitMarginEnd?: styleProp;
	webkitMarginStart?: styleProp;
	webkitMask?: styleProp;
	webkitMaskBoxImage?: styleProp;
	webkitMaskBoxImageOutset?: styleProp;
	webkitMaskBoxImageRepeat?: styleProp;
	webkitMaskBoxImageSlice?: styleProp;
	webkitMaskBoxImageSource?: styleProp;
	webkitMaskBoxImageWidth?: styleProp;
	webkitMaskClip?: styleProp;
	webkitMaskComposite?: styleProp;
	webkitMaskImage?: styleProp;
	webkitMaskOrigin?: styleProp;
	webkitMaskPosition?: styleProp;
	webkitMaskPositionX?: styleProp;
	webkitMaskPositionY?: styleProp;
	webkitMaskRepeat?: styleProp;
	webkitMaskRepeatX?: styleProp;
	webkitMaskRepeatY?: styleProp;
	webkitMaskSize?: styleProp;
	webkitMaxLogicalHeight?: styleProp;
	webkitMaxLogicalWidth?: styleProp;
	webkitMinLogicalHeight?: styleProp;
	webkitMinLogicalWidth?: styleProp;
	webkitOpacity?: styleProp;
	webkitOrder?: styleProp;
	webkitPaddingAfter?: styleProp;
	webkitPaddingBefore?: styleProp;
	webkitPaddingEnd?: styleProp;
	webkitPaddingStart?: styleProp;
	webkitPerspective?: styleProp;
	webkitPerspectiveOrigin?: styleProp;
	webkitPerspectiveOriginX?: styleProp;
	webkitPerspectiveOriginY?: styleProp;
	webkitPrintColorAdjust?: styleProp;
	webkitRtlOrdering?: styleProp;
	webkitRubyPosition?: styleProp;
	webkitShapeImageThreshold?: styleProp;
	webkitShapeMargin?: styleProp;
	webkitShapeOutside?: styleProp;
	webkitTapHighlightColor?: styleProp;
	webkitTextCombine?: styleProp;
	webkitTextDecorationsInEffect?: styleProp;
	webkitTextEmphasis?: styleProp;
	webkitTextEmphasisColor?: styleProp;
	webkitTextEmphasisPosition?: styleProp;
	webkitTextEmphasisStyle?: styleProp;
	webkitTextFillColor?: styleProp;
	webkitTextOrientation?: styleProp;
	webkitTextSecurity?: styleProp;
	webkitTextSizeAdjust?: styleProp;
	webkitTextStroke?: styleProp;
	webkitTextStrokeColor?: styleProp;
	webkitTextStrokeWidth?: styleProp;
	webkitTransform?: styleProp;
	webkitTransformOrigin?: styleProp;
	webkitTransformOriginX?: styleProp;
	webkitTransformOriginY?: styleProp;
	webkitTransformOriginZ?: styleProp;
	webkitTransformStyle?: styleProp;
	webkitTransition?: styleProp;
	webkitTransitionDelay?: styleProp;
	webkitTransitionDuration?: styleProp;
	webkitTransitionProperty?: styleProp;
	webkitTransitionTimingFunction?: styleProp;
	webkitUserDrag?: styleProp;
	webkitUserModify?: styleProp;
	webkitUserSelect?: styleProp;
	webkitWritingMode?: styleProp;
	whiteSpace?: styleProp;
	whiteSpaceCollapse?: styleProp;
	widows?: styleProp;
	width?: styleProp;
	willChange?: styleProp;
	wordBreak?: styleProp;
	wordSpacing?: styleProp;
	wordWrap?: styleProp;
	writingMode?: styleProp;
	x?: styleProp;
	y?: styleProp;
	zIndex?: styleProp;
	zoom?: styleProp;
}


function trimRules (rules: Record<string, any>) {
	return rules;
}
	
const css: Record<string, any> = {};

const variables = {};

function colorProp(prop: string | number){
	if(typeof prop == 'number'){
		if(prop.toString(16).match(/[0-9a-f]{6}|[0-9a-f]{3}|[0-9a-f]{5}/)) prop = '#'+(prop.toString(16).length == 5 ? '0'+prop.toString(16) : prop.toString(16));
	}
	return prop;
}

function variableProp(prop: string | number){
	if(typeof prop == 'string'){
		if(prop.toLocaleLowerCase() in variables) prop = (variables as Record<string, any>)[prop];
	}
	return prop;
}

function cssProperty(prop: any, fixArray = true){
	prop = colorProp(prop);
	prop = variableProp(prop);
	
	if(Array.isArray(prop)){
		prop = prop.map(f => (typeof f == 'number' && fixArray) ? f+'px' : cssProperty(f)).join(' ');
	}
	return prop;
}

function setCss(name: string, map: Record<string, any>){
	if(!css[name]) css[name] = {};
	for(var i in map){
		css[name][i] = cssProperty(map[i]);
	}
}

function getCss(name: string, prop: string | null = null){
	if(!css[name]) css[name] = {};
	if(!prop) return css[name];
	return css[name][prop];
}

export interface StyleEvent extends CustomEvent<{}> {}


class Style<variableMap = Record<string, any>> extends WidgetEventTarget<StyleEvent, props> {

	name = "";
	values: variableMap = {} as variableMap;

	constructor(name: string | props | null, map: props | null = null){
		super();
		if(typeof name == 'object' && !map){
			map = name;
			name = null;
		}
		if(!name) name = 'style-'+Object.keys(css).length;
		this.name = name as string;
		if(map){
			this.set(map);
		}
		this.values = new Proxy({}, {
			get: (target: any, propName: string) => (this as any)[propName] || (this.all as any)[propName]
		})
	}

	addProperty(prop: string, value: any){
		let p = trimRules({[prop]: value});
		if(p[prop]) (this as Record<string, any>)[prop] = value;
	}

	get all(){
		return getCss(this.name);
	}
	set all(all){
		for(var i in all){
			if(i in this) (this as Record<string, any>)[i] = all[i];
			else this.variable(i, all[i]);
		}
		this._updated();
	}
	set(all: Record<string, any>){
		all = trimRules(all);
		this.all = all;
	}

	
	set accentColor(value){
		setCss(this.name, {
			accentColor: value
		});
		this._updated();
	}
	get accentColor(){
		return getCss(this.name, 'accentColor');
	}
	setAccentColor(value: any){
		this.accentColor = value;
		return this;
	}
	

	set additiveSymbols(value){
		setCss(this.name, {
			additiveSymbols: value
		});
		this._updated();
	}
	get additiveSymbols(){
		return getCss(this.name, 'additiveSymbols');
	}
	setAdditiveSymbols(value: any){
		this.additiveSymbols = value;
		return this;
	}
	

	set alignContent(value){
		setCss(this.name, {
			alignContent: value
		});
		this._updated();
	}
	get alignContent(){
		return getCss(this.name, 'alignContent');
	}
	setAlignContent(value: any){
		this.alignContent = value;
		return this;
	}
	

	set alignItems(value){
		setCss(this.name, {
			alignItems: value
		});
		this._updated();
	}
	get alignItems(){
		return getCss(this.name, 'alignItems');
	}
	setAlignItems(value: any){
		this.alignItems = value;
		return this;
	}
	

	set alignSelf(value){
		setCss(this.name, {
			alignSelf: value
		});
		this._updated();
	}
	get alignSelf(){
		return getCss(this.name, 'alignSelf');
	}
	setAlignSelf(value: any){
		this.alignSelf = value;
		return this;
	}
	

	set alignmentBaseline(value){
		setCss(this.name, {
			alignmentBaseline: value
		});
		this._updated();
	}
	get alignmentBaseline(){
		return getCss(this.name, 'alignmentBaseline');
	}
	setAlignmentBaseline(value: any){
		this.alignmentBaseline = value;
		return this;
	}

	set animation(value){
		setCss(this.name, {
			animation: value
		});
		this._updated();
	}
	get animation(){
		return getCss(this.name, 'animation');
	}
	setAnimation(value: any){
		this.animation = value;
		return this;
	}
	

	set animationComposition(value){
		setCss(this.name, {
			animationComposition: value
		});
		this._updated();
	}
	get animationComposition(){
		return getCss(this.name, 'animationComposition');
	}
	setAnimationComposition(value: any){
		this.animationComposition = value;
		return this;
	}
	

	set animationDelay(value){
		setCss(this.name, {
			animationDelay: value
		});
		this._updated();
	}
	get animationDelay(){
		return getCss(this.name, 'animationDelay');
	}
	setAnimationDelay(value: any){
		this.animationDelay = value;
		return this;
	}
	

	set animationDirection(value){
		setCss(this.name, {
			animationDirection: value
		});
		this._updated();
	}
	get animationDirection(){
		return getCss(this.name, 'animationDirection');
	}
	setAnimationDirection(value: any){
		this.animationDirection = value;
		return this;
	}
	

	set animationDuration(value){
		setCss(this.name, {
			animationDuration: value
		});
		this._updated();
	}
	get animationDuration(){
		return getCss(this.name, 'animationDuration');
	}
	setAnimationDuration(value: any){
		this.animationDuration = value;
		return this;
	}
	

	set animationFillMode(value){
		setCss(this.name, {
			animationFillMode: value
		});
		this._updated();
	}
	get animationFillMode(){
		return getCss(this.name, 'animationFillMode');
	}
	setAnimationFillMode(value: any){
		this.animationFillMode = value;
		return this;
	}
	

	set animationIterationCount(value){
		setCss(this.name, {
			animationIterationCount: value
		});
		this._updated();
	}
	get animationIterationCount(){
		return getCss(this.name, 'animationIterationCount');
	}
	setAnimationIterationCount(value: any){
		this.animationIterationCount = value;
		return this;
	}
	

	set animationName(value){
		setCss(this.name, {
			animationName: value
		});
		this._updated();
	}
	get animationName(){
		return getCss(this.name, 'animationName');
	}
	setAnimationName(value: any){
		this.animationName = value;
		return this;
	}
	

	set animationPlayState(value){
		setCss(this.name, {
			animationPlayState: value
		});
		this._updated();
	}
	get animationPlayState(){
		return getCss(this.name, 'animationPlayState');
	}
	setAnimationPlayState(value: any){
		this.animationPlayState = value;
		return this;
	}
	

	set animationRange(value){
		setCss(this.name, {
			animationRange: value
		});
		this._updated();
	}
	get animationRange(){
		return getCss(this.name, 'animationRange');
	}
	setAnimationRange(value: any){
		this.animationRange = value;
		return this;
	}
	

	set animationRangeEnd(value){
		setCss(this.name, {
			animationRangeEnd: value
		});
		this._updated();
	}
	get animationRangeEnd(){
		return getCss(this.name, 'animationRangeEnd');
	}
	setAnimationRangeEnd(value: any){
		this.animationRangeEnd = value;
		return this;
	}
	

	set animationRangeStart(value){
		setCss(this.name, {
			animationRangeStart: value
		});
		this._updated();
	}
	get animationRangeStart(){
		return getCss(this.name, 'animationRangeStart');
	}
	setAnimationRangeStart(value: any){
		this.animationRangeStart = value;
		return this;
	}
	

	set animationTimeline(value){
		setCss(this.name, {
			animationTimeline: value
		});
		this._updated();
	}
	get animationTimeline(){
		return getCss(this.name, 'animationTimeline');
	}
	setAnimationTimeline(value: any){
		this.animationTimeline = value;
		return this;
	}
	

	set animationTimingFunction(value){
		setCss(this.name, {
			animationTimingFunction: value
		});
		this._updated();
	}
	get animationTimingFunction(){
		return getCss(this.name, 'animationTimingFunction');
	}
	setAnimationTimingFunction(value: any){
		this.animationTimingFunction = value;
		return this;
	}
	

	set appRegion(value){
		setCss(this.name, {
			appRegion: value
		});
		this._updated();
	}
	get appRegion(){
		return getCss(this.name, 'appRegion');
	}
	setAppRegion(value: any){
		this.appRegion = value;
		return this;
	}
	

	set appearance(value){
		setCss(this.name, {
			appearance: value
		});
		this._updated();
	}
	get appearance(){
		return getCss(this.name, 'appearance');
	}
	setAppearance(value: any){
		this.appearance = value;
		return this;
	}
	

	set ascentOverride(value){
		setCss(this.name, {
			ascentOverride: value
		});
		this._updated();
	}
	get ascentOverride(){
		return getCss(this.name, 'ascentOverride');
	}
	setAscentOverride(value: any){
		this.ascentOverride = value;
		return this;
	}
	

	set aspectRatio(value){
		setCss(this.name, {
			aspectRatio: value
		});
		this._updated();
	}
	get aspectRatio(){
		return getCss(this.name, 'aspectRatio');
	}
	setAspectRatio(value: any){
		this.aspectRatio = value;
		return this;
	}
	

	set backdropFilter(value){
		setCss(this.name, {
			backdropFilter: value
		});
		this._updated();
	}
	get backdropFilter(){
		return getCss(this.name, 'backdropFilter');
	}
	setBackdropFilter(value: any){
		this.backdropFilter = value;
		return this;
	}
	

	set backfaceVisibility(value){
		setCss(this.name, {
			backfaceVisibility: value
		});
		this._updated();
	}
	get backfaceVisibility(){
		return getCss(this.name, 'backfaceVisibility');
	}
	setBackfaceVisibility(value: any){
		this.backfaceVisibility = value;
		return this;
	}
	

	set background(value){
		setCss(this.name, {
			background: value
		});
		this._updated();
	}
	get background(){
		return getCss(this.name, 'background');
	}
	setBackground(value: any){
		this.background = value;
		return this;
	}
	

	set backgroundAttachment(value){
		setCss(this.name, {
			backgroundAttachment: value
		});
		this._updated();
	}
	get backgroundAttachment(){
		return getCss(this.name, 'backgroundAttachment');
	}
	setBackgroundAttachment(value: any){
		this.backgroundAttachment = value;
		return this;
	}
	

	set backgroundBlendMode(value){
		setCss(this.name, {
			backgroundBlendMode: value
		});
		this._updated();
	}
	get backgroundBlendMode(){
		return getCss(this.name, 'backgroundBlendMode');
	}
	setBackgroundBlendMode(value: any){
		this.backgroundBlendMode = value;
		return this;
	}
	

	set backgroundClip(value){
		setCss(this.name, {
			backgroundClip: value
		});
		this._updated();
	}
	get backgroundClip(){
		return getCss(this.name, 'backgroundClip');
	}
	setBackgroundClip(value: any){
		this.backgroundClip = value;
		return this;
	}
	

	set backgroundColor(value){
		setCss(this.name, {
			backgroundColor: value
		});
		this._updated();
	}
	get backgroundColor(){
		return getCss(this.name, 'backgroundColor');
	}
	setBackgroundColor(value: any){
		this.backgroundColor = value;
		return this;
	}
	

	set backgroundImage(value){
		setCss(this.name, {
			backgroundImage: value
		});
		this._updated();
	}
	get backgroundImage(){
		return getCss(this.name, 'backgroundImage');
	}
	setBackgroundImage(value: any){
		this.backgroundImage = value;
		return this;
	}
	

	set backgroundOrigin(value){
		setCss(this.name, {
			backgroundOrigin: value
		});
		this._updated();
	}
	get backgroundOrigin(){
		return getCss(this.name, 'backgroundOrigin');
	}
	setBackgroundOrigin(value: any){
		this.backgroundOrigin = value;
		return this;
	}
	

	set backgroundPosition(value){
		setCss(this.name, {
			backgroundPosition: value
		});
		this._updated();
	}
	get backgroundPosition(){
		return getCss(this.name, 'backgroundPosition');
	}
	setBackgroundPosition(value: any){
		this.backgroundPosition = value;
		return this;
	}
	

	set backgroundPositionX(value){
		setCss(this.name, {
			backgroundPositionX: value
		});
		this._updated();
	}
	get backgroundPositionX(){
		return getCss(this.name, 'backgroundPositionX');
	}
	setBackgroundPositionX(value: any){
		this.backgroundPositionX = value;
		return this;
	}
	

	set backgroundPositionY(value){
		setCss(this.name, {
			backgroundPositionY: value
		});
		this._updated();
	}
	get backgroundPositionY(){
		return getCss(this.name, 'backgroundPositionY');
	}
	setBackgroundPositionY(value: any){
		this.backgroundPositionY = value;
		return this;
	}
	

	set backgroundRepeat(value){
		setCss(this.name, {
			backgroundRepeat: value
		});
		this._updated();
	}
	get backgroundRepeat(){
		return getCss(this.name, 'backgroundRepeat');
	}
	setBackgroundRepeat(value: any){
		this.backgroundRepeat = value;
		return this;
	}
	

	set backgroundRepeatX(value){
		setCss(this.name, {
			backgroundRepeatX: value
		});
		this._updated();
	}
	get backgroundRepeatX(){
		return getCss(this.name, 'backgroundRepeatX');
	}
	setBackgroundRepeatX(value: any){
		this.backgroundRepeatX = value;
		return this;
	}
	

	set backgroundRepeatY(value){
		setCss(this.name, {
			backgroundRepeatY: value
		});
		this._updated();
	}
	get backgroundRepeatY(){
		return getCss(this.name, 'backgroundRepeatY');
	}
	setBackgroundRepeatY(value: any){
		this.backgroundRepeatY = value;
		return this;
	}
	

	set backgroundSize(value){
		setCss(this.name, {
			backgroundSize: value
		});
		this._updated();
	}
	get backgroundSize(){
		return getCss(this.name, 'backgroundSize');
	}
	setBackgroundSize(value: any){
		this.backgroundSize = value;
		return this;
	}
	

	set basePalette(value){
		setCss(this.name, {
			basePalette: value
		});
		this._updated();
	}
	get basePalette(){
		return getCss(this.name, 'basePalette');
	}
	setBasePalette(value: any){
		this.basePalette = value;
		return this;
	}
	

	set baselineShift(value){
		setCss(this.name, {
			baselineShift: value
		});
		this._updated();
	}
	get baselineShift(){
		return getCss(this.name, 'baselineShift');
	}
	setBaselineShift(value: any){
		this.baselineShift = value;
		return this;
	}
	

	set baselineSource(value){
		setCss(this.name, {
			baselineSource: value
		});
		this._updated();
	}
	get baselineSource(){
		return getCss(this.name, 'baselineSource');
	}
	setBaselineSource(value: any){
		this.baselineSource = value;
		return this;
	}
	

	set blockSize(value){
		setCss(this.name, {
			blockSize: value
		});
		this._updated();
	}
	get blockSize(){
		return getCss(this.name, 'blockSize');
	}
	setBlockSize(value: any){
		this.blockSize = value;
		return this;
	}
	

	set border(value){
		setCss(this.name, {
			border: value
		});
		this._updated();
	}
	get border(){
		return getCss(this.name, 'border');
	}
	setBorder(value: any){
		this.border = value;
		return this;
	}
	

	set borderBlock(value){
		setCss(this.name, {
			borderBlock: value
		});
		this._updated();
	}
	get borderBlock(){
		return getCss(this.name, 'borderBlock');
	}
	setBorderBlock(value: any){
		this.borderBlock = value;
		return this;
	}
	

	set borderBlockColor(value){
		setCss(this.name, {
			borderBlockColor: value
		});
		this._updated();
	}
	get borderBlockColor(){
		return getCss(this.name, 'borderBlockColor');
	}
	setBorderBlockColor(value: any){
		this.borderBlockColor = value;
		return this;
	}
	

	set borderBlockEnd(value){
		setCss(this.name, {
			borderBlockEnd: value
		});
		this._updated();
	}
	get borderBlockEnd(){
		return getCss(this.name, 'borderBlockEnd');
	}
	setBorderBlockEnd(value: any){
		this.borderBlockEnd = value;
		return this;
	}
	

	set borderBlockEndColor(value){
		setCss(this.name, {
			borderBlockEndColor: value
		});
		this._updated();
	}
	get borderBlockEndColor(){
		return getCss(this.name, 'borderBlockEndColor');
	}
	setBorderBlockEndColor(value: any){
		this.borderBlockEndColor = value;
		return this;
	}
	

	set borderBlockEndStyle(value){
		setCss(this.name, {
			borderBlockEndStyle: value
		});
		this._updated();
	}
	get borderBlockEndStyle(){
		return getCss(this.name, 'borderBlockEndStyle');
	}
	setBorderBlockEndStyle(value: any){
		this.borderBlockEndStyle = value;
		return this;
	}
	

	set borderBlockEndWidth(value){
		setCss(this.name, {
			borderBlockEndWidth: value
		});
		this._updated();
	}
	get borderBlockEndWidth(){
		return getCss(this.name, 'borderBlockEndWidth');
	}
	setBorderBlockEndWidth(value: any){
		this.borderBlockEndWidth = value;
		return this;
	}
	

	set borderBlockStart(value){
		setCss(this.name, {
			borderBlockStart: value
		});
		this._updated();
	}
	get borderBlockStart(){
		return getCss(this.name, 'borderBlockStart');
	}
	setBorderBlockStart(value: any){
		this.borderBlockStart = value;
		return this;
	}
	

	set borderBlockStartColor(value){
		setCss(this.name, {
			borderBlockStartColor: value
		});
		this._updated();
	}
	get borderBlockStartColor(){
		return getCss(this.name, 'borderBlockStartColor');
	}
	setBorderBlockStartColor(value: any){
		this.borderBlockStartColor = value;
		return this;
	}
	

	set borderBlockStartStyle(value){
		setCss(this.name, {
			borderBlockStartStyle: value
		});
		this._updated();
	}
	get borderBlockStartStyle(){
		return getCss(this.name, 'borderBlockStartStyle');
	}
	setBorderBlockStartStyle(value: any){
		this.borderBlockStartStyle = value;
		return this;
	}
	

	set borderBlockStartWidth(value){
		setCss(this.name, {
			borderBlockStartWidth: value
		});
		this._updated();
	}
	get borderBlockStartWidth(){
		return getCss(this.name, 'borderBlockStartWidth');
	}
	setBorderBlockStartWidth(value: any){
		this.borderBlockStartWidth = value;
		return this;
	}
	

	set borderBlockStyle(value){
		setCss(this.name, {
			borderBlockStyle: value
		});
		this._updated();
	}
	get borderBlockStyle(){
		return getCss(this.name, 'borderBlockStyle');
	}
	setBorderBlockStyle(value: any){
		this.borderBlockStyle = value;
		return this;
	}
	

	set borderBlockWidth(value){
		setCss(this.name, {
			borderBlockWidth: value
		});
		this._updated();
	}
	get borderBlockWidth(){
		return getCss(this.name, 'borderBlockWidth');
	}
	setBorderBlockWidth(value: any){
		this.borderBlockWidth = value;
		return this;
	}
	

	set borderBottom(value){
		setCss(this.name, {
			borderBottom: value
		});
		this._updated();
	}
	get borderBottom(){
		return getCss(this.name, 'borderBottom');
	}
	setBorderBottom(value: any){
		this.borderBottom = value;
		return this;
	}
	

	set borderBottomColor(value){
		setCss(this.name, {
			borderBottomColor: value
		});
		this._updated();
	}
	get borderBottomColor(){
		return getCss(this.name, 'borderBottomColor');
	}
	setBorderBottomColor(value: any){
		this.borderBottomColor = value;
		return this;
	}
	

	set borderBottomLeftRadius(value){
		setCss(this.name, {
			borderBottomLeftRadius: value
		});
		this._updated();
	}
	get borderBottomLeftRadius(){
		return getCss(this.name, 'borderBottomLeftRadius');
	}
	setBorderBottomLeftRadius(value: any){
		this.borderBottomLeftRadius = value;
		return this;
	}
	

	set borderBottomRightRadius(value){
		setCss(this.name, {
			borderBottomRightRadius: value
		});
		this._updated();
	}
	get borderBottomRightRadius(){
		return getCss(this.name, 'borderBottomRightRadius');
	}
	setBorderBottomRightRadius(value: any){
		this.borderBottomRightRadius = value;
		return this;
	}
	

	set borderBottomStyle(value){
		setCss(this.name, {
			borderBottomStyle: value
		});
		this._updated();
	}
	get borderBottomStyle(){
		return getCss(this.name, 'borderBottomStyle');
	}
	setBorderBottomStyle(value: any){
		this.borderBottomStyle = value;
		return this;
	}
	

	set borderBottomWidth(value){
		setCss(this.name, {
			borderBottomWidth: value
		});
		this._updated();
	}
	get borderBottomWidth(){
		return getCss(this.name, 'borderBottomWidth');
	}
	setBorderBottomWidth(value: any){
		this.borderBottomWidth = value;
		return this;
	}
	

	set borderCollapse(value){
		setCss(this.name, {
			borderCollapse: value
		});
		this._updated();
	}
	get borderCollapse(){
		return getCss(this.name, 'borderCollapse');
	}
	setBorderCollapse(value: any){
		this.borderCollapse = value;
		return this;
	}
	

	set borderColor(value){
		setCss(this.name, {
			borderColor: value
		});
		this._updated();
	}
	get borderColor(){
		return getCss(this.name, 'borderColor');
	}
	setBorderColor(value: any){
		this.borderColor = value;
		return this;
	}
	

	set borderEndEndRadius(value){
		setCss(this.name, {
			borderEndEndRadius: value
		});
		this._updated();
	}
	get borderEndEndRadius(){
		return getCss(this.name, 'borderEndEndRadius');
	}
	setBorderEndEndRadius(value: any){
		this.borderEndEndRadius = value;
		return this;
	}
	

	set borderEndStartRadius(value){
		setCss(this.name, {
			borderEndStartRadius: value
		});
		this._updated();
	}
	get borderEndStartRadius(){
		return getCss(this.name, 'borderEndStartRadius');
	}
	setBorderEndStartRadius(value: any){
		this.borderEndStartRadius = value;
		return this;
	}
	

	set borderImage(value){
		setCss(this.name, {
			borderImage: value
		});
		this._updated();
	}
	get borderImage(){
		return getCss(this.name, 'borderImage');
	}
	setBorderImage(value: any){
		this.borderImage = value;
		return this;
	}
	

	set borderImageOutset(value){
		setCss(this.name, {
			borderImageOutset: value
		});
		this._updated();
	}
	get borderImageOutset(){
		return getCss(this.name, 'borderImageOutset');
	}
	setBorderImageOutset(value: any){
		this.borderImageOutset = value;
		return this;
	}
	

	set borderImageRepeat(value){
		setCss(this.name, {
			borderImageRepeat: value
		});
		this._updated();
	}
	get borderImageRepeat(){
		return getCss(this.name, 'borderImageRepeat');
	}
	setBorderImageRepeat(value: any){
		this.borderImageRepeat = value;
		return this;
	}
	

	set borderImageSlice(value){
		setCss(this.name, {
			borderImageSlice: value
		});
		this._updated();
	}
	get borderImageSlice(){
		return getCss(this.name, 'borderImageSlice');
	}
	setBorderImageSlice(value: any){
		this.borderImageSlice = value;
		return this;
	}
	

	set borderImageSource(value){
		setCss(this.name, {
			borderImageSource: value
		});
		this._updated();
	}
	get borderImageSource(){
		return getCss(this.name, 'borderImageSource');
	}
	setBorderImageSource(value: any){
		this.borderImageSource = value;
		return this;
	}
	

	set borderImageWidth(value){
		setCss(this.name, {
			borderImageWidth: value
		});
		this._updated();
	}
	get borderImageWidth(){
		return getCss(this.name, 'borderImageWidth');
	}
	setBorderImageWidth(value: any){
		this.borderImageWidth = value;
		return this;
	}
	

	set borderInline(value){
		setCss(this.name, {
			borderInline: value
		});
		this._updated();
	}
	get borderInline(){
		return getCss(this.name, 'borderInline');
	}
	setBorderInline(value: any){
		this.borderInline = value;
		return this;
	}
	

	set borderInlineColor(value){
		setCss(this.name, {
			borderInlineColor: value
		});
		this._updated();
	}
	get borderInlineColor(){
		return getCss(this.name, 'borderInlineColor');
	}
	setBorderInlineColor(value: any){
		this.borderInlineColor = value;
		return this;
	}
	

	set borderInlineEnd(value){
		setCss(this.name, {
			borderInlineEnd: value
		});
		this._updated();
	}
	get borderInlineEnd(){
		return getCss(this.name, 'borderInlineEnd');
	}
	setBorderInlineEnd(value: any){
		this.borderInlineEnd = value;
		return this;
	}
	

	set borderInlineEndColor(value){
		setCss(this.name, {
			borderInlineEndColor: value
		});
		this._updated();
	}
	get borderInlineEndColor(){
		return getCss(this.name, 'borderInlineEndColor');
	}
	setBorderInlineEndColor(value: any){
		this.borderInlineEndColor = value;
		return this;
	}
	

	set borderInlineEndStyle(value){
		setCss(this.name, {
			borderInlineEndStyle: value
		});
		this._updated();
	}
	get borderInlineEndStyle(){
		return getCss(this.name, 'borderInlineEndStyle');
	}
	setBorderInlineEndStyle(value: any){
		this.borderInlineEndStyle = value;
		return this;
	}
	

	set borderInlineEndWidth(value){
		setCss(this.name, {
			borderInlineEndWidth: value
		});
		this._updated();
	}
	get borderInlineEndWidth(){
		return getCss(this.name, 'borderInlineEndWidth');
	}
	setBorderInlineEndWidth(value: any){
		this.borderInlineEndWidth = value;
		return this;
	}
	

	set borderInlineStart(value){
		setCss(this.name, {
			borderInlineStart: value
		});
		this._updated();
	}
	get borderInlineStart(){
		return getCss(this.name, 'borderInlineStart');
	}
	setBorderInlineStart(value: any){
		this.borderInlineStart = value;
		return this;
	}
	

	set borderInlineStartColor(value){
		setCss(this.name, {
			borderInlineStartColor: value
		});
		this._updated();
	}
	get borderInlineStartColor(){
		return getCss(this.name, 'borderInlineStartColor');
	}
	setBorderInlineStartColor(value: any){
		this.borderInlineStartColor = value;
		return this;
	}
	

	set borderInlineStartStyle(value){
		setCss(this.name, {
			borderInlineStartStyle: value
		});
		this._updated();
	}
	get borderInlineStartStyle(){
		return getCss(this.name, 'borderInlineStartStyle');
	}
	setBorderInlineStartStyle(value: any){
		this.borderInlineStartStyle = value;
		return this;
	}
	

	set borderInlineStartWidth(value){
		setCss(this.name, {
			borderInlineStartWidth: value
		});
		this._updated();
	}
	get borderInlineStartWidth(){
		return getCss(this.name, 'borderInlineStartWidth');
	}
	setBorderInlineStartWidth(value: any){
		this.borderInlineStartWidth = value;
		return this;
	}
	

	set borderInlineStyle(value){
		setCss(this.name, {
			borderInlineStyle: value
		});
		this._updated();
	}
	get borderInlineStyle(){
		return getCss(this.name, 'borderInlineStyle');
	}
	setBorderInlineStyle(value: any){
		this.borderInlineStyle = value;
		return this;
	}
	

	set borderInlineWidth(value){
		setCss(this.name, {
			borderInlineWidth: value
		});
		this._updated();
	}
	get borderInlineWidth(){
		return getCss(this.name, 'borderInlineWidth');
	}
	setBorderInlineWidth(value: any){
		this.borderInlineWidth = value;
		return this;
	}
	

	set borderLeft(value){
		setCss(this.name, {
			borderLeft: value
		});
		this._updated();
	}
	get borderLeft(){
		return getCss(this.name, 'borderLeft');
	}
	setBorderLeft(value: any){
		this.borderLeft = value;
		return this;
	}
	

	set borderLeftColor(value){
		setCss(this.name, {
			borderLeftColor: value
		});
		this._updated();
	}
	get borderLeftColor(){
		return getCss(this.name, 'borderLeftColor');
	}
	setBorderLeftColor(value: any){
		this.borderLeftColor = value;
		return this;
	}
	

	set borderLeftStyle(value){
		setCss(this.name, {
			borderLeftStyle: value
		});
		this._updated();
	}
	get borderLeftStyle(){
		return getCss(this.name, 'borderLeftStyle');
	}
	setBorderLeftStyle(value: any){
		this.borderLeftStyle = value;
		return this;
	}
	

	set borderLeftWidth(value){
		setCss(this.name, {
			borderLeftWidth: value
		});
		this._updated();
	}
	get borderLeftWidth(){
		return getCss(this.name, 'borderLeftWidth');
	}
	setBorderLeftWidth(value: any){
		this.borderLeftWidth = value;
		return this;
	}
	

	set borderRadius(value){
		setCss(this.name, {
			borderRadius: value
		});
		this._updated();
	}
	get borderRadius(){
		return getCss(this.name, 'borderRadius');
	}
	setBorderRadius(value: any){
		this.borderRadius = value;
		return this;
	}
	

	set borderRight(value){
		setCss(this.name, {
			borderRight: value
		});
		this._updated();
	}
	get borderRight(){
		return getCss(this.name, 'borderRight');
	}
	setBorderRight(value: any){
		this.borderRight = value;
		return this;
	}
	

	set borderRightColor(value){
		setCss(this.name, {
			borderRightColor: value
		});
		this._updated();
	}
	get borderRightColor(){
		return getCss(this.name, 'borderRightColor');
	}
	setBorderRightColor(value: any){
		this.borderRightColor = value;
		return this;
	}
	

	set borderRightStyle(value){
		setCss(this.name, {
			borderRightStyle: value
		});
		this._updated();
	}
	get borderRightStyle(){
		return getCss(this.name, 'borderRightStyle');
	}
	setBorderRightStyle(value: any){
		this.borderRightStyle = value;
		return this;
	}
	

	set borderRightWidth(value){
		setCss(this.name, {
			borderRightWidth: value
		});
		this._updated();
	}
	get borderRightWidth(){
		return getCss(this.name, 'borderRightWidth');
	}
	setBorderRightWidth(value: any){
		this.borderRightWidth = value;
		return this;
	}
	

	set borderSpacing(value){
		setCss(this.name, {
			borderSpacing: value
		});
		this._updated();
	}
	get borderSpacing(){
		return getCss(this.name, 'borderSpacing');
	}
	setBorderSpacing(value: any){
		this.borderSpacing = value;
		return this;
	}
	

	set borderStartEndRadius(value){
		setCss(this.name, {
			borderStartEndRadius: value
		});
		this._updated();
	}
	get borderStartEndRadius(){
		return getCss(this.name, 'borderStartEndRadius');
	}
	setBorderStartEndRadius(value: any){
		this.borderStartEndRadius = value;
		return this;
	}
	

	set borderStartStartRadius(value){
		setCss(this.name, {
			borderStartStartRadius: value
		});
		this._updated();
	}
	get borderStartStartRadius(){
		return getCss(this.name, 'borderStartStartRadius');
	}
	setBorderStartStartRadius(value: any){
		this.borderStartStartRadius = value;
		return this;
	}
	

	set borderStyle(value){
		setCss(this.name, {
			borderStyle: value
		});
		this._updated();
	}
	get borderStyle(){
		return getCss(this.name, 'borderStyle');
	}
	setBorderStyle(value: any){
		this.borderStyle = value;
		return this;
	}
	

	set borderTop(value){
		setCss(this.name, {
			borderTop: value
		});
		this._updated();
	}
	get borderTop(){
		return getCss(this.name, 'borderTop');
	}
	setBorderTop(value: any){
		this.borderTop = value;
		return this;
	}
	

	set borderTopColor(value){
		setCss(this.name, {
			borderTopColor: value
		});
		this._updated();
	}
	get borderTopColor(){
		return getCss(this.name, 'borderTopColor');
	}
	setBorderTopColor(value: any){
		this.borderTopColor = value;
		return this;
	}
	

	set borderTopLeftRadius(value){
		setCss(this.name, {
			borderTopLeftRadius: value
		});
		this._updated();
	}
	get borderTopLeftRadius(){
		return getCss(this.name, 'borderTopLeftRadius');
	}
	setBorderTopLeftRadius(value: any){
		this.borderTopLeftRadius = value;
		return this;
	}
	

	set borderTopRightRadius(value){
		setCss(this.name, {
			borderTopRightRadius: value
		});
		this._updated();
	}
	get borderTopRightRadius(){
		return getCss(this.name, 'borderTopRightRadius');
	}
	setBorderTopRightRadius(value: any){
		this.borderTopRightRadius = value;
		return this;
	}
	

	set borderTopStyle(value){
		setCss(this.name, {
			borderTopStyle: value
		});
		this._updated();
	}
	get borderTopStyle(){
		return getCss(this.name, 'borderTopStyle');
	}
	setBorderTopStyle(value: any){
		this.borderTopStyle = value;
		return this;
	}
	

	set borderTopWidth(value){
		setCss(this.name, {
			borderTopWidth: value
		});
		this._updated();
	}
	get borderTopWidth(){
		return getCss(this.name, 'borderTopWidth');
	}
	setBorderTopWidth(value: any){
		this.borderTopWidth = value;
		return this;
	}
	

	set borderWidth(value){
		setCss(this.name, {
			borderWidth: value
		});
		this._updated();
	}
	get borderWidth(){
		return getCss(this.name, 'borderWidth');
	}
	setBorderWidth(value: any){
		this.borderWidth = value;
		return this;
	}
	

	set bottom(value){
		setCss(this.name, {
			bottom: value
		});
		this._updated();
	}
	get bottom(){
		return getCss(this.name, 'bottom');
	}
	setBottom(value: any){
		this.bottom = value;
		return this;
	}
	

	set boxShadow(value){
		setCss(this.name, {
			boxShadow: value
		});
		this._updated();
	}
	get boxShadow(){
		return getCss(this.name, 'boxShadow');
	}
	setBoxShadow(value: any){
		this.boxShadow = value;
		return this;
	}
	

	set boxSizing(value){
		setCss(this.name, {
			boxSizing: value
		});
		this._updated();
	}
	get boxSizing(){
		return getCss(this.name, 'boxSizing');
	}
	setBoxSizing(value: any){
		this.boxSizing = value;
		return this;
	}
	

	set breakAfter(value){
		setCss(this.name, {
			breakAfter: value
		});
		this._updated();
	}
	get breakAfter(){
		return getCss(this.name, 'breakAfter');
	}
	setBreakAfter(value: any){
		this.breakAfter = value;
		return this;
	}
	

	set breakBefore(value){
		setCss(this.name, {
			breakBefore: value
		});
		this._updated();
	}
	get breakBefore(){
		return getCss(this.name, 'breakBefore');
	}
	setBreakBefore(value: any){
		this.breakBefore = value;
		return this;
	}
	

	set breakInside(value){
		setCss(this.name, {
			breakInside: value
		});
		this._updated();
	}
	get breakInside(){
		return getCss(this.name, 'breakInside');
	}
	setBreakInside(value: any){
		this.breakInside = value;
		return this;
	}
	

	set bufferedRendering(value){
		setCss(this.name, {
			bufferedRendering: value
		});
		this._updated();
	}
	get bufferedRendering(){
		return getCss(this.name, 'bufferedRendering');
	}
	setBufferedRendering(value: any){
		this.bufferedRendering = value;
		return this;
	}
	

	set captionSide(value){
		setCss(this.name, {
			captionSide: value
		});
		this._updated();
	}
	get captionSide(){
		return getCss(this.name, 'captionSide');
	}
	setCaptionSide(value: any){
		this.captionSide = value;
		return this;
	}
	

	set caretColor(value){
		setCss(this.name, {
			caretColor: value
		});
		this._updated();
	}
	get caretColor(){
		return getCss(this.name, 'caretColor');
	}
	setCaretColor(value: any){
		this.caretColor = value;
		return this;
	}
	

	set clear(value){
		setCss(this.name, {
			clear: value
		});
		this._updated();
	}
	get clear(){
		return getCss(this.name, 'clear');
	}
	setClear(value: any){
		this.clear = value;
		return this;
	}
	

	set clip(value){
		setCss(this.name, {
			clip: value
		});
		this._updated();
	}
	get clip(){
		return getCss(this.name, 'clip');
	}
	setClip(value: any){
		this.clip = value;
		return this;
	}
	

	set clipPath(value){
		setCss(this.name, {
			clipPath: value
		});
		this._updated();
	}
	get clipPath(){
		return getCss(this.name, 'clipPath');
	}
	setClipPath(value: any){
		this.clipPath = value;
		return this;
	}
	

	set clipRule(value){
		setCss(this.name, {
			clipRule: value
		});
		this._updated();
	}
	get clipRule(){
		return getCss(this.name, 'clipRule');
	}
	setClipRule(value: any){
		this.clipRule = value;
		return this;
	}
	

	set color(value){
		setCss(this.name, {
			color: value
		});
		this._updated();
	}
	get color(){
		return getCss(this.name, 'color');
	}
	setColor(value: any){
		this.color = value;
		return this;
	}
	

	set colorInterpolation(value){
		setCss(this.name, {
			colorInterpolation: value
		});
		this._updated();
	}
	get colorInterpolation(){
		return getCss(this.name, 'colorInterpolation');
	}
	setColorInterpolation(value: any){
		this.colorInterpolation = value;
		return this;
	}
	

	set colorInterpolationFilters(value){
		setCss(this.name, {
			colorInterpolationFilters: value
		});
		this._updated();
	}
	get colorInterpolationFilters(){
		return getCss(this.name, 'colorInterpolationFilters');
	}
	setColorInterpolationFilters(value: any){
		this.colorInterpolationFilters = value;
		return this;
	}
	

	set colorRendering(value){
		setCss(this.name, {
			colorRendering: value
		});
		this._updated();
	}
	get colorRendering(){
		return getCss(this.name, 'colorRendering');
	}
	setColorRendering(value: any){
		this.colorRendering = value;
		return this;
	}
	

	set colorScheme(value){
		setCss(this.name, {
			colorScheme: value
		});
		this._updated();
	}
	get colorScheme(){
		return getCss(this.name, 'colorScheme');
	}
	setColorScheme(value: any){
		this.colorScheme = value;
		return this;
	}
	

	set columnCount(value){
		setCss(this.name, {
			columnCount: value
		});
		this._updated();
	}
	get columnCount(){
		return getCss(this.name, 'columnCount');
	}
	setColumnCount(value: any){
		this.columnCount = value;
		return this;
	}
	

	set columnFill(value){
		setCss(this.name, {
			columnFill: value
		});
		this._updated();
	}
	get columnFill(){
		return getCss(this.name, 'columnFill');
	}
	setColumnFill(value: any){
		this.columnFill = value;
		return this;
	}
	

	set columnGap(value){
		setCss(this.name, {
			columnGap: value
		});
		this._updated();
	}
	get columnGap(){
		return getCss(this.name, 'columnGap');
	}
	setColumnGap(value: any){
		this.columnGap = value;
		return this;
	}
	

	set columnRule(value){
		setCss(this.name, {
			columnRule: value
		});
		this._updated();
	}
	get columnRule(){
		return getCss(this.name, 'columnRule');
	}
	setColumnRule(value: any){
		this.columnRule = value;
		return this;
	}
	

	set columnRuleColor(value){
		setCss(this.name, {
			columnRuleColor: value
		});
		this._updated();
	}
	get columnRuleColor(){
		return getCss(this.name, 'columnRuleColor');
	}
	setColumnRuleColor(value: any){
		this.columnRuleColor = value;
		return this;
	}
	

	set columnRuleStyle(value){
		setCss(this.name, {
			columnRuleStyle: value
		});
		this._updated();
	}
	get columnRuleStyle(){
		return getCss(this.name, 'columnRuleStyle');
	}
	setColumnRuleStyle(value: any){
		this.columnRuleStyle = value;
		return this;
	}
	

	set columnRuleWidth(value){
		setCss(this.name, {
			columnRuleWidth: value
		});
		this._updated();
	}
	get columnRuleWidth(){
		return getCss(this.name, 'columnRuleWidth');
	}
	setColumnRuleWidth(value: any){
		this.columnRuleWidth = value;
		return this;
	}
	

	set columnSpan(value){
		setCss(this.name, {
			columnSpan: value
		});
		this._updated();
	}
	get columnSpan(){
		return getCss(this.name, 'columnSpan');
	}
	setColumnSpan(value: any){
		this.columnSpan = value;
		return this;
	}
	

	set columnWidth(value){
		setCss(this.name, {
			columnWidth: value
		});
		this._updated();
	}
	get columnWidth(){
		return getCss(this.name, 'columnWidth');
	}
	setColumnWidth(value: any){
		this.columnWidth = value;
		return this;
	}
	

	set columns(value){
		setCss(this.name, {
			columns: value
		});
		this._updated();
	}
	get columns(){
		return getCss(this.name, 'columns');
	}
	setColumns(value: any){
		this.columns = value;
		return this;
	}
	

	set contain(value){
		setCss(this.name, {
			contain: value
		});
		this._updated();
	}
	get contain(){
		return getCss(this.name, 'contain');
	}
	setContain(value: any){
		this.contain = value;
		return this;
	}
	

	set containIntrinsicBlockSize(value){
		setCss(this.name, {
			containIntrinsicBlockSize: value
		});
		this._updated();
	}
	get containIntrinsicBlockSize(){
		return getCss(this.name, 'containIntrinsicBlockSize');
	}
	setContainIntrinsicBlockSize(value: any){
		this.containIntrinsicBlockSize = value;
		return this;
	}
	

	set containIntrinsicHeight(value){
		setCss(this.name, {
			containIntrinsicHeight: value
		});
		this._updated();
	}
	get containIntrinsicHeight(){
		return getCss(this.name, 'containIntrinsicHeight');
	}
	setContainIntrinsicHeight(value: any){
		this.containIntrinsicHeight = value;
		return this;
	}
	

	set containIntrinsicInlineSize(value){
		setCss(this.name, {
			containIntrinsicInlineSize: value
		});
		this._updated();
	}
	get containIntrinsicInlineSize(){
		return getCss(this.name, 'containIntrinsicInlineSize');
	}
	setContainIntrinsicInlineSize(value: any){
		this.containIntrinsicInlineSize = value;
		return this;
	}
	

	set containIntrinsicSize(value){
		setCss(this.name, {
			containIntrinsicSize: value
		});
		this._updated();
	}
	get containIntrinsicSize(){
		return getCss(this.name, 'containIntrinsicSize');
	}
	setContainIntrinsicSize(value: any){
		this.containIntrinsicSize = value;
		return this;
	}
	

	set containIntrinsicWidth(value){
		setCss(this.name, {
			containIntrinsicWidth: value
		});
		this._updated();
	}
	get containIntrinsicWidth(){
		return getCss(this.name, 'containIntrinsicWidth');
	}
	setContainIntrinsicWidth(value: any){
		this.containIntrinsicWidth = value;
		return this;
	}
	

	set container(value){
		setCss(this.name, {
			container: value
		});
		this._updated();
	}
	get container(){
		return getCss(this.name, 'container');
	}
	setContainer(value: any){
		this.container = value;
		return this;
	}
	

	set containerName(value){
		setCss(this.name, {
			containerName: value
		});
		this._updated();
	}
	get containerName(){
		return getCss(this.name, 'containerName');
	}
	setContainerName(value: any){
		this.containerName = value;
		return this;
	}
	

	set containerType(value){
		setCss(this.name, {
			containerType: value
		});
		this._updated();
	}
	get containerType(){
		return getCss(this.name, 'containerType');
	}
	setContainerType(value: any){
		this.containerType = value;
		return this;
	}
	

	set content(value){
		setCss(this.name, {
			content: value
		});
		this._updated();
	}
	get content(){
		return getCss(this.name, 'content');
	}
	setContent(value: any){
		this.content = value;
		return this;
	}
	

	set contentVisibility(value){
		setCss(this.name, {
			contentVisibility: value
		});
		this._updated();
	}
	get contentVisibility(){
		return getCss(this.name, 'contentVisibility');
	}
	setContentVisibility(value: any){
		this.contentVisibility = value;
		return this;
	}
	

	set counterIncrement(value){
		setCss(this.name, {
			counterIncrement: value
		});
		this._updated();
	}
	get counterIncrement(){
		return getCss(this.name, 'counterIncrement');
	}
	setCounterIncrement(value: any){
		this.counterIncrement = value;
		return this;
	}
	

	set counterReset(value){
		setCss(this.name, {
			counterReset: value
		});
		this._updated();
	}
	get counterReset(){
		return getCss(this.name, 'counterReset');
	}
	setCounterReset(value: any){
		this.counterReset = value;
		return this;
	}
	

	set counterSet(value){
		setCss(this.name, {
			counterSet: value
		});
		this._updated();
	}
	get counterSet(){
		return getCss(this.name, 'counterSet');
	}
	setCounterSet(value: any){
		this.counterSet = value;
		return this;
	}
	

	set cursor(value){
		setCss(this.name, {
			cursor: value
		});
		this._updated();
	}
	get cursor(){
		return getCss(this.name, 'cursor');
	}
	setCursor(value: any){
		this.cursor = value;
		return this;
	}
	

	set cx(value){
		setCss(this.name, {
			cx: value
		});
		this._updated();
	}
	get cx(){
		return getCss(this.name, 'cx');
	}
	setCx(value: any){
		this.cx = value;
		return this;
	}
	

	set cy(value){
		setCss(this.name, {
			cy: value
		});
		this._updated();
	}
	get cy(){
		return getCss(this.name, 'cy');
	}
	setCy(value: any){
		this.cy = value;
		return this;
	}
	

	set d(value){
		setCss(this.name, {
			d: value
		});
		this._updated();
	}
	get d(){
		return getCss(this.name, 'd');
	}
	setD(value: any){
		this.d = value;
		return this;
	}
	

	set descentOverride(value){
		setCss(this.name, {
			descentOverride: value
		});
		this._updated();
	}
	get descentOverride(){
		return getCss(this.name, 'descentOverride');
	}
	setDescentOverride(value: any){
		this.descentOverride = value;
		return this;
	}
	

	set direction(value){
		setCss(this.name, {
			direction: value
		});
		this._updated();
	}
	get direction(){
		return getCss(this.name, 'direction');
	}
	setDirection(value: any){
		this.direction = value;
		return this;
	}
	

	set display(value){
		setCss(this.name, {
			display: value
		});
		this._updated();
	}
	get display(){
		return getCss(this.name, 'display');
	}
	setDisplay(value: any){
		this.display = value;
		return this;
	}
	

	set dominantBaseline(value){
		setCss(this.name, {
			dominantBaseline: value
		});
		this._updated();
	}
	get dominantBaseline(){
		return getCss(this.name, 'dominantBaseline');
	}
	setDominantBaseline(value: any){
		this.dominantBaseline = value;
		return this;
	}
	

	set emptyCells(value){
		setCss(this.name, {
			emptyCells: value
		});
		this._updated();
	}
	get emptyCells(){
		return getCss(this.name, 'emptyCells');
	}
	setEmptyCells(value: any){
		this.emptyCells = value;
		return this;
	}
	

	set fallback(value){
		setCss(this.name, {
			fallback: value
		});
		this._updated();
	}
	get fallback(){
		return getCss(this.name, 'fallback');
	}
	setFallback(value: any){
		this.fallback = value;
		return this;
	}
	

	set fill(value){
		setCss(this.name, {
			fill: value
		});
		this._updated();
	}
	get fill(){
		return getCss(this.name, 'fill');
	}
	setFill(value: any){
		this.fill = value;
		return this;
	}
	

	set fillOpacity(value){
		setCss(this.name, {
			fillOpacity: value
		});
		this._updated();
	}
	get fillOpacity(){
		return getCss(this.name, 'fillOpacity');
	}
	setFillOpacity(value: any){
		this.fillOpacity = value;
		return this;
	}
	

	set fillRule(value){
		setCss(this.name, {
			fillRule: value
		});
		this._updated();
	}
	get fillRule(){
		return getCss(this.name, 'fillRule');
	}
	setFillRule(value: any){
		this.fillRule = value;
		return this;
	}
	

	set filter(value){
		setCss(this.name, {
			filter: value
		});
		this._updated();
	}
	get filter(){
		return getCss(this.name, 'filter');
	}
	setFilter(value: any){
		this.filter = value;
		return this;
	}
	

	set flex(value){
		setCss(this.name, {
			flex: value
		});
		this._updated();
	}
	get flex(){
		return getCss(this.name, 'flex');
	}
	setFlex(value: any){
		this.flex = value;
		return this;
	}
	

	set flexBasis(value){
		setCss(this.name, {
			flexBasis: value
		});
		this._updated();
	}
	get flexBasis(){
		return getCss(this.name, 'flexBasis');
	}
	setFlexBasis(value: any){
		this.flexBasis = value;
		return this;
	}
	

	set flexDirection(value){
		setCss(this.name, {
			flexDirection: value
		});
		this._updated();
	}
	get flexDirection(){
		return getCss(this.name, 'flexDirection');
	}
	setFlexDirection(value: any){
		this.flexDirection = value;
		return this;
	}
	

	set flexFlow(value){
		setCss(this.name, {
			flexFlow: value
		});
		this._updated();
	}
	get flexFlow(){
		return getCss(this.name, 'flexFlow');
	}
	setFlexFlow(value: any){
		this.flexFlow = value;
		return this;
	}
	

	set flexGrow(value){
		setCss(this.name, {
			flexGrow: value
		});
		this._updated();
	}
	get flexGrow(){
		return getCss(this.name, 'flexGrow');
	}
	setFlexGrow(value: any){
		this.flexGrow = value;
		return this;
	}
	

	set flexShrink(value){
		setCss(this.name, {
			flexShrink: value
		});
		this._updated();
	}
	get flexShrink(){
		return getCss(this.name, 'flexShrink');
	}
	setFlexShrink(value: any){
		this.flexShrink = value;
		return this;
	}
	

	set flexWrap(value){
		setCss(this.name, {
			flexWrap: value
		});
		this._updated();
	}
	get flexWrap(){
		return getCss(this.name, 'flexWrap');
	}
	setFlexWrap(value: any){
		this.flexWrap = value;
		return this;
	}
	

	set float(value){
		setCss(this.name, {
			float: value
		});
		this._updated();
	}
	get float(){
		return getCss(this.name, 'float');
	}
	setFloat(value: any){
		this.float = value;
		return this;
	}
	

	set floodColor(value){
		setCss(this.name, {
			floodColor: value
		});
		this._updated();
	}
	get floodColor(){
		return getCss(this.name, 'floodColor');
	}
	setFloodColor(value: any){
		this.floodColor = value;
		return this;
	}
	

	set floodOpacity(value){
		setCss(this.name, {
			floodOpacity: value
		});
		this._updated();
	}
	get floodOpacity(){
		return getCss(this.name, 'floodOpacity');
	}
	setFloodOpacity(value: any){
		this.floodOpacity = value;
		return this;
	}
	

	set font(value){
		setCss(this.name, {
			font: value
		});
		this._updated();
	}
	get font(){
		return getCss(this.name, 'font');
	}
	setFont(value: any){
		this.font = value;
		return this;
	}
	

	set fontDisplay(value){
		setCss(this.name, {
			fontDisplay: value
		});
		this._updated();
	}
	get fontDisplay(){
		return getCss(this.name, 'fontDisplay');
	}
	setFontDisplay(value: any){
		this.fontDisplay = value;
		return this;
	}
	

	set fontFamily(value){
		setCss(this.name, {
			fontFamily: value
		});
		this._updated();
	}
	get fontFamily(){
		return getCss(this.name, 'fontFamily');
	}
	setFontFamily(value: any){
		this.fontFamily = value;
		return this;
	}
	

	set fontFeatureSettings(value){
		setCss(this.name, {
			fontFeatureSettings: value
		});
		this._updated();
	}
	get fontFeatureSettings(){
		return getCss(this.name, 'fontFeatureSettings');
	}
	setFontFeatureSettings(value: any){
		this.fontFeatureSettings = value;
		return this;
	}
	

	set fontKerning(value){
		setCss(this.name, {
			fontKerning: value
		});
		this._updated();
	}
	get fontKerning(){
		return getCss(this.name, 'fontKerning');
	}
	setFontKerning(value: any){
		this.fontKerning = value;
		return this;
	}
	

	set fontOpticalSizing(value){
		setCss(this.name, {
			fontOpticalSizing: value
		});
		this._updated();
	}
	get fontOpticalSizing(){
		return getCss(this.name, 'fontOpticalSizing');
	}
	setFontOpticalSizing(value: any){
		this.fontOpticalSizing = value;
		return this;
	}
	

	set fontPalette(value){
		setCss(this.name, {
			fontPalette: value
		});
		this._updated();
	}
	get fontPalette(){
		return getCss(this.name, 'fontPalette');
	}
	setFontPalette(value: any){
		this.fontPalette = value;
		return this;
	}
	

	set fontSize(value){
		setCss(this.name, {
			fontSize: value
		});
		this._updated();
	}
	get fontSize(){
		return getCss(this.name, 'fontSize');
	}
	setFontSize(value: any){
		this.fontSize = value;
		return this;
	}
	

	set fontStretch(value){
		setCss(this.name, {
			fontStretch: value
		});
		this._updated();
	}
	get fontStretch(){
		return getCss(this.name, 'fontStretch');
	}
	setFontStretch(value: any){
		this.fontStretch = value;
		return this;
	}
	

	set fontStyle(value){
		setCss(this.name, {
			fontStyle: value
		});
		this._updated();
	}
	get fontStyle(){
		return getCss(this.name, 'fontStyle');
	}
	setFontStyle(value: any){
		this.fontStyle = value;
		return this;
	}
	

	set fontSynthesis(value){
		setCss(this.name, {
			fontSynthesis: value
		});
		this._updated();
	}
	get fontSynthesis(){
		return getCss(this.name, 'fontSynthesis');
	}
	setFontSynthesis(value: any){
		this.fontSynthesis = value;
		return this;
	}
	

	set fontSynthesisSmallCaps(value){
		setCss(this.name, {
			fontSynthesisSmallCaps: value
		});
		this._updated();
	}
	get fontSynthesisSmallCaps(){
		return getCss(this.name, 'fontSynthesisSmallCaps');
	}
	setFontSynthesisSmallCaps(value: any){
		this.fontSynthesisSmallCaps = value;
		return this;
	}
	

	set fontSynthesisStyle(value){
		setCss(this.name, {
			fontSynthesisStyle: value
		});
		this._updated();
	}
	get fontSynthesisStyle(){
		return getCss(this.name, 'fontSynthesisStyle');
	}
	setFontSynthesisStyle(value: any){
		this.fontSynthesisStyle = value;
		return this;
	}
	

	set fontSynthesisWeight(value){
		setCss(this.name, {
			fontSynthesisWeight: value
		});
		this._updated();
	}
	get fontSynthesisWeight(){
		return getCss(this.name, 'fontSynthesisWeight');
	}
	setFontSynthesisWeight(value: any){
		this.fontSynthesisWeight = value;
		return this;
	}
	

	set fontVariant(value){
		setCss(this.name, {
			fontVariant: value
		});
		this._updated();
	}
	get fontVariant(){
		return getCss(this.name, 'fontVariant');
	}
	setFontVariant(value: any){
		this.fontVariant = value;
		return this;
	}
	

	set fontVariantAlternates(value){
		setCss(this.name, {
			fontVariantAlternates: value
		});
		this._updated();
	}
	get fontVariantAlternates(){
		return getCss(this.name, 'fontVariantAlternates');
	}
	setFontVariantAlternates(value: any){
		this.fontVariantAlternates = value;
		return this;
	}
	

	set fontVariantCaps(value){
		setCss(this.name, {
			fontVariantCaps: value
		});
		this._updated();
	}
	get fontVariantCaps(){
		return getCss(this.name, 'fontVariantCaps');
	}
	setFontVariantCaps(value: any){
		this.fontVariantCaps = value;
		return this;
	}
	

	set fontVariantEastAsian(value){
		setCss(this.name, {
			fontVariantEastAsian: value
		});
		this._updated();
	}
	get fontVariantEastAsian(){
		return getCss(this.name, 'fontVariantEastAsian');
	}
	setFontVariantEastAsian(value: any){
		this.fontVariantEastAsian = value;
		return this;
	}
	

	set fontVariantLigatures(value){
		setCss(this.name, {
			fontVariantLigatures: value
		});
		this._updated();
	}
	get fontVariantLigatures(){
		return getCss(this.name, 'fontVariantLigatures');
	}
	setFontVariantLigatures(value: any){
		this.fontVariantLigatures = value;
		return this;
	}
	

	set fontVariantNumeric(value){
		setCss(this.name, {
			fontVariantNumeric: value
		});
		this._updated();
	}
	get fontVariantNumeric(){
		return getCss(this.name, 'fontVariantNumeric');
	}
	setFontVariantNumeric(value: any){
		this.fontVariantNumeric = value;
		return this;
	}
	

	set fontVariantPosition(value){
		setCss(this.name, {
			fontVariantPosition: value
		});
		this._updated();
	}
	get fontVariantPosition(){
		return getCss(this.name, 'fontVariantPosition');
	}
	setFontVariantPosition(value: any){
		this.fontVariantPosition = value;
		return this;
	}
	

	set fontVariationSettings(value){
		setCss(this.name, {
			fontVariationSettings: value
		});
		this._updated();
	}
	get fontVariationSettings(){
		return getCss(this.name, 'fontVariationSettings');
	}
	setFontVariationSettings(value: any){
		this.fontVariationSettings = value;
		return this;
	}
	

	set fontWeight(value){
		setCss(this.name, {
			fontWeight: value
		});
		this._updated();
	}
	get fontWeight(){
		return getCss(this.name, 'fontWeight');
	}
	setFontWeight(value: any){
		this.fontWeight = value;
		return this;
	}
	

	set forcedColorAdjust(value){
		setCss(this.name, {
			forcedColorAdjust: value
		});
		this._updated();
	}
	get forcedColorAdjust(){
		return getCss(this.name, 'forcedColorAdjust');
	}
	setForcedColorAdjust(value: any){
		this.forcedColorAdjust = value;
		return this;
	}
	

	set gap(value){
		setCss(this.name, {
			gap: value
		});
		this._updated();
	}
	get gap(){
		return getCss(this.name, 'gap');
	}
	setGap(value: any){
		this.gap = value;
		return this;
	}
	

	set grid(value){
		setCss(this.name, {
			grid: value
		});
		this._updated();
	}
	get grid(){
		return getCss(this.name, 'grid');
	}
	setGrid(value: any){
		this.grid = value;
		return this;
	}
	

	set gridArea(value){
		setCss(this.name, {
			gridArea: value
		});
		this._updated();
	}
	get gridArea(){
		return getCss(this.name, 'gridArea');
	}
	setGridArea(value: any){
		this.gridArea = value;
		return this;
	}
	

	set gridAutoColumns(value){
		setCss(this.name, {
			gridAutoColumns: value
		});
		this._updated();
	}
	get gridAutoColumns(){
		return getCss(this.name, 'gridAutoColumns');
	}
	setGridAutoColumns(value: any){
		this.gridAutoColumns = value;
		return this;
	}
	

	set gridAutoFlow(value){
		setCss(this.name, {
			gridAutoFlow: value
		});
		this._updated();
	}
	get gridAutoFlow(){
		return getCss(this.name, 'gridAutoFlow');
	}
	setGridAutoFlow(value: any){
		this.gridAutoFlow = value;
		return this;
	}
	

	set gridAutoRows(value){
		setCss(this.name, {
			gridAutoRows: value
		});
		this._updated();
	}
	get gridAutoRows(){
		return getCss(this.name, 'gridAutoRows');
	}
	setGridAutoRows(value: any){
		this.gridAutoRows = value;
		return this;
	}
	

	set gridColumn(value){
		setCss(this.name, {
			gridColumn: value
		});
		this._updated();
	}
	get gridColumn(){
		return getCss(this.name, 'gridColumn');
	}
	setGridColumn(value: any){
		this.gridColumn = value;
		return this;
	}
	

	set gridColumnEnd(value){
		setCss(this.name, {
			gridColumnEnd: value
		});
		this._updated();
	}
	get gridColumnEnd(){
		return getCss(this.name, 'gridColumnEnd');
	}
	setGridColumnEnd(value: any){
		this.gridColumnEnd = value;
		return this;
	}
	

	set gridColumnGap(value){
		setCss(this.name, {
			gridColumnGap: value
		});
		this._updated();
	}
	get gridColumnGap(){
		return getCss(this.name, 'gridColumnGap');
	}
	setGridColumnGap(value: any){
		this.gridColumnGap = value;
		return this;
	}
	

	set gridColumnStart(value){
		setCss(this.name, {
			gridColumnStart: value
		});
		this._updated();
	}
	get gridColumnStart(){
		return getCss(this.name, 'gridColumnStart');
	}
	setGridColumnStart(value: any){
		this.gridColumnStart = value;
		return this;
	}
	

	set gridGap(value){
		setCss(this.name, {
			gridGap: value
		});
		this._updated();
	}
	get gridGap(){
		return getCss(this.name, 'gridGap');
	}
	setGridGap(value: any){
		this.gridGap = value;
		return this;
	}
	

	set gridRow(value){
		setCss(this.name, {
			gridRow: value
		});
		this._updated();
	}
	get gridRow(){
		return getCss(this.name, 'gridRow');
	}
	setGridRow(value: any){
		this.gridRow = value;
		return this;
	}
	

	set gridRowEnd(value){
		setCss(this.name, {
			gridRowEnd: value
		});
		this._updated();
	}
	get gridRowEnd(){
		return getCss(this.name, 'gridRowEnd');
	}
	setGridRowEnd(value: any){
		this.gridRowEnd = value;
		return this;
	}
	

	set gridRowGap(value){
		setCss(this.name, {
			gridRowGap: value
		});
		this._updated();
	}
	get gridRowGap(){
		return getCss(this.name, 'gridRowGap');
	}
	setGridRowGap(value: any){
		this.gridRowGap = value;
		return this;
	}
	

	set gridRowStart(value){
		setCss(this.name, {
			gridRowStart: value
		});
		this._updated();
	}
	get gridRowStart(){
		return getCss(this.name, 'gridRowStart');
	}
	setGridRowStart(value: any){
		this.gridRowStart = value;
		return this;
	}
	

	set gridTemplate(value){
		setCss(this.name, {
			gridTemplate: value
		});
		this._updated();
	}
	get gridTemplate(){
		return getCss(this.name, 'gridTemplate');
	}
	setGridTemplate(value: any){
		this.gridTemplate = value;
		return this;
	}
	

	set gridTemplateAreas(value){
		setCss(this.name, {
			gridTemplateAreas: value
		});
		this._updated();
	}
	get gridTemplateAreas(){
		return getCss(this.name, 'gridTemplateAreas');
	}
	setGridTemplateAreas(value: any){
		this.gridTemplateAreas = value;
		return this;
	}
	

	set gridTemplateColumns(value){
		setCss(this.name, {
			gridTemplateColumns: value
		});
		this._updated();
	}
	get gridTemplateColumns(){
		return getCss(this.name, 'gridTemplateColumns');
	}
	setGridTemplateColumns(value: any){
		this.gridTemplateColumns = value;
		return this;
	}
	

	set gridTemplateRows(value){
		setCss(this.name, {
			gridTemplateRows: value
		});
		this._updated();
	}
	get gridTemplateRows(){
		return getCss(this.name, 'gridTemplateRows');
	}
	setGridTemplateRows(value: any){
		this.gridTemplateRows = value;
		return this;
	}
	

	set height(value){
		setCss(this.name, {
			height: value
		});
		this._updated();
	}
	get height(){
		return getCss(this.name, 'height');
	}
	setHeight(value: any){
		this.height = value;
		return this;
	}
	

	set hyphenateCharacter(value){
		setCss(this.name, {
			hyphenateCharacter: value
		});
		this._updated();
	}
	get hyphenateCharacter(){
		return getCss(this.name, 'hyphenateCharacter');
	}
	setHyphenateCharacter(value: any){
		this.hyphenateCharacter = value;
		return this;
	}
	

	set hyphenateLimitChars(value){
		setCss(this.name, {
			hyphenateLimitChars: value
		});
		this._updated();
	}
	get hyphenateLimitChars(){
		return getCss(this.name, 'hyphenateLimitChars');
	}
	setHyphenateLimitChars(value: any){
		this.hyphenateLimitChars = value;
		return this;
	}
	

	set hyphens(value){
		setCss(this.name, {
			hyphens: value
		});
		this._updated();
	}
	get hyphens(){
		return getCss(this.name, 'hyphens');
	}
	setHyphens(value: any){
		this.hyphens = value;
		return this;
	}
	

	set imageOrientation(value){
		setCss(this.name, {
			imageOrientation: value
		});
		this._updated();
	}
	get imageOrientation(){
		return getCss(this.name, 'imageOrientation');
	}
	setImageOrientation(value: any){
		this.imageOrientation = value;
		return this;
	}
	

	set imageRendering(value){
		setCss(this.name, {
			imageRendering: value
		});
		this._updated();
	}
	get imageRendering(){
		return getCss(this.name, 'imageRendering');
	}
	setImageRendering(value: any){
		this.imageRendering = value;
		return this;
	}
	

	set inherits(value){
		setCss(this.name, {
			inherits: value
		});
		this._updated();
	}
	get inherits(){
		return getCss(this.name, 'inherits');
	}
	setInherits(value: any){
		this.inherits = value;
		return this;
	}
	

	set initialLetter(value){
		setCss(this.name, {
			initialLetter: value
		});
		this._updated();
	}
	get initialLetter(){
		return getCss(this.name, 'initialLetter');
	}
	setInitialLetter(value: any){
		this.initialLetter = value;
		return this;
	}
	

	set initialValue(value){
		setCss(this.name, {
			initialValue: value
		});
		this._updated();
	}
	get initialValue(){
		return getCss(this.name, 'initialValue');
	}
	setInitialValue(value: any){
		this.initialValue = value;
		return this;
	}
	

	set inlineSize(value){
		setCss(this.name, {
			inlineSize: value
		});
		this._updated();
	}
	get inlineSize(){
		return getCss(this.name, 'inlineSize');
	}
	setInlineSize(value: any){
		this.inlineSize = value;
		return this;
	}
	

	set inset(value){
		setCss(this.name, {
			inset: value
		});
		this._updated();
	}
	get inset(){
		return getCss(this.name, 'inset');
	}
	setInset(value: any){
		this.inset = value;
		return this;
	}
	

	set insetBlock(value){
		setCss(this.name, {
			insetBlock: value
		});
		this._updated();
	}
	get insetBlock(){
		return getCss(this.name, 'insetBlock');
	}
	setInsetBlock(value: any){
		this.insetBlock = value;
		return this;
	}
	

	set insetBlockEnd(value){
		setCss(this.name, {
			insetBlockEnd: value
		});
		this._updated();
	}
	get insetBlockEnd(){
		return getCss(this.name, 'insetBlockEnd');
	}
	setInsetBlockEnd(value: any){
		this.insetBlockEnd = value;
		return this;
	}
	

	set insetBlockStart(value){
		setCss(this.name, {
			insetBlockStart: value
		});
		this._updated();
	}
	get insetBlockStart(){
		return getCss(this.name, 'insetBlockStart');
	}
	setInsetBlockStart(value: any){
		this.insetBlockStart = value;
		return this;
	}
	

	set insetInline(value){
		setCss(this.name, {
			insetInline: value
		});
		this._updated();
	}
	get insetInline(){
		return getCss(this.name, 'insetInline');
	}
	setInsetInline(value: any){
		this.insetInline = value;
		return this;
	}
	

	set insetInlineEnd(value){
		setCss(this.name, {
			insetInlineEnd: value
		});
		this._updated();
	}
	get insetInlineEnd(){
		return getCss(this.name, 'insetInlineEnd');
	}
	setInsetInlineEnd(value: any){
		this.insetInlineEnd = value;
		return this;
	}
	

	set insetInlineStart(value){
		setCss(this.name, {
			insetInlineStart: value
		});
		this._updated();
	}
	get insetInlineStart(){
		return getCss(this.name, 'insetInlineStart');
	}
	setInsetInlineStart(value: any){
		this.insetInlineStart = value;
		return this;
	}
	

	set isolation(value){
		setCss(this.name, {
			isolation: value
		});
		this._updated();
	}
	get isolation(){
		return getCss(this.name, 'isolation');
	}
	setIsolation(value: any){
		this.isolation = value;
		return this;
	}
	

	set justifyContent(value){
		setCss(this.name, {
			justifyContent: value
		});
		this._updated();
	}
	get justifyContent(){
		return getCss(this.name, 'justifyContent');
	}
	setJustifyContent(value: any){
		this.justifyContent = value;
		return this;
	}
	

	set justifyItems(value){
		setCss(this.name, {
			justifyItems: value
		});
		this._updated();
	}
	get justifyItems(){
		return getCss(this.name, 'justifyItems');
	}
	setJustifyItems(value: any){
		this.justifyItems = value;
		return this;
	}
	

	set justifySelf(value){
		setCss(this.name, {
			justifySelf: value
		});
		this._updated();
	}
	get justifySelf(){
		return getCss(this.name, 'justifySelf');
	}
	setJustifySelf(value: any){
		this.justifySelf = value;
		return this;
	}
	

	set left(value){
		setCss(this.name, {
			left: value
		});
		this._updated();
	}
	get left(){
		return getCss(this.name, 'left');
	}
	setLeft(value: any){
		this.left = value;
		return this;
	}
	

	set letterSpacing(value){
		setCss(this.name, {
			letterSpacing: value
		});
		this._updated();
	}
	get letterSpacing(){
		return getCss(this.name, 'letterSpacing');
	}
	setLetterSpacing(value: any){
		this.letterSpacing = value;
		return this;
	}
	

	set lightingColor(value){
		setCss(this.name, {
			lightingColor: value
		});
		this._updated();
	}
	get lightingColor(){
		return getCss(this.name, 'lightingColor');
	}
	setLightingColor(value: any){
		this.lightingColor = value;
		return this;
	}
	

	set lineBreak(value){
		setCss(this.name, {
			lineBreak: value
		});
		this._updated();
	}
	get lineBreak(){
		return getCss(this.name, 'lineBreak');
	}
	setLineBreak(value: any){
		this.lineBreak = value;
		return this;
	}
	

	set lineGapOverride(value){
		setCss(this.name, {
			lineGapOverride: value
		});
		this._updated();
	}
	get lineGapOverride(){
		return getCss(this.name, 'lineGapOverride');
	}
	setLineGapOverride(value: any){
		this.lineGapOverride = value;
		return this;
	}
	

	set lineHeight(value){
		setCss(this.name, {
			lineHeight: value
		});
		this._updated();
	}
	get lineHeight(){
		return getCss(this.name, 'lineHeight');
	}
	setLineHeight(value: any){
		this.lineHeight = value;
		return this;
	}
	

	set listStyle(value){
		setCss(this.name, {
			listStyle: value
		});
		this._updated();
	}
	get listStyle(){
		return getCss(this.name, 'listStyle');
	}
	setListStyle(value: any){
		this.listStyle = value;
		return this;
	}
	

	set listStyleImage(value){
		setCss(this.name, {
			listStyleImage: value
		});
		this._updated();
	}
	get listStyleImage(){
		return getCss(this.name, 'listStyleImage');
	}
	setListStyleImage(value: any){
		this.listStyleImage = value;
		return this;
	}
	

	set listStylePosition(value){
		setCss(this.name, {
			listStylePosition: value
		});
		this._updated();
	}
	get listStylePosition(){
		return getCss(this.name, 'listStylePosition');
	}
	setListStylePosition(value: any){
		this.listStylePosition = value;
		return this;
	}
	

	set listStyleType(value){
		setCss(this.name, {
			listStyleType: value
		});
		this._updated();
	}
	get listStyleType(){
		return getCss(this.name, 'listStyleType');
	}
	setListStyleType(value: any){
		this.listStyleType = value;
		return this;
	}
	

	set margin(value){
		setCss(this.name, {
			margin: value
		});
		this._updated();
	}
	get margin(){
		return getCss(this.name, 'margin');
	}
	setMargin(value: any){
		this.margin = value;
		return this;
	}
	

	set marginBlock(value){
		setCss(this.name, {
			marginBlock: value
		});
		this._updated();
	}
	get marginBlock(){
		return getCss(this.name, 'marginBlock');
	}
	setMarginBlock(value: any){
		this.marginBlock = value;
		return this;
	}
	

	set marginBlockEnd(value){
		setCss(this.name, {
			marginBlockEnd: value
		});
		this._updated();
	}
	get marginBlockEnd(){
		return getCss(this.name, 'marginBlockEnd');
	}
	setMarginBlockEnd(value: any){
		this.marginBlockEnd = value;
		return this;
	}
	

	set marginBlockStart(value){
		setCss(this.name, {
			marginBlockStart: value
		});
		this._updated();
	}
	get marginBlockStart(){
		return getCss(this.name, 'marginBlockStart');
	}
	setMarginBlockStart(value: any){
		this.marginBlockStart = value;
		return this;
	}
	

	set marginBottom(value){
		setCss(this.name, {
			marginBottom: value
		});
		this._updated();
	}
	get marginBottom(){
		return getCss(this.name, 'marginBottom');
	}
	setMarginBottom(value: any){
		this.marginBottom = value;
		return this;
	}
	

	set marginInline(value){
		setCss(this.name, {
			marginInline: value
		});
		this._updated();
	}
	get marginInline(){
		return getCss(this.name, 'marginInline');
	}
	setMarginInline(value: any){
		this.marginInline = value;
		return this;
	}
	

	set marginInlineEnd(value){
		setCss(this.name, {
			marginInlineEnd: value
		});
		this._updated();
	}
	get marginInlineEnd(){
		return getCss(this.name, 'marginInlineEnd');
	}
	setMarginInlineEnd(value: any){
		this.marginInlineEnd = value;
		return this;
	}
	

	set marginInlineStart(value){
		setCss(this.name, {
			marginInlineStart: value
		});
		this._updated();
	}
	get marginInlineStart(){
		return getCss(this.name, 'marginInlineStart');
	}
	setMarginInlineStart(value: any){
		this.marginInlineStart = value;
		return this;
	}
	

	set marginLeft(value){
		setCss(this.name, {
			marginLeft: value
		});
		this._updated();
	}
	get marginLeft(){
		return getCss(this.name, 'marginLeft');
	}
	setMarginLeft(value: any){
		this.marginLeft = value;
		return this;
	}
	

	set marginRight(value){
		setCss(this.name, {
			marginRight: value
		});
		this._updated();
	}
	get marginRight(){
		return getCss(this.name, 'marginRight');
	}
	setMarginRight(value: any){
		this.marginRight = value;
		return this;
	}
	

	set marginTop(value){
		setCss(this.name, {
			marginTop: value
		});
		this._updated();
	}
	get marginTop(){
		return getCss(this.name, 'marginTop');
	}
	setMarginTop(value: any){
		this.marginTop = value;
		return this;
	}
	

	set marker(value){
		setCss(this.name, {
			marker: value
		});
		this._updated();
	}
	get marker(){
		return getCss(this.name, 'marker');
	}
	setMarker(value: any){
		this.marker = value;
		return this;
	}
	

	set markerEnd(value){
		setCss(this.name, {
			markerEnd: value
		});
		this._updated();
	}
	get markerEnd(){
		return getCss(this.name, 'markerEnd');
	}
	setMarkerEnd(value: any){
		this.markerEnd = value;
		return this;
	}
	

	set markerMid(value){
		setCss(this.name, {
			markerMid: value
		});
		this._updated();
	}
	get markerMid(){
		return getCss(this.name, 'markerMid');
	}
	setMarkerMid(value: any){
		this.markerMid = value;
		return this;
	}
	

	set markerStart(value){
		setCss(this.name, {
			markerStart: value
		});
		this._updated();
	}
	get markerStart(){
		return getCss(this.name, 'markerStart');
	}
	setMarkerStart(value: any){
		this.markerStart = value;
		return this;
	}
	

	set mask(value){
		setCss(this.name, {
			mask: value
		});
		this._updated();
	}
	get mask(){
		return getCss(this.name, 'mask');
	}
	setMask(value: any){
		this.mask = value;
		return this;
	}
	

	set maskType(value){
		setCss(this.name, {
			maskType: value
		});
		this._updated();
	}
	get maskType(){
		return getCss(this.name, 'maskType');
	}
	setMaskType(value: any){
		this.maskType = value;
		return this;
	}
	

	set mathDepth(value){
		setCss(this.name, {
			mathDepth: value
		});
		this._updated();
	}
	get mathDepth(){
		return getCss(this.name, 'mathDepth');
	}
	setMathDepth(value: any){
		this.mathDepth = value;
		return this;
	}
	

	set mathShift(value){
		setCss(this.name, {
			mathShift: value
		});
		this._updated();
	}
	get mathShift(){
		return getCss(this.name, 'mathShift');
	}
	setMathShift(value: any){
		this.mathShift = value;
		return this;
	}
	

	set mathStyle(value){
		setCss(this.name, {
			mathStyle: value
		});
		this._updated();
	}
	get mathStyle(){
		return getCss(this.name, 'mathStyle');
	}
	setMathStyle(value: any){
		this.mathStyle = value;
		return this;
	}
	

	set maxBlockSize(value){
		setCss(this.name, {
			maxBlockSize: value
		});
		this._updated();
	}
	get maxBlockSize(){
		return getCss(this.name, 'maxBlockSize');
	}
	setMaxBlockSize(value: any){
		this.maxBlockSize = value;
		return this;
	}
	

	set maxHeight(value){
		setCss(this.name, {
			maxHeight: value
		});
		this._updated();
	}
	get maxHeight(){
		return getCss(this.name, 'maxHeight');
	}
	setMaxHeight(value: any){
		this.maxHeight = value;
		return this;
	}
	

	set maxInlineSize(value){
		setCss(this.name, {
			maxInlineSize: value
		});
		this._updated();
	}
	get maxInlineSize(){
		return getCss(this.name, 'maxInlineSize');
	}
	setMaxInlineSize(value: any){
		this.maxInlineSize = value;
		return this;
	}
	

	set maxWidth(value){
		setCss(this.name, {
			maxWidth: value
		});
		this._updated();
	}
	get maxWidth(){
		return getCss(this.name, 'maxWidth');
	}
	setMaxWidth(value: any){
		this.maxWidth = value;
		return this;
	}
	

	set minBlockSize(value){
		setCss(this.name, {
			minBlockSize: value
		});
		this._updated();
	}
	get minBlockSize(){
		return getCss(this.name, 'minBlockSize');
	}
	setMinBlockSize(value: any){
		this.minBlockSize = value;
		return this;
	}
	

	set minHeight(value){
		setCss(this.name, {
			minHeight: value
		});
		this._updated();
	}
	get minHeight(){
		return getCss(this.name, 'minHeight');
	}
	setMinHeight(value: any){
		this.minHeight = value;
		return this;
	}
	

	set minInlineSize(value){
		setCss(this.name, {
			minInlineSize: value
		});
		this._updated();
	}
	get minInlineSize(){
		return getCss(this.name, 'minInlineSize');
	}
	setMinInlineSize(value: any){
		this.minInlineSize = value;
		return this;
	}
	

	set minWidth(value){
		setCss(this.name, {
			minWidth: value
		});
		this._updated();
	}
	get minWidth(){
		return getCss(this.name, 'minWidth');
	}
	setMinWidth(value: any){
		this.minWidth = value;
		return this;
	}
	

	set mixBlendMode(value){
		setCss(this.name, {
			mixBlendMode: value
		});
		this._updated();
	}
	get mixBlendMode(){
		return getCss(this.name, 'mixBlendMode');
	}
	setMixBlendMode(value: any){
		this.mixBlendMode = value;
		return this;
	}
	

	set negative(value){
		setCss(this.name, {
			negative: value
		});
		this._updated();
	}
	get negative(){
		return getCss(this.name, 'negative');
	}
	setNegative(value: any){
		this.negative = value;
		return this;
	}
	

	set objectFit(value){
		setCss(this.name, {
			objectFit: value
		});
		this._updated();
	}
	get objectFit(){
		return getCss(this.name, 'objectFit');
	}
	setObjectFit(value: any){
		this.objectFit = value;
		return this;
	}
	

	set objectPosition(value){
		setCss(this.name, {
			objectPosition: value
		});
		this._updated();
	}
	get objectPosition(){
		return getCss(this.name, 'objectPosition');
	}
	setObjectPosition(value: any){
		this.objectPosition = value;
		return this;
	}
	

	set objectViewBox(value){
		setCss(this.name, {
			objectViewBox: value
		});
		this._updated();
	}
	get objectViewBox(){
		return getCss(this.name, 'objectViewBox');
	}
	setObjectViewBox(value: any){
		this.objectViewBox = value;
		return this;
	}
	

	set offset(value){
		setCss(this.name, {
			offset: value
		});
		this._updated();
	}
	get offset(){
		return getCss(this.name, 'offset');
	}
	setOffset(value: any){
		this.offset = value;
		return this;
	}
	

	set offsetAnchor(value){
		setCss(this.name, {
			offsetAnchor: value
		});
		this._updated();
	}
	get offsetAnchor(){
		return getCss(this.name, 'offsetAnchor');
	}
	setOffsetAnchor(value: any){
		this.offsetAnchor = value;
		return this;
	}
	

	set offsetDistance(value){
		setCss(this.name, {
			offsetDistance: value
		});
		this._updated();
	}
	get offsetDistance(){
		return getCss(this.name, 'offsetDistance');
	}
	setOffsetDistance(value: any){
		this.offsetDistance = value;
		return this;
	}
	

	set offsetPath(value){
		setCss(this.name, {
			offsetPath: value
		});
		this._updated();
	}
	get offsetPath(){
		return getCss(this.name, 'offsetPath');
	}
	setOffsetPath(value: any){
		this.offsetPath = value;
		return this;
	}
	

	set offsetPosition(value){
		setCss(this.name, {
			offsetPosition: value
		});
		this._updated();
	}
	get offsetPosition(){
		return getCss(this.name, 'offsetPosition');
	}
	setOffsetPosition(value: any){
		this.offsetPosition = value;
		return this;
	}
	

	set offsetRotate(value){
		setCss(this.name, {
			offsetRotate: value
		});
		this._updated();
	}
	get offsetRotate(){
		return getCss(this.name, 'offsetRotate');
	}
	setOffsetRotate(value: any){
		this.offsetRotate = value;
		return this;
	}
	

	set opacity(value){
		setCss(this.name, {
			opacity: value
		});
		this._updated();
	}
	get opacity(){
		return getCss(this.name, 'opacity');
	}
	setOpacity(value: any){
		this.opacity = value;
		return this;
	}
	

	set order(value){
		setCss(this.name, {
			order: value
		});
		this._updated();
	}
	get order(){
		return getCss(this.name, 'order');
	}
	setOrder(value: any){
		this.order = value;
		return this;
	}
	

	set orphans(value){
		setCss(this.name, {
			orphans: value
		});
		this._updated();
	}
	get orphans(){
		return getCss(this.name, 'orphans');
	}
	setOrphans(value: any){
		this.orphans = value;
		return this;
	}
	

	set outline(value){
		setCss(this.name, {
			outline: value
		});
		this._updated();
	}
	get outline(){
		return getCss(this.name, 'outline');
	}
	setOutline(value: any){
		this.outline = value;
		return this;
	}
	

	set outlineColor(value){
		setCss(this.name, {
			outlineColor: value
		});
		this._updated();
	}
	get outlineColor(){
		return getCss(this.name, 'outlineColor');
	}
	setOutlineColor(value: any){
		this.outlineColor = value;
		return this;
	}
	

	set outlineOffset(value){
		setCss(this.name, {
			outlineOffset: value
		});
		this._updated();
	}
	get outlineOffset(){
		return getCss(this.name, 'outlineOffset');
	}
	setOutlineOffset(value: any){
		this.outlineOffset = value;
		return this;
	}
	

	set outlineStyle(value){
		setCss(this.name, {
			outlineStyle: value
		});
		this._updated();
	}
	get outlineStyle(){
		return getCss(this.name, 'outlineStyle');
	}
	setOutlineStyle(value: any){
		this.outlineStyle = value;
		return this;
	}
	

	set outlineWidth(value){
		setCss(this.name, {
			outlineWidth: value
		});
		this._updated();
	}
	get outlineWidth(){
		return getCss(this.name, 'outlineWidth');
	}
	setOutlineWidth(value: any){
		this.outlineWidth = value;
		return this;
	}
	

	set overflow(value){
		setCss(this.name, {
			overflow: value
		});
		this._updated();
	}
	get overflow(){
		return getCss(this.name, 'overflow');
	}
	setOverflow(value: any){
		this.overflow = value;
		return this;
	}
	

	set overflowAnchor(value){
		setCss(this.name, {
			overflowAnchor: value
		});
		this._updated();
	}
	get overflowAnchor(){
		return getCss(this.name, 'overflowAnchor');
	}
	setOverflowAnchor(value: any){
		this.overflowAnchor = value;
		return this;
	}
	

	set overflowClipMargin(value){
		setCss(this.name, {
			overflowClipMargin: value
		});
		this._updated();
	}
	get overflowClipMargin(){
		return getCss(this.name, 'overflowClipMargin');
	}
	setOverflowClipMargin(value: any){
		this.overflowClipMargin = value;
		return this;
	}
	

	set overflowWrap(value){
		setCss(this.name, {
			overflowWrap: value
		});
		this._updated();
	}
	get overflowWrap(){
		return getCss(this.name, 'overflowWrap');
	}
	setOverflowWrap(value: any){
		this.overflowWrap = value;
		return this;
	}
	

	set overflowX(value){
		setCss(this.name, {
			overflowX: value
		});
		this._updated();
	}
	get overflowX(){
		return getCss(this.name, 'overflowX');
	}
	setOverflowX(value: any){
		this.overflowX = value;
		return this;
	}
	

	set overflowY(value){
		setCss(this.name, {
			overflowY: value
		});
		this._updated();
	}
	get overflowY(){
		return getCss(this.name, 'overflowY');
	}
	setOverflowY(value: any){
		this.overflowY = value;
		return this;
	}
	

	set overlay(value){
		setCss(this.name, {
			overlay: value
		});
		this._updated();
	}
	get overlay(){
		return getCss(this.name, 'overlay');
	}
	setOverlay(value: any){
		this.overlay = value;
		return this;
	}
	

	set overrideColors(value){
		setCss(this.name, {
			overrideColors: value
		});
		this._updated();
	}
	get overrideColors(){
		return getCss(this.name, 'overrideColors');
	}
	setOverrideColors(value: any){
		this.overrideColors = value;
		return this;
	}
	

	set overscrollBehavior(value){
		setCss(this.name, {
			overscrollBehavior: value
		});
		this._updated();
	}
	get overscrollBehavior(){
		return getCss(this.name, 'overscrollBehavior');
	}
	setOverscrollBehavior(value: any){
		this.overscrollBehavior = value;
		return this;
	}
	

	set overscrollBehaviorBlock(value){
		setCss(this.name, {
			overscrollBehaviorBlock: value
		});
		this._updated();
	}
	get overscrollBehaviorBlock(){
		return getCss(this.name, 'overscrollBehaviorBlock');
	}
	setOverscrollBehaviorBlock(value: any){
		this.overscrollBehaviorBlock = value;
		return this;
	}
	

	set overscrollBehaviorInline(value){
		setCss(this.name, {
			overscrollBehaviorInline: value
		});
		this._updated();
	}
	get overscrollBehaviorInline(){
		return getCss(this.name, 'overscrollBehaviorInline');
	}
	setOverscrollBehaviorInline(value: any){
		this.overscrollBehaviorInline = value;
		return this;
	}
	

	set overscrollBehaviorX(value){
		setCss(this.name, {
			overscrollBehaviorX: value
		});
		this._updated();
	}
	get overscrollBehaviorX(){
		return getCss(this.name, 'overscrollBehaviorX');
	}
	setOverscrollBehaviorX(value: any){
		this.overscrollBehaviorX = value;
		return this;
	}
	

	set overscrollBehaviorY(value){
		setCss(this.name, {
			overscrollBehaviorY: value
		});
		this._updated();
	}
	get overscrollBehaviorY(){
		return getCss(this.name, 'overscrollBehaviorY');
	}
	setOverscrollBehaviorY(value: any){
		this.overscrollBehaviorY = value;
		return this;
	}
	

	set pad(value){
		setCss(this.name, {
			pad: value
		});
		this._updated();
	}
	get pad(){
		return getCss(this.name, 'pad');
	}
	setPad(value: any){
		this.pad = value;
		return this;
	}
	

	set padding(value){
		setCss(this.name, {
			padding: value
		});
		this._updated();
	}
	get padding(){
		return getCss(this.name, 'padding');
	}
	setPadding(value: any){
		this.padding = value;
		return this;
	}
	

	set paddingBlock(value){
		setCss(this.name, {
			paddingBlock: value
		});
		this._updated();
	}
	get paddingBlock(){
		return getCss(this.name, 'paddingBlock');
	}
	setPaddingBlock(value: any){
		this.paddingBlock = value;
		return this;
	}
	

	set paddingBlockEnd(value){
		setCss(this.name, {
			paddingBlockEnd: value
		});
		this._updated();
	}
	get paddingBlockEnd(){
		return getCss(this.name, 'paddingBlockEnd');
	}
	setPaddingBlockEnd(value: any){
		this.paddingBlockEnd = value;
		return this;
	}
	

	set paddingBlockStart(value){
		setCss(this.name, {
			paddingBlockStart: value
		});
		this._updated();
	}
	get paddingBlockStart(){
		return getCss(this.name, 'paddingBlockStart');
	}
	setPaddingBlockStart(value: any){
		this.paddingBlockStart = value;
		return this;
	}
	

	set paddingBottom(value){
		setCss(this.name, {
			paddingBottom: value
		});
		this._updated();
	}
	get paddingBottom(){
		return getCss(this.name, 'paddingBottom');
	}
	setPaddingBottom(value: any){
		this.paddingBottom = value;
		return this;
	}
	

	set paddingInline(value){
		setCss(this.name, {
			paddingInline: value
		});
		this._updated();
	}
	get paddingInline(){
		return getCss(this.name, 'paddingInline');
	}
	setPaddingInline(value: any){
		this.paddingInline = value;
		return this;
	}
	

	set paddingInlineEnd(value){
		setCss(this.name, {
			paddingInlineEnd: value
		});
		this._updated();
	}
	get paddingInlineEnd(){
		return getCss(this.name, 'paddingInlineEnd');
	}
	setPaddingInlineEnd(value: any){
		this.paddingInlineEnd = value;
		return this;
	}
	

	set paddingInlineStart(value){
		setCss(this.name, {
			paddingInlineStart: value
		});
		this._updated();
	}
	get paddingInlineStart(){
		return getCss(this.name, 'paddingInlineStart');
	}
	setPaddingInlineStart(value: any){
		this.paddingInlineStart = value;
		return this;
	}
	

	set paddingLeft(value){
		setCss(this.name, {
			paddingLeft: value
		});
		this._updated();
	}
	get paddingLeft(){
		return getCss(this.name, 'paddingLeft');
	}
	setPaddingLeft(value: any){
		this.paddingLeft = value;
		return this;
	}
	

	set paddingRight(value){
		setCss(this.name, {
			paddingRight: value
		});
		this._updated();
	}
	get paddingRight(){
		return getCss(this.name, 'paddingRight');
	}
	setPaddingRight(value: any){
		this.paddingRight = value;
		return this;
	}
	

	set paddingTop(value){
		setCss(this.name, {
			paddingTop: value
		});
		this._updated();
	}
	get paddingTop(){
		return getCss(this.name, 'paddingTop');
	}
	setPaddingTop(value: any){
		this.paddingTop = value;
		return this;
	}
	

	set page(value){
		setCss(this.name, {
			page: value
		});
		this._updated();
	}
	get page(){
		return getCss(this.name, 'page');
	}
	setPage(value: any){
		this.page = value;
		return this;
	}
	

	set pageBreakAfter(value){
		setCss(this.name, {
			pageBreakAfter: value
		});
		this._updated();
	}
	get pageBreakAfter(){
		return getCss(this.name, 'pageBreakAfter');
	}
	setPageBreakAfter(value: any){
		this.pageBreakAfter = value;
		return this;
	}
	

	set pageBreakBefore(value){
		setCss(this.name, {
			pageBreakBefore: value
		});
		this._updated();
	}
	get pageBreakBefore(){
		return getCss(this.name, 'pageBreakBefore');
	}
	setPageBreakBefore(value: any){
		this.pageBreakBefore = value;
		return this;
	}
	

	set pageBreakInside(value){
		setCss(this.name, {
			pageBreakInside: value
		});
		this._updated();
	}
	get pageBreakInside(){
		return getCss(this.name, 'pageBreakInside');
	}
	setPageBreakInside(value: any){
		this.pageBreakInside = value;
		return this;
	}
	

	set pageOrientation(value){
		setCss(this.name, {
			pageOrientation: value
		});
		this._updated();
	}
	get pageOrientation(){
		return getCss(this.name, 'pageOrientation');
	}
	setPageOrientation(value: any){
		this.pageOrientation = value;
		return this;
	}
	

	set paintOrder(value){
		setCss(this.name, {
			paintOrder: value
		});
		this._updated();
	}
	get paintOrder(){
		return getCss(this.name, 'paintOrder');
	}
	setPaintOrder(value: any){
		this.paintOrder = value;
		return this;
	}
	

	set perspective(value){
		setCss(this.name, {
			perspective: value
		});
		this._updated();
	}
	get perspective(){
		return getCss(this.name, 'perspective');
	}
	setPerspective(value: any){
		this.perspective = value;
		return this;
	}
	

	set perspectiveOrigin(value){
		setCss(this.name, {
			perspectiveOrigin: value
		});
		this._updated();
	}
	get perspectiveOrigin(){
		return getCss(this.name, 'perspectiveOrigin');
	}
	setPerspectiveOrigin(value: any){
		this.perspectiveOrigin = value;
		return this;
	}
	

	set placeContent(value){
		setCss(this.name, {
			placeContent: value
		});
		this._updated();
	}
	get placeContent(){
		return getCss(this.name, 'placeContent');
	}
	setPlaceContent(value: any){
		this.placeContent = value;
		return this;
	}
	

	set placeItems(value){
		setCss(this.name, {
			placeItems: value
		});
		this._updated();
	}
	get placeItems(){
		return getCss(this.name, 'placeItems');
	}
	setPlaceItems(value: any){
		this.placeItems = value;
		return this;
	}
	

	set placeSelf(value){
		setCss(this.name, {
			placeSelf: value
		});
		this._updated();
	}
	get placeSelf(){
		return getCss(this.name, 'placeSelf');
	}
	setPlaceSelf(value: any){
		this.placeSelf = value;
		return this;
	}
	

	set pointerEvents(value){
		setCss(this.name, {
			pointerEvents: value
		});
		this._updated();
	}
	get pointerEvents(){
		return getCss(this.name, 'pointerEvents');
	}
	setPointerEvents(value: any){
		this.pointerEvents = value;
		return this;
	}
	

	set position(value){
		setCss(this.name, {
			position: value
		});
		this._updated();
	}
	get position(){
		return getCss(this.name, 'position');
	}
	setPosition(value: any){
		this.position = value;
		return this;
	}
	

	set prefix(value){
		setCss(this.name, {
			prefix: value
		});
		this._updated();
	}
	get prefix(){
		return getCss(this.name, 'prefix');
	}
	setPrefix(value: any){
		this.prefix = value;
		return this;
	}
	

	set quotes(value){
		setCss(this.name, {
			quotes: value
		});
		this._updated();
	}
	get quotes(){
		return getCss(this.name, 'quotes');
	}
	setQuotes(value: any){
		this.quotes = value;
		return this;
	}
	

	set r(value){
		setCss(this.name, {
			r: value
		});
		this._updated();
	}
	get r(){
		return getCss(this.name, 'r');
	}
	setR(value: any){
		this.r = value;
		return this;
	}
	

	set range(value){
		setCss(this.name, {
			range: value
		});
		this._updated();
	}
	get range(){
		return getCss(this.name, 'range');
	}
	setRange(value: any){
		this.range = value;
		return this;
	}
	

	set resize(value){
		setCss(this.name, {
			resize: value
		});
		this._updated();
	}
	get resize(){
		return getCss(this.name, 'resize');
	}
	setResize(value: any){
		this.resize = value;
		return this;
	}
	

	set right(value){
		setCss(this.name, {
			right: value
		});
		this._updated();
	}
	get right(){
		return getCss(this.name, 'right');
	}
	setRight(value: any){
		this.right = value;
		return this;
	}
	

	set rotate(value){
		setCss(this.name, {
			rotate: value
		});
		this._updated();
	}
	get rotate(){
		return getCss(this.name, 'rotate');
	}
	setRotate(value: any){
		this.rotate = value;
		return this;
	}
	

	set rowGap(value){
		setCss(this.name, {
			rowGap: value
		});
		this._updated();
	}
	get rowGap(){
		return getCss(this.name, 'rowGap');
	}
	setRowGap(value: any){
		this.rowGap = value;
		return this;
	}
	

	set rubyPosition(value){
		setCss(this.name, {
			rubyPosition: value
		});
		this._updated();
	}
	get rubyPosition(){
		return getCss(this.name, 'rubyPosition');
	}
	setRubyPosition(value: any){
		this.rubyPosition = value;
		return this;
	}
	

	set rx(value){
		setCss(this.name, {
			rx: value
		});
		this._updated();
	}
	get rx(){
		return getCss(this.name, 'rx');
	}
	setRx(value: any){
		this.rx = value;
		return this;
	}
	

	set ry(value){
		setCss(this.name, {
			ry: value
		});
		this._updated();
	}
	get ry(){
		return getCss(this.name, 'ry');
	}
	setRy(value: any){
		this.ry = value;
		return this;
	}
	

	set scale(value){
		setCss(this.name, {
			scale: value
		});
		this._updated();
	}
	get scale(){
		return getCss(this.name, 'scale');
	}
	setScale(value: any){
		this.scale = value;
		return this;
	}
	

	set scrollBehavior(value){
		setCss(this.name, {
			scrollBehavior: value
		});
		this._updated();
	}
	get scrollBehavior(){
		return getCss(this.name, 'scrollBehavior');
	}
	setScrollBehavior(value: any){
		this.scrollBehavior = value;
		return this;
	}
	

	set scrollMargin(value){
		setCss(this.name, {
			scrollMargin: value
		});
		this._updated();
	}
	get scrollMargin(){
		return getCss(this.name, 'scrollMargin');
	}
	setScrollMargin(value: any){
		this.scrollMargin = value;
		return this;
	}
	

	set scrollMarginBlock(value){
		setCss(this.name, {
			scrollMarginBlock: value
		});
		this._updated();
	}
	get scrollMarginBlock(){
		return getCss(this.name, 'scrollMarginBlock');
	}
	setScrollMarginBlock(value: any){
		this.scrollMarginBlock = value;
		return this;
	}
	

	set scrollMarginBlockEnd(value){
		setCss(this.name, {
			scrollMarginBlockEnd: value
		});
		this._updated();
	}
	get scrollMarginBlockEnd(){
		return getCss(this.name, 'scrollMarginBlockEnd');
	}
	setScrollMarginBlockEnd(value: any){
		this.scrollMarginBlockEnd = value;
		return this;
	}
	

	set scrollMarginBlockStart(value){
		setCss(this.name, {
			scrollMarginBlockStart: value
		});
		this._updated();
	}
	get scrollMarginBlockStart(){
		return getCss(this.name, 'scrollMarginBlockStart');
	}
	setScrollMarginBlockStart(value: any){
		this.scrollMarginBlockStart = value;
		return this;
	}
	

	set scrollMarginBottom(value){
		setCss(this.name, {
			scrollMarginBottom: value
		});
		this._updated();
	}
	get scrollMarginBottom(){
		return getCss(this.name, 'scrollMarginBottom');
	}
	setScrollMarginBottom(value: any){
		this.scrollMarginBottom = value;
		return this;
	}
	

	set scrollMarginInline(value){
		setCss(this.name, {
			scrollMarginInline: value
		});
		this._updated();
	}
	get scrollMarginInline(){
		return getCss(this.name, 'scrollMarginInline');
	}
	setScrollMarginInline(value: any){
		this.scrollMarginInline = value;
		return this;
	}
	

	set scrollMarginInlineEnd(value){
		setCss(this.name, {
			scrollMarginInlineEnd: value
		});
		this._updated();
	}
	get scrollMarginInlineEnd(){
		return getCss(this.name, 'scrollMarginInlineEnd');
	}
	setScrollMarginInlineEnd(value: any){
		this.scrollMarginInlineEnd = value;
		return this;
	}
	

	set scrollMarginInlineStart(value){
		setCss(this.name, {
			scrollMarginInlineStart: value
		});
		this._updated();
	}
	get scrollMarginInlineStart(){
		return getCss(this.name, 'scrollMarginInlineStart');
	}
	setScrollMarginInlineStart(value: any){
		this.scrollMarginInlineStart = value;
		return this;
	}
	

	set scrollMarginLeft(value){
		setCss(this.name, {
			scrollMarginLeft: value
		});
		this._updated();
	}
	get scrollMarginLeft(){
		return getCss(this.name, 'scrollMarginLeft');
	}
	setScrollMarginLeft(value: any){
		this.scrollMarginLeft = value;
		return this;
	}
	

	set scrollMarginRight(value){
		setCss(this.name, {
			scrollMarginRight: value
		});
		this._updated();
	}
	get scrollMarginRight(){
		return getCss(this.name, 'scrollMarginRight');
	}
	setScrollMarginRight(value: any){
		this.scrollMarginRight = value;
		return this;
	}
	

	set scrollMarginTop(value){
		setCss(this.name, {
			scrollMarginTop: value
		});
		this._updated();
	}
	get scrollMarginTop(){
		return getCss(this.name, 'scrollMarginTop');
	}
	setScrollMarginTop(value: any){
		this.scrollMarginTop = value;
		return this;
	}
	

	set scrollPadding(value){
		setCss(this.name, {
			scrollPadding: value
		});
		this._updated();
	}
	get scrollPadding(){
		return getCss(this.name, 'scrollPadding');
	}
	setScrollPadding(value: any){
		this.scrollPadding = value;
		return this;
	}
	

	set scrollPaddingBlock(value){
		setCss(this.name, {
			scrollPaddingBlock: value
		});
		this._updated();
	}
	get scrollPaddingBlock(){
		return getCss(this.name, 'scrollPaddingBlock');
	}
	setScrollPaddingBlock(value: any){
		this.scrollPaddingBlock = value;
		return this;
	}
	

	set scrollPaddingBlockEnd(value){
		setCss(this.name, {
			scrollPaddingBlockEnd: value
		});
		this._updated();
	}
	get scrollPaddingBlockEnd(){
		return getCss(this.name, 'scrollPaddingBlockEnd');
	}
	setScrollPaddingBlockEnd(value: any){
		this.scrollPaddingBlockEnd = value;
		return this;
	}
	

	set scrollPaddingBlockStart(value){
		setCss(this.name, {
			scrollPaddingBlockStart: value
		});
		this._updated();
	}
	get scrollPaddingBlockStart(){
		return getCss(this.name, 'scrollPaddingBlockStart');
	}
	setScrollPaddingBlockStart(value: any){
		this.scrollPaddingBlockStart = value;
		return this;
	}
	

	set scrollPaddingBottom(value){
		setCss(this.name, {
			scrollPaddingBottom: value
		});
		this._updated();
	}
	get scrollPaddingBottom(){
		return getCss(this.name, 'scrollPaddingBottom');
	}
	setScrollPaddingBottom(value: any){
		this.scrollPaddingBottom = value;
		return this;
	}
	

	set scrollPaddingInline(value){
		setCss(this.name, {
			scrollPaddingInline: value
		});
		this._updated();
	}
	get scrollPaddingInline(){
		return getCss(this.name, 'scrollPaddingInline');
	}
	setScrollPaddingInline(value: any){
		this.scrollPaddingInline = value;
		return this;
	}
	

	set scrollPaddingInlineEnd(value){
		setCss(this.name, {
			scrollPaddingInlineEnd: value
		});
		this._updated();
	}
	get scrollPaddingInlineEnd(){
		return getCss(this.name, 'scrollPaddingInlineEnd');
	}
	setScrollPaddingInlineEnd(value: any){
		this.scrollPaddingInlineEnd = value;
		return this;
	}
	

	set scrollPaddingInlineStart(value){
		setCss(this.name, {
			scrollPaddingInlineStart: value
		});
		this._updated();
	}
	get scrollPaddingInlineStart(){
		return getCss(this.name, 'scrollPaddingInlineStart');
	}
	setScrollPaddingInlineStart(value: any){
		this.scrollPaddingInlineStart = value;
		return this;
	}
	

	set scrollPaddingLeft(value){
		setCss(this.name, {
			scrollPaddingLeft: value
		});
		this._updated();
	}
	get scrollPaddingLeft(){
		return getCss(this.name, 'scrollPaddingLeft');
	}
	setScrollPaddingLeft(value: any){
		this.scrollPaddingLeft = value;
		return this;
	}
	

	set scrollPaddingRight(value){
		setCss(this.name, {
			scrollPaddingRight: value
		});
		this._updated();
	}
	get scrollPaddingRight(){
		return getCss(this.name, 'scrollPaddingRight');
	}
	setScrollPaddingRight(value: any){
		this.scrollPaddingRight = value;
		return this;
	}
	

	set scrollPaddingTop(value){
		setCss(this.name, {
			scrollPaddingTop: value
		});
		this._updated();
	}
	get scrollPaddingTop(){
		return getCss(this.name, 'scrollPaddingTop');
	}
	setScrollPaddingTop(value: any){
		this.scrollPaddingTop = value;
		return this;
	}
	

	set scrollSnapAlign(value){
		setCss(this.name, {
			scrollSnapAlign: value
		});
		this._updated();
	}
	get scrollSnapAlign(){
		return getCss(this.name, 'scrollSnapAlign');
	}
	setScrollSnapAlign(value: any){
		this.scrollSnapAlign = value;
		return this;
	}
	

	set scrollSnapStop(value){
		setCss(this.name, {
			scrollSnapStop: value
		});
		this._updated();
	}
	get scrollSnapStop(){
		return getCss(this.name, 'scrollSnapStop');
	}
	setScrollSnapStop(value: any){
		this.scrollSnapStop = value;
		return this;
	}
	

	set scrollSnapType(value){
		setCss(this.name, {
			scrollSnapType: value
		});
		this._updated();
	}
	get scrollSnapType(){
		return getCss(this.name, 'scrollSnapType');
	}
	setScrollSnapType(value: any){
		this.scrollSnapType = value;
		return this;
	}
	

	set scrollTimeline(value){
		setCss(this.name, {
			scrollTimeline: value
		});
		this._updated();
	}
	get scrollTimeline(){
		return getCss(this.name, 'scrollTimeline');
	}
	setScrollTimeline(value: any){
		this.scrollTimeline = value;
		return this;
	}
	

	set scrollTimelineAxis(value){
		setCss(this.name, {
			scrollTimelineAxis: value
		});
		this._updated();
	}
	get scrollTimelineAxis(){
		return getCss(this.name, 'scrollTimelineAxis');
	}
	setScrollTimelineAxis(value: any){
		this.scrollTimelineAxis = value;
		return this;
	}
	

	set scrollTimelineName(value){
		setCss(this.name, {
			scrollTimelineName: value
		});
		this._updated();
	}
	get scrollTimelineName(){
		return getCss(this.name, 'scrollTimelineName');
	}
	setScrollTimelineName(value: any){
		this.scrollTimelineName = value;
		return this;
	}
	

	set scrollbarGutter(value){
		setCss(this.name, {
			scrollbarGutter: value
		});
		this._updated();
	}
	get scrollbarGutter(){
		return getCss(this.name, 'scrollbarGutter');
	}
	setScrollbarGutter(value: any){
		this.scrollbarGutter = value;
		return this;
	}
	

	set shapeImageThreshold(value){
		setCss(this.name, {
			shapeImageThreshold: value
		});
		this._updated();
	}
	get shapeImageThreshold(){
		return getCss(this.name, 'shapeImageThreshold');
	}
	setShapeImageThreshold(value: any){
		this.shapeImageThreshold = value;
		return this;
	}
	

	set shapeMargin(value){
		setCss(this.name, {
			shapeMargin: value
		});
		this._updated();
	}
	get shapeMargin(){
		return getCss(this.name, 'shapeMargin');
	}
	setShapeMargin(value: any){
		this.shapeMargin = value;
		return this;
	}
	

	set shapeOutside(value){
		setCss(this.name, {
			shapeOutside: value
		});
		this._updated();
	}
	get shapeOutside(){
		return getCss(this.name, 'shapeOutside');
	}
	setShapeOutside(value: any){
		this.shapeOutside = value;
		return this;
	}
	

	set shapeRendering(value){
		setCss(this.name, {
			shapeRendering: value
		});
		this._updated();
	}
	get shapeRendering(){
		return getCss(this.name, 'shapeRendering');
	}
	setShapeRendering(value: any){
		this.shapeRendering = value;
		return this;
	}
	

	set size(value){
		setCss(this.name, {
			size: value
		});
		this._updated();
	}
	get size(){
		return getCss(this.name, 'size');
	}
	setSize(value: any){
		this.size = value;
		return this;
	}
	

	set sizeAdjust(value){
		setCss(this.name, {
			sizeAdjust: value
		});
		this._updated();
	}
	get sizeAdjust(){
		return getCss(this.name, 'sizeAdjust');
	}
	setSizeAdjust(value: any){
		this.sizeAdjust = value;
		return this;
	}
	

	set speak(value){
		setCss(this.name, {
			speak: value
		});
		this._updated();
	}
	get speak(){
		return getCss(this.name, 'speak');
	}
	setSpeak(value: any){
		this.speak = value;
		return this;
	}
	

	set speakAs(value){
		setCss(this.name, {
			speakAs: value
		});
		this._updated();
	}
	get speakAs(){
		return getCss(this.name, 'speakAs');
	}
	setSpeakAs(value: any){
		this.speakAs = value;
		return this;
	}
	

	set src(value){
		setCss(this.name, {
			src: value
		});
		this._updated();
	}
	get src(){
		return getCss(this.name, 'src');
	}
	setSrc(value: any){
		this.src = value;
		return this;
	}
	

	set stopColor(value){
		setCss(this.name, {
			stopColor: value
		});
		this._updated();
	}
	get stopColor(){
		return getCss(this.name, 'stopColor');
	}
	setStopColor(value: any){
		this.stopColor = value;
		return this;
	}
	

	set stopOpacity(value){
		setCss(this.name, {
			stopOpacity: value
		});
		this._updated();
	}
	get stopOpacity(){
		return getCss(this.name, 'stopOpacity');
	}
	setStopOpacity(value: any){
		this.stopOpacity = value;
		return this;
	}
	

	set stroke(value){
		setCss(this.name, {
			stroke: value
		});
		this._updated();
	}
	get stroke(){
		return getCss(this.name, 'stroke');
	}
	setStroke(value: any){
		this.stroke = value;
		return this;
	}
	

	set strokeDasharray(value){
		setCss(this.name, {
			strokeDasharray: value
		});
		this._updated();
	}
	get strokeDasharray(){
		return getCss(this.name, 'strokeDasharray');
	}
	setStrokeDasharray(value: any){
		this.strokeDasharray = value;
		return this;
	}
	

	set strokeDashoffset(value){
		setCss(this.name, {
			strokeDashoffset: value
		});
		this._updated();
	}
	get strokeDashoffset(){
		return getCss(this.name, 'strokeDashoffset');
	}
	setStrokeDashoffset(value: any){
		this.strokeDashoffset = value;
		return this;
	}
	

	set strokeLinecap(value){
		setCss(this.name, {
			strokeLinecap: value
		});
		this._updated();
	}
	get strokeLinecap(){
		return getCss(this.name, 'strokeLinecap');
	}
	setStrokeLinecap(value: any){
		this.strokeLinecap = value;
		return this;
	}
	

	set strokeLinejoin(value){
		setCss(this.name, {
			strokeLinejoin: value
		});
		this._updated();
	}
	get strokeLinejoin(){
		return getCss(this.name, 'strokeLinejoin');
	}
	setStrokeLinejoin(value: any){
		this.strokeLinejoin = value;
		return this;
	}
	

	set strokeMiterlimit(value){
		setCss(this.name, {
			strokeMiterlimit: value
		});
		this._updated();
	}
	get strokeMiterlimit(){
		return getCss(this.name, 'strokeMiterlimit');
	}
	setStrokeMiterlimit(value: any){
		this.strokeMiterlimit = value;
		return this;
	}
	

	set strokeOpacity(value){
		setCss(this.name, {
			strokeOpacity: value
		});
		this._updated();
	}
	get strokeOpacity(){
		return getCss(this.name, 'strokeOpacity');
	}
	setStrokeOpacity(value: any){
		this.strokeOpacity = value;
		return this;
	}
	

	set strokeWidth(value){
		setCss(this.name, {
			strokeWidth: value
		});
		this._updated();
	}
	get strokeWidth(){
		return getCss(this.name, 'strokeWidth');
	}
	setStrokeWidth(value: any){
		this.strokeWidth = value;
		return this;
	}
	

	set suffix(value){
		setCss(this.name, {
			suffix: value
		});
		this._updated();
	}
	get suffix(){
		return getCss(this.name, 'suffix');
	}
	setSuffix(value: any){
		this.suffix = value;
		return this;
	}
	

	set symbols(value){
		setCss(this.name, {
			symbols: value
		});
		this._updated();
	}
	get symbols(){
		return getCss(this.name, 'symbols');
	}
	setSymbols(value: any){
		this.symbols = value;
		return this;
	}
	

	set syntax(value){
		setCss(this.name, {
			syntax: value
		});
		this._updated();
	}
	get syntax(){
		return getCss(this.name, 'syntax');
	}
	setSyntax(value: any){
		this.syntax = value;
		return this;
	}
	

	set system(value){
		setCss(this.name, {
			system: value
		});
		this._updated();
	}
	get system(){
		return getCss(this.name, 'system');
	}
	setSystem(value: any){
		this.system = value;
		return this;
	}
	

	set tabSize(value){
		setCss(this.name, {
			tabSize: value
		});
		this._updated();
	}
	get tabSize(){
		return getCss(this.name, 'tabSize');
	}
	setTabSize(value: any){
		this.tabSize = value;
		return this;
	}
	

	set tableLayout(value){
		setCss(this.name, {
			tableLayout: value
		});
		this._updated();
	}
	get tableLayout(){
		return getCss(this.name, 'tableLayout');
	}
	setTableLayout(value: any){
		this.tableLayout = value;
		return this;
	}
	

	set textAlign(value){
		setCss(this.name, {
			textAlign: value
		});
		this._updated();
	}
	get textAlign(){
		return getCss(this.name, 'textAlign');
	}
	setTextAlign(value: any){
		this.textAlign = value;
		return this;
	}
	

	set textAlignLast(value){
		setCss(this.name, {
			textAlignLast: value
		});
		this._updated();
	}
	get textAlignLast(){
		return getCss(this.name, 'textAlignLast');
	}
	setTextAlignLast(value: any){
		this.textAlignLast = value;
		return this;
	}
	

	set textAnchor(value){
		setCss(this.name, {
			textAnchor: value
		});
		this._updated();
	}
	get textAnchor(){
		return getCss(this.name, 'textAnchor');
	}
	setTextAnchor(value: any){
		this.textAnchor = value;
		return this;
	}
	

	set textCombineUpright(value){
		setCss(this.name, {
			textCombineUpright: value
		});
		this._updated();
	}
	get textCombineUpright(){
		return getCss(this.name, 'textCombineUpright');
	}
	setTextCombineUpright(value: any){
		this.textCombineUpright = value;
		return this;
	}
	

	set textDecoration(value){
		setCss(this.name, {
			textDecoration: value
		});
		this._updated();
	}
	get textDecoration(){
		return getCss(this.name, 'textDecoration');
	}
	setTextDecoration(value: any){
		this.textDecoration = value;
		return this;
	}
	

	set textDecorationColor(value){
		setCss(this.name, {
			textDecorationColor: value
		});
		this._updated();
	}
	get textDecorationColor(){
		return getCss(this.name, 'textDecorationColor');
	}
	setTextDecorationColor(value: any){
		this.textDecorationColor = value;
		return this;
	}
	

	set textDecorationLine(value){
		setCss(this.name, {
			textDecorationLine: value
		});
		this._updated();
	}
	get textDecorationLine(){
		return getCss(this.name, 'textDecorationLine');
	}
	setTextDecorationLine(value: any){
		this.textDecorationLine = value;
		return this;
	}
	

	set textDecorationSkipInk(value){
		setCss(this.name, {
			textDecorationSkipInk: value
		});
		this._updated();
	}
	get textDecorationSkipInk(){
		return getCss(this.name, 'textDecorationSkipInk');
	}
	setTextDecorationSkipInk(value: any){
		this.textDecorationSkipInk = value;
		return this;
	}
	

	set textDecorationStyle(value){
		setCss(this.name, {
			textDecorationStyle: value
		});
		this._updated();
	}
	get textDecorationStyle(){
		return getCss(this.name, 'textDecorationStyle');
	}
	setTextDecorationStyle(value: any){
		this.textDecorationStyle = value;
		return this;
	}
	

	set textDecorationThickness(value){
		setCss(this.name, {
			textDecorationThickness: value
		});
		this._updated();
	}
	get textDecorationThickness(){
		return getCss(this.name, 'textDecorationThickness');
	}
	setTextDecorationThickness(value: any){
		this.textDecorationThickness = value;
		return this;
	}
	

	set textEmphasis(value){
		setCss(this.name, {
			textEmphasis: value
		});
		this._updated();
	}
	get textEmphasis(){
		return getCss(this.name, 'textEmphasis');
	}
	setTextEmphasis(value: any){
		this.textEmphasis = value;
		return this;
	}
	

	set textEmphasisColor(value){
		setCss(this.name, {
			textEmphasisColor: value
		});
		this._updated();
	}
	get textEmphasisColor(){
		return getCss(this.name, 'textEmphasisColor');
	}
	setTextEmphasisColor(value: any){
		this.textEmphasisColor = value;
		return this;
	}
	

	set textEmphasisPosition(value){
		setCss(this.name, {
			textEmphasisPosition: value
		});
		this._updated();
	}
	get textEmphasisPosition(){
		return getCss(this.name, 'textEmphasisPosition');
	}
	setTextEmphasisPosition(value: any){
		this.textEmphasisPosition = value;
		return this;
	}
	

	set textEmphasisStyle(value){
		setCss(this.name, {
			textEmphasisStyle: value
		});
		this._updated();
	}
	get textEmphasisStyle(){
		return getCss(this.name, 'textEmphasisStyle');
	}
	setTextEmphasisStyle(value: any){
		this.textEmphasisStyle = value;
		return this;
	}
	

	set textIndent(value){
		setCss(this.name, {
			textIndent: value
		});
		this._updated();
	}
	get textIndent(){
		return getCss(this.name, 'textIndent');
	}
	setTextIndent(value: any){
		this.textIndent = value;
		return this;
	}
	

	set textOrientation(value){
		setCss(this.name, {
			textOrientation: value
		});
		this._updated();
	}
	get textOrientation(){
		return getCss(this.name, 'textOrientation');
	}
	setTextOrientation(value: any){
		this.textOrientation = value;
		return this;
	}
	

	set textOverflow(value){
		setCss(this.name, {
			textOverflow: value
		});
		this._updated();
	}
	get textOverflow(){
		return getCss(this.name, 'textOverflow');
	}
	setTextOverflow(value: any){
		this.textOverflow = value;
		return this;
	}
	

	set textRendering(value){
		setCss(this.name, {
			textRendering: value
		});
		this._updated();
	}
	get textRendering(){
		return getCss(this.name, 'textRendering');
	}
	setTextRendering(value: any){
		this.textRendering = value;
		return this;
	}
	

	set textShadow(value){
		setCss(this.name, {
			textShadow: value
		});
		this._updated();
	}
	get textShadow(){
		return getCss(this.name, 'textShadow');
	}
	setTextShadow(value: any){
		this.textShadow = value;
		return this;
	}
	

	set textSizeAdjust(value){
		setCss(this.name, {
			textSizeAdjust: value
		});
		this._updated();
	}
	get textSizeAdjust(){
		return getCss(this.name, 'textSizeAdjust');
	}
	setTextSizeAdjust(value: any){
		this.textSizeAdjust = value;
		return this;
	}
	

	set textTransform(value){
		setCss(this.name, {
			textTransform: value
		});
		this._updated();
	}
	get textTransform(){
		return getCss(this.name, 'textTransform');
	}
	setTextTransform(value: any){
		this.textTransform = value;
		return this;
	}
	

	set textUnderlineOffset(value){
		setCss(this.name, {
			textUnderlineOffset: value
		});
		this._updated();
	}
	get textUnderlineOffset(){
		return getCss(this.name, 'textUnderlineOffset');
	}
	setTextUnderlineOffset(value: any){
		this.textUnderlineOffset = value;
		return this;
	}
	

	set textUnderlinePosition(value){
		setCss(this.name, {
			textUnderlinePosition: value
		});
		this._updated();
	}
	get textUnderlinePosition(){
		return getCss(this.name, 'textUnderlinePosition');
	}
	setTextUnderlinePosition(value: any){
		this.textUnderlinePosition = value;
		return this;
	}
	

	set textWrap(value){
		setCss(this.name, {
			textWrap: value
		});
		this._updated();
	}
	get textWrap(){
		return getCss(this.name, 'textWrap');
	}
	setTextWrap(value: any){
		this.textWrap = value;
		return this;
	}
	

	set timelineScope(value){
		setCss(this.name, {
			timelineScope: value
		});
		this._updated();
	}
	get timelineScope(){
		return getCss(this.name, 'timelineScope');
	}
	setTimelineScope(value: any){
		this.timelineScope = value;
		return this;
	}
	

	set top(value){
		setCss(this.name, {
			top: value
		});
		this._updated();
	}
	get top(){
		return getCss(this.name, 'top');
	}
	setTop(value: any){
		this.top = value;
		return this;
	}
	

	set touchAction(value){
		setCss(this.name, {
			touchAction: value
		});
		this._updated();
	}
	get touchAction(){
		return getCss(this.name, 'touchAction');
	}
	setTouchAction(value: any){
		this.touchAction = value;
		return this;
	}
	

	set transform(value){
		setCss(this.name, {
			transform: value
		});
		this._updated();
	}
	get transform(){
		return getCss(this.name, 'transform');
	}
	setTransform(value: any){
		this.transform = value;
		return this;
	}
	

	set transformBox(value){
		setCss(this.name, {
			transformBox: value
		});
		this._updated();
	}
	get transformBox(){
		return getCss(this.name, 'transformBox');
	}
	setTransformBox(value: any){
		this.transformBox = value;
		return this;
	}
	

	set transformOrigin(value){
		setCss(this.name, {
			transformOrigin: value
		});
		this._updated();
	}
	get transformOrigin(){
		return getCss(this.name, 'transformOrigin');
	}
	setTransformOrigin(value: any){
		this.transformOrigin = value;
		return this;
	}
	

	set transformStyle(value){
		setCss(this.name, {
			transformStyle: value
		});
		this._updated();
	}
	get transformStyle(){
		return getCss(this.name, 'transformStyle');
	}
	setTransformStyle(value: any){
		this.transformStyle = value;
		return this;
	}
	

	set transition(value){
		setCss(this.name, {
			transition: value
		});
		this._updated();
	}
	get transition(){
		return getCss(this.name, 'transition');
	}
	setTransition(value: any){
		this.transition = value;
		return this;
	}
	

	set transitionBehavior(value){
		setCss(this.name, {
			transitionBehavior: value
		});
		this._updated();
	}
	get transitionBehavior(){
		return getCss(this.name, 'transitionBehavior');
	}
	setTransitionBehavior(value: any){
		this.transitionBehavior = value;
		return this;
	}
	

	set transitionDelay(value){
		setCss(this.name, {
			transitionDelay: value
		});
		this._updated();
	}
	get transitionDelay(){
		return getCss(this.name, 'transitionDelay');
	}
	setTransitionDelay(value: any){
		this.transitionDelay = value;
		return this;
	}
	

	set transitionDuration(value){
		setCss(this.name, {
			transitionDuration: value
		});
		this._updated();
	}
	get transitionDuration(){
		return getCss(this.name, 'transitionDuration');
	}
	setTransitionDuration(value: any){
		this.transitionDuration = value;
		return this;
	}
	

	set transitionProperty(value){
		setCss(this.name, {
			transitionProperty: value
		});
		this._updated();
	}
	get transitionProperty(){
		return getCss(this.name, 'transitionProperty');
	}
	setTransitionProperty(value: any){
		this.transitionProperty = value;
		return this;
	}
	

	set transitionTimingFunction(value){
		setCss(this.name, {
			transitionTimingFunction: value
		});
		this._updated();
	}
	get transitionTimingFunction(){
		return getCss(this.name, 'transitionTimingFunction');
	}
	setTransitionTimingFunction(value: any){
		this.transitionTimingFunction = value;
		return this;
	}
	

	set translate(value){
		setCss(this.name, {
			translate: value
		});
		this._updated();
	}
	get translate(){
		return getCss(this.name, 'translate');
	}
	setTranslate(value: any){
		this.translate = value;
		return this;
	}
	

	set unicodeBidi(value){
		setCss(this.name, {
			unicodeBidi: value
		});
		this._updated();
	}
	get unicodeBidi(){
		return getCss(this.name, 'unicodeBidi');
	}
	setUnicodeBidi(value: any){
		this.unicodeBidi = value;
		return this;
	}
	

	set unicodeRange(value){
		setCss(this.name, {
			unicodeRange: value
		});
		this._updated();
	}
	get unicodeRange(){
		return getCss(this.name, 'unicodeRange');
	}
	setUnicodeRange(value: any){
		this.unicodeRange = value;
		return this;
	}
	

	set userSelect(value){
		setCss(this.name, {
			userSelect: value
		});
		this._updated();
	}
	get userSelect(){
		return getCss(this.name, 'userSelect');
	}
	setUserSelect(value: any){
		this.userSelect = value;
		return this;
	}
	

	set vectorEffect(value){
		setCss(this.name, {
			vectorEffect: value
		});
		this._updated();
	}
	get vectorEffect(){
		return getCss(this.name, 'vectorEffect');
	}
	setVectorEffect(value: any){
		this.vectorEffect = value;
		return this;
	}
	

	set verticalAlign(value){
		setCss(this.name, {
			verticalAlign: value
		});
		this._updated();
	}
	get verticalAlign(){
		return getCss(this.name, 'verticalAlign');
	}
	setVerticalAlign(value: any){
		this.verticalAlign = value;
		return this;
	}
	

	set viewTimeline(value){
		setCss(this.name, {
			viewTimeline: value
		});
		this._updated();
	}
	get viewTimeline(){
		return getCss(this.name, 'viewTimeline');
	}
	setViewTimeline(value: any){
		this.viewTimeline = value;
		return this;
	}
	

	set viewTimelineAxis(value){
		setCss(this.name, {
			viewTimelineAxis: value
		});
		this._updated();
	}
	get viewTimelineAxis(){
		return getCss(this.name, 'viewTimelineAxis');
	}
	setViewTimelineAxis(value: any){
		this.viewTimelineAxis = value;
		return this;
	}
	

	set viewTimelineInset(value){
		setCss(this.name, {
			viewTimelineInset: value
		});
		this._updated();
	}
	get viewTimelineInset(){
		return getCss(this.name, 'viewTimelineInset');
	}
	setViewTimelineInset(value: any){
		this.viewTimelineInset = value;
		return this;
	}
	

	set viewTimelineName(value){
		setCss(this.name, {
			viewTimelineName: value
		});
		this._updated();
	}
	get viewTimelineName(){
		return getCss(this.name, 'viewTimelineName');
	}
	setViewTimelineName(value: any){
		this.viewTimelineName = value;
		return this;
	}
	

	set viewTransitionName(value){
		setCss(this.name, {
			viewTransitionName: value
		});
		this._updated();
	}
	get viewTransitionName(){
		return getCss(this.name, 'viewTransitionName');
	}
	setViewTransitionName(value: any){
		this.viewTransitionName = value;
		return this;
	}
	

	set visibility(value){
		setCss(this.name, {
			visibility: value
		});
		this._updated();
	}
	get visibility(){
		return getCss(this.name, 'visibility');
	}
	setVisibility(value: any){
		this.visibility = value;
		return this;
	}
	

	set webkitAlignContent(value){
		setCss(this.name, {
			webkitAlignContent: value
		});
		this._updated();
	}
	get webkitAlignContent(){
		return getCss(this.name, 'webkitAlignContent');
	}
	setWebkitAlignContent(value: any){
		this.webkitAlignContent = value;
		return this;
	}
	

	set webkitAlignItems(value){
		setCss(this.name, {
			webkitAlignItems: value
		});
		this._updated();
	}
	get webkitAlignItems(){
		return getCss(this.name, 'webkitAlignItems');
	}
	setWebkitAlignItems(value: any){
		this.webkitAlignItems = value;
		return this;
	}
	

	set webkitAlignSelf(value){
		setCss(this.name, {
			webkitAlignSelf: value
		});
		this._updated();
	}
	get webkitAlignSelf(){
		return getCss(this.name, 'webkitAlignSelf');
	}
	setWebkitAlignSelf(value: any){
		this.webkitAlignSelf = value;
		return this;
	}
	

	set webkitAnimation(value){
		setCss(this.name, {
			webkitAnimation: value
		});
		this._updated();
	}
	get webkitAnimation(){
		return getCss(this.name, 'webkitAnimation');
	}
	setWebkitAnimation(value: any){
		this.webkitAnimation = value;
		return this;
	}
	

	set webkitAnimationDelay(value){
		setCss(this.name, {
			webkitAnimationDelay: value
		});
		this._updated();
	}
	get webkitAnimationDelay(){
		return getCss(this.name, 'webkitAnimationDelay');
	}
	setWebkitAnimationDelay(value: any){
		this.webkitAnimationDelay = value;
		return this;
	}
	

	set webkitAnimationDirection(value){
		setCss(this.name, {
			webkitAnimationDirection: value
		});
		this._updated();
	}
	get webkitAnimationDirection(){
		return getCss(this.name, 'webkitAnimationDirection');
	}
	setWebkitAnimationDirection(value: any){
		this.webkitAnimationDirection = value;
		return this;
	}
	

	set webkitAnimationDuration(value){
		setCss(this.name, {
			webkitAnimationDuration: value
		});
		this._updated();
	}
	get webkitAnimationDuration(){
		return getCss(this.name, 'webkitAnimationDuration');
	}
	setWebkitAnimationDuration(value: any){
		this.webkitAnimationDuration = value;
		return this;
	}
	

	set webkitAnimationFillMode(value){
		setCss(this.name, {
			webkitAnimationFillMode: value
		});
		this._updated();
	}
	get webkitAnimationFillMode(){
		return getCss(this.name, 'webkitAnimationFillMode');
	}
	setWebkitAnimationFillMode(value: any){
		this.webkitAnimationFillMode = value;
		return this;
	}
	

	set webkitAnimationIterationCount(value){
		setCss(this.name, {
			webkitAnimationIterationCount: value
		});
		this._updated();
	}
	get webkitAnimationIterationCount(){
		return getCss(this.name, 'webkitAnimationIterationCount');
	}
	setWebkitAnimationIterationCount(value: any){
		this.webkitAnimationIterationCount = value;
		return this;
	}
	

	set webkitAnimationName(value){
		setCss(this.name, {
			webkitAnimationName: value
		});
		this._updated();
	}
	get webkitAnimationName(){
		return getCss(this.name, 'webkitAnimationName');
	}
	setWebkitAnimationName(value: any){
		this.webkitAnimationName = value;
		return this;
	}
	

	set webkitAnimationPlayState(value){
		setCss(this.name, {
			webkitAnimationPlayState: value
		});
		this._updated();
	}
	get webkitAnimationPlayState(){
		return getCss(this.name, 'webkitAnimationPlayState');
	}
	setWebkitAnimationPlayState(value: any){
		this.webkitAnimationPlayState = value;
		return this;
	}
	

	set webkitAnimationTimingFunction(value){
		setCss(this.name, {
			webkitAnimationTimingFunction: value
		});
		this._updated();
	}
	get webkitAnimationTimingFunction(){
		return getCss(this.name, 'webkitAnimationTimingFunction');
	}
	setWebkitAnimationTimingFunction(value: any){
		this.webkitAnimationTimingFunction = value;
		return this;
	}
	

	set webkitAppRegion(value){
		setCss(this.name, {
			webkitAppRegion: value
		});
		this._updated();
	}
	get webkitAppRegion(){
		return getCss(this.name, 'webkitAppRegion');
	}
	setWebkitAppRegion(value: any){
		this.webkitAppRegion = value;
		return this;
	}
	

	set webkitAppearance(value){
		setCss(this.name, {
			webkitAppearance: value
		});
		this._updated();
	}
	get webkitAppearance(){
		return getCss(this.name, 'webkitAppearance');
	}
	setWebkitAppearance(value: any){
		this.webkitAppearance = value;
		return this;
	}
	

	set webkitBackfaceVisibility(value){
		setCss(this.name, {
			webkitBackfaceVisibility: value
		});
		this._updated();
	}
	get webkitBackfaceVisibility(){
		return getCss(this.name, 'webkitBackfaceVisibility');
	}
	setWebkitBackfaceVisibility(value: any){
		this.webkitBackfaceVisibility = value;
		return this;
	}
	

	set webkitBackgroundClip(value){
		setCss(this.name, {
			webkitBackgroundClip: value
		});
		this._updated();
	}
	get webkitBackgroundClip(){
		return getCss(this.name, 'webkitBackgroundClip');
	}
	setWebkitBackgroundClip(value: any){
		this.webkitBackgroundClip = value;
		return this;
	}
	

	set webkitBackgroundOrigin(value){
		setCss(this.name, {
			webkitBackgroundOrigin: value
		});
		this._updated();
	}
	get webkitBackgroundOrigin(){
		return getCss(this.name, 'webkitBackgroundOrigin');
	}
	setWebkitBackgroundOrigin(value: any){
		this.webkitBackgroundOrigin = value;
		return this;
	}
	

	set webkitBackgroundSize(value){
		setCss(this.name, {
			webkitBackgroundSize: value
		});
		this._updated();
	}
	get webkitBackgroundSize(){
		return getCss(this.name, 'webkitBackgroundSize');
	}
	setWebkitBackgroundSize(value: any){
		this.webkitBackgroundSize = value;
		return this;
	}
	

	set webkitBorderAfter(value){
		setCss(this.name, {
			webkitBorderAfter: value
		});
		this._updated();
	}
	get webkitBorderAfter(){
		return getCss(this.name, 'webkitBorderAfter');
	}
	setWebkitBorderAfter(value: any){
		this.webkitBorderAfter = value;
		return this;
	}
	

	set webkitBorderAfterColor(value){
		setCss(this.name, {
			webkitBorderAfterColor: value
		});
		this._updated();
	}
	get webkitBorderAfterColor(){
		return getCss(this.name, 'webkitBorderAfterColor');
	}
	setWebkitBorderAfterColor(value: any){
		this.webkitBorderAfterColor = value;
		return this;
	}
	

	set webkitBorderAfterStyle(value){
		setCss(this.name, {
			webkitBorderAfterStyle: value
		});
		this._updated();
	}
	get webkitBorderAfterStyle(){
		return getCss(this.name, 'webkitBorderAfterStyle');
	}
	setWebkitBorderAfterStyle(value: any){
		this.webkitBorderAfterStyle = value;
		return this;
	}
	

	set webkitBorderAfterWidth(value){
		setCss(this.name, {
			webkitBorderAfterWidth: value
		});
		this._updated();
	}
	get webkitBorderAfterWidth(){
		return getCss(this.name, 'webkitBorderAfterWidth');
	}
	setWebkitBorderAfterWidth(value: any){
		this.webkitBorderAfterWidth = value;
		return this;
	}
	

	set webkitBorderBefore(value){
		setCss(this.name, {
			webkitBorderBefore: value
		});
		this._updated();
	}
	get webkitBorderBefore(){
		return getCss(this.name, 'webkitBorderBefore');
	}
	setWebkitBorderBefore(value: any){
		this.webkitBorderBefore = value;
		return this;
	}
	

	set webkitBorderBeforeColor(value){
		setCss(this.name, {
			webkitBorderBeforeColor: value
		});
		this._updated();
	}
	get webkitBorderBeforeColor(){
		return getCss(this.name, 'webkitBorderBeforeColor');
	}
	setWebkitBorderBeforeColor(value: any){
		this.webkitBorderBeforeColor = value;
		return this;
	}
	

	set webkitBorderBeforeStyle(value){
		setCss(this.name, {
			webkitBorderBeforeStyle: value
		});
		this._updated();
	}
	get webkitBorderBeforeStyle(){
		return getCss(this.name, 'webkitBorderBeforeStyle');
	}
	setWebkitBorderBeforeStyle(value: any){
		this.webkitBorderBeforeStyle = value;
		return this;
	}
	

	set webkitBorderBeforeWidth(value){
		setCss(this.name, {
			webkitBorderBeforeWidth: value
		});
		this._updated();
	}
	get webkitBorderBeforeWidth(){
		return getCss(this.name, 'webkitBorderBeforeWidth');
	}
	setWebkitBorderBeforeWidth(value: any){
		this.webkitBorderBeforeWidth = value;
		return this;
	}
	

	set webkitBorderBottomLeftRadius(value){
		setCss(this.name, {
			webkitBorderBottomLeftRadius: value
		});
		this._updated();
	}
	get webkitBorderBottomLeftRadius(){
		return getCss(this.name, 'webkitBorderBottomLeftRadius');
	}
	setWebkitBorderBottomLeftRadius(value: any){
		this.webkitBorderBottomLeftRadius = value;
		return this;
	}
	

	set webkitBorderBottomRightRadius(value){
		setCss(this.name, {
			webkitBorderBottomRightRadius: value
		});
		this._updated();
	}
	get webkitBorderBottomRightRadius(){
		return getCss(this.name, 'webkitBorderBottomRightRadius');
	}
	setWebkitBorderBottomRightRadius(value: any){
		this.webkitBorderBottomRightRadius = value;
		return this;
	}
	

	set webkitBorderEnd(value){
		setCss(this.name, {
			webkitBorderEnd: value
		});
		this._updated();
	}
	get webkitBorderEnd(){
		return getCss(this.name, 'webkitBorderEnd');
	}
	setWebkitBorderEnd(value: any){
		this.webkitBorderEnd = value;
		return this;
	}
	

	set webkitBorderEndColor(value){
		setCss(this.name, {
			webkitBorderEndColor: value
		});
		this._updated();
	}
	get webkitBorderEndColor(){
		return getCss(this.name, 'webkitBorderEndColor');
	}
	setWebkitBorderEndColor(value: any){
		this.webkitBorderEndColor = value;
		return this;
	}
	

	set webkitBorderEndStyle(value){
		setCss(this.name, {
			webkitBorderEndStyle: value
		});
		this._updated();
	}
	get webkitBorderEndStyle(){
		return getCss(this.name, 'webkitBorderEndStyle');
	}
	setWebkitBorderEndStyle(value: any){
		this.webkitBorderEndStyle = value;
		return this;
	}
	

	set webkitBorderEndWidth(value){
		setCss(this.name, {
			webkitBorderEndWidth: value
		});
		this._updated();
	}
	get webkitBorderEndWidth(){
		return getCss(this.name, 'webkitBorderEndWidth');
	}
	setWebkitBorderEndWidth(value: any){
		this.webkitBorderEndWidth = value;
		return this;
	}
	

	set webkitBorderHorizontalSpacing(value){
		setCss(this.name, {
			webkitBorderHorizontalSpacing: value
		});
		this._updated();
	}
	get webkitBorderHorizontalSpacing(){
		return getCss(this.name, 'webkitBorderHorizontalSpacing');
	}
	setWebkitBorderHorizontalSpacing(value: any){
		this.webkitBorderHorizontalSpacing = value;
		return this;
	}
	

	set webkitBorderImage(value){
		setCss(this.name, {
			webkitBorderImage: value
		});
		this._updated();
	}
	get webkitBorderImage(){
		return getCss(this.name, 'webkitBorderImage');
	}
	setWebkitBorderImage(value: any){
		this.webkitBorderImage = value;
		return this;
	}
	

	set webkitBorderRadius(value){
		setCss(this.name, {
			webkitBorderRadius: value
		});
		this._updated();
	}
	get webkitBorderRadius(){
		return getCss(this.name, 'webkitBorderRadius');
	}
	setWebkitBorderRadius(value: any){
		this.webkitBorderRadius = value;
		return this;
	}
	

	set webkitBorderStart(value){
		setCss(this.name, {
			webkitBorderStart: value
		});
		this._updated();
	}
	get webkitBorderStart(){
		return getCss(this.name, 'webkitBorderStart');
	}
	setWebkitBorderStart(value: any){
		this.webkitBorderStart = value;
		return this;
	}
	

	set webkitBorderStartColor(value){
		setCss(this.name, {
			webkitBorderStartColor: value
		});
		this._updated();
	}
	get webkitBorderStartColor(){
		return getCss(this.name, 'webkitBorderStartColor');
	}
	setWebkitBorderStartColor(value: any){
		this.webkitBorderStartColor = value;
		return this;
	}
	

	set webkitBorderStartStyle(value){
		setCss(this.name, {
			webkitBorderStartStyle: value
		});
		this._updated();
	}
	get webkitBorderStartStyle(){
		return getCss(this.name, 'webkitBorderStartStyle');
	}
	setWebkitBorderStartStyle(value: any){
		this.webkitBorderStartStyle = value;
		return this;
	}
	

	set webkitBorderStartWidth(value){
		setCss(this.name, {
			webkitBorderStartWidth: value
		});
		this._updated();
	}
	get webkitBorderStartWidth(){
		return getCss(this.name, 'webkitBorderStartWidth');
	}
	setWebkitBorderStartWidth(value: any){
		this.webkitBorderStartWidth = value;
		return this;
	}
	

	set webkitBorderTopLeftRadius(value){
		setCss(this.name, {
			webkitBorderTopLeftRadius: value
		});
		this._updated();
	}
	get webkitBorderTopLeftRadius(){
		return getCss(this.name, 'webkitBorderTopLeftRadius');
	}
	setWebkitBorderTopLeftRadius(value: any){
		this.webkitBorderTopLeftRadius = value;
		return this;
	}
	

	set webkitBorderTopRightRadius(value){
		setCss(this.name, {
			webkitBorderTopRightRadius: value
		});
		this._updated();
	}
	get webkitBorderTopRightRadius(){
		return getCss(this.name, 'webkitBorderTopRightRadius');
	}
	setWebkitBorderTopRightRadius(value: any){
		this.webkitBorderTopRightRadius = value;
		return this;
	}
	

	set webkitBorderVerticalSpacing(value){
		setCss(this.name, {
			webkitBorderVerticalSpacing: value
		});
		this._updated();
	}
	get webkitBorderVerticalSpacing(){
		return getCss(this.name, 'webkitBorderVerticalSpacing');
	}
	setWebkitBorderVerticalSpacing(value: any){
		this.webkitBorderVerticalSpacing = value;
		return this;
	}
	

	set webkitBoxAlign(value){
		setCss(this.name, {
			webkitBoxAlign: value
		});
		this._updated();
	}
	get webkitBoxAlign(){
		return getCss(this.name, 'webkitBoxAlign');
	}
	setWebkitBoxAlign(value: any){
		this.webkitBoxAlign = value;
		return this;
	}
	

	set webkitBoxDecorationBreak(value){
		setCss(this.name, {
			webkitBoxDecorationBreak: value
		});
		this._updated();
	}
	get webkitBoxDecorationBreak(){
		return getCss(this.name, 'webkitBoxDecorationBreak');
	}
	setWebkitBoxDecorationBreak(value: any){
		this.webkitBoxDecorationBreak = value;
		return this;
	}
	

	set webkitBoxDirection(value){
		setCss(this.name, {
			webkitBoxDirection: value
		});
		this._updated();
	}
	get webkitBoxDirection(){
		return getCss(this.name, 'webkitBoxDirection');
	}
	setWebkitBoxDirection(value: any){
		this.webkitBoxDirection = value;
		return this;
	}
	

	set webkitBoxFlex(value){
		setCss(this.name, {
			webkitBoxFlex: value
		});
		this._updated();
	}
	get webkitBoxFlex(){
		return getCss(this.name, 'webkitBoxFlex');
	}
	setWebkitBoxFlex(value: any){
		this.webkitBoxFlex = value;
		return this;
	}
	

	set webkitBoxOrdinalGroup(value){
		setCss(this.name, {
			webkitBoxOrdinalGroup: value
		});
		this._updated();
	}
	get webkitBoxOrdinalGroup(){
		return getCss(this.name, 'webkitBoxOrdinalGroup');
	}
	setWebkitBoxOrdinalGroup(value: any){
		this.webkitBoxOrdinalGroup = value;
		return this;
	}
	

	set webkitBoxOrient(value){
		setCss(this.name, {
			webkitBoxOrient: value
		});
		this._updated();
	}
	get webkitBoxOrient(){
		return getCss(this.name, 'webkitBoxOrient');
	}
	setWebkitBoxOrient(value: any){
		this.webkitBoxOrient = value;
		return this;
	}
	

	set webkitBoxPack(value){
		setCss(this.name, {
			webkitBoxPack: value
		});
		this._updated();
	}
	get webkitBoxPack(){
		return getCss(this.name, 'webkitBoxPack');
	}
	setWebkitBoxPack(value: any){
		this.webkitBoxPack = value;
		return this;
	}
	

	set webkitBoxReflect(value){
		setCss(this.name, {
			webkitBoxReflect: value
		});
		this._updated();
	}
	get webkitBoxReflect(){
		return getCss(this.name, 'webkitBoxReflect');
	}
	setWebkitBoxReflect(value: any){
		this.webkitBoxReflect = value;
		return this;
	}
	

	set webkitBoxShadow(value){
		setCss(this.name, {
			webkitBoxShadow: value
		});
		this._updated();
	}
	get webkitBoxShadow(){
		return getCss(this.name, 'webkitBoxShadow');
	}
	setWebkitBoxShadow(value: any){
		this.webkitBoxShadow = value;
		return this;
	}
	

	set webkitBoxSizing(value){
		setCss(this.name, {
			webkitBoxSizing: value
		});
		this._updated();
	}
	get webkitBoxSizing(){
		return getCss(this.name, 'webkitBoxSizing');
	}
	setWebkitBoxSizing(value: any){
		this.webkitBoxSizing = value;
		return this;
	}
	

	set webkitClipPath(value){
		setCss(this.name, {
			webkitClipPath: value
		});
		this._updated();
	}
	get webkitClipPath(){
		return getCss(this.name, 'webkitClipPath');
	}
	setWebkitClipPath(value: any){
		this.webkitClipPath = value;
		return this;
	}
	

	set webkitColumnBreakAfter(value){
		setCss(this.name, {
			webkitColumnBreakAfter: value
		});
		this._updated();
	}
	get webkitColumnBreakAfter(){
		return getCss(this.name, 'webkitColumnBreakAfter');
	}
	setWebkitColumnBreakAfter(value: any){
		this.webkitColumnBreakAfter = value;
		return this;
	}
	

	set webkitColumnBreakBefore(value){
		setCss(this.name, {
			webkitColumnBreakBefore: value
		});
		this._updated();
	}
	get webkitColumnBreakBefore(){
		return getCss(this.name, 'webkitColumnBreakBefore');
	}
	setWebkitColumnBreakBefore(value: any){
		this.webkitColumnBreakBefore = value;
		return this;
	}
	

	set webkitColumnBreakInside(value){
		setCss(this.name, {
			webkitColumnBreakInside: value
		});
		this._updated();
	}
	get webkitColumnBreakInside(){
		return getCss(this.name, 'webkitColumnBreakInside');
	}
	setWebkitColumnBreakInside(value: any){
		this.webkitColumnBreakInside = value;
		return this;
	}
	

	set webkitColumnCount(value){
		setCss(this.name, {
			webkitColumnCount: value
		});
		this._updated();
	}
	get webkitColumnCount(){
		return getCss(this.name, 'webkitColumnCount');
	}
	setWebkitColumnCount(value: any){
		this.webkitColumnCount = value;
		return this;
	}
	

	set webkitColumnGap(value){
		setCss(this.name, {
			webkitColumnGap: value
		});
		this._updated();
	}
	get webkitColumnGap(){
		return getCss(this.name, 'webkitColumnGap');
	}
	setWebkitColumnGap(value: any){
		this.webkitColumnGap = value;
		return this;
	}
	

	set webkitColumnRule(value){
		setCss(this.name, {
			webkitColumnRule: value
		});
		this._updated();
	}
	get webkitColumnRule(){
		return getCss(this.name, 'webkitColumnRule');
	}
	setWebkitColumnRule(value: any){
		this.webkitColumnRule = value;
		return this;
	}
	

	set webkitColumnRuleColor(value){
		setCss(this.name, {
			webkitColumnRuleColor: value
		});
		this._updated();
	}
	get webkitColumnRuleColor(){
		return getCss(this.name, 'webkitColumnRuleColor');
	}
	setWebkitColumnRuleColor(value: any){
		this.webkitColumnRuleColor = value;
		return this;
	}
	

	set webkitColumnRuleStyle(value){
		setCss(this.name, {
			webkitColumnRuleStyle: value
		});
		this._updated();
	}
	get webkitColumnRuleStyle(){
		return getCss(this.name, 'webkitColumnRuleStyle');
	}
	setWebkitColumnRuleStyle(value: any){
		this.webkitColumnRuleStyle = value;
		return this;
	}
	

	set webkitColumnRuleWidth(value){
		setCss(this.name, {
			webkitColumnRuleWidth: value
		});
		this._updated();
	}
	get webkitColumnRuleWidth(){
		return getCss(this.name, 'webkitColumnRuleWidth');
	}
	setWebkitColumnRuleWidth(value: any){
		this.webkitColumnRuleWidth = value;
		return this;
	}
	

	set webkitColumnSpan(value){
		setCss(this.name, {
			webkitColumnSpan: value
		});
		this._updated();
	}
	get webkitColumnSpan(){
		return getCss(this.name, 'webkitColumnSpan');
	}
	setWebkitColumnSpan(value: any){
		this.webkitColumnSpan = value;
		return this;
	}
	

	set webkitColumnWidth(value){
		setCss(this.name, {
			webkitColumnWidth: value
		});
		this._updated();
	}
	get webkitColumnWidth(){
		return getCss(this.name, 'webkitColumnWidth');
	}
	setWebkitColumnWidth(value: any){
		this.webkitColumnWidth = value;
		return this;
	}
	

	set webkitColumns(value){
		setCss(this.name, {
			webkitColumns: value
		});
		this._updated();
	}
	get webkitColumns(){
		return getCss(this.name, 'webkitColumns');
	}
	setWebkitColumns(value: any){
		this.webkitColumns = value;
		return this;
	}
	

	set webkitFilter(value){
		setCss(this.name, {
			webkitFilter: value
		});
		this._updated();
	}
	get webkitFilter(){
		return getCss(this.name, 'webkitFilter');
	}
	setWebkitFilter(value: any){
		this.webkitFilter = value;
		return this;
	}
	

	set webkitFlex(value){
		setCss(this.name, {
			webkitFlex: value
		});
		this._updated();
	}
	get webkitFlex(){
		return getCss(this.name, 'webkitFlex');
	}
	setWebkitFlex(value: any){
		this.webkitFlex = value;
		return this;
	}
	

	set webkitFlexBasis(value){
		setCss(this.name, {
			webkitFlexBasis: value
		});
		this._updated();
	}
	get webkitFlexBasis(){
		return getCss(this.name, 'webkitFlexBasis');
	}
	setWebkitFlexBasis(value: any){
		this.webkitFlexBasis = value;
		return this;
	}
	

	set webkitFlexDirection(value){
		setCss(this.name, {
			webkitFlexDirection: value
		});
		this._updated();
	}
	get webkitFlexDirection(){
		return getCss(this.name, 'webkitFlexDirection');
	}
	setWebkitFlexDirection(value: any){
		this.webkitFlexDirection = value;
		return this;
	}
	

	set webkitFlexFlow(value){
		setCss(this.name, {
			webkitFlexFlow: value
		});
		this._updated();
	}
	get webkitFlexFlow(){
		return getCss(this.name, 'webkitFlexFlow');
	}
	setWebkitFlexFlow(value: any){
		this.webkitFlexFlow = value;
		return this;
	}
	

	set webkitFlexGrow(value){
		setCss(this.name, {
			webkitFlexGrow: value
		});
		this._updated();
	}
	get webkitFlexGrow(){
		return getCss(this.name, 'webkitFlexGrow');
	}
	setWebkitFlexGrow(value: any){
		this.webkitFlexGrow = value;
		return this;
	}
	

	set webkitFlexShrink(value){
		setCss(this.name, {
			webkitFlexShrink: value
		});
		this._updated();
	}
	get webkitFlexShrink(){
		return getCss(this.name, 'webkitFlexShrink');
	}
	setWebkitFlexShrink(value: any){
		this.webkitFlexShrink = value;
		return this;
	}
	

	set webkitFlexWrap(value){
		setCss(this.name, {
			webkitFlexWrap: value
		});
		this._updated();
	}
	get webkitFlexWrap(){
		return getCss(this.name, 'webkitFlexWrap');
	}
	setWebkitFlexWrap(value: any){
		this.webkitFlexWrap = value;
		return this;
	}
	

	set webkitFontFeatureSettings(value){
		setCss(this.name, {
			webkitFontFeatureSettings: value
		});
		this._updated();
	}
	get webkitFontFeatureSettings(){
		return getCss(this.name, 'webkitFontFeatureSettings');
	}
	setWebkitFontFeatureSettings(value: any){
		this.webkitFontFeatureSettings = value;
		return this;
	}
	

	set webkitFontSmoothing(value){
		setCss(this.name, {
			webkitFontSmoothing: value
		});
		this._updated();
	}
	get webkitFontSmoothing(){
		return getCss(this.name, 'webkitFontSmoothing');
	}
	setWebkitFontSmoothing(value: any){
		this.webkitFontSmoothing = value;
		return this;
	}
	

	set webkitHyphenateCharacter(value){
		setCss(this.name, {
			webkitHyphenateCharacter: value
		});
		this._updated();
	}
	get webkitHyphenateCharacter(){
		return getCss(this.name, 'webkitHyphenateCharacter');
	}
	setWebkitHyphenateCharacter(value: any){
		this.webkitHyphenateCharacter = value;
		return this;
	}
	

	set webkitJustifyContent(value){
		setCss(this.name, {
			webkitJustifyContent: value
		});
		this._updated();
	}
	get webkitJustifyContent(){
		return getCss(this.name, 'webkitJustifyContent');
	}
	setWebkitJustifyContent(value: any){
		this.webkitJustifyContent = value;
		return this;
	}
	

	set webkitLineBreak(value){
		setCss(this.name, {
			webkitLineBreak: value
		});
		this._updated();
	}
	get webkitLineBreak(){
		return getCss(this.name, 'webkitLineBreak');
	}
	setWebkitLineBreak(value: any){
		this.webkitLineBreak = value;
		return this;
	}
	

	set webkitLineClamp(value){
		setCss(this.name, {
			webkitLineClamp: value
		});
		this._updated();
	}
	get webkitLineClamp(){
		return getCss(this.name, 'webkitLineClamp');
	}
	setWebkitLineClamp(value: any){
		this.webkitLineClamp = value;
		return this;
	}
	

	set webkitLocale(value){
		setCss(this.name, {
			webkitLocale: value
		});
		this._updated();
	}
	get webkitLocale(){
		return getCss(this.name, 'webkitLocale');
	}
	setWebkitLocale(value: any){
		this.webkitLocale = value;
		return this;
	}
	

	set webkitLogicalHeight(value){
		setCss(this.name, {
			webkitLogicalHeight: value
		});
		this._updated();
	}
	get webkitLogicalHeight(){
		return getCss(this.name, 'webkitLogicalHeight');
	}
	setWebkitLogicalHeight(value: any){
		this.webkitLogicalHeight = value;
		return this;
	}
	

	set webkitLogicalWidth(value){
		setCss(this.name, {
			webkitLogicalWidth: value
		});
		this._updated();
	}
	get webkitLogicalWidth(){
		return getCss(this.name, 'webkitLogicalWidth');
	}
	setWebkitLogicalWidth(value: any){
		this.webkitLogicalWidth = value;
		return this;
	}
	

	set webkitMarginAfter(value){
		setCss(this.name, {
			webkitMarginAfter: value
		});
		this._updated();
	}
	get webkitMarginAfter(){
		return getCss(this.name, 'webkitMarginAfter');
	}
	setWebkitMarginAfter(value: any){
		this.webkitMarginAfter = value;
		return this;
	}
	

	set webkitMarginBefore(value){
		setCss(this.name, {
			webkitMarginBefore: value
		});
		this._updated();
	}
	get webkitMarginBefore(){
		return getCss(this.name, 'webkitMarginBefore');
	}
	setWebkitMarginBefore(value: any){
		this.webkitMarginBefore = value;
		return this;
	}
	

	set webkitMarginEnd(value){
		setCss(this.name, {
			webkitMarginEnd: value
		});
		this._updated();
	}
	get webkitMarginEnd(){
		return getCss(this.name, 'webkitMarginEnd');
	}
	setWebkitMarginEnd(value: any){
		this.webkitMarginEnd = value;
		return this;
	}
	

	set webkitMarginStart(value){
		setCss(this.name, {
			webkitMarginStart: value
		});
		this._updated();
	}
	get webkitMarginStart(){
		return getCss(this.name, 'webkitMarginStart');
	}
	setWebkitMarginStart(value: any){
		this.webkitMarginStart = value;
		return this;
	}
	

	set webkitMask(value){
		setCss(this.name, {
			webkitMask: value
		});
		this._updated();
	}
	get webkitMask(){
		return getCss(this.name, 'webkitMask');
	}
	setWebkitMask(value: any){
		this.webkitMask = value;
		return this;
	}
	

	set webkitMaskBoxImage(value){
		setCss(this.name, {
			webkitMaskBoxImage: value
		});
		this._updated();
	}
	get webkitMaskBoxImage(){
		return getCss(this.name, 'webkitMaskBoxImage');
	}
	setWebkitMaskBoxImage(value: any){
		this.webkitMaskBoxImage = value;
		return this;
	}
	

	set webkitMaskBoxImageOutset(value){
		setCss(this.name, {
			webkitMaskBoxImageOutset: value
		});
		this._updated();
	}
	get webkitMaskBoxImageOutset(){
		return getCss(this.name, 'webkitMaskBoxImageOutset');
	}
	setWebkitMaskBoxImageOutset(value: any){
		this.webkitMaskBoxImageOutset = value;
		return this;
	}
	

	set webkitMaskBoxImageRepeat(value){
		setCss(this.name, {
			webkitMaskBoxImageRepeat: value
		});
		this._updated();
	}
	get webkitMaskBoxImageRepeat(){
		return getCss(this.name, 'webkitMaskBoxImageRepeat');
	}
	setWebkitMaskBoxImageRepeat(value: any){
		this.webkitMaskBoxImageRepeat = value;
		return this;
	}
	

	set webkitMaskBoxImageSlice(value){
		setCss(this.name, {
			webkitMaskBoxImageSlice: value
		});
		this._updated();
	}
	get webkitMaskBoxImageSlice(){
		return getCss(this.name, 'webkitMaskBoxImageSlice');
	}
	setWebkitMaskBoxImageSlice(value: any){
		this.webkitMaskBoxImageSlice = value;
		return this;
	}
	

	set webkitMaskBoxImageSource(value){
		setCss(this.name, {
			webkitMaskBoxImageSource: value
		});
		this._updated();
	}
	get webkitMaskBoxImageSource(){
		return getCss(this.name, 'webkitMaskBoxImageSource');
	}
	setWebkitMaskBoxImageSource(value: any){
		this.webkitMaskBoxImageSource = value;
		return this;
	}
	

	set webkitMaskBoxImageWidth(value){
		setCss(this.name, {
			webkitMaskBoxImageWidth: value
		});
		this._updated();
	}
	get webkitMaskBoxImageWidth(){
		return getCss(this.name, 'webkitMaskBoxImageWidth');
	}
	setWebkitMaskBoxImageWidth(value: any){
		this.webkitMaskBoxImageWidth = value;
		return this;
	}
	

	set webkitMaskClip(value){
		setCss(this.name, {
			webkitMaskClip: value
		});
		this._updated();
	}
	get webkitMaskClip(){
		return getCss(this.name, 'webkitMaskClip');
	}
	setWebkitMaskClip(value: any){
		this.webkitMaskClip = value;
		return this;
	}
	

	set webkitMaskComposite(value){
		setCss(this.name, {
			webkitMaskComposite: value
		});
		this._updated();
	}
	get webkitMaskComposite(){
		return getCss(this.name, 'webkitMaskComposite');
	}
	setWebkitMaskComposite(value: any){
		this.webkitMaskComposite = value;
		return this;
	}
	

	set webkitMaskImage(value){
		setCss(this.name, {
			webkitMaskImage: value
		});
		this._updated();
	}
	get webkitMaskImage(){
		return getCss(this.name, 'webkitMaskImage');
	}
	setWebkitMaskImage(value: any){
		this.webkitMaskImage = value;
		return this;
	}
	

	set webkitMaskOrigin(value){
		setCss(this.name, {
			webkitMaskOrigin: value
		});
		this._updated();
	}
	get webkitMaskOrigin(){
		return getCss(this.name, 'webkitMaskOrigin');
	}
	setWebkitMaskOrigin(value: any){
		this.webkitMaskOrigin = value;
		return this;
	}
	

	set webkitMaskPosition(value){
		setCss(this.name, {
			webkitMaskPosition: value
		});
		this._updated();
	}
	get webkitMaskPosition(){
		return getCss(this.name, 'webkitMaskPosition');
	}
	setWebkitMaskPosition(value: any){
		this.webkitMaskPosition = value;
		return this;
	}
	

	set webkitMaskPositionX(value){
		setCss(this.name, {
			webkitMaskPositionX: value
		});
		this._updated();
	}
	get webkitMaskPositionX(){
		return getCss(this.name, 'webkitMaskPositionX');
	}
	setWebkitMaskPositionX(value: any){
		this.webkitMaskPositionX = value;
		return this;
	}
	

	set webkitMaskPositionY(value){
		setCss(this.name, {
			webkitMaskPositionY: value
		});
		this._updated();
	}
	get webkitMaskPositionY(){
		return getCss(this.name, 'webkitMaskPositionY');
	}
	setWebkitMaskPositionY(value: any){
		this.webkitMaskPositionY = value;
		return this;
	}
	

	set webkitMaskRepeat(value){
		setCss(this.name, {
			webkitMaskRepeat: value
		});
		this._updated();
	}
	get webkitMaskRepeat(){
		return getCss(this.name, 'webkitMaskRepeat');
	}
	setWebkitMaskRepeat(value: any){
		this.webkitMaskRepeat = value;
		return this;
	}
	

	set webkitMaskRepeatX(value){
		setCss(this.name, {
			webkitMaskRepeatX: value
		});
		this._updated();
	}
	get webkitMaskRepeatX(){
		return getCss(this.name, 'webkitMaskRepeatX');
	}
	setWebkitMaskRepeatX(value: any){
		this.webkitMaskRepeatX = value;
		return this;
	}
	

	set webkitMaskRepeatY(value){
		setCss(this.name, {
			webkitMaskRepeatY: value
		});
		this._updated();
	}
	get webkitMaskRepeatY(){
		return getCss(this.name, 'webkitMaskRepeatY');
	}
	setWebkitMaskRepeatY(value: any){
		this.webkitMaskRepeatY = value;
		return this;
	}
	

	set webkitMaskSize(value){
		setCss(this.name, {
			webkitMaskSize: value
		});
		this._updated();
	}
	get webkitMaskSize(){
		return getCss(this.name, 'webkitMaskSize');
	}
	setWebkitMaskSize(value: any){
		this.webkitMaskSize = value;
		return this;
	}
	

	set webkitMaxLogicalHeight(value){
		setCss(this.name, {
			webkitMaxLogicalHeight: value
		});
		this._updated();
	}
	get webkitMaxLogicalHeight(){
		return getCss(this.name, 'webkitMaxLogicalHeight');
	}
	setWebkitMaxLogicalHeight(value: any){
		this.webkitMaxLogicalHeight = value;
		return this;
	}
	

	set webkitMaxLogicalWidth(value){
		setCss(this.name, {
			webkitMaxLogicalWidth: value
		});
		this._updated();
	}
	get webkitMaxLogicalWidth(){
		return getCss(this.name, 'webkitMaxLogicalWidth');
	}
	setWebkitMaxLogicalWidth(value: any){
		this.webkitMaxLogicalWidth = value;
		return this;
	}
	

	set webkitMinLogicalHeight(value){
		setCss(this.name, {
			webkitMinLogicalHeight: value
		});
		this._updated();
	}
	get webkitMinLogicalHeight(){
		return getCss(this.name, 'webkitMinLogicalHeight');
	}
	setWebkitMinLogicalHeight(value: any){
		this.webkitMinLogicalHeight = value;
		return this;
	}
	

	set webkitMinLogicalWidth(value){
		setCss(this.name, {
			webkitMinLogicalWidth: value
		});
		this._updated();
	}
	get webkitMinLogicalWidth(){
		return getCss(this.name, 'webkitMinLogicalWidth');
	}
	setWebkitMinLogicalWidth(value: any){
		this.webkitMinLogicalWidth = value;
		return this;
	}
	

	set webkitOpacity(value){
		setCss(this.name, {
			webkitOpacity: value
		});
		this._updated();
	}
	get webkitOpacity(){
		return getCss(this.name, 'webkitOpacity');
	}
	setWebkitOpacity(value: any){
		this.webkitOpacity = value;
		return this;
	}
	

	set webkitOrder(value){
		setCss(this.name, {
			webkitOrder: value
		});
		this._updated();
	}
	get webkitOrder(){
		return getCss(this.name, 'webkitOrder');
	}
	setWebkitOrder(value: any){
		this.webkitOrder = value;
		return this;
	}
	

	set webkitPaddingAfter(value){
		setCss(this.name, {
			webkitPaddingAfter: value
		});
		this._updated();
	}
	get webkitPaddingAfter(){
		return getCss(this.name, 'webkitPaddingAfter');
	}
	setWebkitPaddingAfter(value: any){
		this.webkitPaddingAfter = value;
		return this;
	}
	

	set webkitPaddingBefore(value){
		setCss(this.name, {
			webkitPaddingBefore: value
		});
		this._updated();
	}
	get webkitPaddingBefore(){
		return getCss(this.name, 'webkitPaddingBefore');
	}
	setWebkitPaddingBefore(value: any){
		this.webkitPaddingBefore = value;
		return this;
	}
	

	set webkitPaddingEnd(value){
		setCss(this.name, {
			webkitPaddingEnd: value
		});
		this._updated();
	}
	get webkitPaddingEnd(){
		return getCss(this.name, 'webkitPaddingEnd');
	}
	setWebkitPaddingEnd(value: any){
		this.webkitPaddingEnd = value;
		return this;
	}
	

	set webkitPaddingStart(value){
		setCss(this.name, {
			webkitPaddingStart: value
		});
		this._updated();
	}
	get webkitPaddingStart(){
		return getCss(this.name, 'webkitPaddingStart');
	}
	setWebkitPaddingStart(value: any){
		this.webkitPaddingStart = value;
		return this;
	}
	

	set webkitPerspective(value){
		setCss(this.name, {
			webkitPerspective: value
		});
		this._updated();
	}
	get webkitPerspective(){
		return getCss(this.name, 'webkitPerspective');
	}
	setWebkitPerspective(value: any){
		this.webkitPerspective = value;
		return this;
	}
	

	set webkitPerspectiveOrigin(value){
		setCss(this.name, {
			webkitPerspectiveOrigin: value
		});
		this._updated();
	}
	get webkitPerspectiveOrigin(){
		return getCss(this.name, 'webkitPerspectiveOrigin');
	}
	setWebkitPerspectiveOrigin(value: any){
		this.webkitPerspectiveOrigin = value;
		return this;
	}
	

	set webkitPerspectiveOriginX(value){
		setCss(this.name, {
			webkitPerspectiveOriginX: value
		});
		this._updated();
	}
	get webkitPerspectiveOriginX(){
		return getCss(this.name, 'webkitPerspectiveOriginX');
	}
	setWebkitPerspectiveOriginX(value: any){
		this.webkitPerspectiveOriginX = value;
		return this;
	}
	

	set webkitPerspectiveOriginY(value){
		setCss(this.name, {
			webkitPerspectiveOriginY: value
		});
		this._updated();
	}
	get webkitPerspectiveOriginY(){
		return getCss(this.name, 'webkitPerspectiveOriginY');
	}
	setWebkitPerspectiveOriginY(value: any){
		this.webkitPerspectiveOriginY = value;
		return this;
	}
	

	set webkitPrintColorAdjust(value){
		setCss(this.name, {
			webkitPrintColorAdjust: value
		});
		this._updated();
	}
	get webkitPrintColorAdjust(){
		return getCss(this.name, 'webkitPrintColorAdjust');
	}
	setWebkitPrintColorAdjust(value: any){
		this.webkitPrintColorAdjust = value;
		return this;
	}
	

	set webkitRtlOrdering(value){
		setCss(this.name, {
			webkitRtlOrdering: value
		});
		this._updated();
	}
	get webkitRtlOrdering(){
		return getCss(this.name, 'webkitRtlOrdering');
	}
	setWebkitRtlOrdering(value: any){
		this.webkitRtlOrdering = value;
		return this;
	}
	

	set webkitRubyPosition(value){
		setCss(this.name, {
			webkitRubyPosition: value
		});
		this._updated();
	}
	get webkitRubyPosition(){
		return getCss(this.name, 'webkitRubyPosition');
	}
	setWebkitRubyPosition(value: any){
		this.webkitRubyPosition = value;
		return this;
	}
	

	set webkitShapeImageThreshold(value){
		setCss(this.name, {
			webkitShapeImageThreshold: value
		});
		this._updated();
	}
	get webkitShapeImageThreshold(){
		return getCss(this.name, 'webkitShapeImageThreshold');
	}
	setWebkitShapeImageThreshold(value: any){
		this.webkitShapeImageThreshold = value;
		return this;
	}
	

	set webkitShapeMargin(value){
		setCss(this.name, {
			webkitShapeMargin: value
		});
		this._updated();
	}
	get webkitShapeMargin(){
		return getCss(this.name, 'webkitShapeMargin');
	}
	setWebkitShapeMargin(value: any){
		this.webkitShapeMargin = value;
		return this;
	}
	

	set webkitShapeOutside(value){
		setCss(this.name, {
			webkitShapeOutside: value
		});
		this._updated();
	}
	get webkitShapeOutside(){
		return getCss(this.name, 'webkitShapeOutside');
	}
	setWebkitShapeOutside(value: any){
		this.webkitShapeOutside = value;
		return this;
	}
	

	set webkitTapHighlightColor(value){
		setCss(this.name, {
			webkitTapHighlightColor: value
		});
		this._updated();
	}
	get webkitTapHighlightColor(){
		return getCss(this.name, 'webkitTapHighlightColor');
	}
	setWebkitTapHighlightColor(value: any){
		this.webkitTapHighlightColor = value;
		return this;
	}
	

	set webkitTextCombine(value){
		setCss(this.name, {
			webkitTextCombine: value
		});
		this._updated();
	}
	get webkitTextCombine(){
		return getCss(this.name, 'webkitTextCombine');
	}
	setWebkitTextCombine(value: any){
		this.webkitTextCombine = value;
		return this;
	}
	

	set webkitTextDecorationsInEffect(value){
		setCss(this.name, {
			webkitTextDecorationsInEffect: value
		});
		this._updated();
	}
	get webkitTextDecorationsInEffect(){
		return getCss(this.name, 'webkitTextDecorationsInEffect');
	}
	setWebkitTextDecorationsInEffect(value: any){
		this.webkitTextDecorationsInEffect = value;
		return this;
	}
	

	set webkitTextEmphasis(value){
		setCss(this.name, {
			webkitTextEmphasis: value
		});
		this._updated();
	}
	get webkitTextEmphasis(){
		return getCss(this.name, 'webkitTextEmphasis');
	}
	setWebkitTextEmphasis(value: any){
		this.webkitTextEmphasis = value;
		return this;
	}
	

	set webkitTextEmphasisColor(value){
		setCss(this.name, {
			webkitTextEmphasisColor: value
		});
		this._updated();
	}
	get webkitTextEmphasisColor(){
		return getCss(this.name, 'webkitTextEmphasisColor');
	}
	setWebkitTextEmphasisColor(value: any){
		this.webkitTextEmphasisColor = value;
		return this;
	}
	

	set webkitTextEmphasisPosition(value){
		setCss(this.name, {
			webkitTextEmphasisPosition: value
		});
		this._updated();
	}
	get webkitTextEmphasisPosition(){
		return getCss(this.name, 'webkitTextEmphasisPosition');
	}
	setWebkitTextEmphasisPosition(value: any){
		this.webkitTextEmphasisPosition = value;
		return this;
	}
	

	set webkitTextEmphasisStyle(value){
		setCss(this.name, {
			webkitTextEmphasisStyle: value
		});
		this._updated();
	}
	get webkitTextEmphasisStyle(){
		return getCss(this.name, 'webkitTextEmphasisStyle');
	}
	setWebkitTextEmphasisStyle(value: any){
		this.webkitTextEmphasisStyle = value;
		return this;
	}
	

	set webkitTextFillColor(value){
		setCss(this.name, {
			webkitTextFillColor: value
		});
		this._updated();
	}
	get webkitTextFillColor(){
		return getCss(this.name, 'webkitTextFillColor');
	}
	setWebkitTextFillColor(value: any){
		this.webkitTextFillColor = value;
		return this;
	}
	

	set webkitTextOrientation(value){
		setCss(this.name, {
			webkitTextOrientation: value
		});
		this._updated();
	}
	get webkitTextOrientation(){
		return getCss(this.name, 'webkitTextOrientation');
	}
	setWebkitTextOrientation(value: any){
		this.webkitTextOrientation = value;
		return this;
	}
	

	set webkitTextSecurity(value){
		setCss(this.name, {
			webkitTextSecurity: value
		});
		this._updated();
	}
	get webkitTextSecurity(){
		return getCss(this.name, 'webkitTextSecurity');
	}
	setWebkitTextSecurity(value: any){
		this.webkitTextSecurity = value;
		return this;
	}
	

	set webkitTextSizeAdjust(value){
		setCss(this.name, {
			webkitTextSizeAdjust: value
		});
		this._updated();
	}
	get webkitTextSizeAdjust(){
		return getCss(this.name, 'webkitTextSizeAdjust');
	}
	setWebkitTextSizeAdjust(value: any){
		this.webkitTextSizeAdjust = value;
		return this;
	}
	

	set webkitTextStroke(value){
		setCss(this.name, {
			webkitTextStroke: value
		});
		this._updated();
	}
	get webkitTextStroke(){
		return getCss(this.name, 'webkitTextStroke');
	}
	setWebkitTextStroke(value: any){
		this.webkitTextStroke = value;
		return this;
	}
	

	set webkitTextStrokeColor(value){
		setCss(this.name, {
			webkitTextStrokeColor: value
		});
		this._updated();
	}
	get webkitTextStrokeColor(){
		return getCss(this.name, 'webkitTextStrokeColor');
	}
	setWebkitTextStrokeColor(value: any){
		this.webkitTextStrokeColor = value;
		return this;
	}
	

	set webkitTextStrokeWidth(value){
		setCss(this.name, {
			webkitTextStrokeWidth: value
		});
		this._updated();
	}
	get webkitTextStrokeWidth(){
		return getCss(this.name, 'webkitTextStrokeWidth');
	}
	setWebkitTextStrokeWidth(value: any){
		this.webkitTextStrokeWidth = value;
		return this;
	}
	

	set webkitTransform(value){
		setCss(this.name, {
			webkitTransform: value
		});
		this._updated();
	}
	get webkitTransform(){
		return getCss(this.name, 'webkitTransform');
	}
	setWebkitTransform(value: any){
		this.webkitTransform = value;
		return this;
	}
	

	set webkitTransformOrigin(value){
		setCss(this.name, {
			webkitTransformOrigin: value
		});
		this._updated();
	}
	get webkitTransformOrigin(){
		return getCss(this.name, 'webkitTransformOrigin');
	}
	setWebkitTransformOrigin(value: any){
		this.webkitTransformOrigin = value;
		return this;
	}
	

	set webkitTransformOriginX(value){
		setCss(this.name, {
			webkitTransformOriginX: value
		});
		this._updated();
	}
	get webkitTransformOriginX(){
		return getCss(this.name, 'webkitTransformOriginX');
	}
	setWebkitTransformOriginX(value: any){
		this.webkitTransformOriginX = value;
		return this;
	}
	

	set webkitTransformOriginY(value){
		setCss(this.name, {
			webkitTransformOriginY: value
		});
		this._updated();
	}
	get webkitTransformOriginY(){
		return getCss(this.name, 'webkitTransformOriginY');
	}
	setWebkitTransformOriginY(value: any){
		this.webkitTransformOriginY = value;
		return this;
	}
	

	set webkitTransformOriginZ(value){
		setCss(this.name, {
			webkitTransformOriginZ: value
		});
		this._updated();
	}
	get webkitTransformOriginZ(){
		return getCss(this.name, 'webkitTransformOriginZ');
	}
	setWebkitTransformOriginZ(value: any){
		this.webkitTransformOriginZ = value;
		return this;
	}
	

	set webkitTransformStyle(value){
		setCss(this.name, {
			webkitTransformStyle: value
		});
		this._updated();
	}
	get webkitTransformStyle(){
		return getCss(this.name, 'webkitTransformStyle');
	}
	setWebkitTransformStyle(value: any){
		this.webkitTransformStyle = value;
		return this;
	}
	

	set webkitTransition(value){
		setCss(this.name, {
			webkitTransition: value
		});
		this._updated();
	}
	get webkitTransition(){
		return getCss(this.name, 'webkitTransition');
	}
	setWebkitTransition(value: any){
		this.webkitTransition = value;
		return this;
	}
	

	set webkitTransitionDelay(value){
		setCss(this.name, {
			webkitTransitionDelay: value
		});
		this._updated();
	}
	get webkitTransitionDelay(){
		return getCss(this.name, 'webkitTransitionDelay');
	}
	setWebkitTransitionDelay(value: any){
		this.webkitTransitionDelay = value;
		return this;
	}
	

	set webkitTransitionDuration(value){
		setCss(this.name, {
			webkitTransitionDuration: value
		});
		this._updated();
	}
	get webkitTransitionDuration(){
		return getCss(this.name, 'webkitTransitionDuration');
	}
	setWebkitTransitionDuration(value: any){
		this.webkitTransitionDuration = value;
		return this;
	}
	

	set webkitTransitionProperty(value){
		setCss(this.name, {
			webkitTransitionProperty: value
		});
		this._updated();
	}
	get webkitTransitionProperty(){
		return getCss(this.name, 'webkitTransitionProperty');
	}
	setWebkitTransitionProperty(value: any){
		this.webkitTransitionProperty = value;
		return this;
	}
	

	set webkitTransitionTimingFunction(value){
		setCss(this.name, {
			webkitTransitionTimingFunction: value
		});
		this._updated();
	}
	get webkitTransitionTimingFunction(){
		return getCss(this.name, 'webkitTransitionTimingFunction');
	}
	setWebkitTransitionTimingFunction(value: any){
		this.webkitTransitionTimingFunction = value;
		return this;
	}
	

	set webkitUserDrag(value){
		setCss(this.name, {
			webkitUserDrag: value
		});
		this._updated();
	}
	get webkitUserDrag(){
		return getCss(this.name, 'webkitUserDrag');
	}
	setWebkitUserDrag(value: any){
		this.webkitUserDrag = value;
		return this;
	}
	

	set webkitUserModify(value){
		setCss(this.name, {
			webkitUserModify: value
		});
		this._updated();
	}
	get webkitUserModify(){
		return getCss(this.name, 'webkitUserModify');
	}
	setWebkitUserModify(value: any){
		this.webkitUserModify = value;
		return this;
	}
	

	set webkitUserSelect(value){
		setCss(this.name, {
			webkitUserSelect: value
		});
		this._updated();
	}
	get webkitUserSelect(){
		return getCss(this.name, 'webkitUserSelect');
	}
	setWebkitUserSelect(value: any){
		this.webkitUserSelect = value;
		return this;
	}
	

	set webkitWritingMode(value){
		setCss(this.name, {
			webkitWritingMode: value
		});
		this._updated();
	}
	get webkitWritingMode(){
		return getCss(this.name, 'webkitWritingMode');
	}
	setWebkitWritingMode(value: any){
		this.webkitWritingMode = value;
		return this;
	}
	

	set whiteSpace(value){
		setCss(this.name, {
			whiteSpace: value
		});
		this._updated();
	}
	get whiteSpace(){
		return getCss(this.name, 'whiteSpace');
	}
	setWhiteSpace(value: any){
		this.whiteSpace = value;
		return this;
	}
	

	set whiteSpaceCollapse(value){
		setCss(this.name, {
			whiteSpaceCollapse: value
		});
		this._updated();
	}
	get whiteSpaceCollapse(){
		return getCss(this.name, 'whiteSpaceCollapse');
	}
	setWhiteSpaceCollapse(value: any){
		this.whiteSpaceCollapse = value;
		return this;
	}
	

	set widows(value){
		setCss(this.name, {
			widows: value
		});
		this._updated();
	}
	get widows(){
		return getCss(this.name, 'widows');
	}
	setWidows(value: any){
		this.widows = value;
		return this;
	}
	

	set width(value){
		setCss(this.name, {
			width: value
		});
		this._updated();
	}
	get width(){
		return getCss(this.name, 'width');
	}
	setWidth(value: any){
		this.width = value;
		return this;
	}
	

	set willChange(value){
		setCss(this.name, {
			willChange: value
		});
		this._updated();
	}
	get willChange(){
		return getCss(this.name, 'willChange');
	}
	setWillChange(value: any){
		this.willChange = value;
		return this;
	}
	

	set wordBreak(value){
		setCss(this.name, {
			wordBreak: value
		});
		this._updated();
	}
	get wordBreak(){
		return getCss(this.name, 'wordBreak');
	}
	setWordBreak(value: any){
		this.wordBreak = value;
		return this;
	}
	

	set wordSpacing(value){
		setCss(this.name, {
			wordSpacing: value
		});
		this._updated();
	}
	get wordSpacing(){
		return getCss(this.name, 'wordSpacing');
	}
	setWordSpacing(value: any){
		this.wordSpacing = value;
		return this;
	}
	

	set wordWrap(value){
		setCss(this.name, {
			wordWrap: value
		});
		this._updated();
	}
	get wordWrap(){
		return getCss(this.name, 'wordWrap');
	}
	setWordWrap(value: any){
		this.wordWrap = value;
		return this;
	}
	

	set writingMode(value){
		setCss(this.name, {
			writingMode: value
		});
		this._updated();
	}
	get writingMode(){
		return getCss(this.name, 'writingMode');
	}
	setWritingMode(value: any){
		this.writingMode = value;
		return this;
	}
	

	set x(value){
		setCss(this.name, {
			x: value
		});
		this._updated();
	}
	get x(){
		return getCss(this.name, 'x');
	}
	setX(value: any){
		this.x = value;
		return this;
	}
	

	set y(value){
		setCss(this.name, {
			y: value
		});
		this._updated();
	}
	get y(){
		return getCss(this.name, 'y');
	}
	setY(value: any){
		this.y = value;
		return this;
	}
	

	set zIndex(value){
		setCss(this.name, {
			zIndex: value
		});
		this._updated();
	}
	get zIndex(){
		return getCss(this.name, 'zIndex');
	}
	setZIndex(value: any){
		this.zIndex = value;
		return this;
	}
	

	set zoom(value){
		setCss(this.name, {
			zoom: value
		});
		this._updated();
	}
	get zoom(){
		return getCss(this.name, 'zoom');
	}
	setZoom(value: any){
		this.zoom = value;
		return this;
	}
	
	variable(name: string, value: any | null = null){
		const vname = name.startsWith('--') ? name : '--'+name;
		if(value){
			setCss(this.name, {
				[vname]: value
			});
			this._updated();
		} else {
			return getCss(this.name, vname);
		}
		return this;
	}

	private _updated(){
		this.emit('update');
	}

	/**
	 * 
	 * @param {props} props additional properties to add into the mix
	 * @returns {Style}
	 */
	extends(props: props, override: boolean = true) : Style<variableMap> {
		return Style.extends<variableMap>(this, props, this.name, override);
	}
	

	static trimRules(rules: props){
		return trimRules(rules);
	}

	static register(name: string, props: props){
		const s = new Style(name);
		s.set(props);
		return s;
	}

	static fromElement(element: HTMLElement, name: any = null){
		const styles = getComputedStyle(element);
    const csss: Record<string, any> = {};
    for (const property of styles) {
      const value = styles.getPropertyValue(property);
      csss[property] = value;
    }
		return Style.register(name, csss as props);
	}

	static fromWidget(widget: Widget, name: any = null){
		return Style.fromElement(findEl(widget.id!)[0], name);
	}

	static from(target: Widget | HTMLElement, name: any = null){
		if(isHTMLElement(target)){
			return Style.fromElement(target as HTMLElement, name);
		} else if(isWidget(target)) {
			return Style.fromWidget(target as Widget, name);
		} else {
			throw new Error('Only HTMLElements and Widgets are allowed for style copying.');
		}
	}

	static copy<U = any>(target: Style<U> | string, name: string | null = null, mode : "simple" | "all" = "all", style: Style<U> | null = null, update: boolean = true){
		if(mode == "all" && target instanceof Style){
			let newStyle = style || new Style<U>(name || generateRandomID(5));
			newStyle.set(target.all);
			if(update) target.on('update', () => newStyle.set(target.all));
			return newStyle;
		} else {
			let all = { ...(getCss(target as string)) };
			return Style.register(name || generateRandomID(5), all);
		}
	}

	static extends<U = any>(target: Style<U>, props: props, name: string | null = null, override: boolean = true){
		let style = new Style<U>(name);
		Style.copy<U>(target, name, 'all', style, override);
		if(!override) target.on('update', () => {
			const p = {...target.all, ...props};
			style.set(p);
		});
		style.set(props);
		return style;
	}

	static INHERIT = 'inherit';
	static AUTO = 'auto';
	static FULL = '100%';
	static FULLWIDTH = '100vw';
	static FULLHEIGHT = '100dvh';
	static WRAP = 'wrap';
	static NONE = 'none';
	static BLOCK = 'block';
	static FLEX = 'flex';
	static GRID = 'grid';
	static NOWRAP = 'nowrap';
	static INITIAL = 'initial';
	static UNSET = 'unset';
	static CLIP = 'clip';
	static HIDDEN = 'hidden';
	static VISIBLE = 'visible';

	static UNIT = '16px';
	static HALFUNIT = '8px';
	static ONEANDHALFUNIT = '24px';
	static TWOUNITS = '32px';
	static THREEUNITS = '48px';
	static FOURUNITS = '64px';
	static FIVEUNITS = '80px';
	static BULKUNIT = '100px';
	static GRADIENT = {
		LEFT: 'to left',
		RIGHT: 'to right',
		TOP: 'to top',
		BOTTOM: 'to bottom',
	}

	static calc(...string: any[]){ return 'calc('+string.join(' ')+')' };
	static var(string: any){ return 'var(--'+voca.kebabCase(string)+')' };
	static double(string: any){ return cssProperty([string, string]) };

	static linearGradient(...colors: any){ return `linear-gradient(${colors.map((color: any) => cssProperty(color)).join(',')})` };
	static radialGradient(...colors: any){ return `radial-gradient(${colors.map((color: any) => cssProperty(color)).join(',')})` };

	static deg(int: any){ return int+'deg' };
	static em(int: any){ return int+'em' };
	static rem(int: any){ return int+'rem' };
	static px(int: any){ return int+'px' };
	static p(int: any){ return int+'%' };
}

export default Style;
export type { props as styleProps }