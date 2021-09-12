import { firebase } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBDDpEwdYC-OrwhsMCLFtbtVhETJTFhgPQ",
  authDomain: "nwitter-cb592.firebaseapp.com",
  projectId: "nwitter-cb592",
  storageBucket: "nwitter-cb592.appspot.com",
  messagingSenderId: "83937000859",
  appId: "1:83937000859:web:18e9499e563664c8ba353e"
};

export default firebase.initializeApp(firebaseConfig);