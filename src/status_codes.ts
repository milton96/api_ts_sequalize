const status = {
  "OK": {
    code: 200,
    msg: "Petición exitosa",
  },
  "CREATED": {
    code: 201,
    msg: "Registro creado correctamente",
  },
  "BAD_REQUEST": {
    code: 400,
    msg: "Hubo un error en la petición",
  },
  "INTERNAL_SERVER_ERROR": {
    code: 500,
    msg: "Error interno del servidor",
  }
};

export default status;
