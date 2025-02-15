 // Retrieve the stored URL from localStorage
 const storedURL = localStorage.getItem("finalPageURL");

 // Get the link element
 const dynamicLink = document.getElementById("dynamicLink");

 // Update the href dynamically
 if (storedURL) {
     dynamicLink.href = storedURL;
 } else {
     dynamicLink.href = "https://youtu.be/default"; // Default link if nothing is stored
 }