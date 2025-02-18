import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js"; // Only getAuth
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// Global variables
let auth;
let db;
let app;

// Function to get Firebase config
async function getFirebaseConfig() {
  try {
    const response = await fetch('https://us-central1-lexio-app.cloudfunctions.net/getFirebaseConfig');
    if (!response.ok) {
      throw new Error('Failed to fetch Firebase config');
    }
    const config = await response.json();
    return config;
  } catch (error) {
    console.error("Errore nel recupero della configurazione Firebase:", error);
    throw error;
  }
}

// Initialize Firebase App
async function initializeFirebaseApp() {
  const config = await getFirebaseConfig();
  app = initializeApp(config);
  return app;
}

// Initialize only Firestore (we don't need Auth for the contact form)
function initializeFirebaseAuth(initializedApp) {
  db = getFirestore(initializedApp);
}

// Initialize Firebase
initializeFirebaseApp()
  .then(app => {
    if (app) {
      initializeFirebaseAuth(app);
    }
  })
  .catch(error => {
    console.error("Errore durante l'inizializzazione dell'app Firebase:", error);
  });

// Event listener for the contact form
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('contact-name').value;
  const email = document.getElementById('contact-email').value;
  const message = document.getElementById('contact-message').value;

  // Input validation
  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Use addDoc to create a new document with a unique ID
  addDoc(collection(db, "messages"), {
    name: name,
    email: email,
    message: message,
    timestamp: new Date() // Add a timestamp
  })
    .then(() => {
      this.reset();
      alert('Thank you for your message!');
    })
    .catch((error) => {
      console.error("Error writing message to Firestore:", error);
      alert('An error occurred. Please try again later.');
    });
});
