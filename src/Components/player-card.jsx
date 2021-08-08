import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import update from "immutability-helper";
import { boardService } from "../Services/board.service";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons/faUserCircle";

export default function PlayerCard(props) {
    const player = props.player;

    const [points, setPoints] = useState(0);

    useEffect(() => {
        if (player.board) {
            setPoints(Object.values(player.board).reduce((acc, val) => acc + val.points, 0));
        }
    }, [player.board])

    const setPlayerBoard = () => {
        console.log('setting boards')
        props.updateHandler(update(player, {$merge: {board: boardService.get()}}), props.index);
    }

    return (
        <Card bg='light' border="light" className="app-card">
            <Card.Header>
                <div className='d-flex align-items-center'>
                    <FontAwesomeIcon icon={faUserCircle} className="mx-1" onClick={setPlayerBoard}/>
                    <span>{player.name}</span>
                    <div className='mx-1'>{props?.slotLeft}</div>
                    <div className='flex-grow-1'/>
                    <div className='mx-1'>{props?.slotRight}</div>
                </div>
            </Card.Header>
            <Card.Body>
                {props.children}
            </Card.Body>
            <Card.Footer className="text-muted text-end mx-2">
                Total: {points}
            </Card.Footer>
        </Card>
    )
}

