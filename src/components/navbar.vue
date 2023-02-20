<template>
  <header class="header">
    <div class="logo-container">
      <router-link to="/">
        <img
          src="../assets/logo-nobg.png"
          width="180"
          alt="Logo Thing main logo"
        />
      </router-link>
    </div>
    <router-link to="/about"><h1>About</h1></router-link>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  text-align: center;
  margin: auto;
  justify-content: center;
}

.logo-container {
  display: flex;
  align-items: center;
  padding-right: 5%;
}

h1 {
  text-decoration: none !important;
  color: #4c4c4c;
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
