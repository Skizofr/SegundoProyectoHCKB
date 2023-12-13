export const emailAlreadyRegisteredError = () => {
  throw {
    httpStatus: 409,
    code: "EMAIL_ALREADY_REGISTERED",
    message: "El email ya está registrado",
  };
};
export const userAlreadyRegisteredError = () => {
  throw {
    httpStatus: 409,
    code: "USER_ALREADY_REGISTERED",
    message: "El nombre de usuario ya está registrado",
  };
};

export const notFoundError = (resource) => {
  throw {
    httpStatus: 404,
    code: "RESOURCE_NOT_FOUND",
    message: `El recurso requerido '${resource}' no existe`,
  };
};
