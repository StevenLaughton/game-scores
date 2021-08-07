import React, { useEffect, useState } from "react";
import { Card, CloseButton } from "react-bootstrap";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PlayerCard(props) {
    const {
        removeHandler,
        addHandler,
        player
    } = props;

    const [points, setPoints] = useState(0);

    useEffect(() => {
        if (player.board) {
            setPoints(Object.values(player.board).reduce((acc, val) => acc + val.points, 0));
        }
    }, [player.board])

    return (
        <Card bg='light' border="light" className="app-card">
            <Card.Header onClick={() => addHandler(props.index)}>
                <FontAwesomeIcon icon={faUser} className="mx-2"/>
                {player.name}
                <CloseButton className='position-absolute end-0 mx-2' onClick={() => removeHandler(props.index)}/>
            </Card.Header>
            <Card.Body >
                {props.children}
            </Card.Body>
            <Card.Footer className="text-muted text-end mx-2">
                Total: {points}
            </Card.Footer>
        </Card>
    )
}

