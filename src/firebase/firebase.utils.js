import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyADpK4oiNQVxRBQW3BKoV633veamxn9bqY",
    authDomain: "crown-db-a6812.firebaseapp.com",
    databaseURL: "https://crown-db-a6812.firebaseio.com",
    projectId: "crown-db-a6812",
    storageBucket: "crown-db-a6812.appspot.com",
    messagingSenderId: "5604835960",
    appId: "1:5604835960:web:ac40ff1057684a1460e38d",
    measurementId: "G-L3L97LRDXE"
  }

  export  const createUserProfileDocument= async (userAuth,additionalData)=>{
      if(!userAuth) return;
      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot= await userRef.get();
       if(!snapShot.exists){
           const { displayName,email}=userAuth;
           const createdAt=new Date();

           try{
               await userRef.set({
                   displayName,
                   email,
                   createdAt,
                   ...additionalData
               })
           }catch(error){
               console.log('error creating user',error.message);
           }
       }
       return userRef;

  }
  firebase.initializeApp(config);

  export  const auth=firebase.auth();
  export  const  firestore=firebase.firestore();
  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;
  
