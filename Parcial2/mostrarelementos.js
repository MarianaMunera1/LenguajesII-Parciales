function mostrar() {
    let modal = document.getElementById('modal');
    let aceptar = document.getElementById('aceptar');
    let cancelar = document.getElementById('cancelar');
   
    modal.style.display = 'block';

    const navbarLinks = document.querySelectorAll('.navbar a.link');
    const seccionDos = document.getElementById('servicios');
    const seccionTres = document.getElementById('colaboradores');
    
    navbarLinks.forEach(link => {
        link.style.display = 'none';
    });


    document.getElementById('servicios').style.display = 'none'; 
    document.getElementById('colaboradores').style.display = 'none';
    

    aceptar.addEventListener('click', function() {
        modal.style.display = 'none';
       
        navbarLinks.forEach(link => {
            link.style.display = 'inline-block';
        });

        seccionDos.style.display = 'block';
        seccionTres.style.display = 'block';      

     
        document.getElementById('servicios').style.display = 'block'; 
        document.getElementById('ver-mas').style.display = 'none';
    });

    cancelar.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
   
}

export{mostrar};





