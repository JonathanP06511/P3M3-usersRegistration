# Online Store - Microservice User-Registration

Members: Jonathan Chasipanta - Gonzalo Guachamin

This project is a microservice developed with Node.js and Express to manage users (CRUD) through a REST API.

## Requirements

- Node v20.13.1
- Docker version 26.0.0 

## Installation

1. Clona este repositorio:
    ```bash
    git clone https://github.com/JonathanP06511/P3M3-usersRegistration.git
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

## Usage

1. Start the server:
    ```bash
    npm start
    ```
     ```bash
      node server.js
    ```

2. Open your browser and navigate to http://localhost:3009 to view the frontend interface.
## Docker Usage

1. Build the Docker image:
    ```bash
    docker build -t image-name .
    ```

2. Run a container using the created image:
    ```bash
    docker run -p 8080:3003 -d --name container_name image_name
    ```

3. Open your browser and navigate to http://localhost:8080 to view the frontend interface.

