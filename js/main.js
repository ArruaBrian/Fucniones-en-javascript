const password = (nombre) =>{

    let pass = "";

    while(pass == "" || pass == null ){

        pass = prompt(`Dime tu contraseña ${nombre}`);


        if(pass != null && pass != ""){


            alert(`Registrado con éxito ${nombre}!`)

            break;
    
    
        }else{
    
            let pass = prompt(`Dime una contraseña correcta`);

            if(pass != null && pass != ""){

                alert(`Registrado con éxito ${nombre}!`)
                break;

            }else{

            }
    
        }

    }



}

const registro = () =>{


    let nombre = "";

    while(nombre == "" || nombre == null){

        nombre = prompt(`Dime tu nombre`)

        if(nombre != "" && nombre != null){

            alert(`Un gusto ${nombre}!`)

            password(nombre);

            break;

        }else{

            nombre = prompt(`Coloca un nombre valido`)

            if(nombre != "" && nombre != null ){

                alert(`Un gusto ${nombre}!`)
                password(nombre);

                break;

            }else{


            }
            

        }


    }   

}



// Bienvenida

const bienvenido = () =>{

    alert("Un gusto encontrarte por aquí!");

    let respuesta = prompt(`Desea registrarse?
    
    1 = Si
    2 = No
    `) ;

    
    if(respuesta.toLowerCase() == "si" || parseInt(respuesta) == 1){

        registro();

    }else{

        alert("Pues para que entra?");

    }



}