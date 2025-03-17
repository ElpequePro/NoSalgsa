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
                        <input type="text" name="nom" id="nom" placeholder="*Nom" required />
                        <input type="text" name="cognom" id="cognom" placeholder="*Cognom/s" required />
                    </div>
                    <input type="email" name="email" id="email" placeholder="*Correu electrònic" required />
                    <input type="tel" name="telefon" id="telefon" placeholder="Número de Telèfon (opcional)" />
                    <select required>
                        <option value="" disabled selected>- Selecciona el gènere -</option>
                        <option value="">prova</option>
                    </select>
                    <select disabled="disabled">
                        <option value="" disabled selected>- Selecciona el joc -</option>
                        <option value="">prova</option>
                    </select>
                    <input type="number" name="comanda" id="comanda" placeholder="Número de la comanda (opcional)" />
                    <textarea placeholder="*Missatge" name="missatge" id="missatge" required></textarea>
                    <div>
                        <input type="checkbox" id="privacitat" />
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