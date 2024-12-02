nov = document.getElementById('novetats_block');
coll = document.getElementById('colleccions_block');
desc = document.getElementById('descomptes_block');
subs = document.getElementById('subscripcions_block');

function categories(name) {
    if (name == 'novetats') {
        nov.style.display = 'flex';
        coll.style.display = 'none';
        desc.style.display = 'none';
        subs.style.display = 'none';
        document.getElementById('novetats').classList.add('active');
        document.getElementById('colleccions').classList.remove('active');
        document.getElementById('descomptes').classList.remove('active');
        document.getElementById('subscripcions').classList.remove('active');
    } else if (name == 'colleccions') {
        nov.style.display = 'none';
        coll.style.display = 'flex';
        desc.style.display = 'none';
        subs.style.display = 'none';
        document.getElementById('novetats').classList.remove('active');
        document.getElementById('colleccions').classList.add('active');
        document.getElementById('descomptes').classList.remove('active');
        document.getElementById('subscripcions').classList.remove('active');
    } else if (name == 'descomptes') {
        nov.style.display = 'none';
        coll.style.display = 'none';
        desc.style.display = 'flex';
        subs.style.display = 'none';
        document.getElementById('novetats').classList.remove('active');
        document.getElementById('colleccions').classList.remove('active');
        document.getElementById('descomptes').classList.add('active');
        document.getElementById('subscripcions').classList.remove('active');
    } else if (name == 'subscripcions') {
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
