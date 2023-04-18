import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";
import { Persistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuUl38bXFY76S6XMa0gAf7dRyWs028I_o",
  authDomain: "food-ordering-app-2ff5b.firebaseapp.com",
  projectId: "food-ordering-app-2ff5b",
  storageBucket: "food-ordering-app-2ff5b.appspot.com",
  messagingSenderId: "500462178986",
  appId: "1:500462178986:web:5d95516f53906ec32876d3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth=getAuth(app)
export {app,db,auth}

