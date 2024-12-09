function resetSearch() {
    document.getElementById('search_bar').value = '';
}

function menu(name) {
    if (name == 'open') {
        document.querySelector('aside').style.width = '400px';
        document.querySelector('aside').style.marginLeft = '0';
    } if (name == 'close') {
        document.querySelector('aside').style.width = '0';
        document.querySelector('aside').style.marginLeft = '-20%';
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
        window.location.replace('/shop/productes.html');
    }
})

function checkCookies() {
    if (localStorage.getItem('cookies') == 'true') {
        document.getElementById('cookie_div').style.display = 'none';
        document.style = 'pointer-events: auto;';
        console.log('Cookies validades!');
    } else {
        document.style = 'pointer-events: none;';

        cookie_div = document.createElement('article');
        cookie_text = document.createElement('div');
        cookie_p = document.createElement('p');
        cookie_btn_no = document.createElement('button');
        cookie_btn_yes = document.createElement('button');

        cookie_div.id = 'cookie_div';
        cookie_btn_no.id = 'cookie_btn_no';
        cookie_btn_yes.id = 'cookie_btn_yes';

        cookie_div.style = 'position: fixed; bottom: 0; left: 0; width: 100%; height: 40%; background: #fff; padding: 40px; box-shadow: 0 0 40px #111;';
        cookie_text.style = 'color: black; overflow-y: auto; height: calc(100% - 20px*2);';
        cookie_btn_no.style = 'background: none; margin-top: 20px; padding: 12px 16px; border: 1px solid red; margin-right: 16px; border-radius: 40px;';
        cookie_btn_yes.style = 'background: red; margin-top: 20px; padding: 14px 18px; border: none; border-radius: 40px; color: white;';

        cookie_text.innerHTML = '<h1>Política de Cookies</h1><hr>';
        cookie_p.textContent = 'El acceso a este Sitio Web puede implicar la utilización de cookies. Las cookies son pequeñas cantidades de información que se almacenan en el navegador utilizado por cada Usuario —en los distintos dispositivos que pueda utilizar para navegar— para que el servidor recuerde cierta información que posteriormente y únicamente el servidor que la implementó leerá. Las cookies facilitan la navegación, la hacen más amigable, y no dañan el dispositivo de navegación.\nLas cookies son procedimientos automáticos de recogida de información relativa a las preferencias determinadas por el Usuario durante su visita al Sitio Web con el fin de reconocerlo como Usuario, y personalizar su experiencia y el uso del Sitio Web, y pueden también, por ejemplo, ayudar a identificar y resolver errores.\nLa información recabada a través de las cookies puede incluir la fecha y hora de visitas al Sitio Web, las páginas visionadas, el tiempo que ha estado en el Sitio Web y los sitios visitados justo antes y después del mismo. Sin embargo, ninguna cookie permite que esta misma pueda contactarse con el número de teléfono del Usuario o con cualquier otro medio de contacto personal. Ninguna cookie puede extraer información del disco duro del Usuario o robar información personal. La única manera de que la información privada del Usuario forme parte del archivo Cookie es que el usuario dé personalmente esa información al servidor.\nLas cookies que permiten identificar a una persona se consideran datos personales. Por tanto, a las mismas les será de aplicación la Política de Privacidad anteriormente descrita. En este sentido, para la utilización de las mismas será necesario el consentimiento del Usuario. Este consentimiento será comunicado, en base a una elección auténtica, ofrecido mediante una decisión afirmativa y positiva, antes del tratamiento inicial, removible y documentado.';
        cookie_btn_no.textContent = 'Denegar cookies';
        cookie_btn_yes.textContent = 'Acceptar cookies';

        document.body.appendChild(cookie_div);
        cookie_text.appendChild(cookie_p);
        cookie_div.appendChild(cookie_text);
        cookie_div.appendChild(cookie_btn_no);
        cookie_div.appendChild(cookie_btn_yes);
    }
}

document.getElementById('cookie_btn_no').addEventListener('click', () => {
    console.log('cookies: false');
    localStorage.setItem('cookies', 'false');
})

document.getElementById('cookie_btn_yes').addEventListener('click', () => {
    console.log('cookies: true');
    localStorage.setItem('cookies', 'true');
})
