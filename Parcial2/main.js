import { cargarColaboradores} from "./colaboradores.js";
import { cargarServicios } from "./servicios.js";
import { mostrar } from "./mostrarelementos.js";
document.getElementById('ver-mas').addEventListener('click' , () => mostrar());
cargarColaboradores();
cargarServicios();
