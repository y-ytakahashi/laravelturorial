<template>
  <footer class="footer">
    <button v-if="isLogin" class="button button--link" @click="logout">
        Logout
    </button>
    <RouterLink v-else class="button button--link" to="/login">
      Login / Register
    </RouterLink>
  </footer>
</template>

<script>
computed: {
  isLogin () {
    return this.$store.getters['auth/check']
  }
},

</script>