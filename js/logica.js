

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

            // AL INGRESAR A LA SECCION ACERCA
            var acerca = document.getElementById("acerca");

            // AL HACER EL SCROLL EL MENU SE POSICIONE FIXED TOP
            acerca.addEventListener("touchstart",() =>
            {
               document.getElementById("barra").style.position = "fixed";
            
            }
                                 
            )

            // AL REGRESAR AL INICIO 
            var inicio = document.getElementById("inicio");
            // DEVOLVER EL SCROLL Y ANULAR EL FIXE TOP PARA QUE QUEDE ESTATICA
            inicio.addEventListener("touchstart",() =>
            {
               document.getElementById("barra").style.position ="static";
            
            }
                                 
            )

            function validar()
            {

                     function resaltar(valor)
                     {
                        var element = document.getElementById(valor);
                        element.classList.add("resaltes");
                     }
                  
                     function remover()
                     {
                  
                        const input = ['name','email','mensaje'];
                  
                        for(a = 0; a < input.length; a++)
                        {
                                 var element = document.getElementById(input[a]);
                                 element.classList.remove("resaltes")
                        }
                  
                        
                     }

                     function alertas(valor)
                     {
                        vex.dialog.alert({
                           message: valor,
                           className: 'vex-theme-bottom-right-corner'
                              
                        });
                     }

                        /* 1- OBTENEMOS VALORES */

                        let nombre = document.getElementById('name').value;
                        let correo = document.getElementById('email').value;
                        let mensaje = document.getElementById('mensaje').value;
                     

                        let excorreo = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,6})+$/;
                        let numeros = /^([0-9 ])+$/;
                        let letras = /^([á-ú-Á-Ú-a-z-A-Z-ñ ._])+$/;

                        
                  if (nombre.length > 55 || letras.test(nombre) === false || nombre.length == 0) {

                     remover();
                     resaltar("name");
                     alertas("Por favor ingresa tu nombre completo");
                     
                  }
                  else if (correo.length > 55 || excorreo.test(correo) === false || correo.length == 0) {

                     remover();
                     resaltar("email");
                     alertas( "Por favor ingresa un correo electrónico - Ejemplo: ernesto@hotmail.com ");
                  
                  }
                  else if (mensaje.length > 55 || mensaje.length == 0) 
                  {
                     remover();
                     resaltar("mensaje");	
                     alertas("Por favor dejame un mensaje - Maximo 55 caracteres. "); 
                     
                  }
                  else
                  {
                     return true;
                  }

            }


            $("#post").submit(function(e){

               e.preventDefault();

               if(validar() == true)
               {

                         // Enviar datos a firebase nube

                        let ncompleto = document.getElementById('name').value;
                        let email = document.getElementById('email').value;
                        let detalle = document.getElementById('mensaje').value;
                  

                        const firebaseConfig = {
                           apiKey: "AIzaSyB08DAfVckPRoGpMaWgeFdxPG3kQSmjjbo",
                           authDomain: "usuarios-91d7c.firebaseapp.com",
                           projectId: "usuarios-91d7c",
                           storageBucket: "usuarios-91d7c.appspot.com",
                           messagingSenderId: "1023743689782",
                           appId: "1:1023743689782:web:4c88fe588c0fa1c0060497",
                           measurementId: "G-FL6DYB0QJL"
                         };
                       
                       // Initialize Firebase

                              if (!firebase.apps.length) {
                                 firebase.initializeApp(firebaseConfig);
                              }else {
                                 firebase.app(); // if already initialized, use that one
                              }
                     

                        // Initialize Cloud Firestore and get a reference to the service
                        const db = firebase.firestore();

                        db.collection("clientes").add({
                           nombre: ncompleto,
                           correo: email,
                           mensaje: detalle
                       })
                       .then((respuesta) => {

                           
                                    if(respuesta.id !== null)
                                    {

                                       vex.dialog.alert({
                                       message: "Gracias por registrarte, nos contactaremos contigo enseguida.",
                                       className: 'vex-theme-flat-attack'

                                       });
                                                         
                                       document.getElementById("post").reset();		
      
                                    }
                                    else
                                    {
                                          console.log(respuesta);
                                    }

                        })
                        .catch((error) => {

                                 console.log(error);

                        });

               }   

         });

