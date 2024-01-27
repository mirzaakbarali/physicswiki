// fetch-sidebar.js

// Use fetch to load sidebar content
fetch('../LICENSE.html')
    .then(response => response.text())
    .then(data => {
        // Insert the fetched content into the sidebar container
        document.getElementById('license').innerHTML = data;
    })
    .catch(error => console.error('Error fetching sidebar content:', error));
