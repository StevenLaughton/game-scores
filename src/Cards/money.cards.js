import { Card } from "../Models/card.model";

export class Silver implements Card {
    name = 'Silver';

    action() {
        return 1;
    };
}

export class Gold implements Card {
    name = 'Gold';

    action() {
        return 3;
    };
}

export default function getMoneyMap(board) {
    board.set('science', {
        points: 0,
        cards: [
            {
                item: new Silver(),
                quantity: 0,
            },
            {
                item: new Gold(),
                quantity: 0,
            },
        ]
    },);
}
