
# Rayous

Rayous is a modern, lightweight, and flexible web application framework for building server-rendered web applications using TypeScript and JavaScript. With Rayous, you can quickly create web applications that embrace the power of server and client-side rendering, allowing you to deliver dynamic, interactive, and SEO-friendly web experiences.

## Features

- **Server-Side Rendering**: Rayous is designed with server-side rendering (SSR) in mind, allowing you to generate and serve HTML content from the server, making your web applications search engine friendly and performant.

- **Flexible Routing**: Rayous provides a powerful routing system inspired by popular frameworks like Next.js. Define routes using a simple file structure and use dynamic parameters, giving you full control over your application's URLs.

- **Component-Based**: Rayous promotes a component-based architecture, making it easy to create reusable and modular components that you can combine to build complex user interfaces.

- **TypeScript and JavaScript Support**: You can develop your Rayous applications using both TypeScript and JavaScript, providing flexibility to work with your preferred language.

- **Intuitive Configuration**: A simple `rayous.json` file allows you to configure application metadata, such as the title, author, and more, making it easy to manage your application's metadata.

- **Static Files**: Rayous follows a convention where static files (e.g., images, styles, scripts) should be placed in the `static/` directory located outside of the `app/` folder. This separation helps maintain clarity and organization in your project.

## Getting Started

To start building your web application with Rayous, follow these steps:

1. Clone this repository to your local development environment.

2. Install the required dependencies using npm or yarn:
  ```bash
  npm install rayous
 ```

3.  Configure your routes, components, and other application-specific files within the `app/` directory. Take advantage of the flexible routing system to define your application's routes.
    
4.  Create reusable components in the `app/components/` directory and use them in your route handlers to build your web pages.
    
5.  Run your Rayous application:
    
    `npx rayous` 
    
6.  Access your application in a web browser by navigating to `http://localhost:3000` or the port specified in your configuration.
    

## Configuration

You can customize your Rayous application by editing the `rayous.json` configuration file. This file allows you to set the application's title, author, and other metadata that is important for SEO and presentation.

## Examples

For example usage and additional resources, visit the [Rayous GitHub repository](https://github.com/kevinj045/rayous). The repository includes code examples and detailed documentation to help you get started with Rayous.

## Contributions

Contributions to Rayous are welcome! If you have ideas, suggestions, or bug fixes, feel free to open issues and create pull requests on this repository.

## License

Rayous is released under the [MIT License](https://chat.openai.com/c/LICENSE), which means you can use it for your own projects and even contribute to the framework.

## Support

For any questions or support, please [open an issue](https://github.com/kevinj045/rayous/issues) on this repository.

Happy coding with Rayous!
