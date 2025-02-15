// Function to get URL parameter value
        function getQueryParam(param) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(param);
        }

        // Get the text from URL and update the page
        const newText = getQueryParam("text");
        if (newText) {
            document.getElementById("dynamicText").textContent = newText;
        }