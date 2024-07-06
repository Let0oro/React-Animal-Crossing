
//* CARD FUNCTIONS

export const expandCard = ( event ) => {
    const card      = event.composedPath()[ event.composedPath().length - 9 ];
    const infoExp   = card.childNodes[3];
    const fishImage = card.lastChild;

    const cardW  = card.getBoundingClientRect().width;
    const cardH  = card.getBoundingClientRect().height;

    if (cardH === 400) {
    card.style.height         = '250px';
    fishImage.style.translate = `${cardW/2 - 32}px 218px`;
    infoExp.style.visibility  = 'hidden';
    infoExp.style.position    = 'absolute';
    } else {
    card.style.height         = '400px';
    fishImage.style.translate = `${cardW/2 - 32}px 368px`;
    infoExp.style.visibility  = 'visible';
    infoExp.style.position    = 'relative';
    }
};

//* SORT FUNTIONS

// export const searchFilter = f => f.name['name-USen'].includes( searchPanel === null ? '' : searchPanel.value.toLowerCase() );
