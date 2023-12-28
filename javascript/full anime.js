"use strict"


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


const listadoDeAnimesResponsive = document.getElementById("listado-de-animes-responsive")
listadoDeAnimesResponsive.addEventListener("click", (e)=>{
	document.querySelector(".href-listado-de-animes").click()
})


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


container1.addEventListener("mouseover", presionar1)
container1.addEventListener("mouseleave", ocultarVentana1)
container2.addEventListener("mouseover", presionar2)
container2.addEventListener("mouseleave", ocultarVentana2)
container3.addEventListener("mouseover", presionar3)
container3.addEventListener("mouseleave", ocultarVentana3)
container4.addEventListener("mouseover", presionar4)
container4.addEventListener("mouseleave", ocultarVentana4)
container5.addEventListener("mouseover", presionar5)
container5.addEventListener("mouseleave", ocultarVentana5)
container6.addEventListener("mouseover", presionar6)
container6.addEventListener("mouseleave", ocultarVentana6)
container7.addEventListener("mouseover", presionar7)
container7.addEventListener("mouseleave", ocultarVentana7)
container8.addEventListener("mouseover", presionar8)
container8.addEventListener("mouseleave", ocultarVentana8)
container9.addEventListener("mouseover", presionar9)
container9.addEventListener("mouseleave", ocultarVentana9)


container1.addEventListener("click", () =>{
	href1.click()
})
container2.addEventListener("click", () =>{
	href2.click()
})
container3.addEventListener("click", () =>{
	href3.click()
})
container4.addEventListener("click", () =>{
	href4.click()
})
container5.addEventListener("click", () =>{
	href5.click()
})
container6.addEventListener("click", () =>{
	href6.click()
})
container7.addEventListener("click", () =>{
	href7.click()
})
container8.addEventListener("click", () =>{
	href8.click()
})
container9.addEventListener("click", () =>{
	href9.click()
})



//contenedores de informacion de las ventanas ocultas de los poster: 
const item = document.querySelector(".item")
const item2 = document.querySelector(".item-2")
const item3 = document.querySelector(".item-3")
const item4 = document.querySelector(".item-4")
const item5 = document.querySelector(".item-5")
const item6 = document.querySelector(".item-6")
const item7 = document.querySelector(".item-7")
const item8 = document.querySelector(".item-8")
const item9 = document.querySelector(".item-9")


//variables para cambiar atributo alt:
let alt = ["img Chainsaw Man", 
"img Death Note", 
"img Spy X Family", 
"img Jujutsu Kaisen", 
"img Kimetsu No Yaiba", 
"img Tokyo Ghoul", 
"img Fire Force", 
"img Dr Stone", 
"img Trigon Stampede"
]

let title = ["Poster Chainsaw Man", 
"Poster Death Note", 
"Poster Spy X Family", 
"Poster Jujutsu Kaisen", 
"Poster Kimetsu No Yaiba", 
"Poster Tokyo Ghoul", 
"Poster Fire Force", 
"Poster Dr Stone", 
"Poster Trigun Stampede" 
]



//parrafos para cambiar el parrafo de las ventanas ocultas de los grid:

