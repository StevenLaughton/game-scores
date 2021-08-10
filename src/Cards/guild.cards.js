import { Card } from "../Models/card.model";
import { nextItem, prevItem } from "../Helpers/array.helper";
import {
    numberOfBattleLosses,
    numberOfBrownCards,
    numberOfCards,
    numberOfGreyCards,
    numberOfRedCards
} from "../Helpers/card.helper";

export class WorkersGuild extends Card {
    name = 'Workers Guild'

    action = (props) => {
        return numberOfBrownCards(prevItem(props.players, props.index))
            + numberOfBrownCards(nextItem(props.players, props.index));
    }
}

export class CraftsmensGuild extends Card {
    name = 'Craftsmens Guild'

    action = (props) => {
        return (numberOfGreyCards(prevItem(props.players, props.index)) * 2)
            + (numberOfGreyCards(nextItem(props.players, props.index)) * 2);
    }
}

export class TradersGuild extends Card {
    name = 'Traders Guild'

    action = (props) => {
        return numberOfCards(prevItem(props.players, props.index), 'commerce')
            + numberOfCards(nextItem(props.players, props.index), 'commerce');
    }
}

export class PhilosophersGuild extends Card {
    name = 'Philosophers Guild'

    action = (props) => {
        return numberOfCards(prevItem(props.players, props.index), 'science')
            + numberOfCards(nextItem(props.players, props.index), 'science');
    }
}

export class SpiesGuild extends Card {
    name = 'Spies Guild'

    action = (props) => {
        return numberOfRedCards(prevItem(props.players, props.index))
            + numberOfRedCards(nextItem(props.players, props.index));
    }
}

export class StrategistsGuild extends Card {
    name = 'Strategists Guild'

    action = (props) => {
        return numberOfBattleLosses(prevItem(props.players, props.index))
            + numberOfBattleLosses(nextItem(props.players, props.index));
    }
}

export class ShipownersGuild extends Card {
    name = 'Shipowners Guild'

    action = (props) => {
        return numberOfBrownCards(props.players[props.index])
            + numberOfGreyCards(props.players[props.index])
            + numberOfCards(props.players[props.index], 'guild');
    }
}

export class MagistratesGuild extends Card {
    name = 'Magistrates Guild'

    action = (props) => {
        return numberOfCards(prevItem(props.players, props.index), 'civic')
            + numberOfCards(nextItem(props.players, props.index), 'civic');
    }
}

export class BuildersGuild extends Card {
    name = 'Builders Guild'

    action = (props) => {
        return numberOfCards(prevItem(props.players, props.index), 'wonders')
            + numberOfCards(props.players[props.index], 'wonders')
            + numberOfCards(nextItem(props.players, props.index), 'wonders');
    }
}

export default function getGuildsMap(board) {
    board.set('guild', {
        points: 0,
        cards: [
            {
                item: new WorkersGuild(),
                quantity: 0,
            },
            {
                item: new CraftsmensGuild(),
                quantity: 0,
            },
            {
                item: new TradersGuild(),
                quantity: 0,
            },
            {
                item: new PhilosophersGuild(),
                quantity: 0,
            },
            {
                item: new SpiesGuild(),
                quantity: 0,
            },
            {
                item: new StrategistsGuild(),
                quantity: 0,
            },
            {
                item: new ShipownersGuild(),
                quantity: 0,
            },
            {
                item: new MagistratesGuild(),
                quantity: 0,
            },
            {
                item: new BuildersGuild(),
                quantity: 0,
            },
        ]
    });
}
