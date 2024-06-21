const EventOpenMenuAchat = document.getElementById("Event-open-menu-achat")
const diplayMenuPayment = document.getElementById("affiche-menu-payment")
const closeMenu = document.getElementById("close-menu")
const item_acheter = document.getElementById("item_acheter")
const affiche_total_price = document.getElementById("affiche-total-price")
const Achat_item_press_btn = document.getElementById("Achat-item-press-btn")
const message_erreur = document.getElementById("message-erreur")


let calculItemPriceTotal = 0

EventOpenMenuAchat.addEventListener("click", () => {
    diplayMenuPayment.style.display = "block";
    GetItemTable()
})


closeMenu.addEventListener("click", () => { 
    diplayMenuPayment.style.display = "none";
    calculItemPriceTotal = 0
})


let itemAcheter = []


function GetItemTable() {
    calculItemPriceTotal = 0; 
    item_acheter.innerHTML = ``;
    if (itemAcheter.length === 0) {
        message_erreur.style.display = "block";
    } else {
        message_erreur.style.display = "none";
        itemAcheter.forEach((element, index) => {
            calculItemPriceTotal += Number(element.price);
            item_acheter.innerHTML += `

            <div class="item_achat" id="item_${index}">
                <p class="style_texte_info_price">- ${element.name}</p>
                <div class="price_and_delete">
                    <p  class="price_item_achat">${element.price} $</p>
                    <a class="style_texte_info_price delete" href="#" onclick="deleteItem(${index})"><i class="fa-solid fa-trash"></i></a>
                </div>                    
            </div>
            
            `;
        });

        GetPrice();
    }
}

function GetPrice() {
    affiche_total_price.textContent = calculItemPriceTotal + " $ "; 
}

Achat_item_press_btn.addEventListener("click", () => {
    itemAcheter.forEach((itemInfo) =>  {
        let tableauxPourLePD = {
            name: itemInfo.name,
            price: itemInfo.price,
            drawable: itemInfo.drawable,
            type: itemInfo.type,
            img: itemInfo.img
        }

        EnvoieGunware(tableauxPourLePD)
    })
    calculItemPriceTotal = 0
    itemAcheter = []
    GetPrice()
    diplayMenuPayment.style.display = "none";
})

function deleteItem(index) {
    calculItemPriceTotal -= itemAcheter[index].Price;
    GetPrice() 
    itemAcheter.splice(index, 1);
    GetItemTable(); 
}