import { Card } from "../Models/card.model";

export class Wonder implements Card {
    constructor(wonder: wonders, val: number) {
        this.name = `${wonder} Phase One`
        this.action = () => val;
    }
}

export function getWonder(board, wonder, side) {
    let points;
    const current = board?.get('wonders');
    const sideA = side ?? current?.sideA ?? true
    const option = wonder ?? current?.option ?? wonders.Rhodes;

    if (sideA) {
        points = wonder === wonders.Giza
            ? [3, 5, 7]
            : [3, 0, 7]
    } else {
        switch (option) {
            case wonders.Rhodes:
                points = [3, 4];
                break;
            case wonders.Alexandria:
                points = [0, 0, 7];
                break;
            case wonders.Ephesus:
                points = [2, 3, 5];
                break;
            case wonders.Babylon:
                points = [3, 0, 0];
                break;
            case wonders.Olympia:
                points = [0, 5, 0];
                break;
            case wonders.Halicarnassus:
                points = [2, 1, 0];
                break;
            case wonders.Giza:
                points = [3, 5, 5, 7];
                break;
            default:
                points = [0,0,0]
                break;
        }
    }

    return {
        points: 0,
        option: option,
        sideA: sideA,
        cards: points.map(val => ({item: new Wonder(wonder, val), quantity: 0}))
    };
}

export default function getWonderMap(board) {
    board.set('wonders', getWonder());
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
