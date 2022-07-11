# JustWatch Search-Lite

## Preview
![Alt text](/public/images/preview.png "PROJECT PREVIEW")


## Directory structure

```
├── src                        // source code
│   ├── appoloClient           // appoloClient config and graphql queries
│   ├── assets                 // static resource like images, global style
│   ├── components             // global public components
│   ├── directives             // global directives
│   ├── layout                 // Layout components
│   ├── models                 // state models
│   ├── store                  // global state management
│   ├── utils                  // global public functions
│   ├── view                   // view
│   ├── App.vue                // entry view
│   └── main.ts                // entry for loading 
│   └── config.ts              // App config
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
## Using DOCKER

```
docker build -t justwatch/search-lite .
```

```
docker run -it -p 8080:8080 --rm --name search-lite  justwatch/search-lite
```