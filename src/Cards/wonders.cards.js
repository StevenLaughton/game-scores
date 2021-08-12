import { Card } from "../Models/card.model";

export class Wonder implements Card {
    constructor(wonder: wonders, val: number) {
        this.name = `${wonder} Phase One`
        this.action = () => val;
    }
}


export function getWonder(board, wonder) {

    let points;

    points = wonder === wonders.Giza
        ? [3, 5, 7]
        : [3, 0, 7]

    return {
        points: 0,
        option: wonder ?? wonders.Rhodes,
        cards: points.map(val => ({item: new Wonder(wonder, val), quantity: 0}))
    };
}

export default function getWonderMap(board, wonder) {
    board.set('wonders', getWonder(board, wonder));
}

export const wonders = {
    Rhodes: 'Rhodes',
    Alexandria: 'Alexandria',
    Ephesus: 'Ephesus',
    Babylon: 'Babylon',
    Olympia: 'Olympia',
    Halicarnassus: 'Halicarnassus',
    Giza: 'Giza',
}


export const wondersSelect = () => {
    return Object.entries(wonders).map(wonder => ({value: wonder[0], label: wonder[1]}));
}
