document.addEventListener('DOMContentLoaded', function () {
    const selectLocation = document.getElementById('selectLocation');
    const storiesContainer = document.getElementById('storiesContainer');

    // Fetch stories data
    fetch('stories.json')
        .then(response => response.json())
        .then(data => {
            // Display all stories initially
            displayStories(data);

            // Add event listener for select location change
            selectLocation.addEventListener('change', function () {
                const selectedLocation = selectLocation.value;
                // Filter stories based on selected location
                const filteredStories = data.filter(story => story.location === selectedLocation);
                // Display filtered stories
                displayStories(filteredStories);
            });
        })
        .catch(error => console.error('Error loading stories:', error));

    function displayStories(stories) {
        storiesContainer.innerHTML = ''; // Clear existing content
        stories.forEach(story => {
            const storyDiv = document.createElement('div');
            storyDiv.classList.add('story');
            storyDiv.innerHTML = `
                <h3>${story.title}</h3>
                <p>${story.content}</p>
            `;
            storiesContainer.appendChild(storyDiv);
        });
    }
});
