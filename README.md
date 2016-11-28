# Greenwood Olympia

Score tracking app for some group games.

## Build and Run

```shell
npm run deploy
```

### Dev scripts

Server + Mongo dev data
```shell
npm start
```

Server + Mongo prod data
```shell
npm run prod
```

Watch JS changes
```shell
npm run watch-js
```

Watch SCSS changes
```shell
npm run watch-scss
```

Add mock data to database (server must be running concurrently)
```shell
npm run prepop-data
```

### Mongo Notes

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

### Reference Articles

+ [event handling](https://vuejs.org/v2/guide/events.html)
+ [http request](https://auth0.com/blog/build-an-app-with-vuejs/)
+ [vue guide](https://vuejs.org/v2/guide/)
+ [vue gists](https://gist.github.com/yyx990803)
