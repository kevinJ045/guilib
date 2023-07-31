R{"path": "/","name": "Home","showdemo": false}R

# GUILIB - GUI Component Library

**GUILIB** is a library that lets you build GUI components in a way that's similar to how you do it in Flutter. You can create complex GUI elements by combining smaller ones, making it easy to manage and organize your interface code. It promotes reusability and makes it simpler to maintain your code.

## Key Features:

- **Nested Widget Structure:** You build GUI components by nesting smaller widgets within larger ones. It's like putting together LEGO pieces to create bigger structures.

- **Component Composability:** You can create reusable components and mix them together to build entire user interfaces. This helps you avoid writing the same code over and over.

- **Declarative Syntax:** GUILIB uses a straightforward syntax. You just describe how you want your interface to look, and it takes care of the rest.

- **Event Handling:** GUILIB provides easy ways to handle user interactions and events. You can define what happens when users click buttons or interact with elements.

- **Custom Styling:** You can easily change how your GUI components look. Apply styles and themes to make everything consistent and good-looking.

- **State Management:** GUILIB helps you manage the dynamic behavior of your components. Create interactive and responsive interfaces without complicated stuff.

- **Extensibility:** It's designed to let you add your own custom widgets and extensions to do exactly what you need.

With GUILIB, you can make GUI development faster, write code that's easier to maintain, and create attractive user interfaces for your apps. If you're already familiar with Flutter, you'll find GUILIB to be a great choice for building GUIs for desktop, mobile, or web applications.

## Core Concepts

### Widget-HTMLElement Interaction

![](./static/img/bitmap.png)

In GUILIB, each widget has a unique ID that is linked to its corresponding HTMLElement. The widget doesn't directly interact with the HTMLElement; instead, it does so through a connector function. The ID is a property of the HTMLElement and doesn't interfere with the HTML `id` attribute. The HTMLElement also has direct access to its corresponding widget through the `GUIWIDGET` property.

### Options, Methods, and Setters

GUILIB widgets are highly controllable through various means:

1.  **Options:** Widgets can be initialized with options to customize their behavior and appearance.
    
2.  **Methods:** Widgets have specific methods that can be called to perform certain actions.
    
3.  **Setters:** Widgets can have setters that allow you to modify their properties easily.
    

For example, if you create a widget using `new Widget({ type: 'outline' })`, you can later change its type using the setter like `widget.type = 'outline'`. The setter will take care of updating the corresponding HTMLElement accordingly.

### Default Setters

Below are the default setters available for all widgets:

1.  `padding`: Sets the padding of the corresponding widget.
2.  `margin`: Sets the margin of the corresponding widget.
3.  `type`: Defines the Widget Subtype. For example, if you have the following CSS classes: `.button`, `.button-outline`, `.button-large`, instead of putting the entire class name, you can specify the subname using the `type` setter as `type = ['outline', 'large']`. This setter will add the first CSS class + specified type if it is not already in the class list, and if it exists, it will remove it.
4.  `id`: Sets the ID of the HTMLElement, allowing you to later find it with CSS selectors.

Please note that these setters can be used both as initialization options and as setters after the widget is initiated.

### Children Option

The `children` option is a crucial setting that plays a significant role in managing nested elements within the widget. It allows you to include other elements or widgets as children, and they will be added fully to the main widget. The `children` option accepts an array containing two types of elements: `HTMLElement` and `Widget`.

For example, suppose we have a `const link = document.createElement('a');` that creates an anchor element, and we want to create a new widget with some children:

```javascript
new Widget({
    children: [ link, new Widget({ text: 'haha' }) ]
})
``` 

The `link` anchor element and a new `Widget` instance with the text 'haha' are added as children to the main widget. The `children` option enables efficient management of nested elements, making it easier to structure and organize complex UI components.


## Example
```javascript
const myElement = new Container({
  children: [
    new Text('My Text'),
    Icons.person,
    new Button('My Button', {
      onClick(){
        myElement.find('button').remove();
      }
    })
  ]
});
```