FROM nginx:latest

# RUN apt-get update && apt-get install -y openssl

# 公開鍵＋認証局での署名に必要な情報
COPY ./ssl/server.crt /etc/nginx/ssl/server.crt

# 秘密鍵
COPY ./ssl/server.key /etc/nginx/ssl/server.key

# 秘密鍵用のパスワードを配置したファイル
COPY ./ssl/server.password /etc/nginx/ssl/server.password 

COPY ./src /usr/share/nginx/html