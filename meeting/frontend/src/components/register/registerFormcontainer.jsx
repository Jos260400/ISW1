import React from 'react';
import RegisterForm from './registerForm';

// ADD STYLE TO THE LOG IN BUTTON OR CHANGE IT FOR AN H ELEMENT

export default function registerFormcontainer() {

  return (
    <div className="form-container d-flex flex-column mb-5">
      <h4 className="text-center font-weight-bold mt-3">Regístrate gratis para escuchar</h4>
      <span className="divider">○</span>
      <RegisterForm />
      <span className="divider" />
      <p className="text-center mb-0 mt-1">
        <span className="mr-3">
          ¿Ya tienes cuenta?
        </span>
        <a className="a-button" onClick={handleClick}>Iniciar Sesión</a>
      </p>
    </div>
  );
}
