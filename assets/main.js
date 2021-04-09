Vue.config.devtools = true;

var app = new Vue({

    el: '#root',
    data: {
        arrtracks: [],
        genre : [],
        arrtracksFiltered : [],
        selected: "",
    },

    mounted:function () {
        this.initArrtracks();
    },

    methods: {
        initArrtracks : function() {
            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((response)  => {
                if (response.data.success) {
                    this.arrtracks = response.data.response;
                    this.arrtracks.filter(element =>{
                        let tempGenre = element.genre;
                        if (this.genre.indexOf(tempGenre) == -1 ) {
                            this.genre.push(element.genre);
                        }
                    })
                    this.arrtracksFiltered = this.arrtracks.slice();
                }
            })
        },

        findForGenre: function(){
            // Update track on select All
            if (this.selected === "") {
                this.arrtracksFiltered = this.initArrtracks();
            }

            this.arrtracksFiltered = this.arrtracks.filter((element) => {
                if (this.selected === element.genre) {
                    return element;
                }
            })
        },
    },
})
