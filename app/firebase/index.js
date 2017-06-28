import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyDUyvjFz7Kqt8Yl4SjWTohy1LmzPYPgmGE",
      authDomain: "todo-app-b954b.firebaseapp.com",
      databaseURL: "https://todo-app-b954b.firebaseio.com",
      projectId: "todo-app-b954b",
      storageBucket: "todo-app-b954b.appspot.com",
      messagingSenderId: "808557121211"
    };

    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
