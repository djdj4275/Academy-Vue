Vue.component('review-list',{
    props : ['reviews'],
    template : 
    `
    <div class="review-container">
        <h3>Reviews:</h3>
        <ul>
            <li v-for="m in reviews">
                {{m.name}}님이 {{m.star}}별점을 주었습니다 <br>
                "{{m.review}}" <br>
                Recommended : {{m.yesno}}
            </li>
        </ul>
    </div>
    `
})