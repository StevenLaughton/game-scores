import { Apothecary, Scriptorium, Workshop } from "../Cards/science.cards";
import { Altar, Baths, Pawnshop, Theater } from "../Cards/civic.cards";

const cards = {
    Pawnshop,
    Baths,
    Altar,
    Theater,
    Scriptorium,
    Workshop,
    Apothecary
};

export default function cardFactory(name) {
    return new (cards[name])();
}
