import { Card } from "../Models/card.model";

export class Pawnshop implements Card {
    name = 'Pawnshop';

    action() {
        return 3;
    }
}

export class Baths implements Card {
    name = 'Baths';

    action() {
        return 3;
    }
}

export class Altar implements Card {
    name = 'Altar';

    action() {
        return 2;
    }
}

export class Theater implements Card {
    name = 'Theater';

    action() {
        return 2;
    }
}


// const civicCards = {
//     Pawnshop,
//     Baths,
//     Altar,
//     Theater
// };


