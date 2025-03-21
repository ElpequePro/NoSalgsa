import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="main-div">
                <div className="left">
                    <div>
                        <h3>Jocs més jugats</h3>
                        <ul>
                            <li>Minecraft</li>
                            <li>Fortnite</li>
                            <li>League of Legends</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Contacte</h3>
                        <ul>
                            <li>666 09 11 69</li>
                            <li>Pearl Harbor, Hawaii, USA</li>
                            <li>C.P. 96860</li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <h3>Tenda</h3>
                    <ul>
                        <li><Link className='Link' to={'/shop'}>Productes</Link></li>
                        <li><Link className='Link' to={'/categories'}>Categories</Link></li>
                    </ul>
                    <div>
                        <input type="text" placeholder="Nom del producte..." />
                        <i className="bi bi-search"></i>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright &copy; 2024 - No Salgo de Casa "NoSalgsa" fet per Pol Poblet Pallisé</p>
            </div>
        </footer>
    );
}

export default Footer;