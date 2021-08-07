import { Card } from "../Models/card.model";
import { nextItem, prevItem } from "../Helpers/array.helper";

export class Marketplace implements Card {
    name = 'Marketplace';

    action() {
        return 0;
    };
}

export class Vineyard implements Card {
    name = 'Vineyard';

    action(props) {
        return (prevItem(props.players[props.index], props.index)?.board.get('material').cards.length ?? 0)
            + props.players[props.index].board.get('material').cards.length
            + (nextItem(props.players[props.index], props.index)?.board.get('material').cards.length ?? 0);

    }
}
