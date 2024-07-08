


class Persona{
  constructor(nombre,instagram){
    this.nombre = nombre;
    this.instagram = instagram
  }
}


const data = [
  ['lucas chacha','gmail@123'],
  ['marcos cabrera','cabreragmail@123.com']
];

const personas =[];

for (let i = 0; i < data.length; i++) {
   personas[i] = new Persona(data[i][0],data[i][1]);
  
}

const obtenerPersona = (id)=>{
  return new Promise((res,rej)=>{
    if(personas[id]== undefined) rej('no esta encontrado')
    else res(personas[id])
  })
}

const obtenerInstagram = (id)=>{
  return new Promise((res,rej)=>{
    if(personas[id].instagram == undefined) rej('no esta encontrado')
    else res(personas[id].instagram)
  })
}

let id = 0;

obtenerPersona(id).then((persona)=>{
  console.log(persona.nombre);
  return obtenerInstagram(id)
}).then((instagram)=>{
 
}).catch((e)=>{
 
})




