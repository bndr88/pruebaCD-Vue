import {defineStore} from 'pinia'
import {ref} from 'vue'


export  const Carrito = defineStore('carrito', ()=>{

    const carrito = ref([])

    function agregarProductos(producto) {
        console.log(producto)
        carrito.value.push(producto)
    }

    function eliminarProducto(idProducto){
        carrito.value = carrito.value.filter(item => item.id !== idProducto)
    }

    function vaciarCarrito(){
        carrito.value = []
    }

    return{
        carrito,
        agregarProductos,
        vaciarCarrito,
        eliminarProducto
    }

})