import { Card } from "../Models/card.model";
import { numberOfBrownCards, numberOfCards, numberOfGreyCards } from "../Helpers/card.helper";


export class Haven implements Card {
    name = 'Haven';

    action = (props) => {
        return numberOfBrownCards(props.players[props.index]);
    }
}

export class Lighthouse implements Card {
    name = 'Lighthouse';

    action = (props) => {
        return numberOfCards(props.players[props.index], 'commerce');
    }
}

export class ChamberOfCommerce implements Card {
    name = 'Chamber Of Commerce';

    action = (props) => {
        return (numberOfGreyCards(props.players[props.index]) * 2);
    }
}

export class Arena implements Card {
    name = 'Arena';

    action = (props) => {
        return numberOfCards(props.players[props.index], 'wonders');
    }
}

export class YellowOther implements Card {
    name = 'Other';

    action = () => {
        return 0;
    }
}

export default function getCommerceMap(board) {
    board.set('commerce', {
        points: 0,
        cards: [
            {
                item: new Haven(),
                quantity: 0,
            },
            {
                item: new Lighthouse(),
                quantity: 0,
            },
            {
                item: new ChamberOfCommerce(),
                quantity: 0,
            },
            {
                item: new Arena(),
                quantity: 0,
            },
            {
                item: new YellowOther(),
                quantity: 0,
            },
        ]
    },);
}
