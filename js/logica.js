

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


                        let nombre = document.getElementById('name').value;
                        let correo = document.getElementById('email').value;
                        let mensaje = document.getElementById('mensaje').value;
                        let titulo = "Registro Sitio web - Mensaje de" +  nombre ;

                        const sendAdmin = {
                           message: {
                             subject: titulo,
                             body: {
                               contentType: 'Text',
                               content: mensaje
                             },
                             toRecipients: [
                               {
                                 emailAddress: {
                                   address: "ernest_almazan@outlook.com"
                                 }
                               }
                             ]
                           }
                         };
   


                     const url = 'https://graph.microsoft.com/v1.0/me/sendMail';

                     let token = 'Bearer EwCIA8l6BAAUkj1NuJYtTVha+Mogk+HEiPbQo04AAZKAfGwxw+mg0GcvDL+Y1+41WBxSQSUSERHrjyli0LGFKzlztsImrIGM7tKI9Vd2Uh6G7bRizK8aSsPAvHwIbpHhS5fjd7uJogD7+MK+tk+mNV8KhQ/oIOcMpwnsfvtxkMBK0tCZvIv/2dts/aap6kly7HEJExwgEBjz73UkizhHxAtThR8xqncb97jVI2suL37glDSQkZVr7ycT3EAIYpzmd9E3PVoLlQRz94RSvHsR94Q6uakX5yalbaVO+hhPwbeWxs05PLO00DfcBWpquDjWBrFlj/lQJZrMH5DA9TwIrlAi41V+skdu4ZNtTmfTfaA7e+pGtDtfwy1lD1EVpSADZgAACMog8TPFV690WALMpYT48cchM6pwNZAwZ5MRDY51X6iRd/Wx68uS6WY6xnC2FayZ5kcAayGvOB7kllT1AV7RHQ0ONE4bs2Ceg0gN92w0+1WTVROrBxmTOhFs777PHfIDk0WZ4Ml5bLUBO/uHQJtc7kkZf5wWuy7mKZ6RRcij7xc1qgBOhzyffz48zGRj+Y90bMD6hR20tnBVDxAb4yrncjd2UZO3MqaqARkX/y0eTO9uCaDRxYmFA5bkTSXDLIEReUB+GyBXUNrmB0bhJlk3hDtWfjYRli+cQog/Lq4ao2jX8YkrLpSJ14M7u3aHKSUPbDEU4j77iz4CCYbI+VspQwtXKacG63DF4Zl/voCFNAXgONXrq4qRAWVrxrxGD5dUCe5c0WllAkL1QzeIkneoW+rWbykb3gdUYh/Xgt6axbJdAg4t1AG4P34G49FUHfk7Uvhx5v2AUQl+CocKoOfNF1wMvZROBOXBzgEzxXTWDIWrO3b/rftWo8LCXFTuJjn6su94DlvCSgPY1hH9cIPVpEu8CllgrvCQfVyLXrvVnxfel44av3gb35Jlaqn1i62wG7RkyBNKevora7f5Ygpr0hm5dZJh6fVVem1ZQefsA5syJTxwOzfO729Jpd+fKfKx6SyUBeR8p1GEfLH1XqVDic0Xtm6stxcxLEgtq3Nr8k2LbRdKsvyamjKfDRtNu+VSxQqxrTCO+j0nqBxqOlyJ3MiXxWfop5yesSdBDO3utbplPTNdVvHU/DfEaoRgRhPx/3yShEWyka+1BrnS0WLMwLUZOwBZqYjMMR1blZJbTQKzBHuTAg==';

                     
                     fetch(url,{
                        method : 'POST',
                        body : JSON.stringify(sendAdmin),
                        headers: {
                              'content-type': 'application/json',
                              'Authorization': token
                        }
                     }).then((respuesta) => {


                              if(respuesta.status == 202)
                              {

                                          vex.dialog.alert({
                                             message: "Gracias por Registrarte - En breve respondere tu mensaje",
                                             className: 'vex-theme-flat-attack'

                                          });

                                          const senduser = {
                                             message: {
                                             subject: "Registro completado - Dev Almazán",
                                             body: {
                                                contentType: 'Text',
                                                content: "Gracias por Registrarte - En breve respondere tu mensaje"
                                             },
                                             toRecipients: [
                                                {
                                                   emailAddress: {
                                                   address: correo
                                                   }
                                                }
                                             ]
                                             }
                                          };
                                  

                                          fetch(url,{
                                             method : 'POST',
                                             body : JSON.stringify(senduser),
                                             headers: {
                                                   'content-type': 'application/json',
                                                   'Authorization': token
                                             }
                                          });

                              }

                              else
                              {
                                    console.log(respuesta.ok);
                                    console.log(respuesta.status);
                                    console.log(respuesta.json());
                                 
                              }

                     })
                     .catch((error) => {

                           console.log(error);

                     });
               }

         });