let parrafo = [`<h3>Chainsaw Man</h3><b>Denji</b> es un joven atrapado en la probreza extrema. que trabaja para saldar la deuda de su padre fallecido con la Yakuza trabajando como cazador de demonios, con la ayuda de <b>Pochita</b>, su fiel compañero canino, hermano del alma y tambien conocido como el demonio motosierra.<br><br><b>Genero:</b> A<br><br><b>Estudio:</b> Mappa`,

 			`<h3>Death Note</h3>La historia se centra en <b>Light Yagami</b>, un estudiante de ecuela secundaria. Un dia encuentra un cuaderno con poderes sobrenaturales llamado <b>"Death Note"</b>, con e cual es capaz de matar personas si se escriben los nombres de estas en el.<br><br><b>Genero:</b> Suspenso, Accion<br><br><b>Estudio:</b> Madhouse`,

			

			`<h3>Spy X Family</h3>Narra las aventuras del agente secreto <b>Twilight</b>, quien bajo su identidad de Loid Forger debe formar una familia para cumplir una mision y mantener la paz entre los paises ficticios de <b>Ostania y Westalis</b>.<br><br><b>Genero:</b> Accion, Comedia<br><br><b>Estudio:</b> Wit Studio`, 

			
			`<h3>Jujutsu Kaisen</h3>La historia gira en torno al estudiante <b>Yuji Itadori</b>, quien se une a una organizacion secreta de hechiceros para matar a una poderosa maldicion llamada <b>Ryomen Sukuna</b> tras convertirse en su anfitrion.<br><br><b>Genero:</b> Accion<br><br><b>Estudio:</b> Mappa`, 

			`<h3>Demon Slayer: Kimetsu No Yaiba</h3>La obra sigue las aventuras de <b>Tanjiro Kamado</b>, un adolescente cuya familia fue cruelmente asesina por un Demonio el cual convirtio a su hermana <b>Nezuko</b> en una de estas criaturas, obligando a Tanjiro a emprender un viaje para cazar a estos seres  y ayudar a su hermana a recuperar su humanidad. <br><br><b>Genero:</b> Accion, Aventura<br><br><b>Estudio:</b> Ufotable`, 

			
			`<h3>Tokyo Ghoul</h3>Serie con violencia explícita y ambientación sobrenatural que presenta una ciudad de Tokio en la que mueren personas inocentes a manos de <b>Ghouls</b>, seres misteriosos que se alimentan de humanos.<br><br><b>Genero:</b> Accion, Suspenso<br><br><b>Estudio:</b>Pierrot`, 

			
			`<h3>Fire Force</h3><b>Shinra Kusakabe</b> es un joven pirocinético de tercera generación que ganó el apodo de <b>"Huellas del Diablo"</b> por su habilidad para encender sus pies a voluntad. Se une al Escuadrón <b>Fire Force 8</b>, que está compuesto por otros usuarios 
				de llamas mientras trabajan para extinguir cualquier Infernal que encuentren.<br><br><b>Genero:</b> Accion<br><br><b>Estudio:</b> David Production`, 

			
			`<h3>Dr Stone</h3>La historia cuenta las aventuras de <b>Senku</b> y <b>Taiju</b>, dos adolescentes que se ven atrapados en un mundo <b>post-apocaliptico</b> en el que la raza humana se ha convertido en piedra y ellos buscan la manera de revertir 
				la pretificacion en la mayor cantidad de personas posibles, para asi reconstruir la sociedad tal cmo la conocieron.<br><br><b>Genero:</b> Accion, aventura<br><br><b>Estudio:</b>TMS Entertaiment`, 

			
			`<h3>Trigun Stampede</h3>La historia de <b>"Trigun"</b> gira alrededor de Vash Estampida, un pistolero famoso que se ha ganado el sobrenombre de <b>"El Huracan Humano"</b> porque el caos y la destruccion arrasan alla donde el pasa.<br><br><b>Genero:</b> Accion, space western<br><br><b>Estudio:</b> Orange`]













//contenedores de las imagenes y los parrafosn de las ventanas ocultas:
const image = document.querySelector(".img-hidden-1")
const parrafos = document.querySelector(".parrafos-1")
const image2 = document.querySelector(".img-hidden-2")
const parrafos2 = document.querySelector(".parrafos-2")
const image3 = document.querySelector(".img-hidden-3")
const parrafos3 = document.querySelector(".parrafos-3")
const image4 = document.querySelector(".img-hidden-4")
const parrafos4 = document.querySelector(".parrafos-4")
const image5 = document.querySelector(".img-hidden-5")
const parrafos5 = document.querySelector(".parrafos-5")
const image6 = document.querySelector(".img-hidden-6")
const parrafos6 = document.querySelector(".parrafos-6")
const image7 = document.querySelector(".img-hidden-7")
const parrafos7 = document.querySelector(".parrafos-7")
const image8 = document.querySelector(".img-hidden-8")
const parrafos8 = document.querySelector(".parrafos-8")
const image9 = document.querySelector(".img-hidden-9")
const parrafos9 = document.querySelector(".parrafos-9")


