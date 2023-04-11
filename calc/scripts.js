async function fetchGhostStats() {
    const response = await fetch('https://protected-everglades-83276.herokuapp.com/api/ghosts');
    const data = await response.json();
    return data;
}



async function fetchSVG(ghostID) {
    const url = `ghostsvgs/cg${ghostID}.svg`;
    const obj = document.createElement('object');
    obj.data = url;
    obj.type = "image/svg+xml";
    obj.classList.add('ghost-svg');
    return obj;
}

function displayGhost(ghost, svg) {
    const ghostContainer = document.getElementById('ghost-container');
    const statsLeft = document.getElementById('stats-left');
    const statsRight = document.getElementById('stats-right');

    ghostContainer.innerHTML = '';
    ghostContainer.appendChild(svg);

    let statsLeftHTML = '';
    let statsRightHTML = '';

    for (const key in ghost) {
        if (key !== 'Ghost ID' && key !== 'Rank Modifier') {
            const statValue = ghost[key];

            if (key === 'Ghost Name' || key === 'Rarity Rank' || key === 'Speed' || key === 'Stamina' || key === 'Smarts' || key === 'Luck' || key === 'Farming Length') {
                statsLeftHTML += `<p><strong>${key}:</strong><span>${statValue}</span></p>`;
            } else {
                statsRightHTML += `<p><strong>${key}:</strong><span>${statValue}</span></p>`;
            }
        }
    }

    statsLeft.innerHTML = statsLeftHTML;
    statsRight.innerHTML = statsRightHTML;
}

async function onSearchButtonClick() {
    const searchInput = document.getElementById('search-input');
    const ghostNumber = searchInput.value;

    if (ghostNumber >= 1 && ghostNumber <= 10000) {
        const ghostStats = await fetchGhostStats();
        const ghost = ghostStats[ghostNumber - 1];
        const svgText = await fetchSVG(ghost['Ghost ID']);
        displayGhost(ghost, svgText);
    } else {
        alert('Please enter a valid ghost number (1-10000).');
    }
}

async function loadRandomGhost() {
    const randomGhostNumber = Math.floor(Math.random() * 10000) + 1;
    const ghostStats = await fetchGhostStats();
    const ghost = ghostStats[randomGhostNumber - 1];
    const svgText = await fetchSVG(ghost['Ghost ID']);
    displayGhost(ghost, svgText);
}

loadRandomGhost();
