import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCXMFAYrkeYlunZ0nIYIy0bmXtrXnwgUU8",
  authDomain: "myportfolio-f2ecb.firebaseapp.com",
  projectId: "myportfolio-f2ecb",
  storageBucket: "myportfolio-f2ecb.appspot.com",
  messagingSenderId: "781443685588",
  appId: "1:781443685588:web:6055dbff59a571740f6f41"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);