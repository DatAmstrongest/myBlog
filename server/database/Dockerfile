FROM docker.io/library/mysql:8.4

ENV MYSQL_DATABASE=blog_db \
    MYSQL_ROOT_PASSWORD=123456

COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 3306