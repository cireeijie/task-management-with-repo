import { db } from "@/app/api/firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";

export async function getData(collectionName: string) {
  let data: any[] = [];
  const querySnapshot = await getDocs(collection(db, collectionName));

  querySnapshot.forEach((doc) => {
    let docData = {
      id: doc.id,
      ...doc.data(),
    };

    data.push(docData);
  });

  return data;
}

export async function getDataById(collectionName: string, id: string) {
  const docRef = doc(db, collectionName, id);
  const data = await getDoc(docRef);

  return data.data();
}

export async function deleteDataById(collectionName: string, id: any) {
  await deleteDoc(doc(db, collectionName, id));
}
