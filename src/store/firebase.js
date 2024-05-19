import { getFirestore, collection } from "firebase/firestore";
import { firebaseApp } from "../firbase/db";

export const db = getFirestore(firebaseApp);

export const taskRef = collection(db, "tasks");