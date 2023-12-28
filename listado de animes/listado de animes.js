//funcion para que la barra de navegacion se haga fixed:
const body = document.querySelector(".body")
const barraDeNavegacion = document.querySelector(".barra-de-navegacion")
const ventanas = document.querySelector(".ventanas")
window.onscroll = function(){
	let scrolly = window.scrollY

	if (scrolly > 100) {
	ventanas.classList.add("ventana-fixed")
	barraDeNavegacion.classList.add("position-fixed")
	}
	if (scrolly < 100) {
		ventanas.classList.remove("ventana-fixed")
		barraDeNavegacion.classList.remove("position-fixed")
	}

}

const whatsapp = document.getElementById("icono-whatsapp")
const telegram = document.getElementById("icono-telegram")
const facebook = document.getElementById("icono-facebook")
const instagram = document.getElementById("icono-instagram")

const whatsappFooter = document.getElementById("icono-whatsapp-footer")
const telegramFooter = document.getElementById("icono-telegram-footer")
const facebookFooter = document.getElementById("icono-facebook-footer")
const instagramFooter = document.getElementById("icono-instagram-footer")

whatsapp.addEventListener("click", ()=>{
	document.getElementById("enlace-whatsapp").click()
})

telegram.addEventListener("click", ()=>{
	document.getElementById("enlace-telegram").click()
})

facebook.addEventListener("click", ()=>{
	document.getElementById("enlace-facebook").click()
})

instagram.addEventListener("click", ()=>{
	document.getElementById("enlace-instagram").click()
})

whatsappFooter.addEventListener("click", ()=>{
	document.getElementById("enlace-whatsapp").click()
})

telegramFooter.addEventListener("click", ()=>{
	document.getElementById("enlace-telegram").click()
})

facebookFooter.addEventListener("click", ()=>{
	document.getElementById("enlace-facebook").click()
})

instagramFooter.addEventListener("click", ()=>{
	document.getElementById("enlace-instagram").click()
})


const modal = document.querySelector(".modal")
const iconoBarras = document.querySelector(".icono-de-barras-responsive")
const iconoX = document.querySelector(".icono-x")
iconoBarras.addEventListener("click", desplegarModal)
iconoX.addEventListener("click", ocultarModal)

let desplegar = false
let ocultar = true
function desplegarModal(){
	if (ocultar == true) {
		modal.removeAttribute("hidden")
		modal.classList.add("desplazar-modal")
		body.classList.add("ocultar-scroll")
		desplegar = true
	}
}

function ocultarModal(){
	if (desplegar == true) {
		modal.setAttribute("hidden", "true")
		modal.classList.remove("desplazar-modal")
		body.classList.remove("ocultar-scroll")
		ocultar = true
	}
}

const botonInicio = document.querySelector(".inicio")
botonInicio.addEventListener("click", home)

function home(){
	document.querySelector('.link-inicio').click()
}

const botonInicioResponsive = document.querySelector(".icono-de-inicio-responsive")
botonInicioResponsive.addEventListener("click", home)


//funciones para modales de los poster del grid:
//items del grid container:
const container1 = document.querySelector(".new-1")
const container2 = document.querySelector(".new-2")
const container3 = document.querySelector(".new-3")
const container4 = document.querySelector(".new-4")
const container5 = document.querySelector(".new-5")
const container6 = document.querySelector(".new-6")
const container7 = document.querySelector(".new-7")
const container8 = document.querySelector(".new-8")
const container9 = document.querySelector(".new-9")


let enlace = ["../animes/chainsaw man/chainsaw.html",
"../animes/Death Note/death note.html",
"../animes/spy x family/spy x family.html",
"../animes/jujutsu kaisen/jujutsu kaisen.html",
"../animes/kimetsu no yaiba/kimetsu no yaiba.html",
"../animes/tokyo ghoul/tokyo ghoul.html",
"../animes/fire force/fire force.html",
"../animes/dr stone/dr stone.html",
"../animes/trigun stampede/trigun stampede.html"]

//funcion de buscar en el input:
const input = document.querySelector(".input-buscador")
const contenedorInput = document.querySelector(".input")

let linkInput = document.querySelector(".search-link")


const containerSeries = document.querySelector(".lista-de-series")



document.addEventListener("keyup", e=>{
	if (e.target.matches(".input-buscador")) {
		document.querySelectorAll(".series").forEach(fruta =>{
			fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
			?fruta.classList.remove("filtro")
			:fruta.classList.add("filtro")
		})
	}
})

for (let i = 0; i < 9; i++) {
			document.getElementById(`data-serie-${i}`).addEventListener("click", (e)=>{
			linkInput.setAttribute("href", enlace[i])
			linkInput.click()
	})
}





