function closePopup() {
    document.getElementById('popupContainer').classList.remove('active');
    document.body.classList.remove('blur');
    // history.back(); // Uncomment this line if you want to navigate back in history
}

// Example function to open the popup
function openPopup() {
    document.getElementById('popupContainer').classList.add('active');
    document.body.classList.add('blur');
}

// Open the popup on page load for demo purposes
window.onload = openPopup;
