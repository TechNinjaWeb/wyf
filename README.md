# WaleYaFoto Photography Website

Modern photography through a suburban lens.

## Instructions

To start this app you must configure your environment variables in the `.env` file.
Edit these lines to the appropriate values.
```
HOST=localhost
PRODUCTION_URL=https://wyf-app.herokuapp.com
```
Spin up the application server by running `npm start`. 
Should the `/dist` folder not exist, first run `npm build-prod`.

## Development Deployment
The respective server's Dockerfile is located in the `/.docker` directory.  Copy your chosen installation into the `Dockerfile` file found in the root directory.

You must first build the docker container by running `docker build -t wyf-app .` from the base directory.

To deploy a standalone local container run `docker run -p [PORT]:[PORT] wyf-app` where PORT is the same as the one you'd like to use and your `.env` file's variable.

### Example
```
docker run -p 8080:3000 wyf-app
```
where `.env PORT=3000` and the application url is `http://localhost:8080`.

## Production Deployment: 
*Work In Progress*

Docker supports multiple container image stacks that can be deployed to Heroku or AWS-like servers. At present, only a free heroku account could be obtained.

### Configuring the Environment
- Log into github: `git config --global user.name "Chosen User Name" user.email "my@github.email`
- Then your heroku account: `heroku login`
- Link heroku to github: `heroku git:remote -a wyf`
- Save and deploy your source code: `npm run push-prod`

### Under Development
Attempting to successfully run a docker container on heroku using `docker-compose`. 

The `docker.development.yml` and `docker.production.yml` respectively have localhost running installations, but fails to successfully build upon deployment.