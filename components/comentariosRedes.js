



function comentariosRedes(){
    



   comentariosJSON = async () =>{
        const comentJson = await fetch('./components/json/comentariosRedes.json')
        const todoComent = await comentJson.json()

        const comentarioEnviado = document.querySelector('.contenedor-comentarios');
        
       
        clickComentario =(a,b)=> {
        const submitComentario = document.querySelector('.submit-comentario'); //
        const inputComentario = document.querySelector('.input-comentario-text');
        submitComentario.addEventListener('click',()=>{
            const crearComentario = document.createElement('div');
            crearComentario.className = 'comentario-enviado';
            crearComentario.innerHTML =`<p class="mensaje-comentario" > ${inputComentario.value}</p>` ;
            comentarioEnviado.appendChild(crearComentario);
            comentarioEnviado.scrollTop = innerHeight;
            inputComentario.value = '';
        })

        const coment = document.getElementsByTagName('dialog')[0];
        const open =  document.createAttribute('open')
        coment.setAttributeNode(open)


        console.log(a[1].ownerElement.childNodes[3].childNodes[0].textContent)
        console.log(b)

        const cantidadDeComentarios = parseInt(a[1].ownerElement.childNodes[3].childNodes[0].textContent);

        for (let i = 0; i < cantidadDeComentarios; i++) {
            const crearComentario = document.createElement('div');
            crearComentario.className = 'comentario-enviado';
            crearComentario.innerHTML =`<p class="mensaje-comentario" > ${todoComent[Math.floor(Math.random()*50)].comentarios}</p>` ;
            comentarioEnviado.appendChild(crearComentario);
            
        }

     }
        
       
       

   }

   comentariosJSON()
}

comentariosRedes()





