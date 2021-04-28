import React from 'react';
import thunder from './thunder.svg'

function custom_404() {
  return (
    <div id="container">
        <div id="error-container">
            <img src={thunder} id="icon" />
            <h1>404</h1>
            <p>No encontramos la página que buscabas</p>
        </div>
        <div>
            Icons made by
            <a href="https://www.freepik.com" title="Freepik">Freepik</a>
            from
            <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        </div>
    </div>
  );
}

export default custom_404;
