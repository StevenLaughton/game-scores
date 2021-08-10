export class Card {
    constructor() {
        if (this.constructor === Card) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    name: string;
    action() {
        throw new Error("Method must be implemented.")
    };
}

