import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore, collection, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// Global variables (only db is needed for this form)
let db;

// Function to get Firebase config
async function getFirebaseConfig() {
    try {
        const response = await fetch('https://us-central1-lexio-app.cloudfunctions.net/getFirebaseConfig');
        if (!response.ok) {
            throw new Error(`Failed to fetch Firebase config: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching Firebase config:", error);
        // Consider showing a user-friendly error message here, perhaps in a designated error display area on the page.
        return null; // Return null to indicate failure
    }
}

// Initialize Firebase App and Firestore
async function initializeFirebase() {
    const config = await getFirebaseConfig();
    if (!config) return; // Exit if config fetch failed

    const app = initializeApp(config);
    db = getFirestore(app);
}

// Initialize Firebase (call the combined function)
initializeFirebase();

// Event listener for the contact form
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    if (form) {
        form.addEventListener('submit', async function (event) { // Make the event handler async
            event.preventDefault();

            const name = document.getElementById('contact-name').value.trim();
            const email = document.getElementById('contact-email').value.trim();
            const message = document.getElementById('contact-message').value.trim();

            // Input validation
            if (!name || !email || !message) {
              showPopup('Please fill in all fields.', 'red'); // Use showPopup for errors
              return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
              showPopup('Please enter a valid email address.', 'red');
              return;
            }

            // Disable the submit button to prevent multiple submissions
            const submitButton = this.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...'; // Provide feedback


            try {
                // Use addDoc to create a new document
                await addDoc(collection(db, "messages"), {
                    name: name,
                    email: email,
                    message: message,
                    timestamp: Timestamp.now() // Use Firebase Timestamp
                });

                showPopup('Message sent!', 'green');  // Success popup
                this.reset(); // Reset form

            } catch (error) {
                console.error("Error writing message to Firestore:", error);
                showPopup('An error occurred. Please try again later.', 'red'); // Error popup
            } finally {
                // Re-enable the submit button
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message'; // Reset button text
            }
        });
    }
});

// Function to display the popup
function showPopup(message, backgroundColor) {
  const popup = document.createElement('div');
  popup.textContent = message;
  popup.style.backgroundColor = backgroundColor;
  popup.style.color = 'white';
  popup.style.padding = '10px';
  popup.style.borderRadius = '5px';
  popup.style.position = 'fixed';
  popup.style.top = '20px';
  popup.style.left = '50%';
  popup.style.transform = 'translateX(-50%)';
  popup.style.zIndex = '1000';
  popup.style.opacity = '0';
  popup.style.transition = 'opacity 0.5s ease-in-out';

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.style.opacity = '1';
  }, 10);

  setTimeout(() => {
    popup.style.opacity = '0';
    setTimeout(() => {
      popup.remove();
    }, 500);
  }, 2000);
}