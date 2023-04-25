import React, { useState, useEffect } from 'react';
import GhostMetadata from './GhostMetadata';

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


function DisplayGhost({ ghost, svg }) {
    const [statsLeft, setStatsLeft] = useState([]);
    const [statsRight, setStatsRight] = useState([]);

    useEffect(() => {
        if (!ghost) return;

        const statsLeftData = [];
        const statsRightData = [];

        const total =
            ghost['stamina'] + ghost['smarts'] + ghost['luck'] + ghost['speed'];

        for (const key in ghost) {
            if (key !== 'id' && key !== 'rank_modifier') {
                const prettyKey = prettifyKey(key);
                const statValue = ghost[key];
                const keyImage = keyImages[prettyKey];

                const statItem = (
                    <p key={key}>
                        <strong>
                            {keyImage && (
                                <img src={`/calc/keyImages/${keyImage}`} alt={prettyKey} />
                            )}
                            {prettyKey}:
                        </strong>
                        <span>{statValue}</span>
                    </p>
                );

                if (
                    key === 'name' ||
                    key === 'rarity_rank' ||
                    key === 'speed' ||
                    key === 'stamina' ||
                    key === 'smarts' ||
                    key === 'luck' ||
                    key === 'farming_length'
                ) {
                    statsLeftData.push(statItem);
                    if (key === 'speed') {
                        statsLeftData.push(
                            <p key="total">
                                <strong>Total:</strong>
                                <span>{total}</span>
                            </p>
                        );
                    }
                } else {
                    statsRightData.push(statItem);
                }
            }
        }

        setStatsLeft(statsLeftData);
        setStatsRight(statsRightData);
    }, [ghost]);

    return (
        <div>
            <div id="ghost-svg-container">{svg && <img src={svg} alt="Ghost" />}</div>
            <div id="stats-left">{statsLeft}</div>
            <div id="stats-right">{statsRight}</div>
            <GhostMetadata ghost={ghost} />
        </div>
    );
}

export default DisplayGhost;
