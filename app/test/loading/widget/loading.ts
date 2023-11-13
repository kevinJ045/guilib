import { Text } from "../../../../client";

/**
 * 
 * Keep in mind that making a widget for a loading is costly 
 * in the ways of increasing the size of the component 
 * making it even slower to load the loading
 * in the first place.
 * 
 * And since the loader and the app
 * are generated separately, using this will make 
 * your loading the size of your app
 * and your app won't use what you imported here
 * so it will be a big size too
 * 
 * this will make your component slower.
 */
export default function loader(){
	return new Text('loading');
}