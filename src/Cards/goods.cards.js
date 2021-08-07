import { Card } from "../Models/card.model";

const errorMessage = 'goods cards do not play an action';

export class Loom implements Card {
    name = 'Loom'

    action = () => {
        throw new Error(errorMessage);
    }
}

export class Glassworks implements Card {
    name = 'Glassworks'

    action = () => {
        throw new Error(errorMessage);
    }
}

export class Press implements Card {
    name = 'Press'

    action = () => {
        throw new Error(errorMessage);
    }
}
