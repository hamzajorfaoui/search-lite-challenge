# JUSTWATCH Search-Lite

## RUN Project using DOCKER

```
docker build -t justwatch/search-lite .
```

```
docker run -it -p 8080:8080 --rm --name search-lite  justwatch/search-lite
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
