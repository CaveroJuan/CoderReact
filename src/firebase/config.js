// //CONFIG de BULONERA
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA4uURiCl3gZvf1xnxllxpver0wrWTypbE",
//   authDomain: "ecommerce-bulonera.firebaseapp.com",
//   projectId: "ecommerce-bulonera",
//   storageBucket: "ecommerce-bulonera.appspot.com",
//   messagingSenderId: "1070509372055",
//   appId: "1:1070509372055:web:39933a8331d0d37a56afd2",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// //CONFIG BULONERIA
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA8a7psBpcijbOWSCi7_GPDEZ0R2Xm8kg",
  authDomain: "ecomerce-buloneria.firebaseapp.com",
  projectId: "ecomerce-buloneria",
  storageBucket: "ecomerce-buloneria.appspot.com",
  messagingSenderId: "319323642393",
  appId: "1:319323642393:web:fcec5f2f33b205db4c6888",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
  return app;
}
