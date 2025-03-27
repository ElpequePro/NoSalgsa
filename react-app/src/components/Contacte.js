import React from "react";
import { Link } from "react-router";

import '../css/contact.css';

function Contacte() {
    return (
        <main>
            <header>
                <h1>Contacte</h1>
            </header>
            <section class="form">
                <div>
                    <h2>tens alguna pregunta?</h2>
                    <p>Som aquí per ajudar! Ompliu el formulari o poseu-vos en contacte amb nosaltres per correu electrònic
                        o per telèfon. El nostre Equip d'Atenció al Client és disponible per ajudar-lo a obtenir la millor
                        experiència.</p>
                    <p>Tots reben una resposta personalitzada, així que espereu 24 hores durant l'horari comercial per a una
                        resposta. El nostre horari comercial és de L-V de 9 a.m. a 5 p.m.</p>
                    <ul>
                        <li><span class="material-symbols-outlined">mail</span>atencio-client@nosalgsa.es</li>
                        <li><span class="material-symbols-outlined">phone</span>666 09 11 69</li>
                        <li><span class="material-symbols-outlined">chat</span>Parla amb nosaltres</li>
                    </ul>
                </div>
                <form action="request.php" method="get">
                    <div>
                        <div className="custom-label">
                            <label for='nom'>Nom</label>
                            <input type="text" name="nom" id="nom" required placeholder="*Escriu el teu nom" />
                        </div>
                        <div className="custom-label">
                            <label for='cognom'>Cognom</label>
                            <input type="text" name="cognom" id="cognom" required placeholder="*Escriu el teu cognom" />
                        </div>
                    </div>
                    <div className="custom-label">
                        <label for='email'>Correu electrònic</label>
                        <input type="email" name="email" id="email" required placeholder="*Escriu el teu correu electrònic" />
                    </div>
                    <div className="custom-label">
                        <label for='telefon'>Número de telèfon</label>
                        <input type="tel" name="telefon" id="telefon" placeholder="Escriu el teu telèfon" />
                    </div>
                    <div className="custom-label">
                        <label>Selecció del producte</label>
                        <select required id="genere">
                            <option value="" hidden selected>- Selecciona la secció -</option>
                            <optgroup label="Categoria">
                                <option value="figura">Figura</option>
                                <option value="subscripcio">Subscripció</option>
                                <option value="dlc">Contingut complementari</option>
                            </optgroup>
                            <optgroup label="Gènere de joc">
                                <option value="accio">Acció</option>
                                <option value="aventura">Aventura</option>
                                <option value="rpg">RPG</option>
                                <option value="terror">Terror</option>
                                <option value="fantasia">Fantasia</option>
                                <option value="puzzle">Puzzle</option>
                                <option value="esports">Esports</option>
                                <option value="estrategia">Estrategia</option>
                            </optgroup>
                        </select>
                    </div>
                    <select disabled="disabled">
                        <option value="" hidden selected>- Selecciona el producte -</option>
                        <option value="">prova</option>
                    </select>
                    <div className="custom-label">
                        <label for='comanda'>Número de la comanda</label>
                        <input type="number" name="comanda" id="comanda" required placeholder="*Escriu el número de la comanda" />
                    </div>
                    <div className="custom-label">
                        <label for='missatge'>Missatge</label>
                        <textarea name="missatge" id="missatge" placeholder="Escriu un missatge"></textarea>
                    </div>
                    <div>
                        <input type="checkbox" id="privacitat" required />
                        <label for="privacitat">He llegit i accepto la <Link to={"/contact/privacy-policy"}>política de
                            privacitat</Link></label>
                    </div>
                    <input type="submit" value="SUBMIT" id="submit" />
                    <input type="reset" value="reset" />
                </form>
            </section>
        </main>
    );
}

export default Contacte;