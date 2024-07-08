const chat = document.querySelector('.chat-component');


const arrayNombres = []

const urlFotos = "https://randomuser.me/api/portraits/men/";



function chatPersonas(){


  changeLenguage = async () =>{
    const requestJson = await fetch('./components/json/chatMensaje.json')
    const texts = await requestJson.json()
    const nameMen = await fetch('./components/json/nameMen.json')
    const todoName = await nameMen.json()

    for (let i = 0; i < 20; i++) {
        let htmlCode = `     
        <form  class="chat-person" >
        <img src=" ${urlFotos + i}.jpg " class="img-${i} img-chat" alt="">
        <p class="nombre-apellido" >${todoName[i].nombre}</p>
        <span class="chat-mensajes" > <p class="p-mensaje" > ${texts[i].mensaje}  </p> </span>
        <span class="chat-time" > <p class="p-time" >${todoName[i].hora}</p> </span>

        </form>
        `
        chat.innerHTML += htmlCode;
       
    }
  }
    changeLenguage()
  
}




chatPersonas()

