import React, { useEffect, useState } from 'react';

// Import fetchTraitStatsDataByName, prettifyMetadataKey, metadataKeys, and validNames here
// ...

async function fetchTraitStatsDataByName(name) {
    const response = await fetch(`https://protected-everglades-83276.herokuapp.com/api/trait-stats/name/${name}`);
    const data = await response.json();
    return data;
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
    };

    return keyMap[key] || key;
}

const metadataKeys = [
    'backdrop', 'background', 'backpack', 'blastoff', 'body',
    'eyes', 'face', 'glasses', 'hands', 'hat',
    'hideme', 'outfit', 'special', 'varatts'
];

const validNames = [
    'ADA bag', 'Planet', 'Cake', 'Frustrated emote', 'Dot emote', 'Heart emote', 'Skull emote', 'Pixie', 'Star expression', 'Stars', 'RGB', 'Spoopy wings', 'Dark wings', 'Angelic wings', 'Jetpack', 'Longsword', 'Pickaxe', 'Elf ears', 'Angel wings', 'Devil tail', 'Battle axe', 'Tiny wings', 'Fluffy wings', 'Butterfly wings', 'Scythe', 'Fairy wings', 'Bat wings', 'Demon wings', 'Bored', 'Bee', 'Rekt', 'Sleepy', 'Tired', 'Evil', 'Normal', 'Happy', 'Not looking', 'Squint', 'Lashy', 'Awake', 'Cute', 'Angry', 'Zombie', 'Winkyface', 'Happy squint', 'Blank', 'Content', 'Shut', 'Triumph', 'Calm', 'Baby', 'Creepy', 'Droid', 'Pinpoint', 'Woozy', 'Love', 'Cyclops', 'Lightning bolt tattoo', 'Shield', 'Gas mask', 'ADA necklace', 'Eye scar', 'Bubble gum', 'Bullet holes', 'Gas mask graffiti', 'ADA tattoo', 'Side pistol', 'Clown blush', 'Long shield', 'Tears', 'Sweat', 'Party blower', 'Shield sunglasses', 'AR goggles', 'Eye patch', 'Stylish glasses', 'Monocle', 'Nerdy glasses', 'Reading glasses', 'Sunglasses', 'Ghost pods', 'Hot glasses', 'Heart glasses', 'Medical eye patch', 'Snorkel', 'Monk blindfold', 'Gamepad', 'Ghost on string', 'Rifle', 'Shotgun', 'Barbell', 'Guitar', 'Hockey stick', 'Knife', 'Shuriken', 'Scimitar', 'Moon wand', 'Pencil', 'Tennis racket', 'Wrench', 'Shovel', 'Broomstick', 'Hammer', 'Crowbar', 'Fishing rod', 'Magic wand', 'Piercing', 'Black pirate snapback', 'Star antennas', 'Deadpxlz hat', 'Rubber ducky', 'White ADA snapback', 'Pigtails', 'Halo', 'Cute cap', 'Chef hat', 'Crown', 'Mohawk', 'Frog friend', 'Super hair', 'Bomb', 'Bat friend', 'Monkey friend', 'Octopus friend', 'Cherry on top', 'Party hat', 'Crabby friend', 'Cat friend', 'Witch hat', 'Devil horns', 'Bird friend', 'Tennis ball', 'Static', 'Cowboy hat', 'Fast food hat', "Nurse's cap", 'Sailor hat', 'ADA hat', 'Rasta dreads', 'Toque', 'Rabbit ears', 'Frankenhair', 'Santa hat', 'Mushroom hat', 'Top hat', 'Princess wizard', 'Cowgirl hat', 'Cardano logo', 'Parrot friend', 'Headphones', 'Cat ears', 'Space helmet', 'Hot head', 'Shooting star', 'Pirate hat', 'Sombrero', 'Unicorn hat', 'Plaid hat', 'Headset', 'Army helmet', 'Circlet', 'Bunny ears', 'Explorer', 'Cyborg', 'Heart antenna', 'Rainbow', 'Axe', 'Reaper hoodie', 'Viking helmet', 'Skull t-shirt', 'Mummy', 'Shirt and tie', 'Tux shirt and tie', 'Bandaid', 'Lifeguard t-shirt', 'Aikido gi', 'Overalls', 'T-shirt', 'Bandaid confetti cute', 'Bandaid confetti skull', 'Spoopy skeleton', 'Stache', 'Zombie', 'Ninjutsu gi', 'Jester', 'Spliff', 'Medical mask', 'Floaty flamingo', 'Bloody', 'Robot', 'Vampire suit', "Nurse's pack", 'Bat mask'];


