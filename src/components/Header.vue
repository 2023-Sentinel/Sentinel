<template>
  <div class="container">
    <header
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <img src="@/assets/logo_icon.png" style="width:60px; height:60px; margin-right: 8px"/>
        <!--        <svg class="bi me-2" width="40" height="32">-->
        <!--          <use xlink:href="#bootstrap"/>-->
        <!--        </svg>-->
        <!--        <div>-->
<!--                  <span class="fs-4" style="color: red; font-family: inherit">-->
<!--                    Sentinel's Dashboard-->
<!--                  </span>-->
        <!--          <br>-->
        <!--          <div class="logo-second-line">침해사고 Black-Box</div>-->
        <!--        </div>-->
      </a>
      <!--      <div class="col-md-3 mb-2 mb-md-0">-->
      <!--        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">-->
      <!--          <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>-->
      <!--        </a>-->
      <!--      </div>-->

      <div class="menu_bar">
        <ul class="nav nav-pills">
          <li class="nav-item"><a class="nav-link" @click="$router.push('/')">Home</a></li>
          <li class="nav-item"><a class="nav-link" @click="$router.push('/ScnMake')">ScnMakePage</a></li>
          <li class="nav-item"><a class="nav-link" @click="$router.push('/ScnSelect')">ScnSelectPage</a></li>
          <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
          <li class="nav-item"><a href="#" class="nav-link">About</a></li>
        </ul>
        <!--        <ul class="nav col -12 col-md-auto mb-2 justify-content-center mb-md-0">-->
        <!--          <li><a href="#" class="nav-link px-2 link-">Home</a></li>-->
        <!--          <li><a href="#" class="nav-link px-2">ScnMakePage</a></li>-->
        <!--          <li><a href="#" class="nav-link px-2">ScnSelectPage</a></li>-->
        <!--          <li><a href="#" class="nav-link px-2">FAQs</a></li>-->
        <!--          <li><a href="#" class="nav-link px-2">About</a></li>-->
        <!--        </ul>-->
      </div>

      <div class="col-md-3 text-end">

        <router-link to="/login" class="text-white" v-if="!$store.state.account.id">
          <button type="button" class="btn btn-outline-primary me-2">
            Login
          </button>
        </router-link>

          <button type="button" class="btn btn-primary">Sign-up</button>
      </div>
    </header>
  </div>
  <!--  <header>-->
  <!--    <div class="collapse bg-dark" id="navbarHeader">-->
  <!--      <div class="container">-->
  <!--        <div class="row">-->
  <!--          <div class="col-sm-4 py-4">-->
  <!--            <h4 class="text-white">사이트맵</h4>-->
  <!--            <ul class="list-unstyled">-->
  <!--              <li>-->
  <!--                <router-link to="/" class="text-white">메인 화면</router-link>-->
  <!--              </li>-->
  <!--              <li>-->
  <!--                <router-link to="/login" class="text-white" v-if="!$store.state.account.id">로그인</router-link>-->
  <!--                <a to="/login" class="text-white" @click="logout()" v-else>로그아웃</a>-->
  <!--              </li>-->
  <!--            </ul>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--    <div class="navbar navbar-dark bg-dark shadow-sm">-->
  <!--      <div class="container">-->
  <!--        <a href="#" class="navbar-brand d-flex align-items-center">-->
  <!--          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>-->
  <!--          <strong>HS 갤러리</strong>-->
  <!--        </a>-->
  <!--        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">-->
  <!--          <span class="navbar-toggler-icon"></span>-->
  <!--        </button>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </header>-->
</template>

<script>
import store from "@/scripts/store";
import router from "@/scripts/router";

export default {
  name: 'Header',
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
