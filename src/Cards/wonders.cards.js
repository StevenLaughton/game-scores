import { Card } from "../Models/card.model";

export class APhaseOne implements Card {
    constructor(wonder: wonders) {
        this.name = `${wonder} Phase One`
    }

    action() {
        return 3;
    };
}

export class APhaseTwo implements Card {
    constructor(wonder: wonders) {
        this.name = `${wonder} Phase Two`
    }

    action() {
        return 0;
    };
}

export class APhaseThree implements Card {
    constructor(wonder: wonders) {
        this.name = `${wonder} Phase Three`
    }

    action() {
        return 7;
    };
}

export default function getWonderMap(board, wonder) {
    board.set('wonders', {
        points: 0,
        cards: [
            {
                item: new APhaseOne(wonder),
                quantity: 0,
            },
            {
                item: new APhaseTwo(wonder),
                quantity: 0,
            },
            {
                item: new APhaseThree(wonder),
                quantity: 0,
            },
        ]
    });
    return board;
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