const buscar = document.querySelector(".buscador")
buscar.addEventListener("click", buscadorInput)

input.addEventListener("keydown", function(event) {
	if (event.key === "Enter") {
		buscadorInput()
	}
})


function buscadorInput(){
	if (input.value.toLowerCase() == "chainsaw man") {
		linkInput.setAttribute("href", enlace[0])
		linkInput.click()

	} else if (input.value.toLowerCase() == "death note") {
		linkInput.setAttribute("href", enlace[1])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "spy family") {
		linkInput.setAttribute("href", enlace[2])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "jujutsu kaisen") {
		linkInput.setAttribute("href", enlace[3])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "kimetsu no yaiba" || input.value.toLowerCase() == "demon slayer") {
		linkInput.setAttribute("href", enlace[4])
		linkInput.click()
	}
	
	
	else if (input.value.toLowerCase() == "tokyo ghoul") {
		linkInput.setAttribute("href", enlace[5])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "fire force") {
		linkInput.setAttribute("href", enlace[6])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "dr stone") {
		linkInput.setAttribute("href", enlace[7])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "trigun stampede") {
		linkInput.setAttribute("href", enlace[8])
		linkInput.click()
	}
	
	else{
		document.querySelector(".href-error").click()
	}
	
}




const inputResponsive = document.querySelector(".input-buscador-responsive")
let linkInputResponsive = document.querySelector(".search-link-responsive")


const containerSeriesResponsive = document.querySelector(".lista-de-series-responsive")



document.addEventListener("keyup", e=>{
	if (e.target.matches(".input-buscador-responsive")) {
		document.querySelectorAll(".series-responsive").forEach(fruta =>{
			fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
			?fruta.classList.remove("filtro-responsive")
			:fruta.classList.add("filtro-responsive")
		})
	}
})

for (let i = 0; i < 9; i++) {
			document.getElementById(`responsive-data-serie-${i}`).addEventListener("click", (e)=>{
			linkInputResponsive.setAttribute("href", enlace[i])
			linkInputResponsive.click()
	})
}



inputResponsive.addEventListener("keydown", function(event) {
	if (event.key === "Enter") {
		buscadorInputResponsive()
	}
})


function buscadorInputResponsive(){
	if (input.value.toLowerCase() == "chainsaw man") {
		linkInput.setAttribute("href", enlace[0])
		linkInput.click()

	} else if (input.value.toLowerCase() == "death note") {
		linkInput.setAttribute("href", enlace[1])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "spy family") {
		linkInput.setAttribute("href", enlace[2])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "jujutsu kaisen") {
		linkInput.setAttribute("href", enlace[3])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "kimetsu no yaiba" || input.value.toLowerCase() == "demon slayer") {
		linkInput.setAttribute("href", enlace[4])
		linkInput.click()
	}
	
	
	else if (input.value.toLowerCase() == "tokyo ghoul") {
		linkInput.setAttribute("href", enlace[5])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "fire force") {
		linkInput.setAttribute("href", enlace[6])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "dr stone") {
		linkInput.setAttribute("href", enlace[7])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "trigun stampede") {
		linkInput.setAttribute("href", enlace[8])
		linkInput.click()
	}
	
	else{
		document.querySelector(".href-error").click()
	}
	
	
}





const botonPopulares2020 = document.getElementById("populares-2020")
const botonPopulares2010 = document.getElementById("populares-2010")
const botonPopulares2000 = document.getElementById("populares-2000")
const botonPopulares1990 = document.getElementById("populares-1990")
const botonPopulares2020Responsive = document.getElementById("populares-2020-responsive")
const botonPopulares2010Responsive = document.getElementById("populares-2010-responsive")
const botonPopulares2000Responsive = document.getElementById("populares-2000-responsive")
const botonPopulares1990Responsive = document.getElementById("populares-1990-responsive")

botonPopulares2020.addEventListener("click", (e)=>{
	document.querySelector(".href-2020").click()
})

botonPopulares2010.addEventListener("click", (e)=>{
	document.querySelector(".href-2010").click()
})

botonPopulares2000.addEventListener("click", (e)=>{
	document.querySelector(".href-2000").click()
})

botonPopulares1990.addEventListener("click", (e)=>{
	document.querySelector(".href-1990").click()
})
botonPopulares2020Responsive.addEventListener("click", (e)=>{
	document.querySelector(".href-2020").click()
})

botonPopulares2010Responsive.addEventListener("click", (e)=>{
	document.querySelector(".href-2010").click()
})

