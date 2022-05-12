Vue.component('todo-component',{
    props : ['todolist'],
    data : function() {
        return {
            check : false,
        }
    },
    methods : {
        tododelete : function(index) {
            this.todolist.splice(index,1);
        },
    },
    template : 
    `
    <ul class="todo" id="todo-board">
        <li v-for="(m, index) in todolist" v-bind:class="{'check' : check}">
            <input type="checkbox">
            {{m}}<button @click="tododelete(index)">X</button>
        </li>
    </ul>
    `
})