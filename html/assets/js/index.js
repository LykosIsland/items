// Elements du DOM
let ContainerItem = document.getElementById("ContainerItem");
let searchInput = document.querySelector(".input-recherche");
let sortButton = document.getElementById("inverse"); // Exemple de bouton de tri

// États initiaux
let draw = "arms";
let searchTerm = "";
let sortOrder = "asc";
let sortBy = "drawable";
let itemslast = [];

// Fonction pour changer de catégorie
function changeDraw(newDraw) {
    draw = newDraw;
    renderItems(itemslast);
}

// Fonction pour gérer la recherche
function handleSearch(event) {
    searchTerm = event.target.value.toLowerCase();
    renderItems(itemslast);
}

// Fonction pour gérer le tri
function handleSort() {
    if (sortBy === "name") {
        sortOrder = sortOrder === "asc" ? "desc" : "asc";
    }
    renderItems(itemslast);
}

// Fonction pour obtenir les éléments triés et filtrés
function getSortedItems(items) {
    let filteredItems = items[draw] || [];

    filteredItems = filteredItems.filter(item => 
        item.Label.toLowerCase().includes(searchTerm)
    );

    filteredItems.sort((a, b) => {
        if (sortBy === "name") {
            return sortOrder === "asc"
                ? a.Label.localeCompare(b.Label)
                : b.Label.localeCompare(a.Label);
        } else if (sortBy === "drawable") {
            return sortOrder === "asc"
                ? a.Drawable - b.Drawable
                : b.Drawable - a.Drawable;
        }
    });

    return filteredItems;
}

let generid = 0;

function renderItems(item) {
    ContainerItem.innerHTML = "";

    const sortedItems = getSortedItems(item);
    let htmlContent = "";
    sortedItems.forEach(item => {
        generid++;
        if (isStaff) {
            htmlContent += `
            <div id="${item.Drawable + item.type}" class="item-clotes" onclick="Preview('${item.Label}', '${item.Price}', '${item.Drawable}', '${item.Texture}', '${item.type}','${item.Img}')">
                <p class="test">${item.Price}$</p>
                <img class="size-img-item" src="${item.Img}" alt="${item.Img}">
                <p class="test2">${item.Label}</p>
                <button class="btn btn-primary" onclick="remove('${item.Drawable}','${item.type}')">remove</button>
            </div>
            `;
        } else {
            htmlContent += `
            <div class="item-clotes" onclick="Preview('${item.Label}', '${item.Price}', '${item.Drawable}', '${item.Texture}', '${item.type}','${item.Img}')">
                <p class="test">${item.Price}$</p>
                <img class="size-img-item" src="${item.Img}" alt="${item.Img}">
                <p class="test2">${item.Label}</p>
            </div>
            `;
        }
    });

    ContainerItem.innerHTML = htmlContent;
}

// Ajout des événements au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    // Événement pour la recherche
    searchInput.addEventListener("input", handleSearch);

    // Événement pour le tri
    sortButton.addEventListener("click", handleSort);

    // Événements pour changer de catégorie
    const elements = {
        arms: document.getElementById("arms"),
        tshirt: document.getElementById("tshirt"),
        torso: document.getElementById("torso"),
        pants: document.getElementById("pants"),
        helmet: document.getElementById("helmet"),
        mask: document.getElementById("mask"),
        glasses: document.getElementById("glasses"),
        shoes: document.getElementById("shoes"),
        bproof: document.getElementById("bproof"),
        bracelets: document.getElementById("bracelets"),
        watches: document.getElementById("watches"),
        bags: document.getElementById("bags"),
        ears: document.getElementById("ears"),
        chain: document.getElementById("chain"),
        decals: document.getElementById("decals"),
    };

    Object.entries(elements).forEach(([key, element]) => {
        element.addEventListener("click", () => {
            changeDraw(element.id);
        });
    });
});

function remove(drawable, type) {
    $.post(`https://${ConfigDev.NameScript}/remove`, JSON.stringify({
        drawable: drawable,
        type: type
    }));
    //remove form array and inerhtml

    const elem = document.getElementById(drawable + type);
    elem.remove();
}