botonPopulares2000Responsive.addEventListener("click", (e)=>{
	document.querySelector(".href-2000").click()
})

botonPopulares1990Responsive.addEventListener("click", (e)=>{
	document.querySelector(".href-1990").click()
})


const accion = document.getElementById("accion")
const comedia = document.getElementById("comedia")
const cienciaFiccion = document.getElementById("ciencia-ficcion")
const romance = document.getElementById("romance")
const suspenso = document.getElementById("suspenso")
const mecha = document.getElementById("mecha")
const ecchi = document.getElementById("ecchi")
const spokon = document.getElementById("spokon")

const accionResponsive = document.getElementById("accion-responsive")
const comediaResponsive = document.getElementById("comedia-responsive")
const cienciaFiccionResponsive = document.getElementById("ciencia-ficcion-responsive")
const romanceResponsive = document.getElementById("romance-responsive")
const suspensoResponsive = document.getElementById("suspenso-responsive")
const mechaResponsive = document.getElementById("mecha-responsive")
const ecchiResponsive = document.getElementById("ecchi-responsive")
const spokonResponsive = document.getElementById("spokon-responsive")

accion.addEventListener("click", (e)=>{
	document.querySelector(".href-accion").click()
})
comedia.addEventListener("click", (e)=>{
	document.querySelector(".href-comedia").click()
})
cienciaFiccion.addEventListener("click", (e)=>{
	document.querySelector(".href-ciencia-ficcion").click()
})
romance.addEventListener("click", (e)=>{
	document.querySelector(".href-romance").click()
})
suspenso.addEventListener("click", (e)=>{
	document.querySelector(".href-suspenso").click()
})
mecha.addEventListener("click", (e)=>{
	document.querySelector(".href-mecha").click()
})
ecchi.addEventListener("click", (e)=>{
	document.querySelector(".href-ecchi").click()
})
spokon.addEventListener("click", (e)=>{
	document.querySelector(".href-spokon").click()
})


accionResponsive.addEventListener("click", (e)=>{
	document.querySelector(".href-accion").click()
})
comediaResponsive.addEventListener("click", (e)=>{
	document.querySelector(".href-comedia").click()
})
cienciaFiccionResponsive.addEventListener("click", (e)=>{
	document.querySelector(".href-ciencia-ficcion").click()
})
romanceResponsive.addEventListener("click", (e)=>{
	document.querySelector(".href-romance").click()
})
suspensoResponsive.addEventListener("click", (e)=>{
	document.querySelector(".href-suspenso").click()
})
mechaResponsive.addEventListener("click", (e)=>{
	document.querySelector(".href-mecha").click()
})
ecchiResponsive.addEventListener("click", (e)=>{
	document.querySelector(".href-ecchi").click()
})
spokonResponsive.addEventListener("click", (e)=>{
	document.querySelector(".href-spokon").click()
})

const listadoDeAnimes = document.getElementById("listado-de-animes")
listadoDeAnimes.addEventListener("click", (e)=>{
	document.querySelector(".href-listado-de-animes").click()
})







//funcion de desplazamiento de imagen:
const delante = document.querySelector(".adelante")
const atras = document.querySelector(".atras")
const delante_responsive = document.querySelector(".adelante-responsive")
const atras_responsive = document.querySelector(".atras-responsive")
const contenedorImg = document.querySelector(".imagen-portada")
const titulo = document.querySelector(".titulo")
const informacion = document.querySelector(".informacion")
const pieDelTituloContainer = document.querySelector(".pie-de-titulo")

const imagen1 = document.createElement("IMG")
const imagen2 = document.createElement("IMG")
const imagen3 = document.createElement("IMG")

const tituloItem = document.createElement("H2")
const informacionItem = document.createElement("P")
const pieDelTitulo1 = document.createElement("b")
const pieDelTitulo2 = document.createElement("b")
const pieDelTitulo3 = document.createElement("b")

const punto1 = document.querySelector(".punto-1")
const punto2 = document.querySelector(".punto-2")
const punto3 = document.querySelector(".punto-3")
const punto4 = document.querySelector(".punto-4")

delante.addEventListener("click", avanzar)
atras.addEventListener("click", atrasar)
delante_responsive.addEventListener("click", avanzar)
atras_responsive.addEventListener("click", atrasar)

