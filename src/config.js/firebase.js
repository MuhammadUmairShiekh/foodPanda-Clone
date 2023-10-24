import { initializeApp } from
    "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword }
    from "firebase/auth";
import { getFirestore, collection, query, where, addDoc, getDocs, doc, getDoc } from
    "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Swal from 'sweetalert2'
const firebaseConfig = {
    apiKey: "AIzaSyBZpwM1spUIYQCde8HafFL87owmYn0XCg4",
    authDomain: "clonefoodpanda.firebaseapp.com",
    projectId: "clonefoodpanda",
    storageBucket: "clonefoodpanda.appspot.com",
    messagingSenderId: "709558519842",
    appId: "1:709558519842:web:6c3c7da6b6e7f52f77a27b"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

async function signINWithGoogle() {
    try {
    const result = await signInWithPopup(auth, provider)
          const email = result.user.email;
          
          localStorage.setItem("email",email)

    } catch (e) {

        Swal.fire(e.message)
    }

}

async function register(email, password, fullName, lastName) {
    try {
        await createUserWithEmailAndPassword(auth, email, password, fullName, lastName)
        await addDoc(collection(db, "users"), {
            fullName,
            lastName,
            email
        });
        Swal.fire("Acct Created !")

    } catch (e) {

        Swal.fire(e.message)
    }

}
function Login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)

}

async function postAds({ tittle, city, address, price, number, time, item, item1, item2, price1, price2, file }) {
    try {
        const url = await uploadImages(file)
        const data = { tittle, city, address, price: +price, number, time, item, item1, item2, price1: +price1, price2: price2, image: url }
        await addDoc(collection(db, "restaurant"), data);
        Swal.fire({
            icon: 'success',
            title: 'Posted...',
            text: 'Your Ad Has been Post!',
        })
    } catch (e) {
        Swal.fire(e.message)
    }
}

async function uploadImages(file) {

    const storageRef = ref(storage, 'AdsImage/' + file.name);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef)
    return url

}
async function getData() {
    const querySnapshot = await getDocs(collection(db, "restaurant"));
    const Ads = []
    querySnapshot.forEach((doc) => {
        const data = doc.data()
        data.id = doc.id
        Ads.push(data)
    });
    return Ads

}

async function getIdData(id) {
    // console.log(id)
    const docRef = doc(db, "restaurant", id);
    const docSnap = await getDoc(docRef)
    return docSnap.data()

    // console.log(docSnap.data());
}





export {
    Login,
    register,
    postAds,
    getData,
    getIdData,
    signINWithGoogle,
}