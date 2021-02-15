import firebase from 'firebase'

var firebaseConfig={
    apiKey:  "AIzaSyBlKy6SaONkrpeZmCaUEtdsQitADa1znks",
    authDomain: "healthinic-web-dev.firebaseapp.com",
    databaseURL: "https://healthinic-web-dev.firebaseio.com",
    projectId: "healthinic-web-dev",
    storageBucket: "healthinic-web-dev.appspot.com",
    messagingSenderId: "559032801660",
    appId: "1:559032801660:web:c25a869c3df48ceb846cf9"
}

const fire=firebase.initializeApp(firebaseConfig)

export default fire;