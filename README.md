# Factory App AI
![alt text](./assets/logo-small.jpg)

Factory App AI is an innovative program that generates Gradio applications using WatsonX and llama2. The application creates a Docker container with a custom Gradio application that runs based on the input prompt provided by the user. It aims to streamline the app development process, although it is important to note that the generated apps may not always work perfectly and may require some human intervention to finalize.

## Table of Contents

- [Installation](#installation)
  - [Building and running without Docker](#building-and-running-without-docker)
  - [Building and running with Docker](#building-and-running-with-docker)
- [Contributing](#contributing)
- [License](#license)

## Installation

Follow the instructions below to get started with Factory App AI:

### Building and running without Docker

```bash
nvm use
npm install
npm run start
```

### Building and running with Docker

```bash
npm run docker
```

This script is a shortcut executing the following commands:

```bash
docker build -t factory-app-ai .
docker run -it -p 7860:7860 factory-app-ai
```

## Contributing

We welcome contributions to the development of Factory App AI. If you would like to contribute, please feel free to submit a pull request or open an issue for discussion. We appreciate your support in making Factory App AI better.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE.txt) file for more details.

## Conclusion

Factory App AI offers a convenient way to generate Gradio applications using WatsonX and llama2. By leveraging the power of artificial intelligence, Factory App AI aims to make app development faster and more efficient. Get started today and discover the potential of Factory App AI in your projects.