import React from 'react';

import logo from '../img/logo.png';
import { Link, useNavigate } from 'react-router';

function Navigation() {

    const navigate = useNavigate();

    const onClickLogo = () => {
        navigate('/');
    }

    return (
        <div>
            <nav>
                <div>
                    <i class="bi bi-list" onclick="menu('open')"></i>
                    <img src={logo} alt="" onClick={onClickLogo} />
                    <ul>
                        <li><Link className="Link" to='/'>Home</Link></li>
                        <li class="tenda"><Link className="Link" to='/shop'>Tenda</Link> <span
                            class="material-symbols-outlined">keyboard_arrow_down</span>
                            <ul>
                                <li><Link className="Link" to='/shop'>Productes</Link></li>
                                <li><Link className="Link" to='/categories'>Categories</Link></li>
                            </ul>
                        </li>
                        <li><Link className="Link" to='/contact'>Contacte</Link></li>
                        <li><Link className="Link" to='/about-us'>Sobre Nosaltes</Link></li>
                    </ul>
                </div>
                <div class="search" id="search_div">
                    <input type="text" id="search_bar" />
                    <i class="bi bi-search" onclick="btnSearch()"></i>
                </div>
            </nav >
            <aside>
                <h2>INDEX</h2>
                <hr />
                <ul>
                    <li onclick="window.location.href='index.html'">Inici</li>
                    <li class="li_tenda">
                        Tenda
                        <ul>
                            <li onclick="window.location.href='shop/productes.html'">Productes</li>
                            <li onclick="window.location.href='shop/categories.html'">Categories</li>
                        </ul>
                    </li>
                    <li onclick="window.location.href='info/contacte.html'">Contacte</li>
                    <li onclick="window.location.href='info/sobre_nosaltres.html'">Sobre Nosaltres</li>
                </ul>
                <i class="bi bi-x" onclick="menu('close')"></i>
            </aside>
        </div >
    );
}

export default Navigation;