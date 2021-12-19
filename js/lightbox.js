const images = document.querySelectorAll('.img-galeria');
const imagesLight = document.querySelector('.agregar-imagen');
const containerLight = document.querySelector('.imagen-light');
const hamburguer1 = document.querySelector('.hamburguer');

// console.log(images);
// console.log(imagesLight);
// console.log(containerLight);

images.forEach(image =>{
    image.addEventListener('click', ()=>{
        // alert("¡Ouch! ¡Me dolió!")
        // console.log(image.getAttribute('src'));
        aparecerImagen(image.getAttribute('src'));
    })
})

containerLight.addEventListener('click', (e)=>{
    if (e.target !== imagesLight){
        containerLight.classList.toggle('show');
        imagesLight.classList.toggle('showImage');
        hamburguer1.style.opacity = '1';
    }
})

const aparecerImagen = (imagen)=>{
    imagesLight.src = imagen;
    containerLight.classList.toggle('show');
    imagesLight.classList.toggle('showImage');
    hamburguer1.style.opacity = '0';
}