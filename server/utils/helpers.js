const sortByPrice = (item1, item2) => {
    var price1 = item1.price, price2 = item2.price;

    if (price1 < price2) return -1;
    if (price1 > price2) return 1;

    return 0;
}

const sortByName = (item1, item2) => {
    var name1 = item1.name, name2 = item2.name;

    if (name1 < name2) return -1;
    if (name1 > name2) return 1;

    return 0;
}

module.exports = {
    sortByPrice,
    sortByName
}