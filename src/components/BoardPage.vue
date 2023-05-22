<template>
  <Header/>
  <div class = "container">
    <h2>
      Sentinel Board
    </h2>
  <br><br>
  <p>
    <a class="btn btn-secondary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
      글쓰기
    </a>
<!--    <button class="btn btn-outline-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">-->
<!--      채팅방-->
<!--    </button>-->
  </p>
  <div class="collapse" id="collapseExample">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">제목</label>
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">내용</label>
      <div>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        <br>
        <button class="btn btn-outline-secondary" type="button" id="button-addon2">등록</button>
        </div>
    </div>
  </div>

  <div class="accordion" id="accordionPanelsStayOpenExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
          <strong>#1 xxx 사건 관련 질문 있습니다 !!!</strong>
        </button>
      </h2>
      <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
        <div class="accordion-body">
          <strong> xxx사건 말인데요,</strong> 제가 이해 하기로는 2011년 4월 12일 16시 50분, 노트북으로 '삭제 명령'을 내리자 1차 공격을 받은 전산망 서버들이 좀비 컴퓨터로 변해 다른 서버들을 잇따라 공격하면서, 30분 만에 서버 절반이 파괴된 것으로 이해했는데요. 이후에 정확히 어떻게 좀비PC를 파괴 시킨 건가요?
          <br><br>
          <ul class="list-group">
            <li class="list-group-item active" aria-current="true">Comments</li>
            <li class="list-group-item">flash.gif 파일을 이용하여 좀비PC 6대를 파괴 시켰습니다.</li>
            <li class="list-group-item">할 일 다했으니 이제 죽이는거죠.</li>
          </ul>

          <br><br>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Comments" aria-label="Comments" aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">등록</button>
          </div>
        </div>

      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
          <strong>#2 공격자의 수법 추가 정보 공유</strong>
        </button>
      </h2>
      <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
        <div class="accordion-body">
          <strong>웹하드 사이트 해킹 후,</strong> 업데이트 프로그램을 <strong>악성코드</strong>로 바꿔치기 했습니다.
          <br><br>
          <ul class="list-group">
            <li class="list-group-item active" aria-current="true">Comments</li>
            <li class="list-group-item"> 좋은 정보 감사합니다.</li>
            <li class="list-group-item"> 이런 곳에서 취약점이 있었군요. </li>
          </ul>

          <br><br>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Comments" aria-label="Comments" aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">등록</button>
          </div>
        </div>

      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
          <strong>#3 라우터 하이재킹 관련</strong>
        </button>
      </h2>
      <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
        <div class="accordion-body">
          <strong>라우터 하이재킹할 때</strong> DDoS공격, 도메인 이름 시스템(DNS) 스푸핑 또는 암호화와 같은 광범위한 악의적인 활동을 수행할 수 있습니다.
          <br><br>
          <ul class="list-group">
            <li class="list-group-item active" aria-current="true">Comments</li>
            <li class="list-group-item"> 좋은 정보 감사합니다.</li>
            <li class="list-group-item"> 이런 곳에서 취약점이 있었군요. </li>
          </ul>

          <br><br>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Comments" aria-label="Comments" aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">등록</button>
          </div>
        </div>
      </div>
    </div>
  </div>
<!--  Pagination (페이지 선택창)-->
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
  </div>
</template>

<script>


import Header from "@/components/Header.vue";

export default {
  components: {Header}

}

</script>

<style scoped>


</style>