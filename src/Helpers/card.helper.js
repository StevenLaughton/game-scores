import Player from "../Models/player.model";

const numberOfMiscCards = (player, type) => {
    let count = 0;
    player?.board.get('misc').cards.forEach(card => {
        if (card.item.name === type) {
            count = card.quantity
        }
    })
    return count;
}
export const numberOfBrownCards = (player: Player) => {
    return numberOfMiscCards(player, 'Raw Materials');
}

export const numberOfGreyCards = (player: Player) => {
    return numberOfMiscCards(player, 'Manufactured Goods');
}

export const numberOfRedCards = (player: Player) => {
    return numberOfMiscCards(player, 'Military Structures');
}

export const numberOfBattleLosses = (player: Player) => {
    return player?.board.get('military').cards.filter(card => card.item.name === 'Battle Losses' && card.quantity > 0)?.length ?? 0
}

export const numberOfCards = (player: Player, type: string) => {
    return player?.board.get(type).cards.filter(card => card.quantity > 0)?.length ?? 0
}

