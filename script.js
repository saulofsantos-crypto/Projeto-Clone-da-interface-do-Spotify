document.addEventListener('DOMContentLoaded', () => {

    const artistData = [
        { name: 'Ivete Sangalo', image: './artistas/ivete.jpg'},
        { name: 'Saulo', image : './artistas/saulo.jpg'},
        { name: 'Igor Kannário', image:'./artistas/kannario.jpg'},
        { name: 'XANDDY HARMONIA', image:'./artistas/xanddy.jpg'},
        { name: 'Léo Santana', image:'./artistas/leo.jpg'},
        { name: 'Filhos de Jorge', image:'./artistas/filhos-de-jorge.jpg'},
    ];
    
    
    const albumsData = [
        { name: 'Bendito Seja', image: './imagens/bendito-seja.jpg', artist: 'Saulo'},
        { name: 'Ela Tem o Dende', image : './imagens/ela tem o dende.jpg', artist: 'Filhos de Jorge'},
        { name: 'Panamera', image:'./imagens/panamera.jpg', artist: 'Tony Salles'},
        { name: 'Vumbora Amar', image:'./imagens/vumbora.jpg', artist: 'Bell Marques'},
        { name: 'Circulou', image:'./imagens/circulou.jpg', artist: 'Saulo, Macaco Gordo'},
        { name: 'Marquinha de Fitinha', image:'./imagens/paggode.jpg', artist: 'Léo Santana'},
    ];

    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')


    artistData.forEach( artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')


        artistCard.innerHTML = `
            <img src="${artist.image}" alt="imagem do ${artist.name}">
            <h3>${artist.name}</h3>
            <p>Artista</p>
            

            `
            artistGrid.appendChild(artistCard)
    })


    albumsData.forEach( album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.innerHTML = `
            <img src="${album.image}" alt="imagem do ${album.name}">
            <h3>${album.name}</h3>
            <p>${album.artist}</p>
            
        `

        albumsGrid.appendChild(albumCard)
    })
})


