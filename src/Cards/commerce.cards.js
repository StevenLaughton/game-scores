import { Card } from "../Models/card.model";

export class Marketplace implements Card {
    name = 'Marketplace';

    action() {
        return 0;
    };
}

export class Vineyard implements Card {
    name = 'Vineyard';

    action() {
        return 0;
    }
}
