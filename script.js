const destinations = [
    {
        name: "Avila Hot Springs",
        image: "https://www.avilahotsprings.com/image.jpg",  // Replace with actual image link
        description: "A relaxing retreat with natural hot springs near the beach.",
        link: "https://www.avilahotsprings.com"
    },
    {
        name: "Paso Robles",
        image: "https://www.travelpaso.com/image.jpg",  // Replace with actual image link
        description: "Wine country escape with luxurious hot springs and vineyard views.",
        link: "https://www.travelpaso.com"
    }
];

document.addEventListener("DOMContentLoaded", function () {
    const destinationsContainer = document.getElementById("destinations");

    destinations.forEach(place => {
        const card = document.createElement("div");
        card.className = "destination-card";
        card.innerHTML = `
            <img src="${place.image}" alt="${place.name}">
            <h2>${place.name}</h2>
            <p>${place.description}</p>
            <a href="${place.link}" target="_blank">
                <button>Learn More</button>
            </a>
        `;
        destinationsContainer.appendChild(card);
    });

    const surpriseButton = document.getElementById("surprise-btn");
    const surpriseText = document.getElementById("surprise-text");

    surpriseButton.addEventListener("click", function () {
        surpriseText.innerText = "We’re going to **Avila Hot Springs!** 🏖️💆‍♀️";
        surpriseText.classList.remove("hidden");
    });
});
