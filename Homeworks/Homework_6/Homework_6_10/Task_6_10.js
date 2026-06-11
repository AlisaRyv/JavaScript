let deckOfCards=[];
function addingCartsToArray(suit)
{
    for (let i=6; i<11; i++)
    {
        var card=
            {
                cardSuit:suit,
                value:i
            }
            deckOfCards.push(card);
    }
    deckOfCards.push({cardSuit:suit,value:`ace`});
    deckOfCards.push({cardSuit:suit,value:`jack`});
    deckOfCards.push({cardSuit:suit,value:`queen`});
    deckOfCards.push({cardSuit:suit,value:`king`});
}
addingCartsToArray(`spade`);
addingCartsToArray(`diamond`);
addingCartsToArray(`heart`);
addingCartsToArray(`clubs`);
console.log(deckOfCards);

let aceOfSpades=deckOfCards
    .filter(card=>card.cardSuit.includes(`spade`))
    .find(card=>card.value===`ace`);
console.log(aceOfSpades);

let allSix=deckOfCards.filter(card=>card.value===6);
console.log(allSix);

let allRedCards=deckOfCards.filter(card=>(card.cardSuit===`diamond`||card.cardSuit===`heart`));
console.log(allRedCards);

let allDiamonds=deckOfCards.filter(card=>card.cardSuit===`diamond`);
console.log(allDiamonds);

let clubs=deckOfCards
    .filter(card=>(card.cardSuit===`clubs`))
    .splice(3,8);
console.log(clubs);
