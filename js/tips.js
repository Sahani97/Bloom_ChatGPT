document.querySelectorAll('.tip-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        const detailView = document.getElementById('detail-view');
        document.querySelector('.detail-title').innerText = card.querySelector('h2').innerText;
        detailView.classList.add('active');
        setTimeout(() => {
            detailView.style.opacity = '1';
        }, 10);
    });
});

function closeDetail() {
    const detailView = document.getElementById('detail-view');
    detailView.style.opacity = '0';
    setTimeout(() => {
        detailView.classList.remove('active');
    }, 500);
}

const plantData = {
    beginners: [
        {
            name: "Snake Plant (Sansevieria)",
            image: "assets/images/plants/beginner/snake_plant.jpg",
            description: "This hardy plant thrives on neglect, making it perfect for beginners. It prefers bright, indirect light but can tolerate low light. Water sparingly, allowing the soil to dry out completely between waterings, as overwatering can lead to root rot. It’s also an excellent air purifier."
        },
        {
            name: "ZZ Plant (Zamioculcas zamiifolia)",
            image: "assets/images/plants/beginner/zz_plant.jpg",
            description: "The ZZ plant is nearly indestructible, tolerating low light and irregular watering. It stores water in its rhizomes, so let the soil dry completely before watering. Avoid direct sunlight, as it can scorch the leaves. This plant is perfect for offices or low-maintenance indoor spaces."
        },
        {
            name: "Aloe Vera",
            image: "assets/images/plants/beginner/aloe_vera.jpg",
            description: "Aloe thrives in bright, indirect sunlight and well-draining soil. Water deeply but infrequently, allowing the soil to dry out completely between waterings. Be cautious of overwatering, as it can cause root rot. It’s also a great medicinal plant, with its gel soothing burns and skin irritations."
        },
        {
            name: "Peace Lily (Spathiphyllum)",
            image: "assets/images/plants/beginner/peace_lily.jpg",
            description: "This elegant plant prefers low to medium, indirect light and thrives in consistently moist soil. Water when the top inch of soil is dry, and mist the leaves for added humidity. It’s a natural air purifier but can be toxic to pets if ingested."
        }
    ],
    longlasting: [
        {
            name: "Anthurium",
            image: "assets/images/plants/longlasting/anthurium.jpg",
            description: "Anthuriums are long-lasting flowering plants that thrive in bright, indirect light but can tolerate lower light conditions. Keep the soil slightly moist but not soggy, watering only when the top inch feels dry."
        },
        {
            name: "Carnation",
            image: "assets/images/plants/longlasting/carnation.jpg",
            description: "Carnations are hardy flowers that can last a long time both in pots and as cut flowers. They prefer bright, indirect sunlight and well-draining soil."
        },
        {
            name: "Chrysanthemum",
            image: "assets/images/plants/longlasting/chrysanthemum.jpg",
            description: "Chrysanthemums are popular for their long-lasting blooms and resilience. They thrive in bright light and require regular watering, ensuring the soil stays slightly moist."
        },
        {
            name: "Orchid",
            image: "assets/images/plants/longlasting/orchid.jpg",
            description: "Orchids are elegant, long-lasting flowering plants that prefer indirect light and a well-draining orchid potting mix. Water about once a week."
        }
    ],
    lowlight: [
        {
            name: "Calathea",
            image: "assets/images/plants/lowlight/calathea.jpg",
            description: "Calatheas thrive in low to medium indirect light, making them perfect for dimly lit spaces. They enjoy consistently moist soil but dislike standing water."
        },
        {
            name: "Cast Iron Plant",
            image: "assets/images/plants/lowlight/cast_iron_plant.jpg",
            description: "As its name suggests, the Cast Iron Plant is nearly indestructible and can thrive in very low light conditions. It requires minimal watering."
        },
        {
            name: "Chinese Evergreen",
            image: "assets/images/plants/lowlight/chinese_evergreen.jpg",
            description: "Chinese Evergreens are highly adaptable plants that tolerate low light and occasional drought. Water only when the soil feels dry."
        },
        {
            name: "Pothos",
            image: "assets/images/plants/lowlight/pothos.jpg",
            description: "Pothos is one of the easiest plants to grow in low light. It can survive in almost any condition, including dim corners or office spaces."
        }
    ],
    droughtresistant: [
        {
            name: "Cactus",
            image: "assets/images/plants/droughtresistant/cactus.jpg",
            description: "Cacti are among the most drought-tolerant plants, requiring watering only every few weeks. They thrive in bright, direct sunlight."
        },
        {
            name: "Pothos",
            image: "assets/images/plants/droughtresistant/pothos.jpg",
            description: "Pothos is not only great for low light but also requires minimal watering. It can go a week or two without water."
        },
        {
            name: "Rubber Plant",
            image: "assets/images/plants/droughtresistant/rubber_plant.jpg",
            description: "Rubber plants store water in their thick leaves, allowing them to survive with infrequent watering."
        },
        {
            name: "Succulent",
            image: "assets/images/plants/droughtresistant/succulent.jpg",
            description: "Succulents come in many varieties, all of which require very little water. They prefer bright light and should only be watered when their soil is completely dry."
        }
    ]
};

document.querySelectorAll('.tip-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        const detailView = document.getElementById('detail-view');
        const plantGrid = document.getElementById('plant-grid');
        plantGrid.innerHTML = "";

        plantData[category].forEach(plant => {
            const plantItem = `
                <div class="plant-item">
                    <img src="${plant.image}" alt="${plant.name}">
                    <h3>${plant.name}</h3>
                    <p>${plant.description}</p>
                </div>
            `;
            plantGrid.innerHTML += plantItem;
        });

        document.querySelector('.detail-title').innerText = card.querySelector('h2').innerText;
        detailView.classList.add('active');
    });
});

