import { Accordion, Badge, ListGroup } from "react-bootstrap";
import React from "react";

export default function PlayerScoreboard(props) {

    return (
        <Accordion>
            {[...props.board.keys()].map((boardItemKey, boardIndex) => (
                    <Accordion.Item eventKey={boardIndex} key={boardIndex}>
                        <Accordion.Header>
                            <Badge bg="success" className="mx-2" pill> {props.board.get(boardItemKey).points}</Badge>
                            {boardItemKey}
                        </Accordion.Header>
                        <Accordion.Body>
                            <ListGroup variant="flush">
                                {props.board.get(boardItemKey).cards.map((card, cardIndex) => (
                                    <ListGroup.Item key={cardIndex} className='d-flex'>
                                        {card.item.name}
                                        <div className='flex-grow-1'/>
                                        <span>{card.quantity}</span>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                )
            )}
        </Accordion>
    )
}
