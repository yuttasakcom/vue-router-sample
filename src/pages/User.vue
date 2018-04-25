<template>
  <div>
    <h2>User</h2>
    <h3>User List</h3>
    <ul>
      <router-link tag="li" to="/user/1"><a>user 1</a></router-link>
      <router-link tag="li" to="/user/2"><a>user 2</a></router-link>
    </ul>

    <router-view></router-view>
  </div>
</template>
