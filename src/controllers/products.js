
const db = require('../../db/index');

const getProducts = async (req, res, next) => {
    try {
        const prods = await db.query('select * from products order by "id"');

        res.send({ success: true, products: prods.rows});
    } catch (error) {
        return next(error);
    }
};


const newProduct = async (req, res, next) => {
    try {
        const newProd = req.body;

        if(newProd.name && newProd.category) {
            
            const prods = await db.query(
                "Insert into products(name, category) values ($1, $2)",
                [newProd.name, newProd.category]
              );

            res.send({ success: true, products: prods.rows});
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


