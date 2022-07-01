import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA9OG4RMPriq4-vDW2lI76uf9jmbMk0cZY",
  authDomain: "desafio-hooklab.firebaseapp.com",
  projectId: "desafio-hooklab",
  storageBucket: "desafio-hooklab.appspot.com",
  messagingSenderId: "886047905657",
  appId: "1:886047905657:web:01acd73de5fc3e0d57c1a8"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }