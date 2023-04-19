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

function prettifyMetadataKey(key) {
    const keyMap = {
        'backdrop': 'Backdrop',
        'background': 'Background',
        'backpack': 'Backpack',
        'blastoff': 'Blastoff',
        'body': 'Body',
        'eyes': 'Eyes',
        'face': 'Face',
        'glasses': 'Glasses',
        'hands': 'Hands',
        'hat': 'Hat',
        'hideme': 'Hideme',
        'outfit': 'Outfit',
        'special': 'Special',
        'varatts': 'Attributes'
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
    const ghostSvgContainer = document.getElementById('ghost-svg-container');
    const statsLeft = document.getElementById('stats-left');
    const statsRight = document.getElementById('stats-right');

    ghostSvgContainer.innerHTML = '';
    ghostSvgContainer.appendChild(svg);

    let statsLeftHTML = '';
    let statsRightHTML = '';

    let total = ghost['stamina'] + ghost['smarts'] + ghost['luck'] + ghost['speed'];

    for (const key in ghost) {
        if (key !== 'id' && key !== 'rank_modifier') {
            const prettyKey = prettifyKey(key);
            const statValue = ghost[key];
            const keyImage = keyImages[prettyKey];
            const imgHtml = keyImage ? `<img src="/calc/keyImages/${keyImage}">` : '';

            if (key === 'name' || key === 'rarity_rank' || key === 'speed' || key === 'stamina' || key === 'smarts' || key === 'luck' || key === 'farming_length') {
                statsLeftHTML += `<p><strong>${imgHtml}${prettyKey}:</strong><span>${statValue}</span></p>`;
                if (key === 'speed') {
                    statsLeftHTML += `<p><strong>Total:</strong><span>${total}</span></p>`;
                }
            } else {
                statsRightHTML += `<p><strong>${imgHtml}${prettyKey}:</strong><span>${statValue}</span></p>`;
            }
        }
    }

    statsLeft.innerHTML = statsLeftHTML;
    statsRight.innerHTML = statsRightHTML;

    loadedGhostID = ghost['id'];
    displayMetadata(ghost);
}

async function fetchGhostMetadata(ghostId) {
    try {
        const response = await fetch(`https://protected-everglades-83276.herokuapp.com/api/ghost-metadata/${ghostId}`);

        if (!response.ok) {
            throw new Error('Failed to fetch ghost metadata');
        }

        const ghostMetadata = await response.json();
        console.log('Ghost metadata:', ghostMetadata); // Debugging line
        return ghostMetadata;
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while fetching the ghost metadata');
    }
}

async function fetchTraitStatsDataByName(name) {
    const response = await fetch(`https://protected-everglades-83276.herokuapp.com/api/trait-stats/name/${name}`);
    const data = await response.json();
    return data;
}

async function displayMetadata(ghost) {
    const currentGhostId = ghost.id;
    const ghostMetadata = await fetchGhostMetadata(currentGhostId);

    if (ghostMetadata) {
        const metadataLeft = document.getElementById('metadata-left');
        const metadataCenter = document.getElementById('metadata-center');
        const metadataRight = document.getElementById('metadata-right');

        const metadataKeys = [
            'backdrop', 'background', 'backpack', 'blastoff', 'body',
            'eyes', 'face', 'glasses', 'hands', 'hat',
            'hideme', 'outfit', 'special', 'varatts'
        ];

        let metadataLeftHTML = '';
        let metadataCenterHTML = '';
        let metadataRightHTML = '';

        for (const key of metadataKeys) {
            const metadataValue = key === 'varatts' ? (ghostMetadata[key] + 3) : ghostMetadata[key] || 'N/A';
            const prettyKey = prettifyMetadataKey(key);
            const traitStatData = await fetchTraitStatsDataByName(prettyKey);

            // Use traitStatData to extract count, stat, biome, and biome_modifier values
            const count = traitStatData.count;
            const stat = traitStatData.stat;
            const biome = traitStatData.biome;
            const biome_modifier = traitStatData.biome_modifier;

            const metadataHTML = `<p><strong>${prettyKey}:</strong><span>${metadataValue}</span></p>
                                  <p>Count: ${count}, Stat: ${stat}, Biome: ${biome}, Biome Modifier: ${biome_modifier}</p>`;

            if (metadataKeys.indexOf(key) < 5) {
                metadataLeftHTML += metadataHTML;
            } else if (metadataKeys.indexOf(key) < 10) {
                metadataCenterHTML += metadataHTML;
            } else {
                metadataRightHTML += metadataHTML;
            }
        }

        metadataLeft.innerHTML = metadataLeftHTML;
        metadataCenter.innerHTML = metadataCenterHTML;
        metadataRight.innerHTML = metadataRightHTML;
    }
}



async function openHTML() {
    const currentGhostId = loadedGhostID; /* Ghost ID of the currently displayed ghost */
    const ghostMetadata = await fetchGhostMetadata(currentGhostId);

    if (ghostMetadata) {
        const htmlUrl = ghostMetadata.html;
        console.log('HTML URL:', htmlUrl); // Debugging line
        if (htmlUrl) {
            window.open(htmlUrl, '_blank');
        } else {
            alert('No HTML data available for this ghost');
        }
    }
}



function openSVG() {
    if (loadedGhostID !== null) {
        window.open(`/calc/ghostsvgs/cg${loadedGhostID}.svg`, '_blank');
    }
}

function openSquarePNG() {
    if (loadedGhostID !== null) {
        window.open(`/images/png/cg${loadedGhostID}-512.png`, '_blank');
    }
}

function openWidePNG() {
    if (loadedGhostID !== null) {
        window.open(`/images/png/cg${loadedGhostID}-wide.png`, '_blank');
    }
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

