R{"path": "/","name": "Home","showdemo": false}R

<h1><b>GUILIB</b></h1>

<h3>What is it?</h3>

<p><b>GUILIB</b> is a library that lets you build GUI components in a way that's similar to how you do it in Flutter. You can create complex GUI elements by combining smaller ones, making it easy to manage and organize your interface code. It promotes reusability and makes it simpler to maintain your code.</p>  

<h3>Key Features:</h3>
  <ul>
    <li><strong>Nested Widget Structure:</strong> You build GUI components by nesting smaller widgets within larger
      ones. It's like putting together LEGO pieces to create bigger structures.</li>
    <li><strong>Component Composability:</strong> You can create reusable components and mix them together to build
      entire user interfaces. This helps you avoid writing the same code over and over.</li>
    <li><strong>Declarative Syntax:</strong> GUILIB uses a straightforward syntax. You just describe how you want your
      interface to look, and it takes care of the rest.</li>
    <li><strong>Event Handling:</strong> GUILIB provides easy ways to handle user interactions and events. You can
      define what happens when users click buttons or interact with elements.</li>
    <li><strong>Custom Styling:</strong> You can easily change how your GUI components look. Apply styles and themes to
      make everything consistent and good-looking.</li>
    <li><strong>State Management:</strong> GUILIB helps you manage the dynamic behavior of your components. Create
      interactive and responsive interfaces without complicated stuff.</li>
    <li><strong>Extensibility:</strong> It's designed to let you add your own custom widgets and extensions to do
      exactly what you need.</li>
  </ul>
<h3>Example Code</h3>
<pre class="mngr-code jsHigh">
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
</pre>


<a class="next" href="./?path=/widgets&">
  Next 
</a>