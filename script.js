function resetSearch() {
    document.getElementById('search_bar').value = '';
}

// MENU

function menu(name) {
    if (name == 'open') {
        document.querySelector('aside').style.width = '400px';
        document.querySelector('aside').style.marginLeft = '0';
        document.body.style.backgroundColor = 'rgba(13, 13, 13, .5)';
    } if (name == 'close') {
        document.querySelector('aside').style.width = '0';
        document.querySelector('aside').style.marginLeft = '-20%';
        document.body.setAttribute('background-color', 'none', 'important');
        document.body.setAttribute('background', 'transparent', 'important');
    }
}

// SEARCH

search = document.getElementById('search_bar');

function btnSearch() {
    div = document.getElementById('search_div');
    div.classList.toggle('active');
    if (div.classList.contains('active')) {
        search.focus();
    }
}

search.addEventListener('keydown', () => {
    localStorage.setItem('query', search.value);
})

search.addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
        localStorage.setItem('load', 'true');
        window.location.replace('../../shop/productes.html');
    }
})

function checkCookies() {
    if (localStorage.getItem('cookies') == 'true') {
        console.log('Cookies validades!');
        console.log('Per deshabilitar-les escriu: localStorage.setItem("cookies", "false");');
    } else {
        document.querySelector('body').style = 'pointer-events: none; overflow: hidden;';

        cookie_div = document.createElement('article');
        cookie_text_block = document.createElement('div');
        cookie_title = document.createElement('h1');
        cookie_p = document.createElement('p');
        cookie_btn_no = document.createElement('button');
        cookie_btn_yes = document.createElement('button');

        cookie_div.id = 'cookie_div';
        cookie_text_block.id = 'cookie_text_block';
        cookie_title.id = 'cookie_title';
        cookie_btn_no.id = 'cookie_btn_no';
        cookie_btn_yes.id = 'cookie_btn_yes';

        cookie_btn_no.setAttribute("onclick", "cookieChange('false');");
        cookie_btn_yes.setAttribute("onclick", "cookieChange('true');");

        cookie_title.innerHTML = '<h1>Política de Cookies</h1><hr>';
        cookie_p.innerHTML = "<p>L'accés a aquest Lloc Web pot implicar la utilització de galetes.Les galetes són petites quantitats d'informació que s'emmagatzemen al navegador utilitzat per cada Usuari - en els diferents dispositius que pugui utilitzar per navegar - perquè el servidor recordi certa informació que posteriorment i únicament el servidor que la va implementar llegirà.Les galetes faciliten la navegació, la fan més amigable, i no fan malbé el dispositiu de navegació.</p > <p>Les cookies són procediments automàtics de recollida d'informació relativa a les preferències determinades per l'Usuari durant la visita al Lloc Web per tal de reconèixer-lo com a Usuari, i personalitzar la seva experiència i l'ús del Lloc Web, i també poden, per exemple, ajudar a identificar i resoldre errors.</p><p>La informació recollida a través de les cookies pot incloure la data i hora de visites al Lloc Web, les pàgines visionades, el temps que ha estat al Lloc Web i els llocs visitats just abans i després del mateix. No obstant això, cap galeta permet que aquesta mateixa pugui contactar amb el número de telèfon de l'Usuari o amb qualsevol altre mitjà de contacte personal. Cap galeta no pot extreure informació del disc dur de l'Usuari o robar informació personal. manera que la informació privada de l'Usuari formi part del fitxer Cookie és que l'usuari doni personalment aquesta informació al servidor.</p><p>Les galetes que permeten identificar una persona es consideren dades personals. comunicat, en base a una elecció autèntica, ofert mitjançant una decisió afirmativa i positiva, abans del tractament inicial, removible i documentat.</p>";
        cookie_btn_no.textContent = 'Denegar cookies';
        cookie_btn_yes.textContent = 'Acceptar cookies';

        document.body.appendChild(cookie_div);
        cookie_text_block.appendChild(cookie_title);
        cookie_text_block.appendChild(cookie_p);
        cookie_div.appendChild(cookie_text_block);
        cookie_div.appendChild(cookie_btn_no);
        cookie_div.appendChild(cookie_btn_yes);
    }
}

function cookieChange(name) {
    if (name == 'false') {
        console.log('cookies: false');
        document.getElementById('cookie_div').style.display = 'none';
        document.querySelector('body').style = 'pointer-events: auto; overflow: auto;';
    } else if (name == 'true') {
        localStorage.setItem('cookies', 'true');
        document.getElementById('cookie_div').style.display = 'none';
        document.querySelector('body').style = 'pointer-events: auto; overflow: auto;';
        checkCookies();
    }
}
