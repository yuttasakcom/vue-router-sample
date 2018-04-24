<template>
  <div class="mt-5">
    <button @click="login">Login</button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$store.dispatch("SET_USER", { id: 1, name: "YoYea" });
      this.$router.push("/user");
    }
  }
};
</script>
