const videoUpload = document.getElementById('videoUpload');
const videoPreview = document.getElementById('videoPreview');
const analyzeButton = document.getElementById('analyzeButton');
const feedbackSection = document.getElementById('feedbackSection');
const feedbackList = document.getElementById('feedbackList');

videoUpload.addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    const videoURL = URL.createObjectURL(file);
    videoPreview.src = videoURL;
    videoPreview.classList.remove('hidden');
    analyzeButton.classList.remove('hidden');
    feedbackSection.classList.add('hidden');
    feedbackList.innerHTML = "";
  }
});

analyzeButton.addEventListener('click', function() {
  analyzeButton.textContent = "Analyzing...";
  analyzeButton.disabled = true;

  setTimeout(() => {
    // Simulated AI feedback
    const feedbackData = {
      confidence: "Good eye contact and steady posture observed.",
      nervousHabits: "Occasional hand fidgeting detected.",
      engagement: "Facial expressions show active listening.",
      professionalism: "Formal and appropriate gestures noted."
    };

    feedbackList.innerHTML = `
      <li><strong>Confidence:</strong> ${feedbackData.confidence}</li>
      <li><strong>Nervous Habits:</strong> ${feedbackData.nervousHabits}</li>
      <li><strong>Engagement:</strong> ${feedbackData.engagement}</li>
      <li><strong>Professionalism:</strong> ${feedbackData.professionalism}</li>
    `;

    feedbackSection.classList.remove('hidden');
    analyzeButton.textContent = "Analyze Body Language";
    analyzeButton.disabled = false;
  }, 3000); // Simulating a 3-second analysis time
});