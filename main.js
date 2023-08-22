class TicketManager {
    constructor() {
        this.eventos = [];
        this.precioBaseDeGanancia = 0;
    }

    agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
        precio += precio * 0.19;
        const evento_id = this.eventos.length + 1;
        const participantes = [];
        const evento = {
            id: evento_id,
            nombre,
            lugar,
            precio,
            capacidad,
            fecha,
            participantes
        };
        this.eventos.push(evento);
    }

    agregarUsuario(evento_id, usuario_id) {
        const evento_encontrado = this.eventos.find((evento) => evento.id === evento_id);
        if (!evento_encontrado) {
            console.log("El evento con el ID proporcionado no existe");
            return;
        }
        const participantes = evento_encontrado.participantes;
        const usuarioRegistrado = participantes.includes(usuario_id);
        if (usuarioRegistrado) {
            console.log("El usuario ya está registrado en el evento");
            return;
        }
        participantes.push(usuario_id);
        console.log("El usuario ha sido registrado correctamente");
    }

    ponerEventoEnGira(evento_id, nueva_localidad, nueva_fecha) {
        const evento_encontrado = this.eventos.find((evento) => evento.id === evento_id);
        if (!evento_encontrado) {
            console.log("El evento con el ID proporcionado no existe");
            return;
        }
        const evento_copiado = { ...evento_encontrado };
        evento_copiado.id = this.eventos.length + 1;
        evento_copiado.lugar = nueva_localidad;
        evento_copiado.fecha = nueva_fecha;
        evento_copiado.participantes = [];

        this.eventos.push(evento_copiado);
        console.log("El evento ha sido puesto en gira correctamente");
    }

    getEventos() {
        return this.eventos;
    }
}

const ticketManager = new TicketManager();

// Agregar eventos
ticketManager.agregarEvento("Concierto de Iron Maiden", "Estadio Nacional", 1000, 2000, new Date("2023-09-15"));
ticketManager.agregarEvento("Concierto de Dread Mar-|", "Movistar Arena", 2000, 3000, new Date("2023-10-15"));

// Obtener eventos
const eventos = ticketManager.getEventos();
console.log(eventos);

// Agregar usuarios
ticketManager.agregarUsuario(1, "Usuario1");
ticketManager.agregarUsuario(1, "Usuario2");
ticketManager.agregarUsuario(2, "Usuario3");

// Poner evento en gira
ticketManager.ponerEventoEnGira(1, "Nuevo Lugar", new Date("2023-11-01"));
