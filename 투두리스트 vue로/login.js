Vue.component('login-component',{
    data : function() {
        return {
            text : "",
            hidden : false,
            hiddenreverse : true,
            memo : "",
        }
    },
    template : 
    `
    <div>
        <form id="login-form">
            <h1 v-bind:class="{hidden : (this.hiddenreverse)}" id="greeting">반갑습니다 {{text}}님</h1>
            <input type = "text" v-model="text" v-bind:class="{hidden : (this.hidden)}">
            <input type = "button" value = "Log in" @click.prevent="sbmit" v-bind:class="{hidden : (this.hidden)}">
        </form>
        
        <form id="memo-form" v-bind:class="{hidden : (this.hiddenreverse)}">
            <input type = "text" required placeholder="메모를 입력해주세요" v-model="memo"> 
            <!--빈칸 입력시 다음으로 넘어가지 않게하고, 알림창이 뜨게 만들어줌-->
            <input type = "button" value = "메모" @click.prevent="memoadd"> 
            <input id="todo-button" type = "button" value = "투두" @click.prevent="todoadd">
        </form>
    </div>
    `,
    methods : {
        sbmit : function() {
            this.$emit("login",this.text);
            this.hidden = !this.hidden;
            this.hiddenreverse = !this.hiddenreverse;
        },
        memoadd : function() {
            this.$emit('memo-add',this.memo);
        },
        todoadd : function() {
            this.$emit('todo-add',this.memo);
        }
    }
})