import { Card } from "../Models/card.model";

const errorMessage = 'misc cards do not play an action';

export class Brown implements Card {
    name = 'Raw Materials'

    action = () => {
        throw new Error(errorMessage);
    }
}

export class Grey implements Card {
    name = 'Manufactured Goods'

    action = () => {
        throw new Error(errorMessage);
    }
}

export class Red implements Card {
    name = 'Military Structures'

    action = () => {
        throw new Error(errorMessage);
    }
}

export default function getMiscMap(board) {
    board.set('misc', {
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
    },);
}
