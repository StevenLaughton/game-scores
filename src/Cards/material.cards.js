import { Card } from "../Models/card.model";

const errorMessage = 'material cards do not play an action';

export class LumberYard implements Card {
    name = 'Lumber Yard'

    action = () => {
        throw new Error(errorMessage);
    }
}
