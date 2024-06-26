# ローカルのHTMLファイルをWebサーバー上でホスト

ローカルにあるHTMLファイルをWebサーバーのソフトウェア（Dockerコンテナ内で動作するNginx）を使って``http://localhost:8080``でアクセス可能にしました。

Dockerを使用してNginxのインスタンスを作成し、そのNginxサーバーにHTMLファイルを配置することで、ローカルネットワークやインターネット経由でこれらのファイルにアクセスできるようになります。

## localhost

* localhost（または 127.0.0.1）は、コンピュータネットワークにおいて、現在使用しているデバイス（あなたのコンピュータ）を指す標準的なホスト名
* localhost へのアクセスは、外部ネットワークを経由せず、あなたのデバイス内部で完結します。これは「ループバックアドレス」とも呼ばれ、ネットワークインターフェースを介さずにネットワークソフトウェアのテストによく使用されます

## Nginx (pronounced "engine-x") 

軽量で高性能なWebサーバー。`nginx:latest` イメージを使用することで、迅速にWebサーバー環境を構築できます。

## Dockerfileの作成

Dockerfileは、Dockerイメージのビルド手順を記述するファイルです

```txt
FROM nginx:latest
COPY ./src /usr/share/nginx/html
```

今回は、src ディレクトリ内のすべてのファイル（HTML、CSS、JavaScript、その他のファイル）をコンテナ内の Nginx のドキュメントルートにコピーします。
nginxを動作させた段階では、nginxデフォルトのhtmlが表示されますので、自分で作ったhtmlにかえています。

## Dockerイメージのビルド

DockerfileからDockerイメージをビルドするコマンド：

```sh
docker build -t <付けたいイメージの名前> .
```

## Dockerコンテナの起動

ビルドしたイメージからコンテナを起動するコマンド：

```sh
docker container run -d --name 付けたいコンテナの名前 -p 8080:80 my-html-app
```

これにより、``http://localhost:8080/`` でHTMLファイルにアクセスできるようになります。

## Dockerfileを変更した時

変更したDockerfileを反映させるためには、関連するDockerイメージを再ビルドし、そのイメージを使用しているコンテナを再起動する必要があります。

```sh
# Docker イメージを再ビルド
docker build -t js-basics .

# 関連するコンテナを停止
docker stop js-basics-container

# 削除
docker rm js-basics-container

# 新しいイメージを使用して再起動
docker run -d --name js-basics-container -p 8080:80 js-basics
```

You can stop and remove a container in a single command by adding the "force" flag to the docker rm command. For example:` docker rm -f <the-container-id>`

## デバッグ

コンテナ内でファイルが正しく配置されているかを確認するために、コンテナのシェルにアクセスし、`ls /usr/share/nginx/html` でファイルを確認

```sh
docker exec -it js-basics-container /bin/sh

ls /usr/share/nginx/html
50x.html  add_html_tag	index.css  index.css.map  index.html  index.scss  multi_tools  nsxtjs  words_shuffler
```

## 作成したコンテナは以下コマンドで停止・起動

```sh
% docker ps
CONTAINER ID   IMAGE       COMMAND                  CREATED        STATUS        PORTS                  NAMES
4f23e63cc6ad   js-basics   "nginx -g 'daemon of…"   11 hours ago   Up 11 hours   0.0.0.0:8080->80/tcp   js-basics-container

% docker container stop js-basics-container
js-basics-container

% docker ps        
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

% docker container start js-basics-container
js-basics-container

% docker ps
CONTAINER ID   IMAGE       COMMAND                  CREATED        STATUS         PORTS                  NAMES
4f23e63cc6ad   js-basics   "nginx -g 'daemon of…"   11 hours ago   Up 4 seconds   0.0.0.0:8080->80/tcp   js-basics-container
```