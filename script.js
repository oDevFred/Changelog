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

document.addEventListener('DOMContentLoaded', fetchChangelog);
