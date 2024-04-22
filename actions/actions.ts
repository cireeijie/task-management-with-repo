import { db } from "@/app/api/firebase";
import { collection, getDocs } from "firebase/firestore";

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
