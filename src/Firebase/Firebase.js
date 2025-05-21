
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: import.meta.apiKey,
  authDomain: import.meta.authDomain,
  projectId: import.meta.projectId,
  storageBucket: import.meta.storageBucket,
  messagingSenderId: import.meta.messagingSenderId,
  appId: import.meta.appId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
