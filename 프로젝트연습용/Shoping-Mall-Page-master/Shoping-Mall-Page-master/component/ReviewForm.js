Vue.component('review-form',{
    data : function() {
        return {
            name : "",
            review : "",
            star : "",
            yesno : "",
        }
    },
    methods : {
        addMemo : function(e) {
            e.preventDefault();
            let productReview = {
                name : this.name,
                review : this.review,
                star : this.star,
                yesno : this.yesno
            };
            this.$emit('subreview', productReview)
        }
    },
    template : 
    `
    <form class="review-form">
            <h3>리뷰를 남기세요</h3>
            <p>이름 : </p>
            <input type="text" v-model="name">
            <p>리뷰 : </p>
            <textarea name="" id="" cols="30" rows="10" v-model="review"></textarea>
            <p>별점</p>
            <select v-model="star">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>
            <p>이 물건을 추천하나요?</p>
            <select v-model="yesno">
                <option>yes</option>
                <option>no</option>
            </select>
            <input type=submit class="button" v-on:click="addMemo">
            submit
            </input>
        </form>
    `
})