const GhostMetadata = ({ ghost }) => {
    const [metadata, setMetadata] = useState(null);

    useEffect(() => {
        async function fetchMetadata() {
            if (!ghost) return;

            const currentGhostId = ghost.id;
            const response = await fetch(
                `https://protected-everglades-83276.herokuapp.com/api/ghost-metadata/${currentGhostId}`
            );

            if (!response.ok) {
                throw new Error('Failed to fetch ghost metadata');
            }

            const ghostMetadata = await response.json();
            const transformedMetadata = {};

            for (const key of metadataKeys) {
                const metadataValue = key === 'varatts' ? (ghostMetadata[key] + 3) : ghostMetadata[key] || 'N/A';
                const prettyKey = prettifyMetadataKey(key);

                if (metadataValue !== 'N/A' && validNames.includes(metadataValue)) {
                    const traitStatData = await fetchTraitStatsDataByName(metadataValue);

                    transformedMetadata[key] = {
                        prettyKey,
                        metadataValue,
                        count: traitStatData[0].count,
                        stat: traitStatData[0].stat,
                        biome: traitStatData[0].biome,
                        biome_modifier: traitStatData[0].biome_modifier,
                        percentage: traitStatData[0].percentage,
                    };
                } else {
                    transformedMetadata[key] = {
                        prettyKey,
                        metadataValue,
                    };
                }
            }

            setMetadata(transformedMetadata);
        }

        fetchMetadata();
    }, [ghost]);

    if (!metadata) {
        return <div>Loading metadata...</div>;
    }

    const renderMetadataSection = (keys) => {
        return keys.map((key) => {
            const item = metadata[key];
            if (!item) return null;

            if (item.count) {
                return (
                    <div key={key} className="metadata-item">
                        <div className="metadata-text" onClick={(e) => toggleAccordion(e)}>
                            <p>
                                <strong>&#x25BC; {item.prettyKey}:</strong>
                                <span>{item.metadataValue}</span>
                            </p>
                        </div>
                        <div className="extra-stats" style={{ display: 'none' }}>
                            <p>
                                &nbsp;&nbsp;Rarity: {item.percentage}
                                <br />
                                <br />
                                &nbsp;&nbsp;Stat: {item.stat}
                                <br />
                                &nbsp;&nbsp;Boost: +{item.count}
                                <br />
                                &nbsp;&nbsp;Biome: {item.biome}
                                <br />
                                &nbsp;&nbsp;Modifier: +{item.biome_modifier}
                            </p>
                        </div>
                    </div>
                );
            } else {
                return (
                    <p key={key}>
                        <strong>&nbsp;&nbsp;{item.prettyKey}:</strong>
                        <span>{item.metadataValue}</span>
                    </p>
                );
            }
        });
    };

    const toggleAccordion = (element) => {
        const extraStats = element.nextElementSibling;
        extraStats.style.display = extraStats.style.display === 'none' ? 'block' : 'none';
    };

    return (
        <div>
            <div id="metadata-left">{renderMetadataSection(metadataKeys.slice(0, 5))}</div>
            <div id="metadata-center">{renderMetadataSection(metadataKeys.slice(5, 10))}</div>
            <div id="metadata-right">{renderMetadataSection(metadataKeys.slice(10))}</div>
        </div>
    );
};

export default GhostMetadata;

