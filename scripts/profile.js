function getNameFromAuth() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if a user is signed in:
        if (user) {
            // Do something for the currently logged-in user here: 
            console.log(user.uid); //print the uid in the browser console
            console.log(user.displayName);  //print the user name in the browser console
            userName = user.displayName;
            userEmail = user.email;

            // insert user name using jquery
            $("#name").text(userName);
            $("#email").text(userEmail);

        } else {
            // No user is signed in.
        }
    });
}
getNameFromAuth(); //run the function


// Add a click event listener to the button
document.getElementById("sign-out").addEventListener("click", function () {
    // Call the logout function when the button is clicked
    logout();
    // Redirect to "index.html"
    window.location.href = "index.html";
});
