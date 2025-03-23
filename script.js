document.addEventListener("DOMContentLoaded", function () {
    const startScreen = document.getElementById("start-screen");
    const quizContainer = document.getElementById("quiz-container");
    const resultContainer = document.getElementById("result");
    const startButton = document.getElementById("start-btn");

    const questions = [
        {
            question: "Do you prefer the beach or the mountains?",
            options: { "Beach": "San Diego", "Mountains": "Big Sur" }
        },
        {
            question: "Would you rather relax in nature or explore a city?",
            options: { "Nature": "Sequoia", "City": "Ojai" }
        },
        {
            question: "What is your favorite of these animals?",
            options: { "Otter": "San Diego", "Deer": "Big Sur", "Bear": "Sequoia", "Fox": "Ojai" }
        },
        {
            question: "What biome do you like the most?",
            options: { "Mountains": "Big Sur", "Vineyards": "Ojai", "Beach": "San Diego", "Forest": "Sequoia" }
        }
    ];

    const destinations = { "Big Sur": 0, "Sequoia": 0, "San Diego": 0, "Ojai": 0 };
    let questionIndex = 0;

    // Show confetti animation when starting
    function startConfetti() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }

    // Show the quiz after clicking the "Start" button
    startButton.addEventListener("click", function () {
        startScreen.style.display = "none";
        quizContainer.style.display = "block";
        startConfetti(); // Show confetti when starting the quiz
        displayQuestion();
    });

    // Display the quiz questions and options
    function displayQuestion() {
        if (questionIndex >= questions.length) {
            showResult();
            return;
        }

        const questionObj = questions[questionIndex];
        const questionEl = document.createElement("h2");
        questionEl.innerText = questionObj.question;
        quizContainer.innerHTML = ""; // Clear previous question

        quizContainer.appendChild(questionEl);

        Object.keys(questionObj.options).forEach(option => {
            const button = document.createElement("button");
            button.innerText = option;
            button.onclick = () => {
                const destination = questionObj.options[option];
                destinations[destination]++;
                questionIndex++;
                displayQuestion();
            };
            quizContainer.appendChild(button);
        });
    }

    // Show the result after the quiz is completed
    function showResult() {
        quizContainer.style.display = "none"; // Hide the quiz
        resultContainer.style.display = "block"; // Show the result

        // Find the destination with the highest score
        const topDestination = Object.keys(destinations).reduce((a, b) => destinations[a] > destinations[b] ? a : b);

        // Show the result with images of the destination
        resultContainer.innerHTML = `
            <h2>Your perfect getaway is: <span>${topDestination}</span></h2>
            <div class="images-container">
                <img src="images/${topDestination.toLowerCase().replace(" ", "-")}-1.jpg" alt="${topDestination} 1" class="result-image">
                <img src="images/${topDestination.toLowerCase().replace(" ", "-")}-2.jpg" alt="${topDestination} 2" class="result-image">
            </div>
            <p>Enjoy your time in ${topDestination}!</p>
        `;
    }
});
