import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import '../css/categories.css';

function Categories() {

    const [nov, setNov] = useState(null);
    const [coll, setColl] = useState(null);
    const [desc, setDesc] = useState(null);
    const [subs, setSubs] = useState(null);

    const [jocs, setJocs] = useState([]);

    useEffect(() => {
        const fetchJocs = async () => {
            try {
                const response = await axios.get('http://localhost:3001/categories');
                const jocsArray = Object.values(response.data);
                setJocs(jocsArray);
                console.log(jocsArray[6]);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        }

        fetchJocs();

        setNov(document.getElementById('novetats_block'));
        setColl(document.getElementById('colleccions_block'));
        setDesc(document.getElementById('descomptes_block'));
        setSubs(document.getElementById('subscripcions_block'));
    }, []);

    function categories(name) {
        if (nov && coll && desc && subs) {
            if (name === 'novetats') {
                nov.style.display = 'flex';
                coll.style.display = 'none';
                desc.style.display = 'none';
                subs.style.display = 'none';
                document.getElementById('novetats').classList.add('active');
                document.getElementById('colleccions').classList.remove('active');
                document.getElementById('descomptes').classList.remove('active');
                document.getElementById('subscripcions').classList.remove('active');
            } else if (name === 'colleccions') {
                nov.style.display = 'none';
                coll.style.display = 'flex';
                desc.style.display = 'none';
                subs.style.display = 'none';
                document.getElementById('novetats').classList.remove('active');
                document.getElementById('colleccions').classList.add('active');
                document.getElementById('descomptes').classList.remove('active');
                document.getElementById('subscripcions').classList.remove('active');
            } else if (name === 'descomptes') {
                nov.style.display = 'none';
                coll.style.display = 'none';
                desc.style.display = 'flex';
                subs.style.display = 'none';
                document.getElementById('novetats').classList.remove('active');
                document.getElementById('colleccions').classList.remove('active');
                document.getElementById('descomptes').classList.add('active');
                document.getElementById('subscripcions').classList.remove('active');
            } else if (name === 'subscripcions') {
                nov.style.display = 'none';
                coll.style.display = 'none';
                desc.style.display = 'none';
                subs.style.display = 'flex';
                document.getElementById('novetats').classList.remove('active');
                document.getElementById('colleccions').classList.remove('active');
                document.getElementById('descomptes').classList.remove('active');
                document.getElementById('subscripcions').classList.add('active');
            }
        }
    }

    return (
        <main>
            <header>
                <h1>CATEGORIES</h1>
            </header>
            <section className="content">
                <ul className="categories">
                    <li className="active" id="novetats" onClick={() => categories('novetats')}>Novetats</li>
                    <li id="colleccions" onClick={() => categories('colleccions')}>Col·leccions</li>
                    <li id="descomptes" onClick={() => categories('descomptes')}>Descomptes</li>
                    <li id="subscripcions" onClick={() => categories('subscripcions')}>Subscripcions</li>
                </ul>
                <section className="novetats" id="novetats_block">
                    <h2>NOVETATS</h2>
                    <div className="div-grid-popular">
                        <div></div>
                        <div className="mig-dalt"></div>
                        <div className="mig-baix"></div>
                        <div></div>
                    </div>
                    <div className="game-list">
                        <h3>Recomanat per a tu</h3>
                        <ul>
                            <li>
                                <img src="https://i.ytimg.com/vi/GC_fXqYXGxM/maxresdefault.jpg" alt="Ghost of Yotei" />
                                <p></p>
                                <p>69,99 €</p>
                            </li>
                            <li>
                                <img src="https://m.media-amazon.com/images/M/MV5BNTcyNDliZDMtMjM1My00ZmU1LTgyZTItNWYxODJiY2IxNGExXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                                    alt="Pokémon Legends AZ" />
                                <p></p>
                                <p>49,99 €</p>
                            </li>
                            <li>
                                <img src="https://assets-prd.ignimgs.com/2024/12/13/nightreign-1734052852377.jpg" alt="Elden Ring: Nightreign" />
                                <p></p>
                                <p>39,99 €</p>
                            </li>
                            <li>
                                <img src="https://assets-prd.ignimgs.com/2023/08/24/nightmares3-1692881952367.jpg" alt="Little Nightmares 3" />
                                <p></p>
                                <span>15%</span>
                                <p>34,99 € <del>39,99 €</del></p>
                            </li>
                            <li>
                                <img src="https://technoahora.com/wp-content/uploads/2024/12/splitfiction-keyart-rgb-1920x108-1.webp"
                                    alt="Split Fiction" />
                                <p></p>
                                <span>25%</span>
                                <p>39,99 € <del>49,99 €</del></p>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="colleccions" id="colleccions_block">
                    <h2>COL·LECCIONS</h2>
                    <hr />
                    <div className="game-list">
                        <h3>Contingut Complementari</h3>
                        <ul>
                            <li>
                                <img src="https://assets-prd.ignimgs.com/2022/01/05/witcher-3-wild-hunt-blood-and-wine-button-1641371827864.jpg"
                                    alt="Witcher 3: Wild Hunt Blood and Wine" loading="lazy" decoding="async" />
                                <p></p>
                                <p>19,99 €</p>
                            </li>
                            <li>
                                <img src="https://imagedelivery.net/nkaANmEhdg2ZZ4vhQHp4TQ/97650aa0-85b4-4032-02c2-45097e4f9600/psdbsqlg"
                                    alt="The Binding of Isaac: Repentance" style={{ objectPosition: "center 0px" }} />
                                <p></p>
                                <span>25%</span>
                                <p>14,99 € <del>19,99 €</del></p>
                            </li>
                            <li>
                                <img src="https://i.ytimg.com/vi/cWwwptVbkCo/maxresdefault.jpg" alt="Elden Ring: Shadow of the Erdtree" />
                                <p className="img-before">Premium</p>
                                <span>40%</span>
                                <p>24,99 € <del>39,99 €</del></p>
                            </li>
                            <li>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl9D3qFXE0MHLxgcYnu9NlrcP_lGtZA4iJgg&s"
                                    alt="Red Dead Redemption: Undead Nightmare" style={{ objectPosition: "-20px center" }} />
                                <p className="img-before">Extra</p>
                                <p>14,99 €</p>
                            </li>
                            <li>
                                <img src="https://mir-s3-cdn-cf.behance.net/projects/404/6e545f180617701.Y3JvcCwxMzY4LDEwNzAsMzI1LDA.jpg"
                                    alt="Cyberpunk 2077: Phantom Liberty" />
                                <p></p>
                                <span>60%</span>
                                <p>4,99 € <del>29,99 €</del></p>
                            </li>
                        </ul>
                    </div>
                    <div className="game-list">
                        <h3>Figures</h3>
                        <ul>
                            <li>
                                <img src="https://www.darkhorsedirect.com/cdn/shop/files/HFW_STATUE_CLAWSTRIDER_DHD_PHOTO_DSP_19.png?v=1708985615&width=480"
                                    alt="Figura d'Aloy muntant un Clawstrider" loading="lazy" decoding="async" />
                                <p>Horizon</p>
                                <p>999,99 €</p>
                            </li>
                            <li>
                                <img src="../img/astro_bot.jpg" alt="Figura d'Astro Bot amb una moneda" />
                                <p>Astro Bot</p>
                                <span>35%</span>
                                <p>49,99 € <del>74,99 €</del></p>
                            </li>
                            <li>
                                <img src="https://m.media-amazon.com/images/I/51+KFU5htoL.jpg" alt="Figura de Link amb arc" />
                                <p>The Legend of Zelda</p>
                                <span>20%</span>
                                <p>79,99 € <del>99,99 €</del></p>
                            </li>
                            <li>
                                <img src="../img/el_venoso.jpeg" alt="Figura de Venom contra dos Spider-Man" />
                                <p>Spider-Man</p>
                                <p>179,99 €</p>
                            </li>
                            <li>
                                <img src="https://www.nakamatoys.com/cdn/shop/files/STL316520_5_1024x1024.jpg?v=1707939476"
                                    alt="Figura de Caith Sith i Fat Moogle" />
                                <p>Final Fantasy</p>
                                <p>129,99 €</p>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="descomptes" id="descomptes_block">
                    <h2 style={{ marginBottom: "20px" }}>DESCOMPTES</h2>
                    <div className="desc-top-blocks">
                        <div onClick={() => window.location.href = '#superventes'}>
                            <h2>SUPERVENTES</h2>
                        </div>
                        <div onClick={() => window.location.href = '#menys_vint'}>
                            <h2>MENYS DE 20 €</h2>
                        </div>
                        <div onClick={() => window.location.href = '#descomptes_nadal'}>
                            <h2>DESCOMPTES DE NADAL</h2>
                        </div>
                    </div>
                    <div className="game-list" id="superventes">
                        <h3 style={{ marginTop: "20px" }}>Superventes</h3>
                        <ul>
                            <li>
                                <img src="https://preview.redd.it/fc-25-standard-cover-v0-19e17zsww2dd1.jpeg?width=640&crop=smart&auto=webp&s=d9129e6dbe0b8801366f26fc86c85ff228c0649a"
                                    alt="FC25" style={{ objectPosition: "center -1px" }} loading="lazy" />
                                <p></p>
                                <span>40%</span>
                                <p>34,99 € <del>59,99 €</del></p>
                            </li>
                            <li>
                                <img src="https://preview.redd.it/new-minecraft-art-cover-what-do-you-think-v0-jncj9eqr9bad1.jpeg?auto=webp&s=8ba0359485474ee23ca522d0fdddb59bdec9c250"
                                    alt="Minecraft" loading="lazy" />
                                <p></p>
                                <span>50%</span>
                                <p>14,99 € <del>29,99 €</del></p>
                            </li>
                            <li>
                                <img src="https://preview.redd.it/bueqtztxmnj81.png?width=640&crop=smart&auto=webp&s=377e0d875affec6537a26c6cc7f4721aebdeaba5"
                                    alt="Elden Ring" loading="lazy" />
                                <p></p>
                                <span>50%</span>
                                <p>29,99 € <del>59,99 €</del></p>
                            </li>
                            <li>
                                <img src="https://i.redd.it/which-cover-art-do-you-prefer-v0-5jhtn3wyuvcc1.jpg?width=1600&format=pjpg&auto=webp&s=460f23db1c95e60b64070d71000b3c12b3d39ae2"
                                    alt="Red Dead Redemption 2" loading="lazy" />
                                <p></p>
                                <span>65%</span>
                                <p>19,99 € <del>59,99 €</del></p>
                            </li>
                            <li>
                                <img src="https://m.media-amazon.com/images/I/61ser8y0sNL._AC_UF894,1000_QL80_.jpg" alt="Final Fantasy XIV"
                                    style={{ objectPosition: "center 40%" }} />
                                <p></p>
                                <span>25%</span>
                                <p>14,99 € <del>19,99 €</del></p>
                            </li>
                        </ul>
                    </div>
                    <div className="game-list" id="menys_vint">
                        <h3>Menys de 20 €</h3>
                        <ul>
                            <li>
                                <img src="https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/bb8d724c-9aa2-11e6-9b10-00163ec9f5fa/2766737171/gta-v-cover-wallpaper-screenshot.jpg"
                                    alt="Grand Theft Auto V" loading="lazy" />
                                <p></p>
                                <p>9,99 €</p>
                            </li>
                            <li>
                                <img src="https://i1.sndcdn.com/artworks-09oSEwpPeAGtzpoR-pWgblQ-t500x500.jpg" alt="It Takes Two" />
                                <p></p>
                                <span>75%</span>
                                <p>9,99 € <del>39,99 €</del></p>
                            </li>
                            <li>
                                <img src="https://pics.filmaffinity.com/Mortal_Kombat_11_Aftermath-880716075-large.jpg"
                                    alt="Mortal Kombat 11: Aftermath" loading="lazy" />
                                <p></p>
                                <span>50%</span>
                                <p>19,99 € <del>39,99 €</del></p>
                            </li>
                            <li>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRupQJ8Xa5UfYipl59T_3P-fn_X0RJ9n1_Ax-JS0sVArvoqEGo9CslDOMiWK74K28gH8j8&usqp=CAU"
                                    alt="Detroit: Become Human" />
                                <p></p>
                                <p>14,99 €</p>
                            </li>
                            <li>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNDjbfQTQeOJzhcL-OJLocrb__KAWBz4hsMA&s"
                                    alt="Crew 2" />
                                <p></p>
                                <span>65%</span>
                                <p>14,99 € <del>49,99 €</del></p>
                            </li>
                        </ul>
                    </div>
                    <div className="game-list" id="descomptes_nadal">
                        <h3>Descomptes de Nadal</h3>
                        <ul>
                            <li>
                                <img src="https://upload.wikimedia.org/wikipedia/en/f/ff/Assassin%27s_Creed_Valhalla_cover.jpg"
                                    alt="Assassins Creed Valhalla" style={{ objectPosition: "center 0px" }} />
                                <p className="img-before">Extra</p>
                                <span>65%</span>
                                <p>19,99 € <del>59,99 €</del></p>
                            </li>
                            <li>
                                <img src="https://f4.bcbits.com/img/a2686854379_10.jpg" alt="L.A. Noire" loading="lazy" />
                                <p></p>
                                <span>75%</span>
                                <p>9,99 € <del>39,99 €</del></p>
                            </li>
                            <li>
                                <img src="https://npr.brightspotcdn.com/ca/d6/3909cdb44357a39822747d905462/far-cry-6-wide-cover.jpeg"
                                    alt="Far Cry 6" loading="lazy" />
                                <p></p>
                                <span>50%</span>
                                <p>14,99 € <del>29,99 €</del></p>
                            </li>
                            <li>
                                <img src="https://gaming-cdn.com/images/products/7047/orig/red-dead-redemption-pc-game-steam-cover.jpg?v=1730219996"
                                    alt="Red Dead Redemption" loading="lazy" />
                                <p className="img-before">Extra</p>
                                <span>50%</span>
                                <p>24,99 € <del>49,99 €</del></p>
                            </li>
                            <li>
                                <img src="https://preview.redd.it/what-subnautica-game-is-better-i-prefer-the-first-cause-i-v0-fvyfkaqcd83d1.jpeg?width=640&crop=smart&auto=webp&s=a18924358845b72fb88620459e9da4a0ad04f54a"
                                    alt="Subnautica" loading="lazy" />
                                <p></p>
                                <span>60%</span>
                                <p>11,99 € <del>29,99 €</del></p>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="subscripcions" id="subscripcions_block">
                    <h2>SUBSCRIPCIONS</h2>
                    <div className="subs-block">
                        <div className="essential">
                            <div>
                                <h2>ESSENTIAL</h2>
                                <div>
                                    <h2>59,99 €</h2>
                                    <br />
                                    <p>Upgrade for the remaining 365 days</p>
                                </div>
                            </div>
                            <ul>
                                <li>Monthly Games</li>
                                <li>Online Multiplayer</li>
                                <li>PlayStation Plus Collection</li>
                                <li>Exclusive Discounts</li>
                                <li>Exclusive Packs</li>
                                <li>Cloud Storage</li>
                                <li>Game Help</li>
                                <li>Share Play</li>
                                <li className="sub-list-not-checked">Games Catalogue</li>
                                <li className="sub-list-not-checked">Clàssics Catalogue</li>
                                <li className="sub-list-not-checked">Game Trials</li>
                                <li className="sub-list-not-checked">Cloud Streaming</li>

                            </ul>
                            <button>Upgrade</button>
                        </div>
                        <div className="extra">
                            <div>
                                <h2>EXTRA</h2>
                                <div>
                                    <h2>99,99 €</h2>
                                    <br />
                                    <p>Upgrade for the remaining 365 days</p>
                                </div>
                            </div>
                            <ul>
                                <li>Games Catalogue</li>
                                <li>Monthly Games</li>
                                <li>Online Multiplayer</li>
                                <li>PlayStation Plus Collection</li>
                                <li>Exclusive Discounts</li>
                                <li>Exclusive Packs</li>
                                <li>Cloud Storage</li>
                                <li>Game Help</li>
                                <li>Share Play</li>
                                <li className="sub-list-not-checked">Clàssics Catalogue</li>
                                <li className="sub-list-not-checked">Game Trials</li>
                                <li className="sub-list-not-checked">Cloud Streaming</li>
                            </ul>
                            <button>Upgrade</button>
                        </div>
                        <div className="premium">
                            <div>
                                <h2>PREMIUM</h2>
                                <div>
                                    <h2>119,99 €</h2>
                                    <br />
                                    <p>Upgrade for the remaining 365 days</p>
                                </div>
                            </div>
                            <ul>
                                <li>Games Catalogue</li>
                                <li>Clàssics Catalogue</li>
                                <li>Game Trials</li>
                                <li>Cloud Streaming</li>
                                <li>Monthly Games</li>
                                <li>Online Multiplayer</li>
                                <li>PlayStation Plus Collection</li>
                                <li>Exclusive Discounts</li>
                                <li>Exclusive Packs</li>
                                <li>Cloud Storage</li>
                                <li>Game Help</li>
                                <li>Share Play</li>
                            </ul>
                            <button>Upgrade</button>
                        </div>
                    </div>
                    <div className="game-list">
                        <h3>Ubisoft+ Clàssics</h3>
                        <ul>
                            <li>
                                <img src="https://npr.brightspotcdn.com/ca/d6/3909cdb44357a39822747d905462/far-cry-6-wide-cover.jpeg"
                                    alt="Far Cry 6" loading="lazy" />
                                <p></p>
                                <span>50%</span>
                                <p>14,99 € <del>29,99 €</del></p>
                            </li>
                            <li>
                                <img src="https://upload.wikimedia.org/wikipedia/en/f/ff/Assassin%27s_Creed_Valhalla_cover.jpg"
                                    alt="Assassins Creed Valhalla" style={{ objectPosition: "center 0px" }} />
                                <p className="img-before">Extra</p>
                                <span>65%</span>
                                <p>19,99 € <del>59,99 €</del></p>
                            </li>
                            <li>
                                <img src="https://upload.wikimedia.org/wikipedia/en/a/af/The_Division_2_art.jpg" alt="The Division 2" />
                                <p></p>
                                <p>39,99 €</p>
                            </li>
                            <li>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpl3GeJmikHCU0r7TDltjAoDRGxTC4TCMujA&s"
                                    alt="Prince of Persia: The Last Crown" loading="lazy" />
                                <p className="img-before">Extra</p>
                                <p>39,99 €</p>
                            </li>
                            <li>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Rainbow_Six_Extraction_cover_art.jpg/220px-Rainbow_Six_Extraction_cover_art.jpg"
                                    alt="Rainbow Six: Extraction" />
                                <p className="img-before">Premium</p>
                                <p>39,99 €</p>
                            </li>
                        </ul>
                    </div>
                    <div className="game-list">
                        <h3>GTA+</h3>
                        <ul>
                            {jocs[6] && Object.keys(jocs[6]).map(([name, details]) => (
                                <li>
                                    <img src={`url("${details.src}")`} alt={name} loading='lazy' />
                                    <p className={details.extra ? 'img-before' : null}>{details.extra ? 'Extra' : null}</p>
                                    <p>{details.price} € {details.lastPrice ? `<del>${details.lastPrice} €</del>` : null}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="game-list">
                        <h3>EA Play</h3>
                        <ul>
                            <li>
                                <img src="https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2017/06/637533-filtra-bmw-m5-2017-nuevo-need-speed.jpg?tf=3840x"
                                    alt="Need for Speed: Payback" loading="lazy" />
                                <p></p>
                                <p>29,99 €</p>
                            </li>
                            <li>
                                <img src="https://i1.sndcdn.com/artworks-Dq1R04SDRHh9ns1i-ufMlqA-t500x500.jpg" alt="Battlefield 2042" />
                                <p className="img-before">Extra</p>
                                <p>59,99 €</p>
                            </li>
                            <li>
                                <img src="https://i.ytimg.com/vi/TiPeMZsK1rA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB4mYBSnvnwJBXUpJq4mfU8lkOLzg"
                                    alt="Star Wars Jedi: Survivor" />
                                <p className="img-before">Premium</p>
                                <p>29,99 €</p>
                            </li>
                            <li>
                                <img src="https://g4meshop.com/wp-content/uploads/2024/08/EASPORTSMaddenNFL25111.jpg" alt="Madden NFL 25"
                                    style={{ objectPosition: "-17px center" }} loading="lazy" />
                                <p></p>
                                <span>35%</span>
                                <p>24,99 € <del>34,99 €</del></p>
                            </li>
                            <li>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/55/F1_24_cover_art.jpg/220px-F1_24_cover_art.jpg"
                                    alt="F1 24" style={{ objectPosition: "center -12px" }} loading="lazy" />
                                <p className="img-before">Extra</p>
                                <p>39,99 €</p>
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
        </main>
    );
}

export default Categories;