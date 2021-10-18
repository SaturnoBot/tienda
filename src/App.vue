<template>
  <header>
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Zapatillas Urbanas</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
      <span class="navbar-text">
        Navbar text with an inline element
      </span>
    </div>
  </div>
</nav>
    <div class="carrito">
      <button class="botonCompra">
        <a href="/carrito">
          <img class="imgCarrito" src="./assets/carrito.png" alt="" />
        </a>
      </button>
    </div>
  </header>

  <router-view />

  <footer>
    <p>ejemplo@email.com</p>
    <a href="Contacto.vue">Contacta con nosotros</a>
    <p>+5492213219023</p>
  </footer>
</template>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@1,900&display=swap');

.botonCompra {
  height: 6vh;
  width: 95%;
  border: white;
  border-radius: 3vh;
  background: black;
  box-shadow: 0px 0px 5px black;
}

.imgCarrito {
  height: 30px;
}

.carrito {
  position: fixed;
  right: 0;
  bottom: 7%;
  z-index: 1;
}

footer {
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  height: 25vh;
  font-family: 'Roboto', sans-serif;
}

header {
  background-color: black;
  font-family: 'Roboto', sans-serif;
}
</style>
