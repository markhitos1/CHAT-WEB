const todoChat = document.querySelector('.chat-component');
const linkPublicaciones = document.querySelector('.link-publication');
const linkChat = document.querySelector('.link-chat')
const bodyApp = document.getElementById('app')
const publicacionesWeb = document.querySelector('.publication');

linkPublicaciones.addEventListener('click',()=>{
   a = todoChat.style;
   b = bodyApp.style;
   c = publicacionesWeb.style;
   a.width = '0px'
   b.gridTemplateColumns= '0% 100%';
   c. gridTemplateColumns= `repeat(
    auto-fit,
    minmax(400px,1fr)
 )`;

})

linkChat.addEventListener('click',()=>{
    a = todoChat.style;
    b = bodyApp.style;
    c = publicacionesWeb.style;
    a.width = '90%'
    b.gridTemplateColumns= '35% 65%';
    c.height= '640px';
    c. gridTemplateColumns= `repeat(
        auto-fit,
        minmax(370px,1fr)
     )`;
     c.gap = '10px'
    
})

