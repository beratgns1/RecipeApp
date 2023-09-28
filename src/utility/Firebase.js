import firebase, { initializeApp } from "@react-native-firebase/app";
import auth from '@react-native-firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDOESRckuRVMNBT2kyGcQtlpfonTVY6hco",
    authDomain: "recipeapprn-eb418.firebaseapp.com",
    databaseurl: "https://recipeapprn-674c4.firebaseio.com",
    projectId: "recipeapprn-eb418",
    storageBucket: "recipeapprn-eb418.appspot.com",
    messagingSenderId: "928915225374",
    appId: "1:928915225374:web:efb9f13843117bd11be70f",
    measurementId: "G-JL5GS2VS9W"
  };

  if (firebase.apps.length == 0 ) {
    const app = initializeApp(firebaseConfig)
  }

  

  export { auth }