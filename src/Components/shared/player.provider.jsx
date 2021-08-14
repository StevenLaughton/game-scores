import Player from "../../Models/player.model";
import { useList } from "react-use";
import { scoreService } from "../../Services/score.service";
import { useEffect } from "react";

export default function PlayerProvider() {
    const [[players], {
        set,
        push,
        updateAt,
        insertAt,
        update,
        updateFirst,
        upsert,
        sort,
        filter,
        removeAt,
        remove,
        clear,
        reset
    }] = useList([
        new Player('steven'),
        new Player('charlotte'),
    ]);

    useEffect(() => {
        calculateScores()
    }, [players])

    const calculateScores = () => {
        this.setState({players: scoreService.calculate(this.state.players.slice())});
    };
    return (<div>

        </div>

    )
}
