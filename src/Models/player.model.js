import BoardItem from "./board-item.model";

export default class Player {
    name: string;
    board: Map<string, BoardItem>;

    constructor(name: string) {
        this.name = name;
    }
}





