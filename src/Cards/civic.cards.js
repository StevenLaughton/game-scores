import { Card } from "../Models/card.model";

export class TwoPoint implements Card {
    name = 'Two Victory Points';

    action() {
        return 2;
    }
}

export class ThreePoint implements Card {
    name = 'Three Victory Points';

    action() {
        return 3;
    }
}

export class FourPoint implements Card {
    name = 'Four Victory Points';

    action() {
        return 4;
    }
}

export class FivePoint implements Card {
    name = 'Five Victory Points';

    action() {
        return 5;
    }
}

export class SixPoint implements Card {
    name = 'Six Victory Points';

    action() {
        return 6;
    }
}

export class SevenPoint implements Card {
    name = 'Seven Victory Points';

    action() {
        return 7;
    }
}

export class EightPoint implements Card {
    name = 'Eight Victory Points';

    action() {
        return 8;
    }
}


export default function getCivicMap(board) {
    board.set('civic', {
        points: 0,
        cards: [
            {
                item: new TwoPoint(),
                quantity: 0,
            },
            {
                item: new ThreePoint(),
                quantity: 0,
            },
            {
                item: new FourPoint(),
                quantity: 0,
            },
            {
                item: new FivePoint(),
                quantity: 0,
            },
            {
                item: new SixPoint(),
                quantity: 0,
            },
            {
                item: new SevenPoint(),
                quantity: 0,
            },
            {
                item: new EightPoint(),
                quantity: 0,
            },
        ]
    })
}


