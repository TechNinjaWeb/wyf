map $http_upgrade $connection_upgrade {
  default upgrade;
  ''      close;
}

server {

  listen ${NGINX_PORT};

  server_name ${NGINX_HOST};
  #  ssl                 on;
  #  ssl_certificate     wyf-app_server.crt;
  #  ssl_certificate_key wyf-app_server.pem;
  #
  #  ssl_ciphers "EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH";
  #  ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
  #  ssl_prefer_server_ciphers on;
  #  ssl_session_cache shared:SSL:10m;
  #  ssl_session_tickets off; # Requires nginx >= 1.5.9
  #  add_header Strict-Transport-Security "max-age=63072000; preload";
  #  add_header X-Frame-Options DENY;
  #
  #  location /api/microservice1 {
  #    rewrite ^/api/microservice1/(.*)$ /$1 break;
  #    proxy_pass https://microservice1/;
  #    proxy_http_version 1.1;
  #    proxy_set_header X-Forwarded-For $remote_addr;
  #  }

  location / {
    root /dist;
    try_files $uri /index.html;
    index index.html;
    gzip on;
    gzip_types text/css text/javascript application/x-javascript application/json;
  }

}