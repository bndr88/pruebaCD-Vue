<template>
  <div >

    <h1 style="color: #41B883;">Actividad Nro. 3</h1>
    <br/>

    <form @submit="autenticar" >
      <div >
        <label> Email</label>
        <input type="email" v-model="datosFormulario.correo">
      </div>
      <div >
        <label>Password</label>
        <input type="password" v-model="datosFormulario.password" >
      </div>
      <div class="text-center">
        <button type="submit" >Login</button>
      </div>
  </form>
  </div>
</template>

<script setup>
import {reactive} from 'vue';
import Swal from 'sweetalert2';
const datosFormulario = reactive({
  correo:'',
  password:''
})

const autenticar = (event) => {
  event.preventDefault();
  if (datosFormulario.correo === "admin@gmail.com" && 
    datosFormulario.password === "123"
  ) {
    Swal.fire({
      title: "Exitoso!",
      text: "Login realizado correctamente",
      icon: "success"
    })    
  } else {
    Swal.fire({
      title: "Error!",
      text: "No se pudo realizar la autenticación",
      icon: "error"
    })    
  }  
}

</script>

<style scoped>

</style>