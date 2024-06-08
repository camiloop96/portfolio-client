interface ServerData {
  server: string;
  port?: number;
  base: string;
}

class Server {
  private environment: string;
  private developData: ServerData;
  private productionData: ServerData;

  constructor(
    environment: string,
    developData: ServerData,
    productionData: ServerData
  ) {
    this.environment = environment;
    this.developData = developData;
    this.productionData = productionData;
  }

  getFullUrl(): string {
    if (this.environment === "development") {
      return `${this.developData.server}:${this.developData.port}${this.developData.base}`;
    } else if (this.environment === "deploy") {
      return `${this.productionData.server}${this.developData.base}`;
    } else {
      return "Invalid environment";
    }
  }
  getServer(): string {
    if (this.environment === "development") {
      return `${this.developData.server}:${this.developData.port}`;
    } else if (this.environment === "deploy") {
      return `${this.productionData.server}`;
    } else {
      return "Invalid environment";
    }
  }
}

// Importacion de variables de entorno
let {
  VITE_SERVER_DPY,
  VITE_SERVER_DEV,
  VITE_PORT_DEV,
  VITE_BASE_API,
  VITE_MODE,
} = import.meta.env;

// Declaracion de variables de servidor
let developData: ServerData = {
  server: VITE_SERVER_DEV,
  port: VITE_PORT_DEV,
  base: VITE_BASE_API,
};

let productionData: ServerData = {
  server: VITE_SERVER_DPY,
  base: VITE_BASE_API,
};

// Creacion de servidor
let URLSERVER = new Server(VITE_MODE, developData, productionData);

export const SERVER: string = URLSERVER.getFullUrl();
export const SERVERBASE: string = URLSERVER.getServer();
