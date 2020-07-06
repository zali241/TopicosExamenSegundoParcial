const menuncito = document.querySelector('.menu');
const menuu = document.querySelector('.menu-navegacion');

console.log(menuu)
console.log(menuncito)


menuncito.addEventListener('click',()=>{
	menuu.classlist-.toggle("spread")

})

window.addEventListener('click', e=>{
	if(menuu.classlist.contains('spread') &&e.target != menuu && e.target != menuncito){/*esto es para que cierre el menu cuando demos click en cuaquier parte de la pagina*/
		menuu.classlist.toggle("spread")

	}
})
