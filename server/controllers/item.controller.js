const Item = require("../models/item.model");

const getItems = async (req, res, next) => {
    await Item.find({})
        .then((items) => {
            res.status(200).send(items);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
}

const addItem = async (req, res, next) => {

    const item = new Item({
        createdAt: new Date(),
        ...req.body
    });

    await item.save()
        .then(() => {
            res.status(201).send(item);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
}

const deleteItem = async (req, res, next) => {
    const id = req.params.itemId;

    await Item.deleteOne({_id: id})
        .then(() => {
            res.status(204).send({});
        })
        .catch((err) => {
            res.status(500).send(err);
        });
}

const updateItem = async (req, res, next) => {
    const id = req.params.itemId;

    await Item.findOneAndUpdate({_id: id}, req.body, {
        new: true,
        upsert: false
    }).then((item) => {
        res.status(200).send(item);
    }).catch((err) => {
        res.status(500).send(err);
    })

}

const getSortedItems = async (req, res, next) => {
    
    await Item.find({})
        .sort(req.query.by)
        .then((items) => {
            res.status(200).send(items);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
}


module.exports = {
    getItems,
    addItem,
    deleteItem,
    updateItem,
    getSortedItems,
}