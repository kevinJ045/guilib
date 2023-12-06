import { animation } from "../../components/Animate";
import Style, { styleProps } from "../../components/Style";
import Store from "../../data/Store";
import { attr } from "../../utils/elman";
import { options } from "../../utils/options";
import Widget from "../main/Widget";
type widget = Widget | WidgetProps | null;
type widgetF = Widget | WidgetProps;
type child = Widget | WidgetProps | HTMLElement | HTMLGUIWidget;
interface HTMLGUIWidget extends HTMLElement {
    GUIWIDGET?: any;
}
type event = {
    event: string;
    callback: Function;
};
declare class WidgetProps {
    tree: any[];
    _id?: string | null;
    id: string | null;
    accepts: boolean;
    private: boolean;
    sealed: boolean;
    options: options;
    __generated: boolean;
    _onBuild?: Function;
    store: Store;
    __events__: event[];
    /**
     * The style setter stylezes the style
     * @example
     * widget.style = { display: 'block' }
     * // You can change it later on
     * widget.style = { display: 'none' }
     */
    set style(style: Style | styleProps);
    /**
     * returns all the applied styles
     * @returns {Style | styleProps}
     */
    get style(): Style | styleProps;
    /**
     * sets the padding of an element
     * @example
     * widget.padding = '10'
     * widget.padding = '10 10'
     */
    set padding(value: string);
    /**
     * sets the margin of an element
     * @example
     * widget.margin = '10'
     * widget.margin = '10 10'
     */
    set margin(value: string);
    /**
     * Sets the name attribute of an element
     * @example
     * new Widget({ name: "radio-button-1" })
     * // or
     * widget.name = 'radio-button-2'
     */
    set name(value: string);
    /**
     * The setOptions method changes the default widget options into the given options
     * @param {options} options the options to replace the default widget options
     * @returns {Widget}
     */
    setOptions(options: options | any): void;
    _optionChange(options: options | any): void;
    addHTMLElement(child: HTMLGUIWidget | HTMLElement, subchild: string | null): this;
    addWidget(child: child, subchild: string | null): this;
    /**
     * Adds a child to the widget, optionally within a specified subchild.
     *
     * @param {child} child - The child element or widget to be added.
     * @param {string|null} [subchild=null] - The subchild selector inside the widget (default is null).
     *
     * @returns {Widget} - Returns the class itself for method chaining.
     *
     * If a subchild is specified, the child is placed inside the subchild within the widget.
     *
     * @example
     * const widget = new Widget();
     * const childElement = document.createElement('div');
     * const childWidget = new Widget();
     *
     * // Add a child element directly to the widget
     * widget.add(childElement);
     *
     * // Add a child widget directly to the widget
     * widget.add(childWidget);
     *
     * // Add a child element within a subchild
     * widget.add(childElement, 'subchild');
     *
     * // Add a child widget within a subchild
     * widget.add(childWidget, 'subchild');
     */
    add(child: child, subchild?: string | null): this;
    /**
     * This is exactly like the add method but it instead adds it at the start instead of bottom
     * @param {child} child the child to be added
     * @param {string|null} subchild the subchild selector.
     * @returns {Widget}
     */
    addBefore(child: child, subchild?: string | null): this;
    /**
 * Adds multiple children to the widget, optionally specifying a subchild.
 * If the last argument is a string, it is treated as a subchild and used for all children.
 * @param {...Array<string | child>} children - An array of children to add, which can be of type `child` or a string subchild.
 * @returns {Widget} - Returns the class itself for method chaining.
 * @example
 * const widget = new Widget();
 * const child1 = new Widget();
 * const child2 = new Widget();
 *
 * // Adding multiple children without specifying a subchild
 * widget.addAll(child1, child2);
 *
 * // Adding multiple children with a subchild
 * widget.addAll(child1, child2, 'subchild');
 *
 * // Adding multiple children with the last argument as a subchild
 * widget.addAll(child1, child2, 'commonSubchild');
 */
    addAll(...children: Array<string | child>): this;
    addWrappedElement(elt: widget | HTMLGUIWidget, elementText: string, where: string, subchild?: string | null): this;
    /**
     * Removes a child from the widget. If a subchild is specified, it removes the child inside the subchild.
     * @param {child | string | null} [child=null] - The child or a subchild to remove (default is null).
     * @param {string | null} [subchild=null] - The subchild within which to remove the child (default is null).
     * @returns {Widget} - Returns the class itself for method chaining.
     * @example
     * const widget = new Widget();
     * const child = new Widget();
     *
     * // Remove a specific child from the widget
     * widget.remove(child);
     *
     * // Remove all children inside a subchild
     * widget.remove(null, '.subchild');
     *
     * // Remove all children within the widget
     * widget.remove('*');
     */
    remove(child?: child | string | null, subchild?: string | null): this;
    /**
     * Checks the HTML state or custom pseudo-class of the widget.
     *
     * @param {string} state - The name of the HTML state or custom pseudo-class to check.
     * @param {boolean | null} [is=null] - If provided, sets the state to `true` or `false` (default is null).
     *
     * @returns {boolean | null} - Returns `true` if the state is active or `false` if not. If `is` is provided, returns null.
     *
     * The `state` parameter can be the name of an HTML state, such as `:checked`, or a custom pseudo-class defined in `htmlPseudos`.
     * If `is` is a boolean value, it sets or removes the state. If `is` is not provided, it checks if the state is active.
     *
     * @example
     * const widget = new Widget();
     *
     * // Check if the widget is disabled
     * const isDisabled = widget.is('disabled');
     *
     * // Set the :checked state to true
     * widget.is(':checked', true);
     *
     * // Check if the :focus state is active
     * const hasFocus = widget.is(':focus');
     */
    is(state: string, is?: any): any;
    /**
     * Retrieves all child widgets or elements within the widget or a specified subchild.
     *
     * @param {string | null} [subchild=null] - The subchild selector inside the widget (default is null).
     *
     * @returns {Widget[]} - An array of child widgets or elements.
     *
     * If a subchild is specified, this method retrieves child widgets or elements within that subchild.
     * Otherwise, it retrieves all child widgets or elements within the widget.
     *
     * @example
     * const widget = new Widget();
     * const subchildWidget = new Widget({ class: 'subchild' });
     * const childElement = document.createElement('div');
     *
     * // Add child widgets and elements to the widget
     * widget.add(subchildWidget, 'subchild');
     * widget.add(childElement);
     *
     * // Retrieve all children within the widget
     * const allChildren = widget.children();
     *
     * // Retrieve children within the 'subchild'
     * const subchildChildren = widget.children('.subchild');
     */
    children(subchild?: string | null): WidgetList;
    /**
     * Finds and retrieves a single child widget or element that matches the specified HTML selector within the widget or a subchild.
     *
     * @param {string} q - The HTML selector to search for within the widget or subchild.
     * @param {string | null} [subchild=null] - The subchild selector inside the widget (default is null).
     *
     * @returns {Widget | null} - A single child widget or element that matches the selector or null if none is found.
     *
     * If `q` is set to '*', it retrieves all children within the widget or subchild.
     *
     * @example
     * const widget = new Widgets();
     * const childWidget = new Widget();
     * const childElement = document.createElement('div');
     *
     * // Add child widgets and elements to the widget
     * widget.add(childWidget);
     * widget.add(childElement);
     *
     * // Find a child widget within the widget using a selector
     * const foundWidget = widget.find('.some-class');
     *
     * // Find a child element within the widget using a selector
     * const foundElement = widget.find('div');
     *
     * // Find all children within the widget
     * const allChildren = widget.find('*');
     */
    find(q: string, subchild?: string | null): Widget;
    /**
     * Finds and retrieves an array of child widgets or elements that match the specified HTML selector within the widget or a subchild.
     *
     * @param {string} q - The HTML selector to search for within the widget or subchild.
     * @param {string | null} [subchild=null] - The subchild selector inside the widget (default is null).
     *
     * @returns {Widget[]} - An array of child widgets or elements that match the selector.
     *
     * If `q` is set to '*', it retrieves all children within the widget or subchild.
     *
     * @example
     * const widget = new Widget();
     * const childWidget = new Widget();
     * const childElement = document.createElement('div');
     *
     * // Add child widgets and elements to the widget
     * widget.add(childWidget);
     * widget.add(childElement);
     *
     * // Find all child widgets within the widget using a selector
     * const foundWidgets = widget.findAll('.some-class');
     *
     * // Find all child elements within the widget using a selector
     * const foundElements = widget.findAll('div');
     *
     * // Find all children within the widget
     * const allChildren = widget.findAll('*');
     */
    findAll(q: string, subchild?: string | null): Widget[];
    /**
     * Finds and retrieves the closest parent widget with the specified HTML selector.
     *
     * @param {string} q - The HTML selector to search for among the parent widgets.
     *
     * @returns {Widget | null} - The closest parent widget that matches the selector, or null if none is found.
     *
     * This method searches for the closest parent widget that matches the provided selector (`q`) among the ancestor widgets.
     * If a matching parent widget is found, it is returned; otherwise, it returns null.
     *
     * @example
     * const widget = new Widget();
     * const childWidget = new Widget();
     * const parentWidget = new Widget();
     *
     * // Add child widgets to the parent widget
     * parentWidget.add(widget);
     * widget.add(childWidget);
     *
     * // Find the closest parent widget that matches the selector
     * const closestParent = childWidget.closest('.some-selector');
     *
     * // If no matching parent widget is found, it returns null
     * const nonExistentParent = childWidget.closest('.non-existent-selector');
     */
    closest(q: string): any;
    /**
     * Retrieves the parent widget, or the nearest parent widget with an actual Widget instance, based on the `container` parameter.
     *
     * @param {boolean} [container=false] - Determines whether to retrieve the parent widget (false) or the direct parent without searching for a Widget instance (true).
     *
     * @returns {Widget | null} - The parent widget, or the direct parent if `container` is set to true, or null if no parent is found.
     *
     * If `container` is true, this method retrieves the direct parent without checking for a Widget instance.
     * If `container` is false (default), it searches for the nearest parent widget that has an actual Widget instance and returns that parent widget. If no parent widget is found, it returns null.
     *
     * @example
     * const widget = new Widget();
     * const parentWidget = new Widget();
     *
     * // Add the widget to the parent widget
     * parentWidget.add(widget);
     *
     * // Retrieve the parent widget
     * const parent = widget.parent();
     *
     * // Retrieve the direct parent without checking for a Widget instance
     * const directParent = widget.parent(true);
     *
     * // If no parent widget is found, it returns null
     * const nonExistentParent = parentWidget.parent();
     */
    parent(container?: boolean): any;
    /**
     * Retrieves the direct parent widget, without searching for a Widget instance.
     *
     * @returns {Widget | null} - The direct parent widget, or null if no parent is found.
     *
     * This method retrieves the direct parent widget without checking for a Widget instance. It returns the parent widget or null if no parent widget is found.
     *
     * @example
     * const widget = new Widget();
     * const parentWidget = new Widget();
     *
     * // Add the widget to the parent widget
     * parentWidget.add(widget);
     *
     * // Retrieve the direct parent without checking for a Widget instance
     * const directParent = widget.container();
     *
     * // If no parent widget is found, it returns null
     * const nonExistentParent = parentWidget.container();
     */
    container(): Widget<{
        element: {
            raw: HTMLElement | HTMLGUIWidget;
        };
    }>;
    /**
     * Sets the attributes of the widget element.
     *
     * @param {attr | string} props - The attributes to be set in the format {attribute: value} or a single attribute as a string.
     *
     * @returns {Widget} - The updated widget with the specified attributes applied.
     *
     * This method sets the specified attributes for the widget element. You can provide attributes as an object in the format {attribute: value} or a single attribute as a string. The method updates the widget element with the new attributes and returns the modified widget.
     *
     * @example
     * const widget = new Widget();
     *
     * // Set multiple attributes using an object
     * widget.attr({ id: 'my-widget', class: 'custom-widget' });
     *
     * // Set a single attribute as a string
     * widget.attr('data-custom', 'value');
     */
    attr(props: attr | string): any;
    /**
     * Sets the properties of the widget element directly.
     *
     * @param {attr | string} props - The properties to be set in the format {property: value} or a single property as a string.
     *
     * @returns {Widget} - The updated widget with the specified properties applied.
     *
     * This method sets the specified properties for the widget element directly. You can provide properties as an object in the format {property: value} or a single property as a string. The method updates the widget element with the new properties and returns the modified widget.
     *
     * @example
     * const widget = new Widget();
     *
     * // Set multiple properties using an object
     * widget.prop({ disabled: true, tabIndex: 2 });
     *
     * // Set a single property as a string
     * widget.prop('value', 'custom-value');
     */
    prop(props: attr | string): any;
    /**
     * Sets CSS styles for the widget element.
     *
     * @param {attr} props - The CSS styles to be applied as an object {styleName: value}.
     *
     * @returns {Widget} - The updated widget with the specified CSS styles applied.
     *
     * This method sets the specified CSS styles for the widget element. You can provide styles as an object in the format {styleName: value}. The method updates the widget element with the new styles and returns the modified widget.
     *
     * @example
     * const widget = new Widget();
     * widget.css({ color: 'red', fontSize: '16px' });
     */
    css(props: attr): any;
    /**
     * Retrieves the value of a specific CSS style property for the widget element.
     *
     * @param {string} prop - The name of the CSS style property to retrieve.
     *
     * @returns {string} - The value of the specified CSS style property.
     *
     * This method retrieves the value of the specified CSS style property for the widget element. If the property does not exist, it returns an empty string.
     *
     * @example
     * const widget = new Widget();
     * const fontSize = widget.styleProp('fontSize'); // Returns the font size as a string.
     */
    styleProp(prop: string): any;
    /**
     * Sets the text content for the widget element.
     *
     * @param {string} text - The text content to be set.
     *
     * @returns {Widget} - The updated widget with the specified text content applied.
     *
     * This method sets the text content for the widget element. It updates the text content and returns the modified widget.
     *
     * @example
     * const widget = new Widget();
     * widget.text('Hello, World!');
     */
    text(text: string): any;
    /**
     * Sets the height of the widget element.
     *
     * @param {number | string | null} h - The height value to be set.
     *
     * @returns {Widget} - The updated widget with the specified height applied.
     *
     * This method sets the height of the widget element. You can provide the height value as a number or a string (e.g., '100px'). It updates the height and returns the modified widget.
     *
     * @example
     * const widget = new Widget();
     * widget.height(100); // Sets the height to 100 pixels.
     */
    height(h?: number | string | null): any;
    /**
     * Sets the width of the widget element.
     *
     * @param {number | string | null} w - The width value to be set.
     *
     * @returns {Widget} - The updated widget with the specified width applied.
     *
     * This method sets the width of the widget element. You can provide the width value as a number or a string (e.g., '200px'). It updates the width and returns the modified widget.
     *
     * @example
     * const widget = new Widget();
     * widget.width(200); // Sets the width to 200 pixels.
     */
    width(w?: number | string | null): any;
    /**
     * Sets the inner HTML content of the widget element.
     *
     * @param {string | null} text - The HTML content to be set. If null, the existing content is cleared.
     *
     * @returns {Widget} - The updated widget with the specified HTML content applied.
     *
     * This method sets the inner HTML content for the widget element. If you provide a string, it replaces the existing content. If you pass null, it clears the content. It updates the HTML content and returns the modified widget.
     *
     * @example
     * const widget = new Widget();
     * widget.html('<div>Hello, World!</div>'); // Sets the inner HTML content.
     */
    html(text?: string | null): any;
    /**
     * Adds one or more CSS classes to the widget element.
     *
     * @param {string} classes - The CSS classes to add, separated by spaces.
     *
     * @returns {Widget} - The updated widget with the specified CSS classes added.
     *
     * This method adds one or more CSS classes to the widget element. You can specify multiple classes by separating them with spaces. It updates the element's classes and returns the modified widget.
     *
     * @example
     * const widget = new Widget();
     * widget.addClass('custom-class another-class');
     */
    addClass(classes: string): this;
    /**
     * Checks if the widget element has the specified CSS classes.
     *
     * @param {string} classes - The CSS classes to check, separated by spaces.
     *
     * @returns {boolean} - `true` if all specified classes are present, `false` otherwise.
     *
     * This method checks if the widget element has all the specified CSS classes. If all classes are present, it returns `true`. Otherwise, it returns `false`.
     *
     * @example
     * const widget = new Widget();
     * const hasClass = widget.hasClass('custom-class');
     */
    hasClass(classes: string): any;
    /**
     * Removes one or more CSS classes from the widget element.
     *
     * @param {string} classes - The CSS classes to remove, separated by spaces.
     *
     * @returns {Widget} - The updated widget with the specified CSS classes removed.
     *
     * This method removes one or more CSS classes from the widget element. You can specify multiple classes by separating them with spaces. It updates the element's classes and returns the modified widget.
     *
     * @example
     * const widget = new Widget();
     * widget.removeClass('custom-class another-class');
     */
    removeClass(classes: string): this;
    /**
     * Toggles one or more CSS classes on the widget element.
     *
     * @param {string} classes - The CSS classes to toggle, separated by spaces.
     *
     * @returns {Widget} - The updated widget with the specified CSS classes toggled.
     *
     * This method toggles one or more CSS classes on the widget element. It adds classes if they are not present and removes them if they are already present. It updates the element's classes and returns the modified widget.
     *
     * @example
     * const widget = new Widget();
     * widget.toggleClass('custom-class another-class');
     */
    toggleClass(classes: string): this;
    rect(): any;
    focus(): this;
    click(): this;
    toHTMLElement(parent: HTMLGUIWidget | HTMLElement, direction?: string | null): this;
    toWidget(parent: widget, direction?: string | null): this;
    /**
     * Appends the widget to a parent element in the specified direction.
     *
     * @param {child} parent - The parent element to append the widget to.
     * @param {string | null} direction - The optional direction ('before' or 'after') to insert the widget within the parent.
     *
     * @returns {Widget} - The updated widget appended to the parent element.
     *
     * This method appends the widget to a parent element, either as a child or before/after other elements within the parent. The direction parameter determines the placement of the widget relative to existing elements. It returns the modified widget.
     *
     * @throws {Error} - Throws an error if the parent is not a valid Widget or HTMLElement.
     *
     * @example
     * const widget = new Widget();
     * const parent = new Widget();
     * widget.to(parent, 'before'); // Appends the widget before the parent's children.
     */
    to(parent: child, direction?: string | null): this;
    /**
     * Registers event listeners for the widget.
     *
     * @param {string | string[]} event - The event(s) to listen for.
     * @param {Function} callback - The function to call when the event occurs.
     *
     * @returns {Widget} - The widget with event listeners registered.
     *
     * This method registers event listeners for the widget to respond to the specified event(s). You can specify a single event or an array of events. When the event occurs, the provided callback function is executed.
     *
     * @example
     * const widget = new Widget();
     * widget.on('click', () => console.log('Widget clicked!'));
     */
    on(event: string | string[], callback: Function): this;
    /**
     * Removes event listeners from the widget.
     *
     * @param {string | string[]} event - The event(s) to remove listeners from.
     * @param {Function | null} callback - The optional callback function to remove. If null, all listeners for the event(s) are removed.
     *
     * @returns {Widget} - The widget with event listeners removed.
     *
     * This method removes event listeners from the widget for the specified event(s). You can specify a single event or an array of events. You can also provide an optional callback function to remove specific listeners. If no callback is provided, all listeners for the event(s) are removed.
     *
     * @example
     * const widget = new Widget();
     * widget.off('click'); // Removes all click event listeners.
     */
    off(event: string | string[], callback?: Function | null): this;
    /**
     * Triggers a custom event on the widget.
     *
     * @param {string} event - The name of the custom event to trigger.
     * @param {any} data - The optional data to pass with the event.
     *
     * @returns {Widget} - The widget with the custom event triggered.
     *
     * This method triggers a custom event on the widget. You can specify the event name and provide optional data to pass with the event. Event listeners registered for this event will be notified.
     *
     * @example
     * const widget = new Widget();
     * widget.emit('customEvent', { message: 'Hello, World!' });
     */
    emit(event: string, data: any): this;
    /**
     * Hides the widget with an optional animation effect.
     *
     * @param {number | null} time - The optional duration of the hide animation in milliseconds. If null, hides the widget without animation.
     *
     * @returns {Widget} - The widget with the hide operation performed.
     *
     * This method hides the widget. You can specify an optional duration for the hide animation. If no time is provided (null), the widget is hidden instantly. It returns the widget after the hide operation.
     *
     * @example
     * const widget = new Widget();
     * widget.hide(500); // Hides the widget with a 500ms animation.
     */
    hide(time: number | null): this;
    /**
     * Shows the widget with an optional animation effect.
     *
     * @param {number | null} time - The optional duration of the show animation in milliseconds. If null, shows the widget without animation.
     *
     * @returns {Widget} - The widget with the show operation performed.
     *
     * This method shows the widget. You can specify an optional duration for the show animation. If no time is provided (null), the widget is shown instantly. It returns the widget after the show operation.
     *
     * @example
     * const widget = new Widget();
     * widget.show(500); // Shows the widget with a 500ms animation.
     */
    show(time: number | null): this;
    /**
     * Toggles the visibility of the widget with an optional animation effect.
     *
     * @param {number | null} time - The optional duration of the toggle animation in milliseconds. If null, toggles the visibility without animation.
     *
     * @returns {Widget} - The widget with the visibility toggle operation performed.
     *
     * This method toggles the visibility of the widget. You can specify an optional duration for the toggle animation. If no time is provided (null), the visibility is toggled instantly. It returns the widget after the toggle operation.
     *
     * @example
     * const widget = new Widget();
     * widget.toggle(500); // Toggles the visibility of the widget with a 500ms animation.
     */
    toggle(time: number | null): this;
    disable(): this;
    enable(): this;
    raw(): any;
    toString(): any;
    stripElement(): boolean;
    toArray(): this[];
    /**
     * Set the animation for the widget.
     *
     * @param {animation} animation - The animation object to set for the widget.
     *
     * This method sets the animation for the widget. It defines the animation to be used when transitioning or animating the widget's state. The animation object should conform to a specific format, which may include properties like 'duration', 'easing', and others, depending on your implementation.
     *
     * @example
     * const widget = new Widget();
     * widget.animation = { duration: 500, easing: 'linear', width: [100, 200] }; // Set a custom animation for the widget.
     */
    set animation(animation: animation);
    /**
     * Alias for setting the animation for the widget.
     *
     * @param {animation} animation - The animation object to set for the widget.
     *
     * This method is an alias for setting the animation for the widget. It provides an alternative way to define the animation. It sets the animation object in the same manner as the `animation` method.
     *
     * @example
     * const widget = new Widget();
     * widget.setAnimation({ duration: 500, easing: 'linear', width: [100, 200] }); // Set a custom animation for the widget using setAnimation.
     */
    setAnimation(animation: animation): void;
    /**
     * Animates a group of child widgets with a specified animation.
     *
     * @param {string} children - A selector to identify child widgets to be animated.
     * @param {animation} animation - The animation object to apply to the child widgets.
     *
     * @returns {Widget} - The parent widget with the animation applied to its child widgets.
     *
     * This method animates a group of child widgets with a specified animation. It selects child widgets using the provided selector and applies the animation to them.
     *
     * @example
     * const widget = new Widget();
     * widget.animate('.child-widget', { duration: 500, easing: 'linear' }); // Apply animation to child widgets with the class 'child-widget'.
     */
    animate(children: string, animation: animation): this;
    /**
     * Get the state store for the widget.
     *
     * @param {string} store - The name of the state store to retrieve. Default is 'state'.
     *
     * @returns {Store} - The state store associated with the widget.
     *
     * This method retrieves the state store for the widget. You can specify the name of the store to retrieve. The default store is 'state'.
     *
     * @example
     * const widget = new Widget();
     * const stateStore = widget.getStore('customStore'); // Retrieve a custom state store.
     */
    getStore(store?: string): {
        [x: string]: any;
    };
    /**
     * Set or update the state store with the provided properties.
     *
     * @param {Record<string, any>} props - The properties to set or update in the state store.
     * @param {string} store - The name of the state store to set or update. Default is 'state'.
     *
     * This method sets or updates the state store associated with the widget with the provided properties. You can specify the name of the store to set or update. The default store is 'state'.
     *
     * @example
     * const widget = new Widget();
     * widget.setStore({ count: 10 }, 'customStore'); // Set or update properties in a custom state store.
     */
    setStore(props: Record<string, any>, store?: string): void;
    _onMount(parent: widget): void;
    /**
     * Create a clone of the widget with optional customization.
     *
     * @param {Object} selectedOptions - Customization options for the clone.
     * @param {boolean|"options"} selectedOptions.cloneChildren - Indicates whether to clone the children of the widget. If set to "options," the widget's options will be cloned as well.
     * @param {boolean} selectedOptions.cloneEvents - Indicates whether to clone the events bound to the widget.
     *
     * @returns {Widget} - A clone of the widget with the specified customizations.
     *
     * This method creates a clone of the widget, allowing for optional customization. You can choose to clone the widget's children and/or events. Use the `cloneChildren` option to specify whether to clone children or options (if set to "options"). The `cloneEvents` option allows you to specify whether to clone the events bound to the widget.
     *
     * @example
     * const originalWidget = new Widget();
     * const clonedWidget = originalWidget.clone({ cloneChildren: true, cloneEvents: false });
     * // Create a clone of the original widget with children cloned and events not cloned.
     */
    clone(selectedOptions?: {
        cloneChildren?: boolean | "options";
        cloneEvents?: boolean;
    }): Widget;
    registerProxy(object: any, callback: Function, set?: boolean): any;
    proxyCloner(object: any, object1: any): any;
    set $id(id: string);
}
declare class WidgetList extends Array {
    static from(array: Array<any>): WidgetList;
    add(child: child, subchild?: any): WidgetList;
    to(child: Widget | HTMLElement, subchild?: any): WidgetList;
    remove(child: child, subchild?: any): WidgetList;
    is(state: string, is?: any): WidgetList;
    attr(props: attr): WidgetList;
    disable(): WidgetList;
    enable(): WidgetList;
    prop(props: attr): WidgetList;
    addClass(classes: string): WidgetList;
    hasClass(classes: string): WidgetList;
    removeClass(classes: string): WidgetList;
    toggleClass(classes: string): WidgetList;
    text(text: any): WidgetList;
    height(h: any): WidgetList;
    width(w: any): WidgetList;
    on(event: string | string[], callback: Function): WidgetList;
    off(event: string | string[], callback: Function): WidgetList;
    emit(event: string | string[], data: any): WidgetList;
    hide(time?: number | null): WidgetList;
    show(time?: number | null): WidgetList;
    toggle(time?: number | null): WidgetList;
    animate(animation: animation): this;
}
export type { widget, child, widgetF, HTMLGUIWidget, event };
export { WidgetList };
export default WidgetProps;
