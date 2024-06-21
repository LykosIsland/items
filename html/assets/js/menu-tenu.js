let displaytenuitemcontainer = false; // Cela commence à false

const tenuMenu = document.getElementById("tenu-menu");
const sidebar = document.getElementById("side-bar-clhotes");
const contenuclotes = document.getElementById("contenu-clhlotes");
const menufooteractive = document.getElementById("menufooteractive");
const searchinput = document.getElementById("searchinput");
const searhbarrighticon = document.getElementById("searh-bar-right-icon");

tenuMenu.addEventListener("click", () => {
    displaytenuitemcontainer = !displaytenuitemcontainer; // Bascule la variable

    forechvisibme(displaytenuitemcontainer); // Appelle la fonction avec le nouvel état
    // Basculer les classes CSS
    
    sidebar.classList.toggle("displayellementactive");
    contenuclotes.classList.toggle("clhotescontenuopen");
    menufooteractive.classList.toggle("displayellementactive");
    searchinput.classList.toggle("displayellementactive");
    searhbarrighticon.classList.toggle("displayellementactive");

    if (tenuMenu.querySelector("i").classList.contains("fa-child-reaching")) {
        tenuMenu.querySelector("i").classList.remove("fa-child-reaching");
        tenuMenu.querySelector("i").classList.add("fa-bags-shopping");
    } else {
        tenuMenu.querySelector("i").classList.remove("fa-bags-shopping");
        tenuMenu.querySelector("i").classList.add("fa-child-reaching");
    }
});

function displayTenuItemContainerIf() {
    if (displaytenuitemcontainer) {
        displaytenuitemcontainer = !displaytenuitemcontainer; // Bascule la variable
         forechvisibme(displaytenuitemcontainer); // Appelle la fonction avec le nouvel état
         // Basculer les classes CSS

         sidebar.classList.toggle("displayellementactive");
         contenuclotes.classList.toggle("clhotescontenuopen");
         menufooteractive.classList.toggle("displayellementactive");
         searchinput.classList.toggle("displayellementactive");
         searhbarrighticon.classList.toggle("displayellementactive");

        if (tenuMenu.querySelector("i").classList.contains("fa-child-reaching")) {
             tenuMenu.querySelector("i").classList.remove("fa-child-reaching");
             tenuMenu.querySelector("i").classList.add("fa-bags-shopping");
        } else {
             tenuMenu.querySelector("i").classList.remove("fa-bags-shopping");
             tenuMenu.querySelector("i").classList.add("fa-child-reaching");
        }
    }
}
