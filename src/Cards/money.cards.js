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

