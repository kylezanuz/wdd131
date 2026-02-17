const streetFoods = [
    {
        id: 1,
        name: 'Kwek-kwek',
        type: 'Fried',
        description: 'Hard-boiled quail eggs dipped in orange batter and deep-fried until crispy.',
        ingredients: 'Quail eggs, Flour, Cornstarch, Annatto powder',
        image: 'images/kwekkwek.webp'
    },
    {
        id: 2,
        name: 'Isaw',
        type: 'Grilled',
        description: 'Popular street snack made from grilled chicken or pork intestines.',
        ingredients: 'Chicken/Pork Intestines, Vinegar marinade, Spices',
        image: 'images/isaw.webp'
    },
    {
        id: 3,
        name: 'Fish Balls',
        type: 'Fried',
        description: 'Flattened fish-flavored spheres served with sweet or spicy sauce.',
        ingredients: 'Fish meat, Starch, Flavorings',
        image: 'images/fishballs.webp'
    },
    {
        id: 4,
        name: 'Balut',
        type: 'Steam/Others',
        description: 'A developing bird embryo that is boiled and eaten from the shell.',
        ingredients: 'Duck egg, Salt, Vinegar',
        image: 'images/balut.webp'
    },
    {
        id: 5,
        name: 'Taho',
        type: 'Steam/Others',
        description: 'Warm snack made of fresh soft silken tofu, arnibal, and sago pearls.',
        ingredients: 'Tofu, Brown sugar syrup, Tapioca pearls',
        image: 'images/taho.webp'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    initCommon();
    if (document.getElementById('featured-grid')) initHome();
    if (document.getElementById('full-menu-grid')) initMenu();
    if (document.getElementById('street-food-form')) initForm();
});

function initCommon() {

    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    const toggleBtn = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }

    updateVisitCounter();
}

function initHome() {
    const featuredGrid = document.getElementById('featured-grid');

    const featured = streetFoods.slice(0, 3);
    renderFoodItems(featured, featuredGrid);
}

function initMenu() {
    const menuGrid = document.getElementById('full-menu-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    renderFoodItems(streetFoods, menuGrid);

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {

            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            const filteredData = filter === 'all'
                ? streetFoods
                : streetFoods.filter(item => item.type === filter);

            renderFoodItems(filteredData, menuGrid);
        });
    });
}

function initForm() {
    const form = document.getElementById('street-food-form');
    const feedback = document.getElementById('form-feedback');
    const userNameDisplay = document.getElementById('user-name-display');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('fname').value;
        userNameDisplay.textContent = name;

        form.classList.add('hidden');
        feedback.classList.remove('hidden');

        localStorage.setItem('lastSubmission', JSON.stringify({
            name: name,
            date: new Date().toLocaleDateString()
        }));
    });
}

function renderFoodItems(items, container) {

    container.innerHTML = items.map(item => `
        <div class="food-card">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <div class="food-card-content">
                <span class="food-type">${item.type}</span>
                <h4>${item.name}</h4>
                <p>${item.description}</p>
                <p><small><strong>Ingredients:</strong> ${item.ingredients}</small></p>
            </div>
        </div>
    `).join('');
}

function updateVisitCounter() {
    let visits = localStorage.getItem('siteVisits') || 0;
    visits = parseInt(visits) + 1;
    localStorage.setItem('siteVisits', visits);

    const display = document.getElementById('visit-count');
    if (display) display.textContent = visits;
}
