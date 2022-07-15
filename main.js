function nameOfTheStudent(){
    alert("Bienvenido a la facultad de matematica")
    let name= prompt("Ingrese su nombre");{
        console.log("Bienvenido" + " " + name)
        
    }
    return(nameOfTheStudent)
}

function iqlevel(){
   alert("Esta prubea es solo para estudiantes con un IQ mayor a 70")
   let iq = prompt ("De cuanto es tu IQ matematico?")
   if ( iq >= 70 ) {
    console.log ("Puedes realizar la prueba, buena suerte!")
     }
     else{
        console.log ("no puedes realizar la prueba, sigue estudiando gil. ")
     }
         return(iqlevel)
    }
   
 for(let f = 10;  f> 6; f--) {
    let resultado = (f + 8)
    console.log (resultado)}
  
  
let name= nameOfTheStudent();
let iq = iqlevel();