function presionar1(){
	item.classList.add("item-animacion")
		for (let i = 0; i < 61; i++) {
			if (srcPoster1.alt == alt[i]) {
			image.setAttribute("src", poster[i])
			parrafos.innerHTML = parrafo[i]
		}
	}
}

function ocultarVentana1(){
	item.classList.remove("item-animacion")
}


function presionar2(){
	item2.classList.add("item-animacion-2")
		for (let i = 0; i < 61; i++) {
			if (srcPoster2.alt == alt[i]) {
			image2.setAttribute("src", poster[i])
			parrafos2.innerHTML = parrafo[i]
		}
	}
}

function ocultarVentana2(){
		item2.classList.remove("item-animacion-2")
}


function presionar3(){
	item3.classList.add("item-animacion-3")
		for (let i = 0; i < 61; i++) {
			if (srcPoster3.alt == alt[i]) {
			image3.setAttribute("src", poster[i])
			parrafos3.innerHTML = parrafo[i]
		}
	}
}
function ocultarVentana3(){
	item3.classList.remove("item-animacion-3")
		
}

function presionar4(){
	item4.classList.add("item-animacion-4")
		for (let i = 0; i < 61; i++) {
			if (srcPoster4.alt == alt[i]) {
			image4.setAttribute("src", poster[i])
			parrafos4.innerHTML = parrafo[i]
		}
	}
}
function ocultarVentana4(){
	item4.classList.remove("item-animacion-4")
		
}


function presionar5(){
	item5.classList.add("item-animacion-5")
		for (let i = 0; i < 61; i++) {
			if (srcPoster5.alt == alt[i]) {
			image5.setAttribute("src", poster[i])
			parrafos5.innerHTML = parrafo[i]
		}
	}
}

function ocultarVentana5(){
		item5.classList.remove("item-animacion-5")
}



function presionar6(){
	item6.classList.add("item-animacion-6")
		for (let i = 0; i < 61; i++) {
			if (srcPoster6.alt == alt[i]) {
			image6.setAttribute("src", poster[i])
			parrafos6.innerHTML = parrafo[i]
		}
	}
}

function ocultarVentana6(){
		item6.classList.remove("item-animacion-6")
}

function presionar7(){
	item7.classList.add("item-animacion-7")
		for (let i = 0; i < 61; i++) {
			if (srcPoster7.alt == alt[i]) {
			image7.setAttribute("src", poster[i])
			parrafos7.innerHTML = parrafo[i]
		}
	}
}

function ocultarVentana7(){
		item7.classList.remove("item-animacion-7")
}

function presionar8(){
	item8.classList.add("item-animacion-8")
		for (let i = 0; i < 61; i++) {
			if (srcPoster8.alt == alt[i]) {
			image8.setAttribute("src", poster[i])
			parrafos8.innerHTML = parrafo[i]
		}
	}
}

function ocultarVentana8(){
		item8.classList.remove("item-animacion-8")
}


function presionar9(){
	item9.classList.add("item-animacion-9")
		for (let i = 0; i < 61; i++) {
			if (srcPoster9.alt == alt[i]) {
			image9.setAttribute("src", poster[i])
			parrafos9.innerHTML = parrafo[i]
		}
	}
}

