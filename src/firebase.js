import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyAkCbHVloYJ-8a4FpCUlQ4BS-38O6W_KmY",
    authDomain: "juicers-boosters-472c2.firebaseapp.com",
    projectId: "juicers-boosters-472c2",
    storageBucket: "juicers-boosters-472c2.appspot.com",
    messagingSenderId: "386657488751",
    appId: "1:386657488751:web:de3a9d1e8ca69a0fd1629a"
});

export const auth = app.auth();
export const googlProvider = new firebase.auth.GoogleAuthProvider();
export default app;