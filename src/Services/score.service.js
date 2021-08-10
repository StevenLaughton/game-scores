import Player from "../Models/player.model";
import { CardWithQuantity } from "../Models/card-with-quantity.model";
import { sum } from "../Helpers/array.helper";

const calculateScore = (props: Player[]) => {
    const players = props;

    players.forEach((player, index) => {
        player.board && player.board.forEach((boardItem, key) => {
            let points = 0;
            switch (key) {
                case 'military':
                case 'civic':
                    points = sumOfCardActionTimesQuantity(boardItem.cards);
                    break;
                case 'money':
                    points = Math.floor(sumOfCardActionTimesQuantity(boardItem.cards) / 3);
                    break;
                case 'science':
                    points = calculateScientificStructures(boardItem.cards);
                    break;
                case 'commerce':
                case 'guild':
                    points = sumOfCardActionTimesQuantity(boardItem.cards, {players: players, index: index});
                    break;
                default:
            }
            player.board.set(key, {
                points: points,
                cards: boardItem.cards
            })
        })
    });

    return players;
}


const calculateScientificStructures = (cards: CardWithQuantity[]) => {
    const identicalSymbolPoints = sum(cards.map(card => Math.pow(card.quantity, 2)));
    const bonusCardPoints = Math.min(...cards.map(card => card.quantity)) * 7;

    return identicalSymbolPoints + bonusCardPoints;
}


const sumOfCardActionTimesQuantity = (cards: CardWithQuantity[], props = null) =>
    sum(cards.map(card => card.quantity === 0 ? 0 : card.item.action(props) * card.quantity));

export const scoreService = {
    calculate: (players: Player[]) => calculateScore(players)
}
