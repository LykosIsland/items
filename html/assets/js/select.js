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

elements.arms.classList.add("activetest");

const renitialise = (exclude) => {
    Object.values(elements).forEach(el => {
        if (el !== exclude) {
            el.classList.remove("activetest");
        }
    });
};

Object.entries(elements).forEach(([key, element]) => {
    element.addEventListener("click", () => {
        renitialise(element); 
        element.classList.add("activetest"); 
    });
});

