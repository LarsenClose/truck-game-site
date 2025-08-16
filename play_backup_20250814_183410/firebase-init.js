// Firebase initialization script
// This ensures Firebase is properly initialized before Flutter loads

// Initialize Firebase immediately
(function() {
  if (typeof firebase !== 'undefined') {
    const firebaseConfig = {
      apiKey: "AIzaSyCA0w6VSqTB4OkH8pabGyqFBtVmSAmjzKQ",
      authDomain: "truck-game-global.firebaseapp.com",
      projectId: "truck-game-global",
      storageBucket: "truck-game-global.firebasestorage.app",
      messagingSenderId: "246957782860",
      appId: "1:246957782860:web:aa16d48bfcef97907541e9",
      measurementId: "G-XXXXXXXXXX"  // Optional, for analytics
    };
    
    // Initialize Firebase if not already initialized
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      console.log('[WEB] Firebase initialized immediately via firebase-init.js');
      
      // Initialize Auth with settings
      const auth = firebase.auth();
      auth.useDeviceLanguage();
      
      // Enable auth persistence
      auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
          console.log('[WEB] Firebase Auth persistence enabled');
        })
        .catch((error) => {
          console.error('[WEB] Error enabling auth persistence:', error);
        });
        
      // Initialize Firestore with settings
      const firestore = firebase.firestore();
      
      // Enable offline persistence for Firestore
      firestore.enablePersistence({ synchronizeTabs: true })
        .then(() => {
          console.log('[WEB] Firestore offline persistence enabled');
        })
        .catch((err) => {
          if (err.code === 'failed-precondition') {
            console.warn('[WEB] Firestore persistence failed: Multiple tabs open');
          } else if (err.code === 'unimplemented') {
            console.warn('[WEB] Firestore persistence not available in this browser');
          }
        });
    } else {
      console.log('[WEB] Firebase already initialized');
    }
  } else {
    console.error('[WEB] Firebase SDK not loaded! Check script tags in index.html');
  }
})();
