// fetch-sidebar.js

// Use fetch to load sidebar content
fetch('sidebar.html')
    .then(response => response.text())
    .then(data => {
        // Insert the fetched content into the sidebar container
        document.getElementById('sidebar-container').innerHTML = data;
    })
    .catch(error => console.error('Error fetching sidebar content:', error));