let adelanteA = true
let adelanteB = false
let adelanteC = false
let adelanteD = false

	if (adelanteA == true) {
	imagen1.src = "../imagenes/chainsaw man img 4.jpeg"
	contenedorImg.appendChild(imagen1)
	tituloItem.innerHTML = "Chainsaw Man"
	titulo.appendChild(tituloItem)
	informacionItem.innerHTML = "Denji es un joven atrapado en la probreza extrema. que trabaja para saldar la deuda de su padre fallecido con la Yakuza trabajando como cazador de demonios, con la ayuda de Pochita, su fiel compañero canino, hermano del alma y tambien conocido como el demonio motosierra..."
	informacion.appendChild(informacionItem)
	pieDelTitulo1.innerHTML = "8/10"
	pieDelTituloContainer.appendChild(pieDelTitulo1)
	pieDelTitulo2.innerHTML = "12 cap 2022"
	pieDelTituloContainer.appendChild(pieDelTitulo2)
	pieDelTitulo3.innerHTML = "720p"
	pieDelTituloContainer.appendChild(pieDelTitulo3)

	punto1.classList.add("punto-1-a")


}

function avanzar(){

	if (adelanteA == true) {
		imagen2.src = "../imagenes/spy family img 1.jpg"
		contenedorImg.appendChild(imagen2)
		contenedorImg.classList.add("desplazamiento-1")
		contenedorImg.classList.remove("posicion-de-imagen")
		contenedorImg.classList.remove("retrocesoa")
		contenedorImg.classList.remove("retrocesob")
		contenedorImg.classList.remove("retrocesoc")
		contenedorImg.classList.remove("retrocesod")
		
		tituloItem.innerHTML = "Spy X Family Temporada 2"
		titulo.appendChild(tituloItem)
		informacionItem.innerHTML = `Narra las aventuras del agente secreto <b>Twilight</b>, quien bajo su identidad de Loid Forger debe formar una familia para cumplir una mision y mantener la paz entre los paises ficticios de <b>Ostania y Westalis.`
		informacion.appendChild(informacionItem)
		pieDelTitulo1.innerHTML = "8/10"
		pieDelTituloContainer.appendChild(pieDelTitulo1)
		pieDelTitulo2.innerHTML = "37 Ep 2022"
		pieDelTituloContainer.appendChild(pieDelTitulo2)
		pieDelTitulo3.innerHTML = "720p"
		pieDelTituloContainer.appendChild(pieDelTitulo3)
		punto1.classList.replace("punto-1-a", "punto-1-e")
		punto2.classList.remove("punto-2-e")
		punto2.classList.add("punto-2-a")
		adelanteA = false
		adelanteB = true


		
	}

	else if (adelanteB == true) {
		imagen1.src = "../imagenes/jujutsu kaisen.png"
		contenedorImg.appendChild(imagen1)
		contenedorImg.classList.add("desplazamiento-2")
		contenedorImg.classList.remove("posicion-de-imagen")
		contenedorImg.classList.remove("retrocesoa")
		contenedorImg.classList.remove("retrocesob")
		contenedorImg.classList.remove("retrocesoc")
		contenedorImg.classList.remove("retrocesod")
		
		tituloItem.innerHTML = "Jujutsu Kaisen: Temporada 2"
		titulo.appendChild(tituloItem)
		informacionItem.innerHTML = `La historia gira en torno al estudiante <b>Yuji Itadori</b>, quien se une a una organizacion secreta de hechiceros para matar a una poderosa maldicion llamada <b>Ryomen Sukuna</b> tras convertirse en su anfitrion.`
		informacion.appendChild(informacionItem)
		pieDelTitulo1.innerHTML = "9/10"
		pieDelTituloContainer.appendChild(pieDelTitulo1)
		pieDelTitulo2.innerHTML = "37 cap 2019"
		pieDelTituloContainer.appendChild(pieDelTitulo2)
		pieDelTitulo3.innerHTML = "720p"
		pieDelTituloContainer.appendChild(pieDelTitulo3)
		punto2.classList.replace("punto-2-a", "punto-2-e")
		punto3.classList.remove("punto-3-e")
		punto3.classList.add("punto-3-a")
		adelanteB = false
		adelanteC = true
		
	}

	else if (adelanteC == true) {
		imagen2.src = "../imagenes/kimetsu no yaiba img 19.jpg"
		contenedorImg.appendChild(imagen2)
		contenedorImg.classList.add("desplazamiento-3")
		contenedorImg.classList.remove("posicion-de-imagen")
		contenedorImg.classList.remove("retrocesoa")
		contenedorImg.classList.remove("retrocesob")
		contenedorImg.classList.remove("retrocesoc")
		contenedorImg.classList.remove("retrocesod")
		
		tituloItem.innerHTML = "Kimetsu no Yaiba: Temporada 3 "
		titulo.appendChild(tituloItem)
		informacionItem.innerHTML = "Sigue las aventuas de Tanjiro Kamado, un adolescente cuya familia fue cruelmente asesinada por un Demonio el cual convirtio a su hermana Nezuko en una de estas criaturas, obligandolo a emprender un viaje para cazar a estos seres..."
		informacion.appendChild(informacionItem)
		pieDelTitulo1.innerHTML = "9/10"
		pieDelTituloContainer.appendChild(pieDelTitulo1)
		pieDelTitulo2.innerHTML = "54 cap 2019"
		pieDelTituloContainer.appendChild(pieDelTitulo2)
		pieDelTitulo3.innerHTML = "720p"
		pieDelTituloContainer.appendChild(pieDelTitulo3)
		punto3.classList.replace("punto-3-a", "punto-3-e")
		punto4.classList.remove("punto-4-e")
		punto4.classList.add("punto-4-a")
		adelanteC = false
		adelanteD = true		
	}
	else if (adelanteD == true) {
		imagen1.src = "../imagenes/chainsaw man img 4.jpeg"
		contenedorImg.appendChild(imagen1)
		contenedorImg.classList.remove("retrocesoa")
		contenedorImg.classList.remove("retrocesob")
		contenedorImg.classList.remove("retrocesoc")
		contenedorImg.classList.remove("retrocesod")
		contenedorImg.classList.remove("posicion-de-imagen")
		contenedorImg.classList.add("desplazamiento-4")
		
		tituloItem.innerHTML = "Chainsaw Man"
		titulo.appendChild(tituloItem)
		informacionItem.innerHTML = "Denji es un joven atrapado en la probreza extrema. que trabaja para saldar la deuda de su padre fallecido con la Yakuza trabajando como cazador de demonios, con la ayuda de Pochita, su fiel compañero canino, hermano del alma y tambien conocido como el demonio motosierra..."
		informacion.appendChild(informacionItem)
		pieDelTitulo1.innerHTML = "8/10"
		pieDelTituloContainer.appendChild(pieDelTitulo1)
		pieDelTitulo2.innerHTML = "12 cap 2022"
		pieDelTituloContainer.appendChild(pieDelTitulo2)
		pieDelTitulo3.innerHTML = "720p"
		pieDelTituloContainer.appendChild(pieDelTitulo3)

		punto4.classList.replace("punto-4-a", "punto-4-e")
		punto1.classList.remove("punto-1-e")
		punto1.classList.add("punto-1-a")
		adelanteD = false
		adelanteA = true
		
		}
	
}


