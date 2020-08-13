# Node/React/React-Native App NGOs

Platform to register cases where your NGO needs financial help, users can check all of them and chooses the one they want to help.


<img src="/screenshots/web-1.png" alt="drawing" width="800"/>
<img src="/screenshots/mobile-1.png" alt="drawing" width="300"/>

## Getting started

To get started with the app, clone the repo and then follow the instructions to initialize the backend, frontend and mobile:

### Backend

Change Directory to Backend and Install dependencies

```
$ cd backend
$ yarn
```

Run the test suite to verify that everything is working correctly:

```
$ yarn test
```

If the test suite passes, you'll be ready to run the app in a local server:

```
$ yarn start
```

### Frontend

Change Directory to Frontend and Install dependencies

```
$ cd frontend
$ yarn
```

Run the test suite to verify that everything is working correctly:

```
$ yarn test
```

If the test suite passes, you'll be ready to run the app in a local server:

```
$ yarn start
```

To build the production version run:

```
$ yarn build
```

### Mobile

Change Directory to Mobile and Install dependencies

```
$ cd mobile
$ yarn
```

If you have an Android or IOS emulator, you'll be ready to run the app locally after adding your backend address as the `baseURL` parameter on the file `mobile/src/services/api.js`

**Android**
```
$ yarn android
```

**IOS**
```
$ yarn ios
```

You can also run it in your own phone through Expo, install it with:

```
$ yarn global add expo-cli
```

Then run:

**Android**
```
$ yarn android
```

**IOS**
```
$ yarn ios
```

## Build With

* [React](https://reactjs.org/) - Web framework
* [React Native](https://reactnative.dev) - Mobile framework
* [Celebrate](https://github.com/arb/celebrate)
* [Express](https://expressjs.com)
* [Knex](http://knexjs.org/)
* [Jest](https://jestjs.io)
* [Supertest](https://github.com/visionmedia/supertest)
* [SQLite](https://www.sqlite.org)
