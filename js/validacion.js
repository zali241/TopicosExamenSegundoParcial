
const usuario = document.getElementById("user");
const password = document.getElementById("pass");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener('submit', e=> {
		e.preventDefault()
		let warnings="" 
		let entrar = false
		parrafo.innerHTML = ""
		if (usuario.value.lenght <6){
			warnings += 'el nombre no es valido <br>'
			entrar= true
	}

	if (password.value.lenght <8) {
		warnings += 'La contraseña no es valida <br>'
		entrar = true
	}

	if(entrar){
		parrafo.innerHTML = warnings
	}else{
		parrafo.innerHTML = "Enviado"
		window.location.href = 'Principal.html';
	}
})