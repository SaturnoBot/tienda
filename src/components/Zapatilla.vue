<template>
    <div class="content">
    <h1>{{zapa.nombre}}</h1>
    <img :src="require(`../assets/${zapa.imagen}`)" alt="..." class="enVenta"/>
    <p>Precio: $ {{zapa.precio}}</p>
     <p>Talle: {{zapa.talle}}</p>
     <button class="comprar">Agregar al carrito</button>
     </div>
<p class="otros">Otros productos relacionados</p>
<div id="carouselExampleControls" class="fotos carousel slide" data-ride="carousel">
  <div class="publicidad carousel-inner">
    <div class=" carousel-item active">
      <img class="d-block w-100" src="../assets/7.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../assets/8.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../assets/9.jpg" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { zapatillas } from "../zapas.json"

export default {
    setup() {
        const route = useRoute();
        const zapatillaId = computed(() => route.params.id) 
        let zapa = null

        for (let x in zapatillas) {
            if (zapatillas[x].id == zapatillaId.value) {
                zapa = zapatillas[x]
            }
        }

        return { zapa }
    },
}
</script>

<style lang="stylus" scoped>

.content{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5%;
    padding-bottom: 5%;
    font-family: 'Roboto', sans-serif;
}

.publicidad{
      background-color: #6c757d;
    width: 40%;
    margin-left: 32%;
    padding-bottom: 2%;    
}
.otros{
    background-color: #6c757d;
    text-align: center;
    font-size: 2rem;
    margin: 0%;
    font-family: 'Roboto', sans-serif;
    color: white;

}
.fotos{
    background-color: #6c757d;
}
.enVenta{
    width: 90%;
}
</style>

