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
        const name1 = result.user.name;

        localStorage.setItem("email", email)
        localStorage.setItem("email", name1)

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
    const querySnapshot = await getDocs(collection(db, "restaurants"));
    const Ads = []
    querySnapshot.forEach((doc) => {
        const data = doc.data()
        // console.log(data)
        data.id = doc.id
        Ads.push(data)
    });
    return Ads

}

async function getIdData(city_id) {
    // console.log(id)
    const docRef = doc(db, "restaurants", city_id);
    const docSnap = await getDoc(docRef)
    // if (docSnap.exists()) {
    //     console.log("Document data:", docSnap.data());
    // } else {
    //     // docSnap.data() will be undefined in this case
    //     console.log("No such document!");
    // }
    return docSnap.data()


    // console.log(docSnap.data());
}

const restro_data = [
    {
        "restaurant_name": "Karachi Biryani House",
        "cuisine_type": "Pakistani",
        "address": {
            "street": "456 Food Street",
            "city": "Karachi",
            "state": "SD",
            "postal_code": "78901"
        },
        "phone": "555-789-1234",
        "menu": [
            {
                "item": "Chicken Biryani",
                "price": 350,
                "item_image_url": "im"

            },
            {
                "item": "Seekh Kebab",
                "price": 200,
                "item_image_url": "im"
            },
            {
                "item": "Gulab Jamun",
                "price": 80,
                "item_image_url": "im"
            }
        ],
        "opening_hours": {
            "monday": "11:00 AM - 10:00 PM",
            "tuesday": "11:00 AM - 10:00 PM",
            "wednesday": "11:00 AM - 10:00 PM",
            "thursday": "11:00 AM - 10:00 PM",
            "friday": "11:00 AM - 11:00 PM",
            "saturday": "12:00 PM - 11:00 PM",
            "sunday": "12:00 PM - 9:00 PM"
        }
    },
    {
        "restaurant_name": "Spice of Lahore",
        "cuisine_type": "Indian",
        "address": {
            "street": "789 Spice Avenue",
            "city": "Karachi",
            "state": "SD",
            "postal_code": "56789"
        },
        "phone": "555-234-5678",
        "menu": [
            {
                "item": "Paneer Tikka",
                "price": 250,
                "item_image_url": "im"
            },
            {
                "item": "Butter Chicken",
                "price": 400,
                "item_image_url": "im"
            },
            {
                "item": "Rasmalai",
                "price": 100,
                "item_image_url": "im"
            }
        ],
        "opening_hours": {
            "monday": "12:00 PM - 9:00 PM",
            "tuesday": "12:00 PM - 9:00 PM",
            "wednesday": "12:00 PM - 9:00 PM",
            "thursday": "12:00 PM - 9:00 PM",
            "friday": "12:00 PM - 10:00 PM",
            "saturday": "1:00 PM - 10:00 PM",
            "sunday": "1:00 PM - 8:00 PM"
        }
    },
    {
        "restaurant_name": "Tandoori Delights",
        "cuisine_type": "Indian",
        "address": {
            "street": "123 Tandoori Lane",
            "city": "Karachi",
            "state": "SD",
            "postal_code": "45678"
        },
        "phone": "555-876-5432",
        "menu": [
            {
                "item": "Naan",
                "price": 40,
                "item_image_url": "im"
            },
            {
                "item": "Tandoori Chicken",
                "price": 300,
                "item_image_url": "im"
            },
            {
                "item": "Gajar Halwa",
                "price": 120,
                "item_image_url": "im"
            }
        ],
        "opening_hours": {
            "monday": "12:00 PM - 8:00 PM",
            "tuesday": "12:00 PM - 8:00 PM",
            "wednesday": "12:00 PM - 8:00 PM",
            "thursday": "12:00 PM - 8:00 PM",
            "friday": "12:00 PM - 9:00 PM",
            "saturday": "1:00 PM - 9:00 PM",
            "sunday": "1:00 PM - 7:00 PM"
        }
    },
    {
        "restaurant_name": "The Seafood Shack",
        "cuisine_type": "Seafood",
        "address": {
            "street": "789 Coastal Road",
            "city": "Karachi",
            "state": "SD",
            "postal_code": "34567"
        },
        "phone": "555-987-6543",
        "menu": [
            {
                "item": "Grilled Fish",
                "price": 400,
                "item_image_url": "im"
            },
            {
                "item": "Shrimp Scampi",
                "price": 350,
                "item_image_url": "im"
            },
            {
                "item": "Lobster Bisque",
                "price": 180,
                "item_image_url": "im"
            }
        ],
        "opening_hours": {
            "monday": "11:00 AM - 9:00 PM",
            "tuesday": "11:00 AM - 9:00 PM",
            "wednesday": "11:00 AM - 9:00 PM",
            "thursday": "11:00 AM - 9:00 PM",
            "friday": "11:00 AM - 10:00 PM",
            "saturday": "12:00 PM - 10:00 PM",
            "sunday": "12:00 PM - 8:00 PM"
        }
    },
    {
        "restaurant_name": "Mughal Garden",
        "cuisine_type": "Mughlai",
        "address": {
            "street": "34 Mughal Street",
            "city": "Karachi",
            "state": "SD",
            "postal_code": "23456"
        },
        "phone": "555-345-6789",
        "menu": [
            {
                "item": "Mutton Korma",
                "price": 280,
                "item_image_url": "im"
            },
            {
                "item": "Biryani",
                "price": 320,
                "item_image_url": "im"
            },
            {
                "item": "Jalebi",
                "price": 80,
                "item_image_url": "im"
            }
        ],
        "opening_hours": {
            "monday": "11:30 AM - 9:30 PM",
            "tuesday": "11:30 AM - 9:30 PM",
            "wednesday": "11:30 AM - 9:30 PM",
            "thursday": "11:30 AM - 9:30 PM",
            "friday": "11:30 AM - 10:30 PM",
            "saturday": "12:30 PM - 10:30 PM",
            "sunday": "12:30 PM - 8:30 PM"
        }
    },
    {
        "restaurant_name": "Sushi Palace",
        "cuisine_type": "Japanese",
        "address": {
            "street": "567 Sushi Lane",
            "city": "Karachi",
            "state": "SD",
            "postal_code": "12345"
        },
        "phone": "555-123-4567",
        "menu": [
            {
                "item": "Sashimi Platter",
                "price": 450,
                "item_image_url": "im"
            },
            {
                "item": "Tempura Udon",
                "price": 350,
                "item_image_url": "im"
            },
            {
                "item": "Green Tea Ice Cream",
                "price": 90,
                "item_image_url": "im"
            }
        ],
        "opening_hours": {
            "monday": "12:00 PM - 9:00 PM",
            "tuesday": "12:00 PM - 9:00 PM",
            "wednesday": "12:00 PM - 9:00 PM",
            "thursday": "12:00 PM - 9:00 PM",
            "friday": "12:00 PM - 10:00 PM",
            "saturday": "1:00 PM - 10:00 PM",
            "sunday": "1:00 PM - 8:00 PM"
        }
    },
    {
        "restaurant_name": "Pizza Haven",
        "cuisine_type": "Italian",
        "address": {
            "street": "789 Pizza Street",
            "city": "Karachi",
            "state": "SD",
            "postal_code": "67890"
        },
        "phone": "555-678-9012",
        "menu": [
            {
                "item": "Margherita Pizza",
                "price": 300,
                "item_image_url": "im"

            },
            {
                "item": "Pepperoni Pizza",
                "price": 350,
                "item_image_url": "im"
            },
            {
                "item": "Tiramisu",
                "price": 150,
                "item_image_url": "im"
            }
        ],
        "opening_hours": {
            "monday": "11:00 AM - 9:00 PM",
            "tuesday": "11:00 AM - 9:00 PM",
            "wednesday": "11:00 AM - 9:00 PM",
            "thursday": "11:00 AM - 9:00 PM",
            "friday": "11:00 AM - 10:00 PM",
            "saturday": "12:00 PM - 10:00 PM",
            "sunday": "12:00 PM - 8:00 PM"
        }
    },
    {
        "restaurant_name": "Falafel Express",
        "cuisine_type": "Middle Eastern",
        "address": {
            "street": "101 Falafel Avenue",
            "city": "Karachi",
            "state": "SD",
            "postal_code": "34512"
        },
        "phone": "555-345-6789",
        "menu": [
            {
                "item": "Falafel Wrap",
                "price": 180,
                "item_image_url": "im"
            },
            {
                "item": "Hummus Plate",
                "price": 150,
                "item_image_url": "im"
            },
            {
                "item": "Baklava",
                "price": 70,
                "item_image_url": "im"
            }
        ],
        "opening_hours": {
            "monday": "11:30 AM - 9:00 PM",
            "tuesday": "11:30 AM - 9:00 PM",
            "wednesday": "11:30 AM - 9:00 PM",
            "thursday": "11:30 AM - 9:00 PM",
            "friday": "11:30 AM - 10:00 PM",
            "saturday": "12:00 PM - 10:00 PM",
            "sunday": "12:00 PM - 8:00 PM"
        }
    },
    {
        "restaurant_name": "Café de Karachi",
        "cuisine_type": "Coffee, Snacks",
        "address": {
            "street": "23 Café Street",
            "city": "Karachi",
            "state": "SD",
            "postal_code": "56789"
        },
        "phone": "555-567-1234",
        "menu": [
            {
                "item": "Espresso",
                "price": 120,
                "item_image_url": "im"
            },
            {
                "item": "Croissant",
                "price": 80,
                "item_image_url": "im"
            },
            {
                "item": "Cheesecake",
                "price": 150,
                "item_image_url": "im"
            }
        ],
        "opening_hours": {
            "monday": "8:00 AM - 9:00 PM",
            "tuesday": "8:00 AM - 9:00 PM",
            "wednesday": "8:00 AM - 9:00 PM",
            "thursday": "8:00 AM - 9:00 PM",
            "friday": "8:00 AM - 10:00 PM",
            "saturday": "9:00 AM - 10:00 PM",
            "sunday": "9:00 AM - 8:00 PM"
        }
    },
    {
        "restaurant_name": "Chapli Kebab Corner",
        "cuisine_type": "Pakistani",
        "address": {
            "street": "786 Kebab Street",
            "city": "Karachi",
            "state": "SD",
            "postal_code": "67890"
        },
        "phone": "555-987-6543",
        "menu": [
            {
                "item": "Chapli Kebab",
                "price": 250,
                "item_image_url": "im"
            },
            {
                "item": "Naan",
                "price": 40,
                "item_image_url": "im"
            },
            {
                "item": "Kheer",
                "price": 100,
                "item_image_url": "im"
            }
        ],
        "opening_hours": {
            "monday": "12:00 PM - 9:00 PM",
            "tuesday": "12:00 PM - 9:00 PM",
            "wednesday": "12:00 PM - 9:00 PM",
            "thursday": "12:00 PM - 9:00 PM",
            "friday": "12:00 PM - 10:00 PM",
            "saturday": "1:00 PM - 10:00 PM",
            "sunday": "1:00 PM - 8:00 PM"
        }
    }
]

