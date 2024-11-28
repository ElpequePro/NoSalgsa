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

search = document.getElementById('search_bar');

function btnSearch() {
    div = document.getElementById('search_div');
    div.classList.toggle('active');
    if (div.classList.contains('active')) {
        search.focus();
    }
}

search.addEventListener('keyup', () => {
    localStorage.setItem('query', 'search');
})

search.addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
        localStorage.setItem('load', 'true');
        setTimeout(window.location.replace('/shop/productes.html'), 2000);
    }
})