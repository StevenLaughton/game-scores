import getMoneyMap from "../Cards/money.cards";
import getMilitaryMap from "../Cards/military.cards";
import { GizaPhaseOne, GizaPhaseThree, GizaPhaseTwo } from "../Cards/wonders.cards";
import getCivicMap from "../Cards/civic.cards";
import getScienceMap from "../Cards/science.cards";
import getCommerceMap from "../Cards/commerce.cards";
import { Brown, Grey, Red } from "../Cards/misc.cards";
import getGuildsMap from "../Cards/guild.cards";

const getBoard = () => {
    const boardMap = new Map();
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
    getMilitaryMap(boardMap)
    getMoneyMap(boardMap)

    getCivicMap(boardMap)
    getScienceMap(boardMap)
    getCommerceMap(boardMap)
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
