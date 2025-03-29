import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyACR7_RbgpOg1JLt6UwuG6I1xH5lYOXS5I",
  authDomain: "airbnbe-b0779.firebaseapp.com",
  projectId: "airbnbe-b0779",
  storageBucket: "airbnbe-b0779.firebasestorage.app",
  messagingSenderId: "691149767342",
  appId: "1:691149767342:web:07ad357be33e314fcca33f"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);
const storage = getStorage(app);
export { app, auth, db, storage };