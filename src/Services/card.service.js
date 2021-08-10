import { Compass, Tablet, Cog } from "../Cards/science.cards";
import { Altar, Baths, Pawnshop, Theater } from "../Cards/civic.cards";

const cards = {
    Pawnshop,
    Baths,
    Altar,
    Theater,
    Scriptorium: Tablet,
    Workshop: Cog,
    Apothecary: Compass
};

export default function cardFactory(name) {
    return new (cards[name])();
}
