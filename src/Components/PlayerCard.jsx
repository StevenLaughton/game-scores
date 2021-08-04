import React, { useEffect, useState } from "react";
import { Card, CloseButton } from "react-bootstrap";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScoreTable from "./ScoreTable";

export default function PlayerCard(props) {
    const removeHandler = props.removeHandler;
    const addHandler = props.addHandler;
    const player = props.player;

    const [points, setPoints] = useState(0);

    useEffect(() => {
        if (player.score) {
            setPoints(Object.values(player.score).reduce((acc, val) => acc + val.points, 0));
        }
    }, [player.score])

    return (
        <Card bg='light' border="light" className="app-card">
            <Card.Header>
                <FontAwesomeIcon icon={faUser} className="mx-2"/>
                {player.name}
                <CloseButton className='position-absolute end-0 mx-2' onClick={() => removeHandler(props.index)}/>
            </Card.Header>
            <Card.Body onClick={() => addHandler(props.index)}>
                {player.score && <ScoreTable score={player.score}/>}
            </Card.Body>
            <Card.Footer className="text-muted text-end mx-2">
                Total: {points}
            </Card.Footer>
        </Card>
    )
}

