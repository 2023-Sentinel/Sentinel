<template>
  <div class="container">
    <header
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 link-body-emphasis text-decoration-none">
        <img src="@/assets/logo_icon.png" style="width:60px; height:60px; margin-right: 8px"/>
      </a>


      <div class="menu_bar">
        <ul class="nav nav-pills">
          <li class="nav-item"><a class="nav-link" @click="$router.push('/')">Home</a></li>
          <li class="nav-item"><a class="nav-link" @click="$router.push('/ScnMake')">ScnMakePage</a></li>
          <li class="nav-item"><a class="nav-link" @click="$router.push('/ScnSelect')">ScnSelectPage</a></li>
          <li class="nav-item"><a class="nav-link" @click="$router.push('/Board')">Board</a></li>
          <li class="nav-item"><a href="#" class="nav-link">About</a></li>
        </ul>
      </div>

    <!--   버튼 3개 묶음  -->
      <div class="col-md-2 text-end">
        <router-link to="/login" class="text-white" v-if="!$store.state.account.id">
          <button type="button" class="btn btn-outline-primary me-2">Login</button>
          <button type="button" class="btn btn-primary me-2">Sign-up</button>
        </router-link>
        <router-link to="/login" class="text-white" v-else>
          <button type="button" class="btn btn-outline-primary me-2">Logout</button>
        </router-link>
      </div>
    </header>
  </div>


</template>

<script>
import store from "@/scripts/store";
import router from "@/scripts/router";


export default {
  name: 'Header',
  components: {},
  setup() {
    const logout = () => {
      store.commit('setAccount', 0);
      sessionStorage.removeItem("id")
      router.push({path: "/"});
    }
    return {logout}
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo-second-line {
  color: coral;
  font-weight: bold;
  font-family: inherit;
}

.menu_bar {
  text-align: left;
}
</style>
