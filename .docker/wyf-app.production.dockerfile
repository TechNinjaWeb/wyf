FROM node:6.9

# prepare a user which runs everything locally! - required in child images!
RUN useradd --user-group --create-home --shell /bin/false app

# EXPOSE 3000 # EXPOSE command not supported on heroku
ENV HOME=/home/app
WORKDIR $HOME

ENV APP_NAME=wyf-app

# before switching to user we need to set permission properly
# copy all files, except the ignored files from .dockerignore
COPY . $HOME/$APP_NAME/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/$APP_NAME

RUN npm install