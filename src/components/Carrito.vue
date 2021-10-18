<template>
    <div className="modal wrapper">
        <div className="modal">
            a
            <slot/>
        </div>
    </div>
</template>

<style>
.modal{
  width: 300px;
  height: 100px;
  border-radius: 10px;
  background-color: white;
  padding: 20px 20px;
  z-index: 1200;
}

.wrapper{
  background-color: rgba(0,0,0,0.4);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  position: absolute;
  top: o;
}

</style>