delante.addEventListener("click", () =>{
	clearInterval(intervaloAvanzar)
	tiempoRetardo()
})
atras.addEventListener("click", () =>{
	clearInterval(intervaloAvanzar)
	tiempoRetardo()
})
delante_responsive.addEventListener("click", () =>{
	clearInterval(intervaloAvanzar)
	tiempoRetardo()
})
atras_responsive.addEventListener("click", () =>{
	clearInterval(intervaloAvanzar)
	tiempoRetardo()
})

let intervaloAvanzar
let tiempoAvanzar



function tiempoRetardo(){
	intervaloAvanzar = setInterval(avanzar, 9500)
}

tiempoRetardo()



function atrasar(){

	if (adelanteD == true) {
		imagen1.src = "../imagenes/jujutsu kaisen.png"
		contenedorImg.appendChild(imagen1)
		contenedorImg.classList.add("retrocesod")
		contenedorImg.classList.add("posicion-de-imagen")
		
		tituloItem.innerHTML = "Jujutsu Kaisen: Temporada 2"
		titulo.appendChild(tituloItem)
		informacionItem.innerHTML = `La historia gira en torno al estudiante <b>Yuji Itadori</b>, quien se une a una organizacion secreta de hechiceros para matar a una poderosa maldicion llamada <b>Ryomen Sukuna</b> tras convertirse en su anfitrion.`
		informacion.appendChild(informacionItem)
		pieDelTitulo1.innerHTML = "8/10"
		pieDelTituloContainer.appendChild(pieDelTitulo1)
		pieDelTitulo2.innerHTML = "37 cap 2019"
		pieDelTituloContainer.appendChild(pieDelTitulo2)
		pieDelTitulo3.innerHTML = "720p"
		pieDelTituloContainer.appendChild(pieDelTitulo3)
		punto4.classList.replace("punto-4-a", "punto-4-e")
		punto3.classList.remove("punto-3-e")
		punto3.classList.add("punto-3-a")
		adelanteD = false
		adelanteC = true

		
		
	}

	else if (adelanteC == true) {
		imagen2.src = "../imagenes/spy family img 1.jpg"
		contenedorImg.appendChild(imagen2)
		contenedorImg.classList.add("retrocesoc")
		contenedorImg.classList.add("posicion-de-imagen")
		
		tituloItem.innerHTML = "Spy X Family Temporada 2"
		titulo.appendChild(tituloItem)
		informacionItem.innerHTML = `Narra las aventuras del agente secreto <b>Twilight</b>, quien bajo su identidad de Loid Forger debe formar una familia para cumplir una mision y mantener la paz entre los paises ficticios de <b>Ostania y Westalis.`
		informacion.appendChild(informacionItem)
		pieDelTitulo1.innerHTML = "8/10"
		pieDelTituloContainer.appendChild(pieDelTitulo1)
		pieDelTitulo2.innerHTML = "37 Ep 2022"
		pieDelTituloContainer.appendChild(pieDelTitulo2)
		pieDelTitulo3.innerHTML = "720p"
		pieDelTituloContainer.appendChild(pieDelTitulo3)
		punto3.classList.replace("punto-3-a", "punto-3-e")
		punto2.classList.remove("punto-2-e")
		punto2.classList.add("punto-2-a")
		adelanteC = false
		adelanteB = true
	}

	else if (adelanteB == true ) {
		imagen1.src = "../imagenes/chainsaw man img 4.jpeg"
		contenedorImg.appendChild(imagen1)
		contenedorImg.classList.add("retrocesob")
		contenedorImg.classList.add("posicion-de-imagen")
		
		tituloItem.innerHTML = "Chainsaw Man"
		titulo.appendChild(tituloItem)
		informacionItem.innerHTML = "Denji es un joven atrapado en la probreza extrema. que trabaja para saldar la deuda de su padre fallecido con la Yakuza trabajando como cazador de demonios, con la ayuda de Pochita, su fiel compañero canino, hermano del alma y tambien conocido como el demonio motosierra..."
		informacion.appendChild(informacionItem)
		pieDelTitulo1.innerHTML = "8/10"
		pieDelTituloContainer.appendChild(pieDelTitulo1)
		pieDelTitulo2.innerHTML = "12 cap 2022"
		pieDelTituloContainer.appendChild(pieDelTitulo2)
		pieDelTitulo3.innerHTML = "720p"
		pieDelTituloContainer.appendChild(pieDelTitulo3)
		punto2.classList.replace("punto-2-a", "punto-2-e")
		punto1.classList.replace("punto-1-e", "punto-1-a")
		adelanteB = false
		adelanteA = true
	}
	else if (adelanteA == true) {
		
		imagen2.src = "../imagenes/kimetsu no yaiba img 19.jpg"
		contenedorImg.appendChild(imagen2)
		contenedorImg.classList.add("posicion-de-imagen")
		contenedorImg.classList.add("retrocesoa")
		tituloItem.innerHTML = "Kimetsu no Yaiba: Temporada 3"
		titulo.appendChild(tituloItem)
		informacionItem.innerHTML = "Sigue las aventuas de Tanjiro Kamado, un adolescente cuya familia fue cruelmente asesinada por un Demonio el cual convirtio a su hermana Nezuko en una de estas criaturas, obligandolo a emprender un viaje para cazar a estos seres..."
		informacion.appendChild(informacionItem)
		pieDelTitulo1.innerHTML = "9/10"
		pieDelTituloContainer.appendChild(pieDelTitulo1)
		pieDelTitulo2.innerHTML = "54 cap 2019"
		pieDelTituloContainer.appendChild(pieDelTitulo2)
		pieDelTitulo3.innerHTML = "720p"
		pieDelTituloContainer.appendChild(pieDelTitulo3)
		adelanteA = false
		adelanteD = true
		punto1.classList.replace("punto-1-a", "punto-1-e")
		punto4.classList.remove("punto-4-e")
		punto4.classList.add("punto-4-a")
	}
	
}



