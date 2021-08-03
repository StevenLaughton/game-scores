import React, { useEffect } from "react";
import { Card, CloseButton, Col } from "react-bootstrap";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Score from "./Score";

export default function PlayerList(props) {
    const removePlayer = props.removePlayer;
    const addPlayerCards = props.addPlayerCards;
    const players = props.players;

    useEffect(() => {
        if (players[0].cards) {
            const item1 = players[0].cards;
            console.log(item1)

            // const item2 = Object.keys(item1)?.map(typeName => item1[typeName].map(a => a.points));
            console.log(Object.keys(item1).reduce(function (r, k) {
                return r.concat(k, item1[k]);
            }, []))
            // .reduce((r, obj) => r.concat(obj.points), []))
        }
        // console.log(props.players.map(player => player.cards && Object.keys(player.cards)?.map(typeName => player.cards[typeName].map(a => a.points))))
    });

    return (
        players.map((player, index) => {
            return (
                <Col xs={12} sm={6} key={index}>
                    <Card bg='light' border="light" className="app-card">
                        <Card.Header><FontAwesomeIcon icon={faUser} className="mx-2" />
                            {player.name}
                            <CloseButton className='position-absolute end-0 mx-2' onClick={() => removePlayer(index)} />
                        </Card.Header>
                        <Card.Body onClick={() => addPlayerCards(index)}>
                            <Score cards={player.cards} />
                        </Card.Body>
                        <Card.Footer className="text-muted text-end mx-2">
                            {/* Total: {player.cards ? player.cards.map(c => c.points).reduce((acc, val) => acc + val.points, 0) : 0} */}
                        </Card.Footer>
                    </Card>
                </Col>
            )
        })
    )
}