const express = require ('express');
const router = express.Router();
const ProductoController = require ('../controllers/ProductoController');

router.post('/', ProductoController.agregarProducto);
router.get('/', ProductoController.mostrarProductos);
router.get('/:id', ProductoController.mostrarUnProducto);
router.delete('/:id', ProductoController.eliminarProducto);
router.patch('/:id', ProductoController.modificarProducto);

module.exports = router;