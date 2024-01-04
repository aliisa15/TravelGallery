import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVKzwHY9ETD1hkRCRbSk7K2RzZPlm-lAs",
  authDomain: "satsivu.firebaseapp.com",
  databaseURL: "https://satsivu-default-rtdb.firebaseio.com",
  projectId: "satsivu",
  storageBucket: "satsivu.appspot.com",
  messagingSenderId: "178273293097",
  appId: "1:178273293097:web:b01e10a06e926e869c9d38",
  measurementId: "G-47HE0W275M"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };