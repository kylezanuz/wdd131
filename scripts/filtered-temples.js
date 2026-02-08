const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Manila Philippines",
        location: "Quezon City, Metro Manila, Philippines",
        dedicated: "1984, September, 25",
        area: 26683,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/029-Manila-Philippines-Temple.jpg"
    },
    {
        templeName: "Cebu City Philippines",
        location: "Cebu City, Cebu, Philippines",
        dedicated: "2010, June, 13",
        area: 29556,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/133-Cebu-City-Philippines-Temple.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 40000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
    }
];

temples.sort((a, b) => a.templeName.localeCompare(b.templeName));

const templeGrid = document.getElementById("temple-grid");
const filterTitle = document.getElementById("filter-title");

function displayTemples(filteredTemples) {
    templeGrid.innerHTML = "";
    // Sort alphabetically by name
    const sorted = [...filteredTemples].sort((a, b) => a.templeName.localeCompare(b.templeName));

    sorted.forEach(temple => {
        const card = document.createElement("div");
        card.className = "temple-card";
        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;
        templeGrid.appendChild(card);
    });
}

document.getElementById("home").addEventListener("click", () => {
    filterTitle.textContent = "Home";
    displayTemples(temples);
});

document.getElementById("old").addEventListener("click", () => {
    filterTitle.textContent = "Old";
    const oldTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
    displayTemples(oldTemples);
});

document.getElementById("new").addEventListener("click", () => {
    filterTitle.textContent = "New";
    const newTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
    displayTemples(newTemples);
});

document.getElementById("large").addEventListener("click", () => {
    filterTitle.textContent = "Large";
    const largeTemples = temples.filter(t => t.area > 90000);
    displayTemples(largeTemples);
});

document.getElementById("small").addEventListener("click", () => {
    filterTitle.textContent = "Small";
    const smallTemples = temples.filter(t => t.area < 10000);
    displayTemples(smallTemples);
});

// Footer logic
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Initial display
displayTemples(temples);