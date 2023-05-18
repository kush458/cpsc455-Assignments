const inventory = document.getElementsByClassName('inventory')[0];

const renderInitData = () => {

    fetch('/initData.json')
        .then(resp => resp.json())
        .then(data => {

            data.forEach(item => {
                const card = document.createElement('div');
                card.className = 'itemCard';

                card.innerHTML = `
                    <img src="${item.imageURL}" alt="${item.name}"/>
                    <div class="infoContainer">
                        <div class="nameAndPrice">
                            <div class="topInfo">
                                <p>Item Name</p>
                                <p class="itemName">${item.name}</p>
                            </div>
                            <div class="topInfo">
                                <p>Price</p>
                                <p>$${item.price}</p>
                            </div>
                        </div>
                        <div class="topInfo">
                            <p>Description</p>
                            <p>${item.description}</p>
                        </div>
                    </div>
                `;

                inventory.appendChild(card);
            });
        })
        .catch(error => {
            console.log('Error: ', error);
        });
}

const handleOnSubmit = (event) => {
    event.preventDefault();

    const itemName = document.getElementById('itemName').value;
    const itemPrice = document.getElementById('itemPrice').value;
    const itemImg = document.getElementById('itemImg').value;
    const itemDesc = document.getElementById('itemDesc').value;

    const card = document.createElement('div');
    card.className = 'itemCard';

    card.innerHTML = `
        <img src="${itemImg}" alt="${itemName}"/>
        <div class="infoContainer">
            <div class="nameAndPrice">
                <div class="topInfo">
                    <p>Item Name</p>
                    <p class="itemName">${itemName}</p>
                </div>
                <div class="topInfo">
                    <p>Price</p>
                    <p>$${itemPrice}</p>
                </div>
            </div>
            <div class="topInfo">
                <p>Description</p>
                <p>${itemDesc}</p>
            </div>
        </div>
    `;

    inventory.appendChild(card);
    
    itemForm.reset();
}

const search = (event) => {
    const itemCards = document.getElementsByClassName('itemCard');
    const searchTerm = event.target.value.toLowerCase();

    for (const itemCard of itemCards) {
        const itemName = itemCard.getElementsByClassName('itemName')[0].textContent.toLowerCase();

        if (itemName.includes(searchTerm)) {
            itemCard.style.display = 'flex';
        } else {
            itemCard.style.display = 'none';
        }
    }
}

const deleteAllCards = () => {
    const itemCards = document.getElementsByClassName('itemCard');
    
    while (itemCards.length > 0) {
        itemCards[itemCards.length - 1].remove();
    }
}

const itemForm = document.getElementById('itemForm');
const clearAllBtn = document.getElementById('clearAllButton');
const searchInput = document.getElementById('searchInput');
const deleteAllBtn = document.getElementById('deleteAllButton');

itemForm.addEventListener('submit', handleOnSubmit);
searchInput.addEventListener('input', search);
deleteAllBtn.addEventListener('click', deleteAllCards);
clearAllBtn.addEventListener('click', () => {
    itemForm.reset();
});

renderInitData();