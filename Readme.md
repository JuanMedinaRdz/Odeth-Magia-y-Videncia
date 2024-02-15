# Development

## Software & changes you need to apply

- [Docker](https://www.docker.com/products/docker-desktop/). Enable kubernetes inside docker config
- [Skaffold CLI](https://skaffold.dev/)
- modify hosts file: Mac: `/etc/hosts` Windows: `c:\Windows\System32\Drivers\etc\hosts`. At the end of the file, add
- [NestJs](https://nestjs.com/)

```
127.0.0.1 app.dev
```

## Execution

on the root folder, open a terminal and run

```
skaffold dev
```

under the hood, this command will create a kubernetes cluster containing all services as pods, (databases are also independend services). Services are available on your browser through `app.dev` (except databases. They are only accessible through a service)
