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


