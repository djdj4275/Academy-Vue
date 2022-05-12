Vue.component('memo-component',{
    props : ['id'], // props는 상위 컴포넌트의 정보를 하위에 전달하기위함
    template :
    `
    <div>
        <h3>
            메모
            <button @click="deletememo">X</button>
        </h3>
        <slot></slot>
        <p>{{time}}</p>
    </div>
    `,
    data : function() {
        return {
            time : new Date()
        }
    },
    methods : {
        deletememo : function() {
            this.$emit("delete", this.id); // emit은 사용자지정 이벤트를 만들어 부모 컴포넌트에 전달
        }
    }
})