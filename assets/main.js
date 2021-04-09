Vue.config.devtools = true;

var app = new Vue({


    el: '#root',
    data: {
        arrtracks: [],
        generi : [],

        selected: "",

    },

    mounted:function () {

        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then((response)  => {
            if (response.data.success) {
                this.arrtracks = response.data.response;

            }
        });
    },

})
