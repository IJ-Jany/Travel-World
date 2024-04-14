
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCb6UFdn2c0InsxV4m1A75dCGiO0ulKRAg",
  authDomain: "travel-world-f82a1.firebaseapp.com",
  projectId: "travel-world-f82a1",
  storageBucket: "travel-world-f82a1.appspot.com",
  messagingSenderId: "451048354070",
  appId: "1:451048354070:web:0ef7ad60af225d88246037",
  measurementId: "G-LR6Z0BJ9FZ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig