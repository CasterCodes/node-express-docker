# Dockerizing a Node.js and Express Application


## Prerequisites:
- Prior understanding of Node.js applications
- Docker Desktop application installed

If you don't have Docker Desktop installed, please refer to the official documentation for installation steps.

To verify Docker installation, check its version using the following command:

```bash
 docker -v
```

### Creating the Dockerfile

Create a file named "Dockerfile" in the project root directory. This file is essential for Docker engine configurations. Paste the following code into the Dockerfile:


```Dockerfile
FROM node:latest
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
```

### Understanding the Dockerfile

Let's break down the Dockerfile commands:
- **FROM node:latest**: Specifies the base image for building the container.

- **WORKDIR /app**: Sets the working directory within the container to /app.

- **COPY . /app**: Copies the project files into the container's /app directory.

- **RUN npm install**: Installs the project dependencies inside the container.

- **EXPOSE 8000**: Exposes port 8000, where the application will run.

- **CMD ["npm", "start"]**: Defines the default command to execute when the container starts.


### Ignoring Files with .dockerignore

Create a **.dockerignore** file in the root directory to specify files that should be excluded from the container. This file works similarly to **.gitignore.** List the files you want to ignore, such as **node_modules**.


### Building the Docker Image

Build the Docker image using the following command:

```bash
docker build -t your_image_name:version .

```


Notice the **.** at the end of the above command that tells docker to run from the present folder where the **Dockerfile**

#### For example:

```bash
docker build -t my_node_app:1.0 .
```


### Running the Docker Image
Once the image is built, run it as a container using the following command:

```bash
docker container run -d --name your_container_name -p local_port:docker_port your_image_name:version

```

#### For example:

```bash
docker container run -d --name node_app_container -p 8000:8000 my_node_app:1.0
```

### Pushing the Image to Docker Hub

```
docker push your_image_name:version
```

#### For example:

```bash
docker push my_node_app:1.0
```

Your Docker image will be available on Docker Hub, and others can pull and run it.

Congratulations! You've successfully containerized a NodeJS application using Docker.

