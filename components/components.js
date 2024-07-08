const component = document.querySelector('.publication');

const urlFotosRandom = ' https://picsum.photos/200/300?random='

const urlFotosPersonas = "https://randomuser.me/api/portraits/men/";

const lorem = 'Lorem adipisicing elit. dolorem labore dicta! Fugit  reiciendis. Laudantium debitis aperiam dignissimos nostrum eaque, consequatur optio?'

const iconComentarios = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16">
<path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
</svg>`;
 
const iconReloj = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
</svg>`;

const iconCorazon = `<svg xmlns="http://www.w3.org/2000/svg"   width="26" height="26"  fill="currentColor"  class="bi bi-heart-fill" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg>`;

const iconLapicera =`<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
<path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
</svg>`;

const iconCompartir = `<svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="currentColor" class="bi bi-reply-all" viewBox="0 0 16 16">
<path d="M8.098 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.7 8.7 0 0 0-1.921-.306 7 7 0 0 0-.798.008h-.013l-.005.001h-.001L8.8 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L4.114 8.254l-.042-.028a.147.147 0 0 1 0-.252l.042-.028zM9.3 10.386q.102 0 .223.006c.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96z"/>
<path d="M5.232 4.293a.5.5 0 0 0-.7-.106L.54 7.127a1.147 1.147 0 0 0 0 1.946l3.994 2.94a.5.5 0 1 0 .593-.805L1.114 8.254l-.042-.028a.147.147 0 0 1 0-.252l.042-.028 4.012-2.954a.5.5 0 0 0 .106-.699"/>
</svg>`;



function publicationPerson(){

    changeLenguage = async () =>{
        const nameMen = await fetch('./components/json/nameMen.json')
        const todoName = await nameMen.json()
        
       

    for (let i = 0; i < 20; i++) {

        const numRandom = Math.floor(Math.random()*100);

        let htmlCode = `     
        <div id="components" >
        <img src=" ${urlFotos + (numRandom)}.jpg " class="img-publiacion${i} img-publicacion" alt="">
        <p class='nombre-publicacion' > ${todoName[i].nombre} </p>
        <div class='tres-puntos' >...</div>
        <div  ></div>
        <img src="${urlFotosRandom + i}" class="foto-random" alt="">
        <div id="comentaries"> ${lorem} </div>
        <div id="likes-publicaction" class='like-${i}'  onclick="sumarLikes( attributes.id.ownerElement.childNodes[1].attributes[3]  ,   attributes.id.ownerElement.childNodes[3])" > ${iconCorazon}  <p class="sumarLikes" > ${(numRandom)}  </p>  </div>
        <div id="comentar-publication" class='comentario-${i}' onclick='clickComentario(attributes,attributes)' > ${iconComentarios} <p class="sumarComentarios" > ${numRandom +15 }  </p> </div>
        <div id="compartir-publication"> ${iconCompartir} </div>
       </div>
        `
        component.innerHTML += htmlCode;
    
    }
    
    
}
  changeLenguage()
}

function sumarLikes(col,num){

    if(col.textContent == 'red'){
        col.textContent = 'currentColor'
        num.textContent = parseInt(num.textContent) -1;
     
    }
    else  if(col.textContent == 'currentColor'){
        col.textContent = 'red'
        num.textContent = parseInt(num.textContent) +1;
    }

 }
 
publicationPerson()

 
    



