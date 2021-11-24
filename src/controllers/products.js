const express = require('express');

const router = express.Router();


const getProducts = async (req, res) => {
    try {
        res.send({ succes: true, products});
    } catch (error) {
        return next(error);
    }
};


const newProduct = async (req, res, next) => {
    try {
        const newProd = req.body;

        if(newProd.id && newProd.name && newProd.category) {
            products.push(newProd);
            res.send({ success: true, products});
        } else {
            res.send({ success: false, error: "falta algun campo"});
        };
    } catch (error) {
        return next(error);
    }     
};


const updateProd = async (req, res, next) => {
    try {
        const prodId = parseInt(req.params.id, 10);
        const newName = req.body.name;
        const newCategory = req.body.category;
    
        const prodIndex = products.findIndex((i) => (i.id === prodId));
    
        if(prodIndex >= 0) {
            products[prodIndex].name = newName;
            products[prodIndex].category = newCategory;
            return res.status(200).json({ success: true, products });
        } else {
            return res.send({ success: false, error: "No se encontró el producto"});
        }
    } catch (error) {
        
    }
};

module.exports = {
    getProducts,
    newProduct,
    updateProd,
};


const products = [
    {
        id: 1,
        name: "Cucha",
        category: "perros"
    },
    {
        id: 2,
        name: "Jaula de loro",
        category: "exoticos"
    },
    {
        id: 3,
        name: "Huesos",
        category: "perros"
    },
    {
        id: 4,
        name: "Pelota de hilo",
        category: "gatos"
    }
];