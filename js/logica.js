

// AL INGRESAR A LA SECCION ACERCA
var acerca = document.getElementById("acerca");

// AL HACER EL SCROLL EL MENU SE POSICIONE FIXED TOP
acerca.addEventListener("mousemove",() =>
{
   document.getElementById("barra").style.position = "fixed";
  
}
                       
)

// AL REGRESAR AL INICIO 
var inicio = document.getElementById("inicio");
// DEVOLVER EL SCROLL Y ANULAR EL FIXE TOP PARA QUE QUEDE ESTATICA
inicio.addEventListener("mousemove",() =>
{
   document.getElementById("barra").style.position ="static";
  
}
                       
)
