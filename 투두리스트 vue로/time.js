Vue.component('time-component',{
    template : 
    `<h1 id="clock">
        {{time}}
    </h1>`,
    data : function() {
        return {
            date : new Date(),
        }
    },
    methods : {},
    computed : {
        time : function() {
            let hours = String(this.date.getHours()).padStart(2,"0");
            let minutes = String(this.date.getMinutes()).padStart(2,"0");
            let seconds = String(this.date.getSeconds()).padStart(2,"0");
            //setInterval( () => `${hours}:${minutes}:${seconds}`, 1000); 
            return `${hours}:${minutes}:${seconds}`
        }
    },
    created : function() {
        setInterval(() => {this.date = new Date();}, 1000);
    }
})