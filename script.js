VANTA.NET({
    el: "body", // Set background to entire body

  })
  // Add this script to your JavaScript file or within <script> tags in your HTML file

// Check if speech synthesis is supported
if ('speechSynthesis' in window) {
    const speakButton = document.getElementById('speakButton');
    const aboutMeSection = document.getElementById('about');

    speakButton.addEventListener('click', () => {
        const text = aboutMeSection.innerText;

        // Create a new SpeechSynthesisUtterance object
        const speech = new SpeechSynthesisUtterance(text);

        // Speak the text
        window.speechSynthesis.speak(speech);
    });
} else {
    // Speech synthesis not supported
    console.log('Speech synthesis is not supported in this browser.');
}