//funcion de evento para ver la serie con el boton ver serie:
const botonVerSerie = document.querySelector(".ver-pelicula")

botonVerSerie.addEventListener("click", verSerie)

function verSerie(){
	if (adelanteA == true) {
		document.querySelector('.chainsaw-link').click()
	}

	else if (adelanteB == true) {
		document.querySelector('.attack-link').click()
	}

	else if (adelanteC == true) {
		document.querySelector('.jujutsu-link').click()
	}

	else if (adelanteD == true) {
		document.querySelector('.kimetsu-link').click()
	}


}


//funcion de ventanas ocultas de la barra de navegacion:
const seleccion1 = document.querySelector(".selector-one")
const seleccion2 = document.querySelector(".selector-two")
const options1 = document.querySelector(".ventana-1")
const options2 = document.querySelector(".ventana-2")


seleccion1.addEventListener("mouseover", opciones1)
options1.addEventListener("mouseover", opciones1)
seleccion1.addEventListener("mouseleave", opciones21)
options1.addEventListener("mouseleave", opciones21)

seleccion2.addEventListener("mouseover", opciones2)
options2.addEventListener("mouseover", opciones2)
seleccion2.addEventListener("mouseleave", opciones22)
options2.addEventListener("mouseleave", opciones22)




function opciones1(){
	options1.classList.add("aumentar-1")
}

