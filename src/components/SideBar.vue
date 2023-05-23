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
      <h2> Sentinel Board </h2> <br><br>
    </div>
    <div class="offcanvas-body">
<!--      <BoardPage></BoardPage>-->
<!--      <TestBoard></TestBoard>-->
      <div style="position: relative; top:-250px; left:-1px;">
        <iframe
            src="http://localhost:3000/#/TestBoard"
            height=1200px,
            width="400px">
        </iframe>
      </div>
    </div>
  </div>
  </body>

</template>


<script>
// import BoardPage from "@/components/BoardPage.vue";
// import TestBoard from "@/components/TestBoard.vue";

// import BoardPage from "@/components/BoardPage.vue";

export default {
  name: 'SideBar',
  components: {
    // BoardPage,
    // TestBoard
  },
}
</script>

<style scoped>

</style>