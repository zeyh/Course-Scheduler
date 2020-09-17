# CS Course Scheduler

## a few notes for set-up

### getting started for firebase
```bat
$ npm install expo // in project folder level
$ expo start //test
//hosting
$ npm install -g firebase-tools
$ expo install firebase
$ npx expo-optimize
$ expo build:web
//test  
$ npx serve web-build //open http://localhost:5000
```

add the following in package.json
```bat
"scripts": {
  /* ... */
  "predeploy": "expo build:web",
  "deploy-hosting": "npm run predeploy && firebase deploy --only hosting",
}
```

in firebase.json
```bat
//redirecting to the App.js rather than the default public/index.html
"hosting": {
    "public": "web-build",
}
```

### git commands
```bat
$ git add .
$ git commit -m "msg"
$ (git remote add origin git@github.com:zeyh/Course-Scheduler.git)
$ git remote -v //verify the remote URL
```