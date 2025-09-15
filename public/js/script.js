const textDisplay = document.querySelector(".text-display");
const typingInput = document.querySelector(".typing-input");
const timeElement = document.getElementById("time");
const wpmElement = document.getElementById("wpm");
const accuracyElement = document.getElementById("accuracy");
const timeBtn = document.querySelectorAll(".time-btn");
const textContainer = document.querySelector('.text-container');

const resultForm = document.getElementById("resultForm");
const wpmInput = document.getElementById("wpmInput");
const accuracyInput = document.getElementById("accuracyInput");

//get random text through a API 
let paraTextUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

fetch(paraTextUrl)
  .then(response => response.json())
  .then(data => {
    // Extract the random paragraph from the API response
    let randomParagraph = data.meals[0].strInstructions;
     textDisplay.innerHTML = "";
  console.log("print this para ==================", randomParagraph);

    for (char of randomParagraph) {
      let span = document.createElement("span");
      span.textContent = char;
      span.classList.add("char");
      textDisplay.appendChild(span);
    }

 let displayText = randomParagraph; // Use original paragraph
    let allChars = textDisplay.querySelectorAll(".char");
    let currentCharIndex = 0;
    let correctChars = 0;
    let totalChars = 0;
    let timerInterval;
    let isTestActive = false;
    let startTime;
    let timeLeft = 60; // default

    // time button selection
timeBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    timeLeft = parseInt(btn.value, 10);
     timeElement.textContent = timeLeft;
     timeBtn.forEach(b => b.classList.remove("active"));
    // clicked button ko 'active' class do
    btn.classList.add("active");
    console.log("Selected time:", timeLeft);
  });
});

// adding event listener for input 
typingInput.addEventListener("input", function (e) {
  const typedWord = e.target.value;
  console.log(typedWord);

  
      // Start timer on first input
      if (!isTestActive) {
        isTestActive = true;
        startTime = new Date();
        timerInterval = setInterval(() => {
          timeLeft--;
          timeElement.textContent = timeLeft;
          if (timeLeft <= 0) {
            clearInterval(timerInterval);
            typingInput.disabled = true;
            // Submit result
            wpmInput.value = wpmElement.textContent;
            accuracyInput.value = accuracyElement.textContent;
            resultForm.submit();
          }
        }, 1000);
      }

    // Reset all classes first
    allChars.forEach(char => {
        char.classList.remove('correct', 'incorrect', 'current');
    });
            let displayText = textDisplay.textContent;
console.log('Display Text ', typeof (displayText));

          // Set current character (next to type)
    if (typedWord.length < displayText.length) {
        allChars[typedWord.length].classList.add('current');
    }

        // Compare each character
    for (let i = 0; i < typedWord.length; i++) {
        if (i < displayText.length) {
            if (typedWord[i] === displayText[i]) {
                // Correct character
                allChars[i].classList.add('correct');
            } else {
                // Incorrect character
                allChars[i].classList.add('incorrect');
            }
        }
    }

  
          // Calculate accuracy
      let accuracy = totalChars > 0 ? Math.floor((correctChars / totalChars) * 100) : 100;
      accuracyElement.textContent = accuracy;

            // Calculate WPM (words = 5 chars)
      let elapsed = (new Date() - startTime) / 1000 / 60; // minutes
      let wpm = elapsed > 0 ? Math.floor((correctChars / 5) / elapsed) : 0;
      wpmElement.textContent = wpm;


  const input = typingInput.value;
  console.log()
  totalChars = input.length;

  // Compare with original text
  correctChars = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === displayText[i])
      correctChars++;
  }
// here i added auto scroll :
    const currentChar = allChars[input.length];
    if (currentChar) {
        const containerHeight = textContainer.clientHeight;
        const containerScrollTop = textContainer.scrollTop;
        
        // Get position of current character relative to container
        const charOffsetTop = currentChar.offsetTop - textContainer.offsetTop;
        
        // Auto scroll if character is not visible
        if (charOffsetTop > containerScrollTop + containerHeight - 50) {
            textContainer.scrollTop = charOffsetTop - containerHeight / 2;
        }
  
    }
    // Update current index
    currentCharIndex = typedWord.length;

}) })
  .catch(error => {
    console.error("Error fetching random text:", error);
  });

