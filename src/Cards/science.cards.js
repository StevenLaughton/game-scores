import { Card } from "../Models/card.model";
import { scientificStructureTypes } from "../Models/scientific-structure-types.enum";

export class Scriptorium implements Card {
    name = 'Scriptorium';
    type = scientificStructureTypes.tablet;

    action() {
        return 1;
    };
}

export class Workshop implements Card {
    name = 'Workshop';
    type = scientificStructureTypes.cog;

    action() {
        return 1;
    };
}

export class Apothecary implements Card {
    name = 'Apothecary';
    type = scientificStructureTypes.compass;

    action() {
        return 1;
    };
}

