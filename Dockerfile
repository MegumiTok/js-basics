FROM nginx:1.15.0

COPY ./src /usr/share/nginx/html

EXPOSE 80