<template>
  <div id="HomePage">
    <img id="stnlogo" src="@/assets/logo_icon_removebg.png" width="200" height="200"/>
    <button type="button" class="btn btn-outline-danger"  style="top: 50%; left: 50%;transform: translate(-150%, 1000%); position: absolute;" @click="$router.push('/ScnMake')"><span>시나리오 생성/삭제</span>
    </button>
    <button type="button" class="btn btn-outline-warning"  style="top: 50%; left: 50%;transform: translate(50%, 1000%); position: absolute;" @click="$router.push('/ScnSelect')"><span>시나리오 선택</span>
    </button>
  </div>

</template>

<!--import axios from "axios";-->
<!--import {reactive} from "vue";-->

<script>
export default {
  name: "Home",
    data() { //변수생성
        return {
            requestBody: {}, //리스트 페이지 데이터전송
            list: {}, //리스트 데이터
            no: '', //게시판 숫자처리

        }
    },


}
</script>




<style scoped>
#HomePage{
  margin: 200px;
  position: relative;
//text-align: center;
//margin-top: 200px;
}
img{
    position:absolute;

    top:50%;
    left:50%;
    margin-top: 50px;
    margin-left:-100px;
    //transform: translate(-15%, 0%);
}
#stnlogo{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(0%, 30%);
}
.custom-btn {
  width: 150px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
  7px 7px 20px 0px rgba(0,0,0,.1),
  4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
}
/*MakeButton*/
.ScnMakeButton {
    background: linear-gradient(0deg, rgba(255,151,0,1) 0%, rgba(251,75,2,1) 100%);
    line-height: 42px;
    padding: 0;
    border: none;
//top: 150px;
//left: 475px;
    margin-right: 3px;
    top:50%;
    left:50%;
    //top: 300px;
    //left: 475px;
    transform: translate(-150%, 675%);
    position: absolute;
}
.ScnMakeButton span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.ScnMakeButton:before,
.ScnMakeButton:after {
  position: absolute;
  content: "";
  right: 0;
  bottom: 0;
  background: rgba(251,75,2,1);
  box-shadow:
      -7px -7px 20px 0px rgba(255,255,255,.9),
      -4px -4px 5px 0px rgba(255,255,255,.9),
      7px 7px 20px 0px rgba(0,0,0,.2),
      4px 4px 5px 0px rgba(0,0,0,.3);
  transition: all 0.3s ease;
}
.ScnMakeButton:before{
  height: 0%;
  width: 2px;
}
.ScnMakeButton:after {
  width: 0%;
  height: 2px;
}
.ScnMakeButton:hover{
  color: rgba(251,75,2,1);
  background: transparent;
}
.ScnMakeButton:hover:before {
  height: 100%;
}
.ScnMakeButton:hover:after {
  width: 100%;
}
.ScnMakeButton span:before,
.ScnMakeButton span:after {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  background: rgba(251,75,2,1);
  box-shadow:
      -7px -7px 20px 0px rgba(255,255,255,.9),
      -4px -4px 5px 0px rgba(255,255,255,.9),
      7px 7px 20px 0px rgba(0,0,0,.2),
      4px 4px 5px 0px rgba(0,0,0,.3);
  transition: all 0.3s ease;
}
.ScnMakeButton span:before {
  width: 2px;
  height: 0%;
}
.ScnMakeButton span:after {
  height: 2px;
  width: 0%;
}
.ScnMakeButton span:hover:before {
  height: 100%;
}
.ScnMakeButton span:hover:after {
  width: 100%;
}


/*Select Button*/
.ScnSelectButton {
    background: rgb(0,172,238);
    background: linear-gradient(0deg, rgba(0,172,238,1) 0%, rgba(2,126,251,1) 100%);
    width: 150px;
    height: 40px;
    line-height: 42px;
    padding: 0;
    border: none;
    top:50%;
    left:50%;
    //top: 300px;
    //left: 900px;
    transform: translate(50%, 675%);
    margin-right: 3px;
    position: absolute;

}
.ScnSelectButton span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.ScnSelectButton:before,
.ScnSelectButton:after {
  position: absolute;
  content: "";
  right: 0;
  top: 0;
  background: rgba(2,126,251,1);
  transition: all 0.3s ease;
}
.ScnSelectButton:before {
  height: 0%;
  width: 2px;
}
.ScnSelectButton:after {
  width: 0%;
  height: 2px;
}
.ScnSelectButton:hover{
  background: transparent;
  box-shadow: none;
}
.ScnSelectButton:hover:before {
  height: 100%;
}
.ScnSelectButton:hover:after {
  width: 100%;
}
.ScnSelectButton span:hover{
  color: rgba(2,126,251,1);
}
.ScnSelectButton span:before,
.ScnSelectButton span:after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  background: rgba(2,126,251,1);
  transition: all 0.3s ease;
}
.ScnSelectButton span:before {
  width: 2px;
  height: 0%;
}
.ScnSelectButton span:after {
  width: 0%;
  height: 2px;
}
.ScnSelectButton span:hover:before {
  height: 100%;
}
.ScnSelectButton span:hover:after {
  width: 100%;
}


</style>
