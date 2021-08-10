import getMoneyMap from "../Cards/money.cards";
import getMilitaryMap from "../Cards/military.cards";
import getWonderMap, { wonders } from "../Cards/wonders.cards";
import getCivicMap from "../Cards/civic.cards";
import getScienceMap from "../Cards/science.cards";
import getCommerceMap from "../Cards/commerce.cards";
import getMiscMap from "../Cards/misc.cards";
import getGuildsMap from "../Cards/guild.cards";

const getBoard = () => {
    const boardMap = new Map();
    getWonderMap(boardMap, wonders.Rhodes)
    getMilitaryMap(boardMap)
    getMoneyMap(boardMap)
    getCivicMap(boardMap)
    getScienceMap(boardMap)
    getCommerceMap(boardMap)
    getGuildsMap(boardMap)
    getMiscMap(boardMap)

    return boardMap;
}

export const boardService = {
    get: () => getBoard()
}
