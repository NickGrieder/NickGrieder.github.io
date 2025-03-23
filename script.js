document.addEventListener("DOMContentLoaded", function () {
    const quizContainer = document.getElementById("quiz");
    const resultContainer = document.getElementById("result");
    
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
    
    function displayQuestion() {
        if (questionIndex >= questions.length) {
            showResult();
            return;
        }
        quizContainer.innerHTML = "";
        const questionObj = questions[questionIndex];
        const questionEl = document.createElement("h2");
        questionEl.innerText = questionObj.question;
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
    
    function showResult() {
        quizContainer.style.display = "none";
        const topDestination = Object.keys(destinations).reduce((a, b) => destinations[a] > destinations[b] ? a : b);
        resultContainer.innerText = "Your perfect getaway is: " + topDestination;
        resultContainer.style.display = "block";
    }
    
    displayQuestion();
});
