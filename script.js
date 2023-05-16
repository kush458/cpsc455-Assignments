const renderInitData = () => {
    fetch('/initData.json')
        .then(resp => resp.json())
        .then(data => {
            const inventory = document.getElementsByClassName('inventory')[0];

            data.forEach(item => {
                const card = document.createElement('div');
                card.className = 'itemCard';

                card.innerHTML = `
                    <img src="${item.imageURL}" alt="${item.name}"/>
                    <div class="infoContainer">
                        <div class="nameAndPrice">
                            <div class="topInfo">
                                <p>Item Name</p>
                                <p>${item.name}</p>
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

renderInitData();