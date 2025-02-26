// Plant Data
const plants = [
    { name: "Aloe Vera", price: 12.99, category: "beginner", image: "assets/images/plants/beginner/aloe_vera.jpg" },
    { name: "Peace Lily", price: 18.98, category: "beginner", image: "assets/images/plants/beginner/peace_lily.jpg" },
    { name: "Snake Plant", price: 15.99, category: "beginner", image: "assets/images/plants/beginner/snake_plant.jpg" },
    { name: "ZZ Plant", price: 35.90, category: "beginner", image: "assets/images/plants/beginner/zz_plant.jpg" },
    { name: "Cactus", price: 9.99, category: "droughtresistant", image: "assets/images/plants/droughtresistant/cactus.jpg" },
    { name: "Pothos", price: 14.99, category: "droughtresistant", image: "assets/images/plants/droughtresistant/pothos.jpg" },
    { name: "Rubber Plant", price: 24.50, category: "droughtresistant", image: "assets/images/plants/droughtresistant/rubber_plant.jpg" },
    { name: "Succulent", price: 10.99, category: "droughtresistant", image: "assets/images/plants/droughtresistant/succulent.jpg" },
    { name: "Anthurium", price: 22.99, category: "longlasting", image: "assets/images/plants/longlasting/anthurium.jpg" },
    { name: "Carnation", price: 19.99, category: "longlasting", image: "assets/images/plants/longlasting/carnation.jpg" },
    { name: "Chrysanthemum", price: 20.50, category: "longlasting", image: "assets/images/plants/longlasting/chrysanthemum.jpg" },
    { name: "Orchid", price: 29.99, category: "longlasting", image: "assets/images/plants/longlasting/orchid.jpg" },
    { name: "Calathea", price: 17.49, category: "lowlight", image: "assets/images/plants/lowlight/calathea.jpg" },
    { name: "Cast Iron Plant", price: 21.99, category: "lowlight", image: "assets/images/plants/lowlight/cast_iron_plant.jpg" },
    { name: "Chinese Evergreen", price: 18.50, category: "lowlight", image: "assets/images/plants/lowlight/chinese_evergreen.jpg" },
    { name: "Pothos", price: 14.99, category: "lowlight", image: "assets/images/plants/lowlight/pothos.jpg" }
];

// Track current state
let currentCategory = 'all';
let currentSort = 'feature';

// Display Plants
function displayPlants(filteredPlants) {
    const shopGrid = document.getElementById('shop-grid');
    shopGrid.innerHTML = '';

    filteredPlants.forEach(plant => {
        shopGrid.innerHTML += `
            <div class="shop-item">
                <img src="${plant.image}" alt="${plant.name}">
                <h3>${plant.name}</h3>
                <p class="price">€${plant.price.toFixed(2)}</p>
                <button onclick="addToCart('${plant.name}', ${plant.price})">Add to Cart</button>
            </div>
        `;
    });
}

// Filter by Category
function filterPlants() {
    currentCategory = document.getElementById('category-filter').value;

    // Trigger sorting after filtering
    applyFilters();
}

// Sort Plants
function sortPlants() {
    currentSort = document.getElementById('sort-filter').value;

    // Trigger filtering after sorting
    applyFilters();
}

// Combined Filtering and Sorting Function
function applyFilters() {
    let filteredPlants = [...plants];

    // Apply Category Filter
    if (currentCategory !== 'all') {
        filteredPlants = plants.filter(plant => plant.category === currentCategory);
    }

    // Apply Sorting
    if (currentSort === 'low-to-high') {
        filteredPlants.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'high-to-low') {
        filteredPlants.sort((a, b) => b.price - a.price);
    }

    // Display Final List
    displayPlants(filteredPlants);
}

// Add to Cart with Toast Notification
function addToCart(plantName, price) {
    // Check if there's already an active toast
    if (document.querySelector('.toast.show')) {
        return; // Prevent multiple toasts
    }

    // Create Toast Element
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = `${plantName} (€${price.toFixed(2)}) added to cart!`;
    document.body.appendChild(toast);

    // Show Toast with Animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    // Hide and Remove Toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}



// Event Listeners for Dropdowns
document.getElementById('category-filter').addEventListener('change', filterPlants);
document.getElementById('sort-filter').addEventListener('change', sortPlants);

// Initial Display
displayPlants(plants);

