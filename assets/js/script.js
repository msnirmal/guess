//** Array of animal images and correct answers */

const animalImages = [
    { 
    questionimage: "assets/images/imageone.jpg",
    correct: "Elephant"
    }, 
    { 
    questionimage: "assets/images/imagetwo.jpg", 
    correct: "Lion"
    },
    {
    questionimage: "assets/images/imagethree.jpg",
    correct: "Tiger"
    },
    {
    questionimage: "assets/images/imagefour.jpg",
    correct: "Horse"
    }, 
    {
    questionimage: "assets/images/imagefive.jpg",
    correct: "Panda"
    }, 
    {
    questionimage: "assets/images/imagesix.jpg",
    correct: "Zebra"
    }, 
    {
    questionimage: "assets/images/imageseven.jpg",
    correct: "Rhinoceros"
    }, 
    {
    questionimage: "assets/images/imageeight.jpg",
    correct: "Cow"
    }, 
    {
    questionimage: "assets/images/imagenine.jpg",
    correct: "Giraffe"
    }, 
    {
    questionimage: "assets/images/imageten.jpg",
    correct: "Monkey"
    }, 
    ];
  
  // Define variables   

  let currentIndex = 0;
  let score = 0;
  
  // Display the quiz and reset the input field

  function showquiz() {
  document.getElementById("quiz-image").src = animalImages[currentIndex].questionimage;
  document.getElementById("guess").value = "";
  document.getElementById("guess").focus();
  document.getElementById("result").innerText = "";
  document.getElementById('next').disabled = true; 
   
  }
  
  //** Validate user answer against correct answer and update score * idea taken from one of the peer project on riddle/

  function checkAnswer() {
  const userGuess = document.getElementById("guess").value.toLowerCase();
  const correctAnswer = animalImages[currentIndex].correct.toLowerCase();
  if (userGuess === correctAnswer) {
    score++; 
    document.getElementById('submit').disabled = true;
    document.getElementById("score").innerText = `You've scored : ${score} out of ${animalImages.length}`;
    document.getElementById("result").innerText = "That's correct! click 'Next' to continue";
    document.getElementById('next').disabled = false;
    } else {
    document.getElementById('submit').disabled = true;
    document.getElementById("result").innerText = "Oops!! That's incorrect, click 'Next'";
    document.getElementById("score").innerText = `You've scored : ${score} out of ${animalImages.length}`;
    document.getElementById('next').disabled = false;
  } 
  
  if (userGuess === ""){
      document.getElementById("result").innerText = "Enter your answer to score";
      document.getElementById('submit').removeAttribute('disabled');
      document.getElementById('next').disabled = true;
    }       
    
  }
  
  //** Function to load the next image/question */

  function nextImage() {
    currentIndex++;
    document.getElementById('submit').removeAttribute('disabled');
    document.getElementById("result").innerText = "";
    if (currentIndex === animalImages.length) {
      document.getElementById("result").innerText = "End of Quiz, click 'Reload'";
      document.getElementById('next').disabled = true;
      document.getElementById('submit').disabled = true;
    } else {
      showquiz();
    }
  }
  
  //** Function to reload quiz */
  function reloadQuiz(){
    window.location.reload();
    document.getElementById("score").innerText = "";
    document.getElementById("result").innerText = "";

  }
  showquiz();
  