function opciones21(){
	options1.classList.remove("aumentar-1")
}

function opciones2(){
	options2.classList.add("aumentar-2")
}

function opciones22(){
	options2.classList.remove("aumentar-2")
}









const linkSeries = document.querySelector(".link-1")

document.querySelector(".boton-ver-1").addEventListener("click", ()=>{
	linkSeries.setAttribute("href", enlace[0])
	linkSeries.click()
})
document.querySelector(".boton-ver-2").addEventListener("click", ()=>{
	linkSeries.setAttribute("href", enlace[1])
	linkSeries.click()
})
document.querySelector(".boton-ver-3").addEventListener("click", ()=>{
	linkSeries.setAttribute("href", enlace[2])
	linkSeries.click()
})
document.querySelector(".boton-ver-4").addEventListener("click", ()=>{
	linkSeries.setAttribute("href", enlace[3])
	linkSeries.click()
})
document.querySelector(".boton-ver-5").addEventListener("click", ()=>{
	linkSeries.setAttribute("href", enlace[4])
	linkSeries.click()
})
document.querySelector(".boton-ver-6").addEventListener("click", ()=>{
	linkSeries.setAttribute("href", enlace[5])
	linkSeries.click()
})
document.querySelector(".boton-ver-7").addEventListener("click", ()=>{
	linkSeries.setAttribute("href", enlace[6])
	linkSeries.click()
})
document.querySelector(".boton-ver-8").addEventListener("click", ()=>{
	linkSeries.setAttribute("href", enlace[7])
	linkSeries.click()
})
document.querySelector(".boton-ver-9").addEventListener("click", ()=>{
	linkSeries.setAttribute("href", enlace[8])
	linkSeries.click()
})













const contenedorItemAside1 = document.querySelector(".item-aside-1")

const contenedorItemAside2 = document.querySelector(".item-aside-2")
const contenedorItemAside3 = document.querySelector(".item-aside-3")
const contenedorItemAside4 = document.querySelector(".item-aside-4")
const contenedorItemAside5 = document.querySelector(".item-aside-5")
const contenedorItemAside6 = document.querySelector(".item-aside-6")
const contenedorItemAside7 = document.querySelector(".item-aside-7")
const contenedorItemAside8 = document.querySelector(".item-aside-8")
const contenedorItemAside9 = document.querySelector(".item-aside-9")



contenedorItemAside1.addEventListener("mouseover",() =>{
	contenedorItemAside1.classList.add("sub-item-aside")
	
}) 
contenedorItemAside1.addEventListener("mouseleave",() =>{
	contenedorItemAside1.classList.remove("sub-item-aside")
	
}) 

contenedorItemAside2.addEventListener("mouseover",() =>{
	contenedorItemAside2.classList.add("sub-item-aside")
	
}) 
contenedorItemAside2.addEventListener("mouseleave",() =>{
	contenedorItemAside2.classList.remove("sub-item-aside")
	
}) 

contenedorItemAside3.addEventListener("mouseover",() =>{
	contenedorItemAside3.classList.add("sub-item-aside")
	
}) 
contenedorItemAside3.addEventListener("mouseleave",() =>{
	contenedorItemAside3.classList.remove("sub-item-aside")
	
}) 

contenedorItemAside4.addEventListener("mouseover",() =>{
	contenedorItemAside4.classList.add("sub-item-aside")
	
}) 
contenedorItemAside4.addEventListener("mouseleave",() =>{
	contenedorItemAside4.classList.remove("sub-item-aside")
	
}) 

contenedorItemAside5.addEventListener("mouseover",() =>{
	contenedorItemAside5.classList.add("sub-item-aside")
	
}) 
contenedorItemAside5.addEventListener("mouseleave",() =>{
	contenedorItemAside5.classList.remove("sub-item-aside")
	
}) 

contenedorItemAside6.addEventListener("mouseover",() =>{
	contenedorItemAside6.classList.add("sub-item-aside")
	
}) 
contenedorItemAside6.addEventListener("mouseleave",() =>{
	contenedorItemAside6.classList.remove("sub-item-aside")
	
}) 

