import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAXwAbK-lmqtZ9PBlaTSvJHBKnCitB99Es",
    authDomain: "eventos-e4e67.firebaseapp.com",
    databaseURL: "https://eventos-e4e67.firebaseio.com",
    projectId: "eventos-e4e67",
    storageBucket: "eventos-e4e67.appspot.com",
    messagingSenderId: "160334552419",
    appId: "1:160334552419:web:b7bba5d16eba72975b0756"
  };

export default firebase.initializeApp(firebaseConfig);