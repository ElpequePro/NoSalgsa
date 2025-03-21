import React from 'react';

// import LineChart from 'react-linechart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import '../css/about-us.css';

function SobreNosaltres() {

    // Interacció (chart.js)

    // https://www.visualcapitalist.com/game-console-launch-prices-adjusted-for-inflation-1975-2024/
    // Console prices
    const consoleData = [
        {
            // Sony
            color: "#0070D1",
            points: [
                { x: 1995, y: 299 },
                { x: 2000, y: 299 },
                { x: 2005, y: 249 },
                { x: 2006, y: 499 },
                { x: 2012, y: 249 },
                { x: 2013, y: 399 },
                { x: 2020, y: 499 },
            ],
        },
        {
            // Nintendo
            color: "#db0111",
            points: [
                { x: 1985, y: 199 },
                { x: 1989, y: 89 },
                { x: 1991, y: 199 },
                { x: 1995, y: 179 },
                { x: 1996, y: 199 },
                { x: 1998, y: 79 },
                { x: 2001, y: 199 },
                { x: 2001, y: 79 },
                { x: 2004, y: 149 },
                { x: 2006, y: 249 },
                { x: 2011, y: 249 },
                { x: 2012, y: 349 },
                { x: 2017, y: 299 },
                { x: 2021, y: 349 },
            ],
        },
        {
            // Microsoft
            color: "#0e760d",
            points: [
                { x: 2001, y: 299 },
                { x: 2005, y: 399 },
                { x: 2013, y: 499 },
                { x: 2020, y: 499 },
            ],
        },
    ];

    return (
        <main>
            <header>
                <h1>Sobre nosaltres</h1>
            </header>
            <section className="info">
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237816.52593398353!2d-158.1412809933053!3d21.355101124311524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006569de4312db%3A0xd77a90edb572a52d!2sPearl%20Harbor!5e0!3m2!1sen!2ses!4v1732094136226!5m2!1sen!2ses"
                        width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="profile">
                    <img src="https://i.imgflip.com/5imrkq.jpg?a480912" alt="Imatge autor" />
                    <h2>Pol Poblet Pallisé</h2>
                    <p>Dissenyador "Sigma"</p>
                </div>
            </section>
            <section className="objectius">
                <h2>Els nostres objectius:</h2>
                <ul>
                    <li><b>Proporcioneu ressenyes completes de jocs</b>Ofereix ressenyes honestes i detallades dels últims
                        videojocs a diferents plataformes per ajudar els jugadors a prendre decisions informades.</li>
                    <li><b>Oferiu notícies oportunes del sector</b>Mantingueu la comunitat actualitzada amb les últimes
                        notícies, anuncis i tendències del sector dels jocs.</li>
                    <li><b>Fomentar la participació de la comunitat</b>Creeu un espai acollidor perquè els jugadors es
                        connectin, comparteixin experiències i participin en debats a través de fòrums i xarxes socials.
                    </li>
                    <li><b>Oferiu guies i tutorials</b>Proporcioneu recursos, consells i estratègies útils per ajudar els
                        jugadors a millorar les seves habilitats i millorar la seva experiència de joc.</li>
                    <li><b>Destaca els jocs independents</b>Promociona i dóna suport als desenvolupadors de jocs
                        independents mostrant títols únics i innovadors que mereixen un reconeixement.</li>
                    <li><b>Organitzeu esdeveniments i concursos</b>Organitzeu esdeveniments de jocs, tornejos i concursos
                        per fomentar la participació de la comunitat i celebrar la cultura del joc.</li>
                </ul>
            </section>
            <section className="video">
                <h2>Video introducció:</h2>
                <iframe src="https://www.youtube.com/embed/sF5LYGgKbUA?enablejsapi=1&showinfo=0&controls=0" id="video"
                    frameborder="0" allowfullscreen></iframe>
                <div>
                    <span class="material-symbols-outlined" id="playPause" onclick="playPause()">play_arrow</span>
                    <div>
                        <p id='vidTime'>00:00 / 00:00</p>
                        <input type="range" name="" id="vidLength" value="0" min="0" />
                    </div>
                    <div>
                        <span className="material-symbols-outlined" id="btnVolume" onclick="showVolume()">volume_up</span>
                        <input type="range" className="hidden" name="" id="inpVolume" value="100" min="0" max="100" />
                    </div>
                </div>
            </section>
            <section className="iteraccio">
                <h2>Interacció</h2>
                <LineChart
                    series={consoleData}
                    XAxis={{ title: "Year" }}
                    YAxis={{ title: "Price", min: 0 }} // Set min value for y-axis
                >
                    {consoleData.map((series, index) => (
                        <Line key={index} type="monotone" dataKey="y" data={series.points} stroke={series.color} />
                    ))}
                </LineChart>
            </section>
        </main>
    );
}

export default SobreNosaltres;