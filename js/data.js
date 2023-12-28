
    
        const datos = ()=>
        {

            setTimeout(() => {
                $("#cargando").hide();
            }, 2000);

            const data =[

                {
                    "id_proyecto": 3,
                    "name": "Ecommerce",
                    "tecs": "HTML CSS BOOTSTRAP JS REACT JS",
                    "description" : "Ecommerce desarrollada de forma nativacon bootstrap 5 & react js incluyendo detalle producto y carrito de compras.",
                    "url": "https://dev-almazan-ecommerce.netlify.app/",
                    "img": "2.png",
                    "category" : "App Web",
                    "size" : 2023
                },
                {
                    "id_proyecto": 9,
                    "name": "Ecommerce",
                    "tecs": "HTML CSS BOOTSTRAP JS PHP Y MYSQL",
                    "description" : "Ecommerce desarrollada de forma nativa administrador de productos desarrollado en HTML, CSS, Bootstrap 4, JS, PHP Y MYSQL.",
                    "url": "https://hndmbmexico.com.mx/",
                    "img": "9.png",
                    "category" : "App Web",
                    "size" : 2023
                },
                {
                    "id_proyecto": 2,
                    "name": "UNEA Aliat",
                    "tecs": "HTML CSS BOOTSTRAP JS PHP",
                    "description" : "Landing page en una sola pagina consumo de API REST desarrollada 100% nativamente.",
                    "url": "https://www.etac.edu.mx/estudia-hoy",
                    "img": "1.png",
                    "category" : "Sitio Web",
                    "size" : 2023
                },
                {
                    "id_proyecto": 7,
                    "name": "Sección Ebooks Aliat Universidades",
                    "tecs": "HTML CSS BOOTSTRAP JS",
                    "description" : "Modulo desarrollado con programación nativa. Consumida con fetch js para manipular la información de cada ebook almacenado en hubdb de hubspot",
                    "url": "https://www.etac.edu.mx/descargables",
                    "img": "7.png",
                    "category" : "Sección Web",
                    "size" : 2023
                },
                {
                    "id_proyecto": 5,
                    "name": "Portal Web Planes de estudio",
                    "tecs": "HTML CSS BOOTSTRAP JS",
                    "description": "Modulo desarrollado con programación nativa. Consumida con fetch js para manipular la información de planes de estudios almacenados en una base de datos.",
                    "url": "https://aliatuniversidades.com.mx/plan-estudios/?utm_company=ETAC",
                    "img": "4.png",
                    "category": "Sitio Web",
                    "size" : 2023
                },
                {
                    "id_proyecto": 8,
                    "name": "Portal Asistencias SKY",
                    "tecs": "HTML CSS BOOTSTRAP JS",
                    "description" : "APP WEB de consulta de información para personal call center de SKY.",
                    "url": "https://boring-meitner-e279c8.netlify.app/",
                    "img": "8.png",
                    "category" : "Sitio Web",
                    "size" : 2022
                }
               
            ];
            
                                        
            let contenido = document.getElementById("tarjetas"); 

            for(let i = 0 ; i < data.length ; i++)
            {


                                contenido.innerHTML += 
                                `
                                <div class="col-md-4 mt-4">
                                <div class="card">
                                      <img src="img/media/${data[i].img}">
                                          <div class="card-body">
                                            <h5 class="card-title resaltes  text-center"> ${data[i].category} ${data[i].name}</h5><hr>
                                            <p class="card-text">
                                            ${data[i].description}
                                            </p>
                                            <small class=" text-left">${data[i].tecs}</small>
                                            <ul class="list-inline dev-icons">
                                                      <li class="list-inline-item"><a target="_blank" href="${data[i].url}" class="btn btn-primary proy">Ver proyecto <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                                      <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                                    </svg></a></li>
                                              
                                                    
                                            </ul>
                                          </div>
                                </div>
                        </div>
                                `                              
            }   
    }
        
            





