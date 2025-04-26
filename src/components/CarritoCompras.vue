<template>
    <div>
        <h1 style="color: #41B883;text-align: center;">Actividad Nro. 4</h1>
        <br>
        
        <h2 style="text-align: center;">Carrito de Compras:</h2>
        <input v-model="nuevoItem" placeholder="Agregar Item" />
       
        <button @click="agregarAlCarrito">Agregar</button>

        <ul>
            <li v-for="(item, index) in carrito.carrito" :key="index">
                {{ item }}
            </li>
        </ul>
    </div>

</template>

<script setup>
import { ref } from 'vue'
import { Carrito } from '../stores/carrito'

const nuevoItem = ref('')
const carrito = Carrito()

const agregarAlCarrito = () => {
  carrito.agregarProductos(nuevoItem.value)
  nuevoItem.value = ''
}

</script>