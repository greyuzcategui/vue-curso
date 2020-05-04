Vue.component('libros',{
    template:
    `
    <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
    <div class="card-body">
    <center><h4>Libro</h4></center>
    <p class="text-center" >
        {{title}}
    </p>
    <p class="card-text" >
        <b> Autor: </b> {{author}}
    </p>
    <p class="card-text" >
        <b>Precio: </b> {{price}}
    </p>

    <img :src=img class="img-responsive">

    <div class="d-flex justify-content-between align-items-center">
    <small class="text-muted">9 mins</small>
    </div>
    </div>
    </div>
    </div>
    `,
    props:['title', 'author', 'price', 'img']

})
