// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDgdlaI7spN3Onw0myNTgGMJYmuO529NAw',
  authDomain: 'mister-tasker-c7e4c.firebaseapp.com',
  projectId: 'mister-tasker-c7e4c',
  storageBucket: 'mister-tasker-c7e4c.appspot.com',
  messagingSenderId: '22322452195',
  appId: '1:22322452195:web:b4f99eda008938ee3c57d6',
  measurementId: 'G-MS4MHJ34NY',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

async function getTasks(db) {
  const tasksCol = collection(db, 'tasks')
  const taskSnapshot = await getDocs(tasksCol)
  const tasks = taskSnapshot.docs.map((doc) => doc.data())
  console.log(tasks)
  return tasks
}
