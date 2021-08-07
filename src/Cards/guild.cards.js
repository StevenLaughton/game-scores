import { Card } from "../Models/card.model";
import { nextItem, prevItem } from "../Helpers/array.helper";

export class WorkersGuild extends Card {
    name = 'Workers Guild'

    action = (props) => {
        return (prevItem(props.players[props.index], props.index)?.board.get('material').cards.length ?? 0)
            + (nextItem(props.players[props.index], props.index)?.board.get('material').cards.length ?? 0);
    }
}
