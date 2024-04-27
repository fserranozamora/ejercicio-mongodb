const Producto = require('../models/Producto');

exports.agregarProducto = async(req, res) => {

    try {
        let producto = new Producto(req.body)
        await producto.save();
        res.send(producto);
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al agregar el producto')
    }
}

exports.mostrarProductos = async(req, res) => {

    try {
        let producto = await Producto.find();
        res.json(producto);
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al mostrar los clientes')
    }
}

exports.mostrarUnProducto = async(req, res) => {

    try {
        let producto = await Producto.findById(req.params.id);
        if(!producto){
            res.status(404).json({msg: "El producto no se encuentra con este ID"});
        }
        res.send(producto);
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al mostrar un producto en la web')
    }
}

exports.eliminarProducto = async(req, res) => {
    try{
        let producto = await Producto.findById(req.params.id);
        if(!producto){
            res.status(404).json({msg: "El Producto no existe"});
            return
        }
        await Producto.findOneAndDelete({_id: req.params.id});
        res.json({msg: "El Producto fue eliminado"});
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error al eliminar un Producto en la base de datos")
    }
}

exports.modificarProducto = async(req, res) => {
    try{
        let producto = await Producto.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!producto){
            return res.status(404).send('Cliente no encontrado');
        }
        res.json(producto)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al modificar el cliente")
    }
}