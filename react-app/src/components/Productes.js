import React from 'react';

import '../css/shop.css';
//import '../javascript/productes.js';

function Productes() {
    return (
        <main>
            <form class="floating-div" id="form">
                <span class="cross material-symbols-outlined" id="cross_floating_filter"
                    onclick="floatingFilter('hide')">close</span>
                <div class="genere">
                    <h2>Gènere</h2>
                    <div>
                        <input type="checkbox" name="genere" id="accio" onchange="filterGenere('accio')" checked />
                        <span class="material-symbols-outlined"></span>
                        <label for="accio">Acció</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genere" id="aventura" onchange="filterGenere('aventura')" checked />
                        <span></span>
                        <label for="aventura">Aventura</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genere" id="rpg" onchange="filterGenere('rpg')" checked />
                        <span></span>
                        <label for="rpg">RPG</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genere" id="terror" onchange="filterGenere('terror')" checked />
                        <span></span>
                        <label for="terror">Terror</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genere" id="fantasia" onchange="filterGenere('fantasia')" checked />
                        <span></span>
                        <label for="fantasia">Fantasia</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genere" id="puzzle" onchange="filterGenere('puzzle')" checked />
                        <span></span>
                        <label for="puzzle">Puzzle</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genere" id="esports" onchange="filterGenere('esports')" checked />
                        <span></span>
                        <label for="esports">Esports</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genere" id="estrategia" onchange="filterGenere('estrategia')" checked />
                        <span></span>
                        <label for="estrategia">Estrategia</label>
                    </div>
                </div>
                <div class="any">
                    <h2>Any de llençament</h2>
                    <div class="rang">
                        <div>
                            <input type="radio" name="any" id="rang" onclick="filterAny('rang')" checked />
                            <span></span>
                            <label for="rang">Rang d'anys</label>
                        </div>
                        <div class="ranges">
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
                    <div class="exacte">
                        <div>
                            <input type="radio" name="any" id="exacte" onclick="filterAny('exacte')" />
                            <span></span>
                            <label for="exacte">Any exacte</label>
                        </div>
                        <input type="number" min="1950" max="2024" value="2024" id="input_exacte"
                            oninput="filterAny('exacte')" />
                    </div>
                </div>
                <input type="reset" value="Reset" onclick="resetFilter()" />
            </form>
            <span class="arrow material-symbols-outlined" id="arrow_floating_filter"
                onclick="floatingFilter('show')">chevron_right</span>
            <div class="product-list" id="product_list"></div>
        </main>
    );
}

export default Productes;