import { Card } from "../Models/card.model";

export class Tablet implements Card {
    name = 'Scriptorium';

    action() {
        return 1;
    };
}

export class Cog implements Card {
    name = 'Workshop';

    action() {
        return 1;
    };
}

export class Compass implements Card {
    name = 'Apothecary';

    action() {
        return 1;
    };
}

export default function getScienceMap(board) {
    board.set('science', {
        points: 0,
        cards: [
            {
                item: new Tablet(),
                quantity: 0,
            },
            {
                item: new Cog(),
                quantity: 0,
            },
            {
                item: new Compass(),
                quantity: 0,
            }
        ]
    },);
}