contenedorItemAside7.addEventListener("mouseover",() =>{
	contenedorItemAside7.classList.add("sub-item-aside")
	
}) 
contenedorItemAside7.addEventListener("mouseleave",() =>{
	contenedorItemAside7.classList.remove("sub-item-aside")
	
}) 

contenedorItemAside8.addEventListener("mouseover",() =>{
	contenedorItemAside8.classList.add("sub-item-aside")
	
}) 
contenedorItemAside8.addEventListener("mouseleave",() =>{
	contenedorItemAside8.classList.remove("sub-item-aside")
	
}) 

contenedorItemAside9.addEventListener("mouseover",() =>{
	contenedorItemAside9.classList.add("sub-item-aside")
	
}) 
contenedorItemAside9.addEventListener("mouseleave",() =>{
	contenedorItemAside9.classList.remove("sub-item-aside")
	
}) 



contenedorItemAside1.addEventListener("click",() =>{
	document.querySelector(".href-aside-1").click()
	
}) 

contenedorItemAside2.addEventListener("click",() =>{
	document.querySelector(".href-aside-2").click()
	
}) 
contenedorItemAside3.addEventListener("click",() =>{
	document.querySelector(".href-aside-3").click()
	
}) 
contenedorItemAside4.addEventListener("click",() =>{
	document.querySelector(".href-aside-4").click()
	
}) 
contenedorItemAside5.addEventListener("click",() =>{
	document.querySelector(".href-aside-5").click()
	
}) 
contenedorItemAside6.addEventListener("click",() =>{
	document.querySelector(".href-aside-6").click()
	
}) 
contenedorItemAside7.addEventListener("click",() =>{
	document.querySelector(".href-aside-7").click()
	
}) 
contenedorItemAside8.addEventListener("click",() =>{
	document.querySelector(".href-aside-8").click()
	
}) 
contenedorItemAside9.addEventListener("click",() =>{
	document.querySelector(".href-aside-9").click()
	
}) 









const contenedorAsideResponsive1 = document.querySelector(".serie-aside-responsive-1")
const contenedorAsideResponsive2 = document.querySelector(".serie-aside-responsive-2")
const contenedorAsideResponsive3 = document.querySelector(".serie-aside-responsive-3")
const contenedorAsideResponsive4 = document.querySelector(".serie-aside-responsive-4")
const contenedorAsideResponsive5 = document.querySelector(".serie-aside-responsive-5")
const contenedorAsideResponsive6 = document.querySelector(".serie-aside-responsive-6")
const contenedorAsideResponsive7 = document.querySelector(".serie-aside-responsive-7")
const contenedorAsideResponsive8 = document.querySelector(".serie-aside-responsive-8")
const contenedorAsideResponsive9 = document.querySelector(".serie-aside-responsive-9")

contenedorAsideResponsive1.addEventListener("click", ()=>{
	document.querySelector(".href-aside-1").click()
	contenedorAsideResponsive1.classList.add("agrandar-aside-responsive")
})

contenedorAsideResponsive2.addEventListener("click", ()=>{
	document.querySelector(".href-aside-2").click()
	contenedorAsideResponsive2.classList.add("agrandar-aside-responsive")
})

contenedorAsideResponsive3.addEventListener("click", ()=>{
	document.querySelector(".href-aside-3").click()
	contenedorAsideResponsive3.classList.add("agrandar-aside-responsive")
})

contenedorAsideResponsive4.addEventListener("click", ()=>{
	document.querySelector(".href-aside-4").click()
	contenedorAsideResponsive4.classList.add("agrandar-aside-responsive")
})

contenedorAsideResponsive5.addEventListener("click", ()=>{
	document.querySelector(".href-aside-5").click()
	contenedorAsideResponsive5.classList.add("agrandar-aside-responsive")
})

contenedorAsideResponsive6.addEventListener("click", ()=>{
	document.querySelector(".href-aside-6").click()
	contenedorAsideResponsive6.classList.add("agrandar-aside-responsive")
})

contenedorAsideResponsive7.addEventListener("click", ()=>{
	document.querySelector(".href-aside-7").click()
	contenedorAsideResponsive7.classList.add("agrandar-aside-responsive")
})

contenedorAsideResponsive8.addEventListener("click", ()=>{
	document.querySelector(".href-aside-8").click()
	contenedorAsideResponsive8.classList.add("agrandar-aside-responsive")
})

contenedorAsideResponsive9.addEventListener("click", ()=>{
	document.querySelector(".href-aside-9").click()
	contenedorAsideResponsive9.classList.add("agrandar-aside-responsive")
})



