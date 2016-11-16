# Greenwood Olympia

Score tracking app for some group games.

## Running the server

Run on dev data:

```shell
npm start
```

Run on prod data:

```shell
npm run prod
```

## Running the UI

This process transcompiles the es6 and sass into es5 and css. They are then minified and moved into the ```ui/dist/``` folder. This is what is served by the server.

Server must be running concurrently. Start the server in one terminal tab, run gulp in another.

```shell
gulp
```

Navigate to: ```localhost:3000/```

Note: Gulp will need to be installed globally

```shell
npm install gulp -g
```


## Mongo Notes

Connection url is set by:

```javascript
process.env.MONGO_URL + 'greenwoodOlympia' + process.env.MONGO_DEV
```

process.env.MONGO_URL is set by Mongo, the default is:

```shell
MONGO_URL="mongodb://localhost:27017/"
```

process.env.MONGO_DEV will append a string to the end of the db name. The idea is to set it to "-dev" or "-prod" to keep the environments seperate.

```shell
MONGO_DEV="-dev"
```
OR
```shell
MONGO_DEV="-prod"
```
