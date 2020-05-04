Vue.component('galeria',{
    template:/*html*/
    `
    <div>
        <center>
            <h1>Galer&iacute;a</h1>
        </center>
        <div class="row" > 
            <libros v-for="libro in arrayLibros" 
                    v-bind:title="libro.title" 
                    v-bind:author="libro.author"
                    v-bind:price="libro.price"
                    v-bind:img="libro.img"
                    >
            </libros>
        </div>
    </div>
    `,
    data(){
        return{
            arrayLibros:null,
        }
    },
    mounted () {
        axios
            .get('http://commons.showvlad.com/books.json')
            .then(response => (this.arrayLibros = response.data))
    }


})