function ocultarVentana9(){
		item9.classList.remove("item-animacion-9")
}




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
	imagen1.src = "imagenes/chainsaw man img 4.jpeg"
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
		imagen2.src = "imagenes/spy family img 1.jpg"
		contenedorImg.appendChild(imagen2)
		contenedorImg.classList.add("desplazamiento-1")
		contenedorImg.classList.remove("posicion-de-imagen")
		contenedorImg.classList.remove("retrocesoa")
		contenedorImg.classList.remove("retrocesob")
		contenedorImg.classList.remove("retrocesoc")
		contenedorImg.classList.remove("retrocesod")
		
		tituloItem.innerHTML = "Spy X Family Temporada 2"
		titulo.appendChild(tituloItem)
		informacionItem.innerHTML = `El llamado Arco de Aventura en el Crucero nos muestra como <b>Yor</b>, que ya empieza a ver que su vida como asesina carece de sentido (ella esta casada y su hermano independizado) recibe un encargo diferente. Tendra que hacer de guardaespaldas de la mujer y el bebe de un capo de la mafia asesinado.`
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
		imagen1.src = "imagenes/jujutsu kaisen.png"
		contenedorImg.appendChild(imagen1)
		contenedorImg.classList.add("desplazamiento-2")
		contenedorImg.classList.remove("posicion-de-imagen")
		contenedorImg.classList.remove("retrocesoa")
		contenedorImg.classList.remove("retrocesob")
		contenedorImg.classList.remove("retrocesoc")
		contenedorImg.classList.remove("retrocesod")
		
		tituloItem.innerHTML = "Jujutsu Kaisen: Temporada 2"
		titulo.appendChild(tituloItem)
		informacionItem.innerHTML = `<b>Gojo</b> y sus compañeros <b>Geto</b> y <b>Leiri</b> reciben el encargo de escoltar a una joven que se convertira en la siguiente recipiente de <b>Plasma Estelar</b>, aunque la amenaza del asesino pone en peligro la mision.`
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
		imagen2.src = "imagenes/kimetsu no yaiba img 19.jpg"
		contenedorImg.appendChild(imagen2)
		contenedorImg.classList.add("desplazamiento-3")
		contenedorImg.classList.remove("posicion-de-imagen")
		contenedorImg.classList.remove("retrocesoa")
		contenedorImg.classList.remove("retrocesob")
		contenedorImg.classList.remove("retrocesoc")
		contenedorImg.classList.remove("retrocesod")
		
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
		punto3.classList.replace("punto-3-a", "punto-3-e")
		punto4.classList.remove("punto-4-e")
		punto4.classList.add("punto-4-a")
		adelanteC = false
		adelanteD = true		
	}
	else if (adelanteD == true) {
		imagen1.src = "imagenes/chainsaw man img 4.jpeg"
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
		imagen1.src = "imagenes/jujutsu kaisen.png"
		contenedorImg.appendChild(imagen1)
		contenedorImg.classList.add("retrocesod")
		contenedorImg.classList.add("posicion-de-imagen")
		
		tituloItem.innerHTML = "Jujutsu Kaisen: Temporada 2"
		titulo.appendChild(tituloItem)
		informacionItem.innerHTML = `<b>Gojo</b> y sus compañeros <b>Geto</b> y <b>Leiri</b> reciben el encargo de escoltar a una joven que se convertira en la siguiente recipiente de <b>Plasma Estelar</b>, aunque la amenaza del asesino pone en peligro la mision.`
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
		imagen2.src = "imagenes/spy family img 1.jpg"
		contenedorImg.appendChild(imagen2)
		contenedorImg.classList.add("retrocesoc")
		contenedorImg.classList.add("posicion-de-imagen")
		
		tituloItem.innerHTML = "Spy X Family Temporada 2"
		titulo.appendChild(tituloItem)
		informacionItem.innerHTML = `El llamado Arco de Aventura en el Crucero nos muestra como <b>Yor</b>, que ya empieza a ver que su vida como asesina carece de sentido (ella esta casada y su hermano independizado) recibe un encargo diferente. Tendra que hacer de guardaespaldas de la mujer y el bebe de un capo de la mafia asesinado.`
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
		imagen1.src = "imagenes/chainsaw man img 4.jpeg"
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
		
		imagen2.src = "imagenes/kimetsu no yaiba img 19.jpg"
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




//funcion de eventos de botones de las ventanas ocultas de la barra de navegacion:



//funcion para aparecer icono en el poster del grid y para oscurecer el poster con mouseover:
const container7rid = document.querySelector(".grid-container")

container1.addEventListener("mouseover", () =>{
	container1.classList.add("opacar")
})
container2.addEventListener("mouseover", () =>{
	container2.classList.add("opacar")	
})
container3.addEventListener("mouseover", () =>{
	container3.classList.add("opacar")	
})
container4.addEventListener("mouseover", () =>{
	container4.classList.add("opacar")
})
container5.addEventListener("mouseover", () =>{
	container5.classList.add("opacar")
})
container6.addEventListener("mouseover", () =>{
	container6.classList.add("opacar")
})
container7.addEventListener("mouseover", () =>{
	container7.classList.add("opacar")
})
container8.addEventListener("mouseover", () =>{
	container8.classList.add("opacar")
})
container9.addEventListener("mouseover", () =>{
	container9.classList.add("opacar")
})


container1.addEventListener("mouseleave", () =>{
	container1.classList.remove("opacar")
})
container2.addEventListener("mouseleave", () =>{
	container2.classList.remove("opacar")	
})
container3.addEventListener("mouseleave", () =>{
	container3.classList.remove("opacar")	
})
container4.addEventListener("mouseleave", () =>{
	container4.classList.remove("opacar")
})
container5.addEventListener("mouseleave", () =>{
	container5.classList.remove("opacar")
})
container6.addEventListener("mouseleave", () =>{
	container6.classList.remove("opacar")
})
container7.addEventListener("mouseleave", () =>{
	container7.classList.remove("opacar")
})
container8.addEventListener("mouseleave", () =>{
	container8.classList.remove("opacar")
})
container9.addEventListener("mouseleave", () =>{
	container9.classList.remove("opacar")
})






//funciones para cambiar los poster, los href y los nombres:
const botonUltimos = document.querySelector(".ultimos")
const botonTendencias = document.querySelector(".tendencia")
const botonEstrenos = document.querySelector(".estrenos")
const contenedorBotones = document.querySelector(".botones-de-entrada")
const contenedorPoster1 = document.querySelector(".img-poster-1")
const contenedorPoster2 = document.querySelector(".img-poster-2")
const contenedorPoster3 = document.querySelector(".img-poster-3")
const contenedorPoster4 = document.querySelector(".img-poster-4")
const contenedorPoster5 = document.querySelector(".img-poster-5")
const contenedorPoster6 = document.querySelector(".img-poster-6")
const contenedorPoster7 = document.querySelector(".img-poster-7")
const contenedorPoster8 = document.querySelector(".img-poster-8")
const contenedorPoster9 = document.querySelector(".img-poster-9")


//variables para cambiar el href:
const href1 = document.querySelector(".href-1")
const href2 = document.querySelector(".href-2")
const href3 = document.querySelector(".href-3")
const href4 = document.querySelector(".href-4")
const href5 = document.querySelector(".href-5")
const href6 = document.querySelector(".href-6")
const href7 = document.querySelector(".href-7")
const href8 = document.querySelector(".href-8")
const href9 = document.querySelector(".href-9")


//variables para cambiar el src:
const srcPoster1 = document.querySelector(".src-poster-1")
const srcPoster2 = document.querySelector(".src-poster-2")
const srcPoster3 = document.querySelector(".src-poster-3")
const srcPoster4 = document.querySelector(".src-poster-4")
const srcPoster5 = document.querySelector(".src-poster-5")
const srcPoster6 = document.querySelector(".src-poster-6")
const srcPoster7 = document.querySelector(".src-poster-7")
const srcPoster8 = document.querySelector(".src-poster-8")
const srcPoster9 = document.querySelector(".src-poster-9")


//src de todos los poster:
let poster = ["poster/chainsaw man poster.jpg", 
"poster/death note 2.jpg", 
"poster/spy family 1.jpg",
"poster/jujutsu kisen.jpg", 
"poster/kimetsu no yaiba 3.jpeg", 
"poster/tokyo ghoul 1.webp", 
"poster/fire force 2.jpg", 
"poster/dr stone 3.jpg",
"poster/TrigunStampedeKeyvisual.jpg"]


//enlaces de cada uno de los index de cada serie:

let enlace = ["animes/chainsaw man/chainsaw.html",
"animes/Death Note/death note.html",
"animes/spy x family/spy x family.html",
"animes/jujutsu kaisen/jujutsu kaisen.html",
"animes/kimetsu no yaiba/kimetsu no yaiba.html",
"animes/tokyo ghoul/tokyo ghoul.html",
"animes/fire force/fire force.html",
"animes/dr stone/dr stone.html",
"animes/trigun stampede/trigun stampede.html"]



    

//texto de los enlaces de las series:

let textEnlace = ["Chainsaw Man",
"Death Note",
"Spy X Family",
"Jujutsu Kaisen",
"Kimetsu No Yaiba",
"Tokyo Ghoul",
"Fire Force",
"Dr Stone",
"Trigun Stampede"]

 



let primeraCarga = true
let segundaCarga = false


//funcion para los ultimos animes, se ejecuta por defecto
function ultimos(){
	if (primeraCarga == true && segundaCarga == false) {
		
		srcPoster1.setAttribute("src", poster[0])
		srcPoster1.setAttribute("alt", alt[0])
		srcPoster1.setAttribute("title", title[0])
		href1.setAttribute("href", enlace[0])
		href1.textContent = textEnlace[0]
		srcPoster2.setAttribute("src", poster[1])
		srcPoster2.setAttribute("alt", alt[1])
		srcPoster2.setAttribute("title", title[1])
		href2.setAttribute("href", enlace[1])
		href2.textContent = textEnlace[1]
		srcPoster3.setAttribute("src", poster[2])
		srcPoster3.setAttribute("alt", alt[2])
		srcPoster3.setAttribute("title", title[2])
		href3.setAttribute("href", enlace[2])
		href3.textContent = textEnlace[2]
		srcPoster4.setAttribute("src", poster[3])
		srcPoster4.setAttribute("alt", alt[3])
		srcPoster4.setAttribute("title", title[3])
		href4.setAttribute("href", enlace[3])
		href4.textContent = textEnlace[3]
		srcPoster5.setAttribute("src", poster[4])
		srcPoster5.setAttribute("alt", alt[4])
		srcPoster5.setAttribute("title", title[4])
		href5.setAttribute("href", enlace[4])
		href5.textContent = textEnlace[4]
		srcPoster6.setAttribute("src", poster[5])
		srcPoster6.setAttribute("alt", alt[5])
		srcPoster6.setAttribute("title", title[5])
		href6.setAttribute("href", enlace[5])
		href6.textContent = textEnlace[5]
		srcPoster7.setAttribute("src", poster[6])
		srcPoster7.setAttribute("alt", alt[6])
		srcPoster7.setAttribute("title", title[6])
		href7.setAttribute("href", enlace[6])
		href7.textContent = textEnlace[6]
		srcPoster8.setAttribute("src", poster[7])
		srcPoster8.setAttribute("alt", alt[7])
		srcPoster8.setAttribute("title", title[7])
		href8.setAttribute("href", enlace[7])
		href8.textContent = textEnlace[7]
		srcPoster9.setAttribute("src", poster[8])
		srcPoster9.setAttribute("alt", alt[8])
		srcPoster9.setAttribute("title", title[8])
		href9.setAttribute("href", enlace[8])
		href9.textContent = textEnlace[8]
		
}
}
ultimos()

	



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
























