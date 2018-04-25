<template>
  <header class="bg-dark">
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark container">
      <router-link tag="a" class="navbar-brand" to="/">Navbar</router-link>
      <ul class="navbar-nav mr-auto">
        <router-link to="/" tag="li" class="nav-item" active-class="active" exact><a class="nav-link">Home</a></router-link>
        <router-link to="/user" tag="li" class="nav-item" active-class="active" exact><a class="nav-link">User</a></router-link>
        <router-link to="/post" tag="li" class="nav-item" active-class="active" exact><a class="nav-link">Post</a></router-link>
        <router-link to="/login" tag="li" class="nav-item" active-class="active" exact><a class="nav-link">Login</a></router-link>
      </ul>
    </nav>
  </header>
</template>
