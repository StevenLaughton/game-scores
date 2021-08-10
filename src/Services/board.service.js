import { Gold, Silver } from "../Cards/money.cards";
import { BattleLosses, BattleWins } from "../Cards/military.cards";
import { GizaPhaseOne, GizaPhaseThree, GizaPhaseTwo } from "../Cards/wonders.cards";
import { Altar, Baths, Pawnshop, Theater } from "../Cards/civic.cards";
import { Apothecary, Scriptorium, Workshop } from "../Cards/science.cards";
import { Marketplace, Vineyard } from "../Cards/commerce.cards";
import { Brown, Grey, Red } from "../Cards/misc.cards";
import getGuildsMap from "../Cards/guild.cards";

const getBoard = () => {
    const boardMap = new Map();
    boardMap.set('military', {
        points: 0,
        cards: [
            {
                item: new BattleWins(),
                quantity: 0,
            },
            {
                item: new BattleLosses(),
                quantity: 0
            }
        ]
    })
    boardMap.set('money', {
        points: 0,
        cards: [
            {
                item: new Silver(),
                quantity: 0,
            },
            {
                item: new Gold(),
                quantity: 0,
            }
        ]
    });
    boardMap.set('wonders', {
        points: 0,
        cards: [
            {
                item: new GizaPhaseOne(),
                quantity: 0,
            },
            {
                item: new GizaPhaseTwo(),
                quantity: 0,
            },
            {
                item: new GizaPhaseThree(),
                quantity: 0,
            }
        ]
    });
    boardMap.set('civic', {
        points: 0,
        cards: [
            {
                item: new Pawnshop(),
                quantity: 0,
            },
            {
                item: new Baths(),
                quantity: 0,
            },
            {
                item: new Altar(),
                quantity: 0,
            },
            {
                item: new Theater(),
                quantity: 0,
            },

        ]
    },);
    boardMap.set('science', {
        points: 0,
        cards: [
            {
                item: new Scriptorium(),
                quantity: 0,
            },
            {
                item: new Workshop(),
                quantity: 0,
            },
            {
                item: new Apothecary(),
                quantity: 0,
            }
        ]
    },);
    boardMap.set('commerce', {
        points: 0,
        cards: [
            {
                item: new Vineyard(),
                quantity: 0,
            },
            {
                item: new Marketplace(),
                quantity: 0,
            },
        ]
    });
    getGuildsMap(boardMap)
    boardMap.set('misc', {
        points: 0,
        cards: [
            {
                item: new Brown(),
                quantity: 0,
            },
            {
                item: new Grey(),
                quantity: 0,
            },
            {
                item: new Red(),
                quantity: 0,
            },
        ]
    });

    return boardMap;
}

export const boardService = {
    get: () => getBoard()
}
