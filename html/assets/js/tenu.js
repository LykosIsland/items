let hasAddedBaseItem = false;
function forechvisibme(ellem) {
    const ContainerItem = document.getElementById("ContainerItem"); // Mettez ici votre ID de conteneur

    ContainerItem.innerHTML = ``

    if (ellem) {
        ContainerItem.innerHTML = `
            <div class="item-tenu-player">
                <div class="container-img addtenu">
                    <p>+</p>
                </div>
                <div class="info-ped-name">
                    <h3>Ajouter une Tenue</h3>
                </div>
            </div>
        `;
    
        itemskin.forEach((infocard) => {
            ContainerItem.innerHTML += `
                <div class="item-tenu-player">
                    <div class="container-img">
                        <img src="${infocard.img}" alt="img">
                    </div>
                    <div class="info-ped-name">
                        <h3>${infocard.name}</h3>
                        <div class="container-icon-right">
                            <i class="fa fa-pencil" onclick="RenameCard('${infocard.idunique}')"></i>
                            <i class="fa-solid fa-plus select-icon" id="add-icon" onclick="AddTenu('${infocard.name}', '${infocard.items}', '${infocard.idunique}')"></i>
                            <i class="fa-regular fa-eye select-icon" onclick="PreviewCard('${infocard.idunique}')"></i>
                            <i class="fa fa-trash" onclick="DeleteCard('${infocard.idunique}')"></i>
                        </div>
                    </div>
                </div>
            `;
        });
    } else {
        renderItems(itemslast)
    }
}

function PreviewCard(idunique) {
   $.post(`https://${ConfigDev.NameScript}/PreviewCard`, JSON.stringify({
        idunique: idunique
    }));
}

function DeleteCard(idunique) {
    $.post(`https://${ConfigDev.NameScript}/DeleteCard`, JSON.stringify({
        idunique: idunique
    }));
    const index = itemskin.findIndex(item => item.idunique.toString() === idunique.toString());
    itemskin.splice(index, 1);
    forechvisibme(true);
}


function AddTenu(name, data, idunique) {
    $.post(`https://${ConfigDev.NameScript}/AddTenu`, JSON.stringify({
        idunique: idunique
    }));
}

function RenameCard(idunique) {
    $.post(`https://${ConfigDev.NameScript}/RenameCard`, JSON.stringify({
        idunique: idunique
    }), function(newName) {
        const index = itemskin.findIndex(item => item.idunique.toString() === idunique.toString());
        itemskin[index].name = newName;
        forechvisibme(true);
    });
}

