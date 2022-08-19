# 开始

本文将指导你在生产环境部署本项目。

## Docker 一键部署

::: tip 环境

本项目的容器基于 [Docker](https://www.docker.com/)，容器编排采用 [docker-compose](https://github.com/docker/compose)，在部署前请确认环境的配置。

部署需要用到 `80` 和 `1883` 端口，请确保空闲。如需要修改端口可自行编辑 `docker-compose.yaml`。

:::

执行下面的命令即可完成部署:
```sh
git clone https://github.com/jmpsvr/jmpsvr && cd jmpsvr
docker-compose up -d
```

完成后访问 http://localhost 即可，默认管理员用户名和密码均为 `admin`。
