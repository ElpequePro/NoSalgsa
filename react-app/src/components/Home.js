import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router';

import carousel1 from '../img/carousel1.png';
import carousel2 from '../img/carousel2.png';
import carousel3 from '../img/carousel3.png';
import carousel4 from '../img/carousel4.png';

import '../css/home.css';

function Home() {
  const [car, setCar] = useState(null);

  const bgcolor = "linear-gradient(0deg, rgba(17, 17, 17, .7) 0%, rgba(51, 51, 51, .5) 100%)";
  const list = [carousel1, carousel2, carousel3, carousel4];

  const carousel = useCallback((car) => {
    if (car) {
      car.style.background = `${bgcolor}, url("${list[0]}")`;
      car.style.backgroundSize = 'cover';
      car.style.backgroundPosition = 'center center';
    }
  }, []);

  let i = 0;

  const changeCarousel = useCallback((direction) => {
    if (car) {
      if (direction === 'left') {
        i = (i === 0) ? list.length - 1 : i - 1;
      } else if (direction === 'right') {
        i = (i === list.length - 1) ? 0 : i + 1;
      }

      car.style.background = `${bgcolor}, url("${list[i]}")`;
      car.style.backgroundSize = 'cover';
      car.style.backgroundPosition = 'center center';
    }
  }, []);

  useEffect(() => {
    const carElement = document.getElementById("carousel");

    setCar(carElement);
    carousel(carElement);

    const timer = setInterval(() => {
      changeCarousel("right");
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      <header id="carousel">
        <p>TENDA #1 EN TOT EL MÓN</p>
        <h1>NOSALGSA</h1>
        <div>
          <button><Link className="Link" to='/shop'>EXPLORAR</Link></button>
          <button><Link className="Link" to='/categories'>CATEGORIES</Link></button>
        </div>
        <span className="left" onClick={changeCarousel('left')}>&larr;</span>
        <span className="right" onClick={changeCarousel('right')}>&rarr;</span>
      </header>
      <section className="explanation">
        <div className="floating-div">
          <div>
            <i className="bi bi-controller"></i>
            <p>Jocs de qualitat</p>
          </div>
          <div>
            <i className="bi bi-cart3"></i>
            <p>Compra simple</p>
          </div>
          <div>
            <i className="bi bi-badge-vr"></i>
            <p>Ulleres VR</p>
          </div>
          <div>
            <i className="bi bi-playstation" style={{ fontSize: '48px', marginLeft: '-60px' }}></i>
            <i className="bi bi-xbox" style={{ marginTop: '-88px', fontSize: '48px', marginRight: '-60px' }}></i>
            <p>Múltiples plataformes</p>
          </div>
        </div>
        <h2>TROBA TOTS ELS JOCS</h2>
        <p style={{ padding: '0 15%' }}>En aquesta pàgina web prodràs explorar en diverses categories per trobar el joc
          indicat.</p>
      </section>
      <section className="side-img">
        <div>
          <h2>ENTRETENIMENT</h2>
          <p>Gaudeix de l'experiència de cada un dels jocs sense restriccions.</p>
          <button><Link className='Link' to={"/categories"}>Categories</Link></button>
        </div>
        <div>
        </div>
      </section>
      <section className="blocks">
        <div>
          <h2>NOUS</h2>
          <p>Jocs nous, actualitzats i moderns</p>
        </div>
        <div>
          <h2>G.O.T.Y.</h2>
          <p>Els millors jocs de l'any</p>
        </div>
        <div>
          <h2>CLÀSSICS</h2>
          <p>Juga a videojocs destacats d'altres anys</p>
        </div>
      </section>
    </main>
  );
}

export default Home;
