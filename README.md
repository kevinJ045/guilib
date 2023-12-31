<h3 align="center">
<img src="https://raw.githubusercontent.com/kevinJ045/guilib/main/assets/logo.png" width="100" />
<br/>
Rayous
<br/>
</h3>

<h6 align="center">
<a href="https://github.com/kevinJ045/guilib/wiki">Wiki</a>
 · 
<a  href="https://kevinj045.github.io/guilib/">Docs</a>
</h6>

<p  align="center">
<a href="https://github.com/kevinj045/guilib/stargazers">  <img src="https://img.shields.io/github/stars/kevinj045/guilib?style=for-the-badge&logo=starship&color=111111&logoColor=ffffff&labelColor=000000" alt="GitHub stars"/></a>
<a href="https://github.com/kevinj045/guilib/issues">
  <img src="https://img.shields.io/github/issues/kevinj045/guilib?style=for-the-badge&logo=gitbook&color=111111&logoColor=ffffff&labelColor=000000" alt="GitHub issues"/></a>
<a href="https://github.com/kevinj045/guilib">  <img src="https://img.shields.io/github/forks/kevinj045/guilib?style=for-the-badge&logo=git&color=111111&logoColor=ffffff&labelColor=000000" alt="GitHub forks"/></a>
<a href="https://www.npmjs.com/package/rayous">  <img src="https://img.shields.io/npm/v/rayous?style=for-the-badge&logo=npm&color=111111&logoColor=ffffff&labelColor=000000" alt="npm version" /></a>
</p>

Rayous is a modern, lightweight, and flexible web application framework for building server-rendered web applications using TypeScript and JavaScript. With Rayous, you can quickly create web applications that embrace the power of server and client-side rendering, allowing you to deliver dynamic, interactive web experiences.

## Features

- **Flexible Routing**: Rayous provides a powerful routing system inspired by popular frameworks like Next.js. Define routes using a simple file structure and use dynamic parameters, giving you full control over your application's URLs.

- **Component-Based**: Rayous promotes a component-based architecture, making it easy to create reusable and modular components that you can combine to build complex user interfaces.

- **TypeScript and JavaScript Support**: You can develop your Rayous applications using both TypeScript and JavaScript, providing flexibility to work with your preferred language.

- **Intuitive Configuration**: A simple `rayous.json` file allows you to configure application metadata, such as the title, author, and more, making it easy to manage your application's metadata.

- **Static Files**: Rayous follows a convention where static files (e.g., images, styles, scripts) should be placed in the `static/` directory located outside of the `app/` folder. This separation helps maintain clarity and organization in your project.

## Getting Started

To start building your web application with Rayous, follow these steps:

1. Create a new folder and do `npm init -y`

2. Install the required dependencies using npm or yarn:
	```bash
  	npm install rayous
	```

3.  Configure your routes, components, and other application-specific files within the `app/` directory. Make sure to include `static/` for static files and `rayous.json` for generl information.

	```bash
	npx rayous create
	```
    
4.  Create reusable components in the `app/components/` directory and use them in your route handlers to build your web pages.
    
5.  Run your Rayous application:
	```bash
	npx rayous
	```
    
6.  Access your application in a web browser by navigating to `http://localhost:3000` or the port specified in your configuration.
    

## Configuration

You can customize your Rayous application by editing the `rayous.json` configuration file. This file allows you to set the application's title, author, and other metadata that is important for SEO and presentation.

## Docs and wiki
For any help, you can refer to the [Rayous Docs](https://kevinj045.github.io/guilib/) or  [Rayous Github Wiki](https://github.com/kevinJ045/guilib/wiki).


## Examples

For example usage and additional resources, visit the [Rayous GitHub repository](https://github.com/kevinj045/guilib). The repository includes code examples and detailed documentation to help you get started with Rayous.

## Demo Projects

- [Rayous Todo App Demo](https://github.com/kevinJ045/rayous-todo-demo): A to-do list application built with Rayous.
- [Rayous DaisyUI Demo](https://github.com/kevinJ045/rayous-daisyui-demo): A demo project showcasing Rayous with DaisyUI integration.
- [Rayous Webpack Demo](https://github.com/kevinJ045/rayous-webpack-demo): A quote application that runs with webpack as a bundler instead of [bun](https://bun.sh).
- [Rayous DaisyUI Components](https://github.com/kevinJ045/rayous-daisyui-components): A component list and an example for [Rayous DaisyUI Library](https://github.com/kevinJ045/rayous-daisyui)

## Contributions

Contributions to Rayous are welcome! If you have ideas, suggestions, or bug fixes, feel free to open issues and create pull requests on this repository.

## Support

For any questions or support, please [open an issue](https://github.com/kevinj045/guilib/issues) on this repository.

Happy coding with Rayous!
