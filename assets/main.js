Vue.config.devtools = true;

var app = new Vue({

    el: '#root',
    data: {
        arrtracks: [],
        genre : [],
        arrtracksFiltered : [],
        selected: "",
        flag: true,
    },

    mounted:function () {
        this.initArrtracks()
    },

    computed: {
        tracksFiltered(){
            if (!this.selected.length) {
                this.arrtracksFiltered = this.arrtracks
            }
            return this.arrtracksFiltered
        }
    },

    methods: {

        initArrtracks(){
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
                }
            })
        },

        findForGenre: function(){
            // Update track on select All
            if (!this.selected.length) {
                this.initArrtracks();
            }else {
                this.arrtracksFiltered = this.arrtracks.filter((element) => {
                    if (this.selected === element.genre) {
                        return element;
                    }
                })
            }
        },
        sortList: function(){
            if (this.flag) {
                this.flag = !this.flag;
                this.arrtracksFiltered.sort((a, b) => a.year - b.year ).reverse();
            }else {
                this.flag = !this.flag;
                this.arrtracksFiltered.sort((a, b) => a.year - b.year );
            }
        }
    },
})
