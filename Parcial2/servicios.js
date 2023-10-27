function crearServicio({titulo, descripcion,}) {
    return `
        <div class="servicio">
            <h3>${titulo}</h3>
            <p>${descripcion}</p>
        </div>
    `;
}

function crearModal() {
    return `
        <div class="contenedor-modal">
            <div class="modal">
                <h2>Bienvenid@</h2>
                <button id="botton-continuar">Continuar</button>
            </div>
        </div>
    `;
}

function crearServicioConObjetos({titulo, descripcion}) {
    const contenedorServicio = document.createElement('div');
    const parrafo = document.createElement('p');
    parrafo.innerText = descripcion;
    const heading = document.createElement('h3');
    heading.innerText = titulo;
    contenedorServicio.appendChild(heading);
    contenedorServicio.appendChild(parrafo);
    contenedorServicio.classList.add("servicio");
    return contenedorServicio;
}

const data = [
    {titulo: "Rosa", descripcion: "Simbolizar aprecio, confianza y agradecimiento, son los significados más destacados de las rosas de color rosa. Cuando quieras dar las gracias a alguien por un favor o por un gesto que ha sido muy importante para ti, la rosa rosada es tu aliada."},
    {titulo: "Delfinios", descripcion: "Al igual que sus homólogas blancas y celestes, los delfinios o espuelas de caballero rosas representan la juventud y la renovación. Así que no olvides incluirlas en tu ramo para un ser querido que renueva sus votos o para aquellos que buscan un poco de amor en su viaje vital."},
    {titulo: "Tulipanes", descripcion: "¿Hay alguien con quien sientas que has conectado espiritual y físicamente? Si es así, los tulipanes naranjas son un regalo muy considerado, ya que simbolizan la comprensión y y el aprecio por el otro."},
    {titulo: "Camelias rojas", descripcion: "Pasión, amor y romanticismo son los significados que se esconden tras estas preciosas flores. Entrega personalmente a tu pareja una camelia roja o un ramo para decirle que le desea."},
    {titulo: "Clavel bicolor", descripcion: "Piénsatelo dos veces antes de regalar a alguien un clavel bicolor. Son un símbolo de despedida. Si se lo regalas a tu pareja, significa que no podrás estar con ella. Y así no es como te gustaría que fuera tu aniversario de boda o tu cita."},
    {titulo: "Begonias", descripcion: "la begonia forma parte del listado de las mejores plantas de interior con flores para decorar una casa. Regálaselas a un familiar o amigo por su aniversario o como forma de decir 'gracias'. Simbolizan gratitud, singularidad y, a veces, cautela."},
];

const contenedor = document.querySelector('#contServicios');


function cargarServicios(){
    for(let servicio of data) {
        const { descripcion } = servicio;
        const servicioHtml = crearServicioConObjetos(servicio);
        contenedor.appendChild(servicioHtml);
    }
    
    document.body.insertAdjacentHTML('beforeend', crearModal());
    const botonCerrar = document.getElementById("botton-continuar");
    const modal = document.querySelector(".contenedor-modal");
    botonCerrar.addEventListener('click', () => modal.remove());
    

}
export{cargarServicios};
