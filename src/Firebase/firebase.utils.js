// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut} from "firebase/auth";
    
    import {
      getFirestore,
      doc,
      getDoc,
      setDoc,
      collection,
      writeBatch,
      query,
      getDocs
      
    } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAh7ioQ6ZiDh5enAVD58pAhgsPZ38b77xE",
  authDomain: "crwn-clothing-db-5f232.firebaseapp.com",
  projectId: "crwn-clothing-db-5f232",
  storageBucket: "crwn-clothing-db-5f232.appspot.com",
  messagingSenderId: "569693336951",
  appId: "1:569693336951:web:7fb50efb06f620c8fe5d72"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider=new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt : 'select_account'
});

export const signInWithGoogleRedirect= ()=>signInWithRedirect(auth,googleProvider);
export const db= getFirestore();

export const addCollectionAndDocument=async (collectionKey,objectsToAdd)=>{
  const collectionRef=collection(db,collectionKey);
  const batch=writeBatch(db);  
  objectsToAdd.forEach((object)=>{
  const docRef=doc(collectionRef,object.title.toLowerCase());
  batch.set(docRef,object);    
  });
  await batch.commit();
  console.log(objectsToAdd);
  console.log("Done!");
}
export const getCategoriesAndDocuments= async ()=>{
  const collectionRef=collection(db,'categories');
  const q= query(collectionRef);
  const querySnapshot= await getDocs(q);
  const categoryMap=querySnapshot.docs.reduce((acc,docSnapshot)=>
  {
    const {title,items}=docSnapshot.data();
    acc[title.toLowerCase()]=items
    return acc;
  },{});
  return categoryMap;
}
export const auth=getAuth();
export const creatUserDocumentFromAuth= async (userAuth,additionalInformation={displayName:"mark"})=>{
  console.log(userAuth);
  const userDocRef=doc(db,'users',userAuth.uid);
  const userSnapshot=await getDoc(userDocRef);
  console.log(userSnapshot);
if(!userSnapshot.exists()){
  const{displayName,email}=userAuth;
  const createAt=new Date();
  try{
    await setDoc(userDocRef,{
      displayName,
      email,
      createAt,
      ...additionalInformation
    });
  }
    catch(error){
      console.log("erroe creating the usre",error.message);

    }
  }
    
    return userDocRef;  
};

export const signInWithGooglePopup=()=>signInWithPopup(auth,googleProvider);
export const createAuthUserWithEmailAndPassword= async (email,password)=>{
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth,email,password);
}
export const signInAuthWithEmailAndPassword= async (email,password)=>{
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth,email,password);
}
export const userSignOut=async()=> await signOut(auth);  