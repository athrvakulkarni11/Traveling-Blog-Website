document.addEventListener('DOMContentLoaded', function () {
    const selectLocation = document.getElementById('selectLocation');
    const interviewsContainer = document.getElementById('interviewsContainer');

    // Fetch interviews data
    fetch('interviews.json')
        .then(response => response.json())
        .then(data => {
            // Display all interviews initially
            displayInterviews(data);

            // Add event listener for select location change
            selectLocation.addEventListener('change', function () {
                const selectedLocation = selectLocation.value;
                // Filter interviews based on selected location
                const filteredInterviews = data.filter(interview => interview.location === selectedLocation);
                // Display filtered interviews
                displayInterviews(filteredInterviews);
            });
        })
        .catch(error => console.error('Error loading interviews:', error));

    function displayInterviews(interviews) {
        interviewsContainer.innerHTML = ''; // Clear existing content
        interviews.forEach(interview => {
            const interviewDiv = document.createElement('div');
            interviewDiv.classList.add('interview');
            interviewDiv.innerHTML = `
                <h3>${interview.interviewee}: ${interview.title}</h3>
                <p>${interview.content}</p>
            `;
            interviewsContainer.appendChild(interviewDiv);
        });
    }
});
