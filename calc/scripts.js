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


function prettifyKey(key) {
    const keyMap = {
        'name': 'Name',
        'rarity_rank': 'Rarity Rank',
        'stamina': 'Stamina',
        'smarts': 'Smarts',
        'luck': 'Luck',
        'speed': 'Speed',
        'farming_length': 'FC',
        'meadows_modifier': 'Meadows',
        'dunes_modifier': 'Dunes',
        'tundra_modifier': 'Tundra',
        'deadlands_modifier': 'Deadlands',
        'toxic_swamps_modifier': 'Toxic Swamps',
        'scorched_earth_modifier': 'Scorched Earth',
        'twilight_forest_modifier': 'Twilight Forest',
        'cyber_district_modifier': 'Cyber District',
        'alien_modifier': 'Alien'
        // Add more mappings here as needed
    };

    return keyMap[key] || key;
}

const keyImages = {
    'Stamina': 'stamina-icon.png',
    'Smarts': 'smarts-icon.png',
    'Luck': 'luck-icon.png',
    'Speed': 'speed-icon.png',
    'Meadows': 'meadows.png',
    'Dunes': 'dunes.png',
    'Tundra': 'tundra.png',
    'Deadlands': 'deadlands.png',
    'Toxic Swamps': 'toxic-swamps.png',
    'Scorched Earth': 'scorched-earth.png',
    'Twilight Forest': 'twilight-forest.png',
    'Cyber District': 'cyber-district.png',
    'Alien': 'alien.png',
};



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
            const prettyKey = prettifyKey(key);
            const statValue = ghost[key];
            const keyImage = keyImages[prettyKey];
            const imgHtml = keyImage ? `<img src="calc/keyImages/${keyImage}" alt="${prettyKey}">` : '';

            if (key === 'name' || key === 'rarity_rank' || key === 'speed' || key === 'stamina' || key === 'smarts' || key === 'luck' || key === 'farming_length') {
                statsLeftHTML += `<p><strong>${imgHtml}${prettyKey}:</strong><span>${statValue}</span></p>`;
            } else {
                statsRightHTML += `<p><strong>${imgHtml}${prettyKey}:</strong><span>${statValue}</span></p>`;
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
