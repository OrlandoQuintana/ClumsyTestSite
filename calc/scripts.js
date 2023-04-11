async function fetchGhostStats() {
    const response = await fetch('https://protected-everglades-83276.herokuapp.com/api/ghosts');
    const data = await response.json();
    return data;
}

async function fetchSingleGhost(ghostID) {
    const response = await fetch(`https://protected-everglades-83276.herokuapp.com/api/ghosts/${ghostID}`);
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
        if (key !== 'id' && key !== 'rank_modifier') {
            const statValue = ghost[key];

            if (key === 'name' || key === 'rarity_rank' || key === 'speed' || key === 'stamina' || key === 'smarts' || key === 'luck' || key === 'farming_length') {
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
        const ghost = await fetchSingleGhost(ghostNumber);
        const svgText = await fetchSVG(ghost['id']);
        displayGhost(ghost, svgText);
    } else {
        alert('Please enter a valid ghost number (1-10000).');
    }
}

async function loadRandomGhost() {
    const randomGhostNumber = Math.floor(Math.random() * 10000) + 1;
    const ghost = await fetchSingleGhost(randomGhostNumber);
    const svgText = await fetchSVG(ghost['id']);
    displayGhost(ghost, svgText);
}


loadRandomGhost();
