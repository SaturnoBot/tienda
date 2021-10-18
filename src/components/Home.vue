<template>
 <h1>Zapatillas Urbanas</h1>
  <div class="home">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/5.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/4.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/3.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

   <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
  </div>
    

    <div class="zapatillas">
      <a class="zapatilla" @click="push(zapatilla.id)" v-for="(zapatilla, index) in zapatillas">
        <img
          :src="require(`../assets/${zapatilla.imagen}`)"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{{ zapatilla.nombre }}</h5>
          <p class="card-text">
            ${{ zapatilla.precio }}
          </p>
        </div>
      </a>
    </div>
  </div>

</template>

<script>
import { zapatillas } from "../zapas.json";

export default {
  setup() {
    return { zapatillas };
  },
  methods: {
    push(id) {
      this.$router.push("/zapatilla/" + id);
    },
  }
};
</script>

<style lang="stylus">
h1 {
  padding-top: 5%;
  padding-bottom: 5%;
  text-align: center;
  font-family: 'Urbanist', sans-serif;
  font-size: 4rem;
  background-color: black;
  color: white;
  margin: 0;
}

.carrito {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: fixed;
  margin-right: 11px;
  z-index: 1;
}

.botonCompra {
  border-radius: 3rem;
  height: 15vh;
  background-color: black;
  border: white;
}

.zapatillas {
  display: grid;
  grid-template-columns: 3fr 3fr;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  justify-content: center;
  margin-left: 10px;
  margin-right: 10px;
}

.zapatilla:hover{
  width: 80%;
}

.zapatilla {
  color: black;
  text-decoration: none;
}

h2 {
  background-color: Black;
  color: white;
  text-align: center;
}

.d-block {
  width: 95%;
  padding-left: 5%;
  padding-top: 5%;
  padding-bottom: 5%;
}


</style>