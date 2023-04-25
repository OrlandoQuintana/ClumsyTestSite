import React, { useState, useEffect } from 'react';

async function fetchSVG(ghostID) {
    const url = `ghostsvgs/cg${ghostID}.svg`;
    const obj = document.createElement('object');
    obj.data = url;
    obj.type = "image/svg+xml";
    obj.classList.add('ghost-svg');
    return obj;
}

const GhostSVG = ({ ghostID }) => {
    const [svg, setSvg] = useState(null);

    useEffect(() => {
        async function loadSvg() {
            const svgElement = await fetchSVG(ghostID);
            setSvg(svgElement.outerHTML);
        }

        if (ghostID) {
            loadSvg();
        }
    }, [ghostID]);

    return (
        <div className="ghost-svg-container" dangerouslySetInnerHTML={{ __html: svg }} />
    );
};

export default GhostSVG;
