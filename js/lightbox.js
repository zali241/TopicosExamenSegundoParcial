const imagenes = document.querySelectorAll('.img-galeria')/*para todos los elementos*/
const imagenesLight = document.querySelectorAll('.agregar-imagen')
const contenedorLight = document.querySelectorAll('.imagen-light')
const menuncito1= document.querySelector('.menu');1

imagenes.forEach(imagen =>{
	imagen.addEvenListener('click', ()=>{  
		aparecerImagen(imagen.getAttribute('src'))
	})
})


contenedorLight.addEvenListener('click', (e)=>{
	if(e.target !== imagenesLight){
		contenedorLight.classList.toggle('show')
		imagenesLight.classList.toggle('showImage')
		menuncito1.style.opacity = '1'
	}
})


const aparecerImagen = (imagen)=>{
	imagenesLight.src = imagen
	contenedorLight.classList.toggle('show')/*para que aparesca el contenedor*/
	imagenesLight.classList.toggle('showImage')
	menuncito1.style.opacity = '0'
}