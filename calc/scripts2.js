async function fetchGhostStats() {
    const response = await fetch('ghoststats.json');
    const data = await response.json();
    return data;
}

function displayGhost(ghost) {
    const ghostContainer = document.getElementById('ghost-container');
    const statsContainer = document.getElementById('stats-container');

    const img = document.createElement('img');
    img.src = `cgwidePNGs/${ghost['Ghost ID']}.png`;
    img.alt = ghost['Ghost Name'];

    ghostContainer.innerHTML = '';
    ghostContainer.appendChild(img);

    let statsHTML = '';
    for (const key in ghost) {
        if (key !== 'Ghost ID') {
            statsHTML += `<p><strong>${key}:</strong> ${ghost[key]}</p>`;
        }
    }

    statsContainer.innerHTML = statsHTML;
}

async function onSearchButtonClick() {
    const searchInput = document.getElementById('search-input');
    const ghostNumber = searchInput.value;

    if (ghostNumber >= 1 && ghostNumber <= 10000) {
        const ghostStats = await fetchGhostStats();
        const ghost = ghostStats[ghostNumber - 1];
        displayGhost(ghost);
    } else {
        alert('Please enter a valid ghost number (1-10000).');
    }
}