
fetch('data/ogloszenia.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('ogloszenia-list');
        data.ogloszenia.forEach(item => {
            const div = document.createElement('div');
            div.className = 'ogloszenie';
            div.innerHTML = `<h3>${item.tytul}</h3><p>${item.tresc}</p>`;
            container.appendChild(div);
        });
    });
