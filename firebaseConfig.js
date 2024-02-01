import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAgjWcKk-iV2-PT3HnYsANaN2P307LUlGo",
  authDomain: "monkey-repellent.firebaseapp.com",
  databaseURL: "https://monkey-repellent-default-rtdb.firebaseio.com",
  projectId: "monkey-repellent",
  storageBucket: "monkey-repellent.appspot.com",
  messagingSenderId: "551907518072",
  appId: "1:551907518072:web:fcd048de80c22163666f8d",
  measurementId: "G-E89PVEQPHF"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);