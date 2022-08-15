import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";


// const firebaseConfig = {
//   apiKey: "AIzaSyB80Ku7YQrDO3cpjqGlh1-P16foeI4SGU4",
//   authDomain: "jaymart-e0669.firebaseapp.com",
//   projectId: "jaymart-e0669",
//   storageBucket: "jaymart-e0669.appspot.com",
//   messagingSenderId: "937049196634",
//   appId: "1:937049196634:web:31ef67d4fd22cc5382f063",
//   measurementId: "G-C36HSYMRR9",
// };


// NEW CONFIGURATION

const firebaseConfig = {
  apiKey: "AIzaSyDIWSfpJOWgHrZBrFwgwtxqmj_6lw9e0uU",
  authDomain: "popular-822cd.firebaseapp.com",
  projectId: "popular-822cd",
  storageBucket: "popular-822cd.appspot.com",
  messagingSenderId: "766638867975",
  appId: "1:766638867975:web:a0ead317ab5e1c10becca2",
  measurementId: "G-FRSH322541"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore();