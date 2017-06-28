import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDUyvjFz7Kqt8Yl4SjWTohy1LmzPYPgmGE",
    authDomain: "todo-app-b954b.firebaseapp.com",
    databaseURL: "https://todo-app-b954b.firebaseio.com",
    projectId: "todo-app-b954b",
    storageBucket: "todo-app-b954b.appspot.com",
    messagingSenderId: "808557121211"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Cedric',
    age: 30
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});
