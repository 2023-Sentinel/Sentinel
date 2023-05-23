<template>

  <body class="p-0 m-0 border-0 bd-example">
  <button
      class="btn btn-warning"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
  >
    SideBar Board
  </button>
  <div
      class="offcanvas offcanvas-end"
      data-bs-scroll="true"
      data-bs-backdrop="false"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">

      <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <BoardPage></BoardPage>

    </div>
  </div>
  </body>

</template>


<script>
import BoardPage from "@/components/BoardPage.vue";

export default {
  name: 'SideBar',
  components: {
    BoardPage
  },
}
</script>

<style scoped>

</style>