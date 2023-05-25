<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary" style="height: 5vh">
        <div class="container-fluid">
            <img src="@/assets/logo_icon2_removebg.png" style="width:auto; height:5vh; margin-right: 8px"/>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link active" style="font-size: 1em; margin-right: 0.5em" @click="$router.push('/')">Home
                            <span class="visually-hidden">(current)</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"  style="font-size: 1em; margin-right: 0.5em" @click="$router.push('/ScnMake')">시나리오 생성</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" style="font-size: 1em; margin-right: 0.5em" @click="$router.push('/ScnSelect')">시나리오 선택</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" style="font-size: 1em; margin-right: 0.5em" @click="$router.push('/TestBoard')">게시판</a>
                    </li>
                </ul>
            </div>
        </div>
              <div class="col-md-2 text-end">
                <router-link to="/login" class="text-white" v-if="!$store.state.account.id">
                  <button type="button" class="btn btn-primary me-2" style="width:5vw">Login</button>
                  <button type="button" class="btn btn-primary me-2" style="width:5vw">Sign-up</button>
                </router-link>
                <router-link to="/login" class="text-white" v-else>
                  <button type="button" class="btn btn-outline-primary me-2">Logout</button>
                </router-link>
              </div>
    </nav>

<!--  <div class="container">-->
<!--    <header-->
<!--        class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">-->
<!--      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 link-body-emphasis text-decoration-none">-->
<!--        <img src="@/assets/logo_icon.png" style="width:60px; height:60px; margin-right: 8px"/>-->
<!--      </a>-->


<!--      <div class="menu_bar">-->
<!--        <ul class="nav nav-pills">-->
<!--          <li class="nav-item"><a class="nav-link" @click="$router.push('/')">Home</a></li>-->
<!--          <li class="nav-item"><a class="nav-link" @click="$router.push('/ScnMake')">ScnMakePage</a></li>-->
<!--          <li class="nav-item"><a class="nav-link" @click="$router.push('/ScnSelect')">ScnSelectPage</a></li>-->
<!--          <li class="nav-item"><a class="nav-link" @click="$router.push('/Board')">Board</a></li>-->
<!--          <li class="nav-item"><a href="#" class="nav-link">About</a></li>-->
<!--        </ul>-->
<!--      </div>-->

<!--    &lt;!&ndash;   버튼 3개 묶음  &ndash;&gt;-->
<!--      <div class="col-md-2 text-end">-->
<!--        <router-link to="/login" class="text-white" v-if="!$store.state.account.id">-->
<!--          <button type="button" class="btn btn-outline-primary me-2">Login</button>-->
<!--          <button type="button" class="btn btn-primary me-2">Sign-up</button>-->
<!--        </router-link>-->
<!--        <router-link to="/login" class="text-white" v-else>-->
<!--          <button type="button" class="btn btn-outline-primary me-2">Logout</button>-->
<!--        </router-link>-->
<!--      </div>-->
<!--    </header>-->
<!--  </div>-->

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
