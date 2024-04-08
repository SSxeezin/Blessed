const firebaseConfig = {
    apiKey: "AIzaSyAvDD0JLh_m_hiOI-M8vIV4_QohZssoJE0",
    authDomain: "contactformblessed.firebaseapp.com",
    databaseURL: "https://contactformblessed-default-rtdb.firebaseio.com",
    projectId: "contactformblessed",
    storageBucket: "contactformblessed.appspot.com",
    messagingSenderId: "215494234020",
    appId: "1:215494234020:web:bec4b530a23ad5ee1ffb31",
    measurementId: "G-8QMTVRNFM2"
  };

// initilise firebase
firebase.initilizeApp(firebaseConfig);

//reference database
const contactFormDB = firebase.database().ref('contactformblessed')

document.getElementById('contactformblessed').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var FullName = getElementVal('fullName');
    var Email = getElementVal ('email');
    var PhoneNumber = getElementVal ('phoneNumber');
    var YourMessage = getElementVal ('message');

    saveMessages(FullName, Email, PhoneNumber, YourMessage);

    // enable alert
    document.querySelector('.alert').style.display = "block";

    // removing it

    setTimeout(() => {
        document.querySelector('.alert').style.display = "none";
    }, 3000);

    // reset the form

    document.getElementById('contactformblessed').reset();
}

const saveMessages = (FullName, Email, PhoneNumber, YourMessage) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        FullName : fullName,
        Email : email,
        PhoneNumber : phoneNumber, 
        YourMessage : message,
    })
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
}