const restro_data1 = [
    {
        "restaurant_name": "Karachi Biryani House",
        "cuisine_type": "Pakistani",
        "address": {
            "street": "456 Food Street",
            "city": "Karachi",
            "state": "SD",
            "postal_code": "78901"
        },
        "phone": "555-789-1234",
        "image_url": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "menu_categories": [
            {
                "category_name": "Starters",
                "items": [
                    {
                        "item": "Chicken Samosa",
                        "price": 150,
                        "item_image_url": "https://example.com/chicken_samosa.jpg&quot",
                    },
                    {
                        "item": "Vegetable Pakora",
                        "price": 120,
                        "item_image_url": "https://example.com/vegetable_pakora.jpg&quot",
                    }
                ]
            },
            {
                "category_name": "Main Courses",
                "items": [
                    {
                        "item": "Chicken Biryani",
                        "price": 350,
                        "item_image_url": "https://example.com/chicken_biryani.jpg&quot",
                    },
                    {
                        "item": "Beef Karahi",
                        "price": 300,
                        "item_image_url": "https://example.com/beef_karahi.jpg&quot",
                    }
                ]
            },
            {
                "category_name": "Desserts",
                "items": [
                    {
                        "item": "Gulab Jamun",
                        "price": 80,
                        "item_image_url": "https://example.com/gulab_jamun.jpg&quot",
                    },
                    {
                        "item": "Kheer",
                        "price": 100,
                        "item_image_url": "https://example.com/kheer.jpg&quot",
                    }
                ]
            }
        ],
        "opening_hours": {
            "monday": "11:00 AM - 10:00 PM",
            "tuesday": "11:00 AM - 10:00 PM",
            "wednesday": "11:00 AM - 10:00 PM",
            "thursday": "11:00 AM - 10:00 PM",
            "friday": "11:00 AM - 11:00 PM",
            "saturday": "12:00 PM - 11:00 PM",
            "sunday": "12:00 PM - 9:00 PM"
        }
    },
    {
        "restaurant_name": "Spice of Lahore",
        "cuisine_type": "Indian",
        "address": {
            "street": "789 Spice Avenue",
            "city": "Karachi",
            "state": "SD",
            "postal_code": "56789"
        },
        "phone": "555-234-5678",
        "image_url": "https://images.unsplash.com/photo-1616225273962-05c320ca73d2?auto=format&fit=crop&q=80&w=2128&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "menu_categories": [
            {
                "category_name": "Appetizers",
                "items": [
                    {
                        "item": "Paneer Tikka",
                        "price": 250,
                        "item_image_url": "https://example.com/paneer_tikka.jpg&quot",
                    },
                    {
                        "item": "Samosa Chaat",
                        "price": 180,
                        "item_image_url": "https://example.com/samosa_chaat.jpg&quot",
                    }
                ]
            },
            {
                "category_name": "Main Courses",
                "items": [
                    {
                        "item": "Butter Chicken",
                        "price": 400,
                        "item_image_url": "https://example.com/butter_chicken.jpg&quot",
                    },
                    {
                        "item": "Dal Makhani",
                        "price": 250,
                        "item_image_url": "https://example.com/dal_makhani.jpg&quot",
                    }
                ]
            },
            {
                "category_name": "Desserts",
                "items": [
                    {
                        "item": "Rasmalai",
                        "price": 100,
                        "item_image_url": "https://example.com/rasmalai.jpg&quot",
                    },
                    {
                        "item": "Gulab Jamun",
                        "price": 80,
                        "item_image_url": "https://example.com/gulab_jamun_indian.jpg&quot",
                    }
                ]
            }
        ],
        "opening_hours": {
            "monday": "12:00 PM - 9:00 PM",
            "tuesday": "12:00 PM - 9:00 PM",
            "wednesday": "12:00 PM - 9:00 PM",
            "thursday": "12:00 PM - 9:00 PM",
            "friday": "12:00 PM - 10:00 PM",
            "saturday": "1:00 PM - 10:00 PM",
            "sunday": "1:00 PM - 8:00 PM"
        }
    },
    {
        "restaurant_name": "Tandoori Delights",
        "cuisine_type": "Indian",
        "address": {
            "street": "123 Tandoori Lane",
            "city": "Karachi",
            "state": "SD",
            "postal_code": "45678"
        },
        "phone": "555-876-5432",
        "image_url": "https://images.unsplash.com/photo-1628294896516-344152572ee8?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "menu_categories": [
            {
                "category_name": "Breads",
                "items": [
                    {
                        "item": "Naan",
                        "price": 40,
                        "item_image_url": "https://example.com/naan.jpg&quot",
                    },
                    {
                        "item": "Roti",
                        "price": 30,
                        "item_image_url": "https://example.com/roti.jpg&quot",
                    }
                ]
            },
            {
                "category_name": "Grilled Delights",
                "items": [
                    {
                        "item": "Tandoori Chicken",
                        "price": 300,
                        "item_image_url": "https://example.com/tandoori_chicken.jpg&quot",
                    },
                    {
                        "item": "Seekh Kebab",
                        "price": 250,
                        "item_image_url": "https://example.com/seekh_kebab_tandoori.jpg&quot",
                    }
                ]
            },
            {
                "category_name": "Desserts",
                "items": [
                    {
                        "item": "Gulab Jamun",
                        "price": 80,
                        "item_image_url": "https://example.com/gulab_jamun_tandoori.jpg&quot",
                    },
                    {
                        "item": "Kulfi",
                        "price": 90,
                        "item_image_url": "https://example.com/kulfi.jpg&quot",
                    }
                ]
            }
        ],
        "opening_hours": {
            "monday": "12:00 PM - 8:00 PM",
            "tuesday": "12:00 PM - 8:00 PM",
            "wednesday": "12:00 PM - 8:00 PM",
            "thursday": "12:00 PM - 8:00 PM",
            "friday": "12:00 PM - 9:00 PM",
            "saturday": "1:00 PM - 9:00 PM",
            "sunday": "1:00 PM - 7:00 PM"
        }
    }
]

function postRestaurants() {
    try {
        for (var i = 0; i < restro_data1.length; i++) {
            addDoc(collection(db, "newRestaurants"), restro_data1[i])
        }
    } catch (e) {
        Swal.fire(e.message)
    }

}




export {
    Login,
    register,
    postAds,
    getData,
    getIdData,
    signINWithGoogle,
    postRestaurants,
}

