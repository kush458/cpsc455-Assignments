const getItems = async () => {
    const response = await fetch('http://localhost:3000/items', {
        method: 'GET'
    })
        .then (res => res.json());

    return response;
};

const addItem = async (item) => {
    const response = await fetch('http://localhost:3000/items', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(res => res.json())
        .catch(err => {
            throw new Error(err.message)
        });

    return response;
}

export default {
    getItems,
    addItem
};