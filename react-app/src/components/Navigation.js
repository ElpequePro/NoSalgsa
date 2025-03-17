import React, { useEffect, useState } from 'react';

import logo from '../img/logo.png';
import { Link, useNavigate } from 'react-router';

function Navigation() {

    const navigate = useNavigate();
    const [search, setSearch] = useState(null);
    const [div, setDiv] = useState(null);
    const [aside, setAside] = useState(null);

    const onClickLogo = () => {
        navigate('/');
    }

    function resetSearch() {
        if (search) {
            search.value = '';
        }
    }

    // MENU

    function menu(name) {
        if (aside) {
            if (name === 'open') {
                aside.style.width = '400px';
                aside.style.marginLeft = '0';
                document.body.style.backgroundColor = 'rgba(13, 13, 13, .5)';
            } if (name === 'close') {
                aside.style.width = '0';
                aside.style.marginLeft = '-20%';
                document.body.setAttribute('background-color', 'none', 'important');
                document.body.setAttribute('background', 'transparent', 'important');
            }
        }
    }

    // SEARCH

    function btnSearch() {
        if (div) {
            div.classList.toggle('active');
            if (div.classList.contains('active')) {
                search.focus();
            }
        }
    }

    useEffect(() => {
        const searchElement = document.getElementById('search_bar');
        const divElement = document.getElementById('search_div');
        const asideElement = document.querySelector('aside');

        setSearch(searchElement);
        setDiv(divElement);
        setAside(asideElement);

        searchElement.addEventListener('keydown', () => {
            localStorage.setItem('query', searchElement.value);
        });

        searchElement.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                localStorage.setItem('load', 'true');
                navigate('/shop');
            }
        });

    }, [navigate]);

    return (
        <div>
            <nav>
                <div>
                    <i className="bi bi-list" onClick={() => menu('open')}></i>
                    <img src={logo} alt="" onClick={onClickLogo} />
                    <ul>
                        <li><Link className="Link" to='/'>Home</Link></li>
                        <li className="tenda"><Link className="Link" to='/shop'>Tenda</Link> <span
                            className="material-symbols-outlined">keyboard_arrow_down</span>
                            <ul>
                                <li><Link className="Link" to='/shop'>Productes</Link></li>
                                <li><Link className="Link" to='/categories'>Categories</Link></li>
                            </ul>
                        </li>
                        <li><Link className="Link" to='/contact'>Contacte</Link></li>
                        <li><Link className="Link" to='/about-us'>Sobre Nosaltes</Link></li>
                    </ul>
                </div>
                <div className="search" id="search_div">
                    <input type="text" id="search_bar" />
                    <i className="bi bi-search" onClick={() => btnSearch()}></i>
                </div>
            </nav >
            <aside>
                <h2>INDEX</h2>
                <hr />
                <ul>
                    <li><Link to={"/"}>Inici</Link></li>
                    <li className="li_tenda">
                        <Link to={"/shop"}>Tenda</Link>
                        <ul>
                            <li><Link to={'/shop'}>Productes</Link></li>
                            <li><Link to={'/categories'}>Categories</Link></li>
                        </ul>
                    </li>
                    <li><Link to={'/contact'}>Contacte</Link></li>
                    <li><Link to={'/about-us'}>Sobre Nosaltres</Link></li>
                </ul>
                <i className="bi bi-x" onClick={menu('close')}></i>
            </aside>
        </div >
    );
}

export default Navigation;