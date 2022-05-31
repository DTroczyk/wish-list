## Before you build an image, build the app first 
## Change base href to: http://localhost:port/

FROM nginx:1.21.6-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY docs ./usr/share/nginx/html

EXPOSE 80