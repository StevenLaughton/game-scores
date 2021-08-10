import { Card } from "../Models/card.model";

export class BattleWins implements Card {
    name = 'Battle Wins';

    action() {
        return 1;
    };
}

export class BattleLosses implements Card {
    name = 'Battle Losses';

    action() {
        return -1;
    };
}


export default function getMilitaryMap(board) {
    board.set('science', {
        points: 0,
        cards: [
            {
                item: new BattleWins(),
                quantity: 0,
            },
            {
                item: new BattleLosses(),
                quantity: 0,
            },
        ]
    },);
}
