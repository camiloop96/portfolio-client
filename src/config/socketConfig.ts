// import de componentes
import io from "socket.io-client";
import { SERVERBASE } from "../../config";

// Declaración del server
const server = SERVERBASE;

// Export del socket
export const socket = io(server);
