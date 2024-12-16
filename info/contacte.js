document.getElementById('privacitat').addEventListener('change', (e) => {
    if (e.target.checked) {
        document.getElementById('submit').style.pointerEvents = 'auto';
    } else {
        document.getElementById('submit').style.pointerEvents = 'none';
    }
})
