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

let deck = deckOfCards.reduce((acc, cur) => {
        switch (cur.cardSuit) {
            case `clubs`:
                acc.clubs.push(cur);
                break;
            case `diamond`:
                acc.diamonds.push(cur);
                break;
            case `heart`:
                acc.hearts.push(cur);
                break;
            case `spade`:
                acc.spades.push(cur);
                break;
        }
        return acc;
    },
    {
        spades: [],

        diamonds: [],

        hearts: [],

        clubs: []
    })
console.log(deck);
