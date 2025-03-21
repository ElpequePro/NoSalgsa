import React, { useEffect, useState } from 'react';

import '../css/shop.css';
import jocs from "../json/jocs.json";

function Productes() {

    // Search Game

    function searchGame() {
        if (localStorage.getItem('load') === 'true') {
            localStorage.setItem('load', '')
            const query = localStorage.getItem('query');
            console.log(query);

            if (query === 'hola') {
                console.log('tes');
            }

            for (let q = 0; q < num_jocs; q++) {
                document.getElementById(q).style.display = 'none';

                if (jocs[q]["name"].toLowerCase().includes(query.toLowerCase())) {
                    console.log(q + ' contains');
                    document.getElementById(q).style.display = 'flex';
                }
            }
        }
    }

    let num_jocs;
    jocs.forEach(element => {
        num_jocs++;
    });

    // ADD GAMES

    const [list, setList] = useState(null);

    useEffect(() => {
        const product_list = document.getElementById('product_list');
        setList(product_list);
    }, []);

    const addGames = () => {
        if (list) {
            console.log(num_jocs);
            console.log(jocs);

            for (let i = 0; i < num_jocs; i++) {
                console.log(i);
                const div = document.createElement('article');
                const title = document.createElement('p');
                const p = document.createElement('p');
                const span = document.createElement('span');

                div.style.backgroundImage = 'url("' + jocs[i]['src'] + '")';
                div.setAttribute('decoding', 'async');
                title.innerText = jocs[i]['name'];
                p.innerText = jocs[i]['description'];
                span.innerText = 'close';

                div.classList.add(jocs[i]['genere']);
                div.classList.add(jocs[i]['color']);
                div.classList.add('product_hover');
                div.id = i;
                title.classList.add('title');
                p.classList.add('description');
                span.classList.add('material-symbols-outlined');

                div.appendChild(span);
                div.appendChild(p);
                div.appendChild(title);
                list.appendChild(div);
            }
        }
    }

    // FILTERS
    // Objectiu, when 0 filtres mostrar tots (mostrar 0 filtres default)

    const filterGenere = (name) => {
        for (let i = 0; i < num_jocs; i++) {
            if (name === 'accio') {
                document.getElementsByClassName('accio')[i].classList.toggle('hideGenere');
            } else if (name === 'aventura') {
                document.getElementsByClassName('aventura')[i].classList.toggle('hideGenere');
            } else if (name === 'rpg') {
                document.getElementsByClassName('rpg')[i].classList.toggle('hideGenere');
            } else if (name === 'terror') {
                document.getElementsByClassName('terror')[i].classList.toggle('hideGenere');
            } else if (name === 'fantasia') {
                document.getElementsByClassName('fantasia')[i].classList.toggle('hideGenere');
            } else if (name === 'puzzle') {
                document.getElementsByClassName('puzzle')[i].classList.toggle('hideGenere');
            } else if (name === 'esports') {
                document.getElementsByClassName('esports')[i].classList.toggle('hideGenere');
            } else if (name === 'estrategia') {
                document.getElementsByClassName('estrategia')[i].classList.toggle('hideGenere');
            }
        }
    }

    function filterAny(name) {
        const primer = document.getElementById('range_min_number');
        const segon = document.getElementById('range_max_number');
        const exacte = document.getElementById('input_exacte');
        let i = 0;

        if (name === 'rang' && document.getElementById('rang').default) {
            for (i = 0; i < num_jocs; i++) {
                if (primer.value <= jocs[i]['any'] && segon.value >= jocs[i]['any']) {
                    document.getElementById(i).classList.remove('hideAny');
                } else {
                    document.getElementById(i).classList.add('hideAny');
                }
            }
        } else if (name === 'exacte' && document.getElementById('exacte').default) {
            for (i = 0; i < num_jocs; i++) {
                if (exacte.value === jocs[i]['any']) {
                    document.getElementById(i).classList.remove('hideAny');
                } else {
                    document.getElementById(i).classList.add('hideAny');
                }
            }
        }
    }

    function resetFilter() {
        for (var i = 0; i < num_jocs; i++) {
            document.getElementById(i).classList.remove('hideGenere');
            document.getElementById(i).classList.remove('hideAny');
        }
    }

    function floatingFilter(name) {
        if (name === 'show') {
            document.getElementById('form').style.setProperty('left', '24px', 'important');
            document.getElementById('form').style.setProperty('width', '400px', 'important');
            document.getElementById('arrow_floating_filter').style.display = 'none';
            document.getElementById('cross_floating_filter').style.display = 'flex';
        } else if (name === 'hide') {
            document.getElementById('form').style.setProperty('left', '-20%', 'important');
            document.getElementById('form').style.setProperty('width', '0', 'important');
            document.getElementById('arrow_floating_filter').style.display = 'flex';
            document.getElementById('cross_floating_filter').style.display = 'none';
        }
    }

    // Expand block
    if (list) {
        list.addEventListener('click', e => {
            if (e.target.tagName.toLowerCase() === 'article') {
                e.target.classList.remove('product_hover');
                e.target.style = 'position: absolute; width: 90%; height: 90%; top: 5%; left: 5%; z-index: 999999999; cursor: auto;';
                e.target.querySelector('p.title').style = 'opacity: 1; left: 40px; top: 40px; font-size: 3em; transition: none; margin-right: 120px;';
                e.target.querySelector('p.description').style = 'display: flex; opacity: 1; left: 40px; top: 180px; font-size: 1.5em; transition: none; text-align: justify;';
                e.target.querySelector('span').style = 'display: flex;';

                if (e.target.classList.contains('blue')) {
                    e.target.style.background = 'linear-gradient(-45deg, #2A3663 0%, #605EA1 100%)';
                } else if (e.target.classList.contains('red')) {
                    e.target.style.background = 'linear-gradient(-45deg, #A0153E 0%, #E72929 100%)';
                } else if (e.target.classList.contains('green')) {
                    e.target.style.background = 'linear-gradient(-45deg, #1F4529 0%, #859F3D 100%)';
                } else if (e.target.classList.contains('yellow')) {
                    e.target.style.background = 'linear-gradient(-45deg, #A66E38 0%, #FFB200 100%)';
                } else if (e.target.classList.contains('orange')) {
                    e.target.style.background = 'linear-gradient(-45deg, #CB6040 0%, #EC8305 100%)';
                } else {
                    e.target.style.background = 'linear-gradient(-45deg, #3C3D37 0%, #939185 100%)';
                }
            }

            const parent = e.target.parentNode;
            if (e.target.tagName.toLowerCase() === 'span') {
                parent.classList.add('product_hover');
                parent.style = 'position: relative; flex: 1 1 180px; z-index: none;';
                parent.style.setProperty('background-image', 'url("' + jocs[parent.id]['src'] + '")');
                parent.querySelector('p.title').style = 'position: absolute; font-size: 16px; transition: .3s;';
                parent.querySelector('p.description').style = 'display: none;';
                parent.querySelector('span').style = 'display: none;';
            }
        })
    }

    useEffect(() => {
        document.getElementById('form').reset();
        addGames();
    }, [addGames]);

    return (
        <main>
            <form className="floating-div" id="form">
                <span className="cross material-symbols-outlined" id="cross_floating_filter"
                    onClick={() => floatingFilter('hide')}>close</span>
                <div className="genere">
                    <h2>Gènere</h2>
                    <div>
                        <input type="checkbox" name="genere" id="accio" onChange={filterGenere('accio')} />
                        <span className="material-symbols-outlined"></span>
                        <label for="accio">Acció</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genere" id="aventura" onChange={filterGenere('aventura')} />
                        <span></span>
                        <label for="aventura">Aventura</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genere" id="rpg" onChange={filterGenere('rpg')} />
                        <span></span>
                        <label for="rpg">RPG</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genere" id="terror" onChange={filterGenere('terror')} />
                        <span></span>
                        <label for="terror">Terror</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genere" id="fantasia" onChange={filterGenere('fantasia')} />
                        <span></span>
                        <label for="fantasia">Fantasia</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genere" id="puzzle" onChange={filterGenere('puzzle')} />
                        <span></span>
                        <label for="puzzle">Puzzle</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genere" id="esports" onChange={filterGenere('esports')} />
                        <span></span>
                        <label for="esports">Esports</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genere" id="estrategia" onChange={filterGenere('estrategia')} />
                        <span></span>
                        <label for="estrategia">Estrategia</label>
                    </div>
                </div>
                <div className="any">
                    <h2>Any de llençament</h2>
                    <div className="rang">
                        <div>
                            <input type="radio" name="any" id="rang" onClick={() => filterAny('rang')} defaultChecked />
                            <span></span>
                            <label for="rang">Rang d'anys</label>
                        </div>
                        <div className="ranges">
                            <input type="number" name="rang_min" id="range_min_number" min="1950" max="2024" value="1950"
                                oninput="document.getElementById('range_min').value = this.value; filterAny('rang');" />
                            <input type="range" name="rang_min" id="range_min" min="1950" max="2024" value="1950"
                                oninput="document.getElementById('range_min_number').value = this.value" />
                            <input type="range" name="rang_max" id="range_max" min="1950" max="2024" value="2024"
                                oninput="document.getElementById('range_max_number').value = this.value" />
                            <input type="number" name="rang_max" id="range_max_number" min="1950" max="2024" value="2024"
                                oninput="document.getElementById('range_max').value = this.value; filterAny('rang');" />
                        </div>
                    </div>
                    <div className="exacte">
                        <div>
                            <input type="radio" name="any" id="exacte" onClick={() => filterAny('exacte')} />
                            <span></span>
                            <label for="exacte">Any exacte</label>
                        </div>
                        <input type="number" min="1950" max="2024" value="2024" id="input_exacte"
                            oninput="filterAny('exacte')" />
                    </div>
                </div>
                <input type="reset" value="Reset" onClick={() => resetFilter()} />
            </form>
            <span className="arrow material-symbols-outlined" id="arrow_floating_filter"
                onClick={() => floatingFilter('show')}>chevron_right</span>
            <div className="product-list" id="product_list"></div>
        </main>
    );
}

export default Productes;