const apiUrl = 'https://changelog-rt1h.onrender.com/api/changelog'; // ou '/api/changelog' se estiver na mesma origem

async function fetchChangelog() {
    try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error(`Erro ao buscar o changelog: ${response.status}`);
    }
    const data = await response.json();
    // Use innerHTML para renderizar o conteúdo HTML recebido
    document.getElementById('changelog').innerHTML = data.content;
    } catch (error) {
    document.getElementById('changelog').textContent = 'Erro ao carregar o changelog.';
    console.error(error);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await fetchChangelog();

    const changelogDivs = document.querySelectorAll('#changelog div');
    changelogDivs.forEach((div, index) => {
        // Remove divs vazias ou só com espaços/brancos
        if (!div.textContent.trim()) {
            div.remove();
            return; // Sai daqui pra não adicionar classe em divs que já foram removidas
        }

        div.classList.add('changelog-item');
        div.setAttribute('id', `changelog-item-${index}`);
    });

    const changelogList = document.querySelector('#changelog ol');
    if (changelogList) changelogList.classList.add('changelog-list');

    const item = document.getElementById('changelog-item-2');
    item.innerHTML = '<strong>DISCLAIMER PT-BR:</strong> As traduções estão sendo trabalhadas e serão entregues com a proxima atualização do modpack +3 new chapters';
});



