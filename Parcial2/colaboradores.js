function cargarColaboradores() {
    document.addEventListener('DOMContentLoaded', function () {
        function crearColaboradores({ nombre, cargo, imagen }) {
            return `
                <div class="card" id="cardColb">
                    <img id="imgColb1" src="./imagenes/${imagen}" alt="${nombre}"/>
                    <div class="container">
                        <h4 class="titulo"><b>${nombre}</b></h4>
                        <p style="text-align: center">${cargo}</p>
                    </div>
                </div>
            `;
        }

        const colaboradoresData = [
            { nombre: "Francy Uribe ", cargo: "Arquitecta de Software", imagen: "Pj2.png" },
            { nombre: "Jhon Munera", cargo: "Director General", imagen: "Pj1.png" },
            { nombre: "Mariana Munera", cargo: "Programadora", imagen: "Pj3.png" }
        ];

        const colaboradoresContainer = document.querySelector('#contColaboradores');

        colaboradoresData.forEach(colaborador => {
            const colaboradorHtml = crearColaboradores(colaborador);
            colaboradoresContainer.insertAdjacentHTML('beforeend', colaboradorHtml);
        });
    });
}

export{cargarColaboradores}
