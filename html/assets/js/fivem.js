// open menu recup event
container  = document.getElementById('container-chlotes')
leave  = document.getElementById('leave-chlotes')


let ConfigDev = {
    nameEvent:"test", 
    nameOpenEvent : "openMenu", 
    NameScript: "cfx-clohtingStore",
    NameEventCloseMenuPressEchap: "leave", 
    EventRenvoiePreview: "selectItems", 
    NameEventCreateSkin: "CreateSkin",
}
itemskin = []
let isStaff = false

window.addEventListener('message', function(event){

    if (event.data.type === ConfigDev.nameOpenEvent) { 
        // Animation .container-chlotes-menu
        setTimeout(() => {
            container.style.opacity = "1"
            container.style.display = "grid"
        },300)

        isStaff = event.data.staff
        itemslast = event.data.data.items
        renderItems(event.data.data.items)
        itemskin = event.data.data.skin
    }
})

// envoi data lua

function Preview(item, Price, drawable, texture,type, img) {

    let newItem = {
        name: item, 
        price: Price,
        type: type, 
        img : img,
        drawable: drawable,
    } 
    //  remplace litem si il existe du meme type
    let index = itemAcheter.findIndex(item => item.type === newItem.type)

    if (index !== -1) {
        itemAcheter[index] = newItem
    } else {
        itemAcheter.push(newItem)
    }
    
    $.post(`https://${ConfigDev.NameScript}/${ConfigDev.EventRenvoiePreview}`, JSON.stringify(
        {
        label:item,
        price: Price, 
        drawable: drawable,
        texture: texture,
        type: type,
        drawTexture: 0,
    }));
}

function action(params) {
    $.post(`https://${ConfigDev.NameScript}/${params}`)
}

leave.addEventListener('click', function(){
    container.style.opacity = "0"
    setTimeout(() => {
        container.style.display = "none"

    },300)
    $.post(`https://${ConfigDev.NameScript}/${ConfigDev.NameEventCloseMenuPressEchap}`)
    displayTenuItemContainerIf()
})



function EnvoieGunware(data) {
    $.post(`https://${ConfigDev.NameScript}/${ConfigDev.NameEventCreateSkin}`, JSON.stringify(
        {
            data,
    }));
}


window.addEventListener('keydown', function(event){
    console.log(event.key)
    if (event.key === "e") {
        $.post(`https://${ConfigDev.NameScript}/TurnRight`)
    }
    if (event.key === "q") {
        $.post(`https://${ConfigDev.NameScript}/TurnLeft`)
    }

    if (event.key === "ArrowRight") {
        $.post(`https://${ConfigDev.NameScript}/TurnRight`)
    }
    if (event.key === "ArrowLeft") {
        $.post(`https://${ConfigDev.NameScript}/TurnLeft`)
    }
    if (event.key === "ArrowUp") {
        $.post(`https://${ConfigDev.NameScript}/armsup`)
    }
    if (event.key === "ArrowDown") {
        $.post(`https://${ConfigDev.NameScript}/armsdown`)
    }
})

    

