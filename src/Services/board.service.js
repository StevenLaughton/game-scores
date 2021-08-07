import { Gold, Silver } from "../Cards/money.cards";
import { BattleLosses, BattleWins } from "../Cards/military.cards";
import { GizaPhaseOne, GizaPhaseThree, GizaPhaseTwo } from "../Cards/wonders.cards";
import { Pawnshop } from "../Cards/civic.cards";
import { Apothecary, Scriptorium, Workshop } from "../Cards/science.cards";
import { Vineyard } from "../Cards/commerce.cards";
import { LumberYard } from "../Cards/material.cards";

const getBoard = () => {
    const boardMap = new Map();
    boardMap.set('military', {
        points: 0,
        cards: [
            {
                item: new BattleWins(),
                quantity: 1,
            },
            {
                item: new BattleLosses(),
                quantity: 1,
            }
        ]
    })
    boardMap.set('money', {
        points: 0,
        cards: [
            {
                item: new Silver(),
                quantity: 1,
            },
            {
                item: new Gold(),
                quantity: 1,
            }
        ]
    });
    boardMap.set('wonders', {
        points: 0,
        cards: [
            {
                item: new GizaPhaseOne(),
                quantity: 1,
            },
            {
                item: new GizaPhaseTwo(),
                quantity: 1,
            },
            {
                item: new GizaPhaseThree(),
                quantity: 1,
            }
        ]
    });
    boardMap.set('civic', {
        points: 0,
        cards: [
            {
                item: new Pawnshop(),
                quantity: 1,
            }
        ]
    },);
    boardMap.set('science', {
        points: 0,
        cards: [
            {
                item: new Scriptorium(),
                quantity: 3,
            },
            {
                item: new Workshop(),
                quantity: 2,
            },
            {
                item: new Apothecary(),
                quantity: 1,
            }
        ]
    },);
    boardMap.set('commerce', {
        points: 0,
        cards: [
            {
                item: new Vineyard(),
                quantity: 1,
            }
        ]
    });
    boardMap.set('material', {
        points: 0,
        cards: [
            {
                item: new LumberYard(),
                quantity: 1,
            }
        ]
    });

    return boardMap;
}

export const boardService = {
    get: () => getBoard()
}
