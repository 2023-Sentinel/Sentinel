import axios from "axios";

export default {
    getArticle: function(id){ //id 에 해당하는 상세 게시물 정보 받아오기
        return axios.get(`/api/boards/${id}`);
    },

    getArticles: function(page){ // idx: 시나리오 id, page : 페이지번호
        console.log(page);
        return axios.get(`/api/boards/list`);
    },

    postArticle: function(title, content){ // 작성
        let savecontent = {};
        savecontent.title = title;
        savecontent.content = content;
        return axios.post(
            `/api/createBoards`,
            JSON.stringify(savecontent),
            {headers:{'Content-Type': 'application/json'},}
        )
    }
}