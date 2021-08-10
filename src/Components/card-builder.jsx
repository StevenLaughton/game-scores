import { Accordion, Button, ListGroup, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { boardService } from "../Services/board.service";
import QuantitySelector from "./shared/quantity-selector";

export default function CardBuilder(props) {
    const [board, setBoard] = useState(props.board ?? boardService.get())

    const update = (value, boardItemKey, cardIndex) => {
        const map = board.get(boardItemKey);
        map.cards[cardIndex].quantity = value;
        setBoard(state => new Map(state).set(boardItemKey, map))
    }

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Board Builder</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Accordion>
                    {[...board.keys()].map((boardItemKey, boardIndex) => (
                            <Accordion.Item eventKey={boardIndex} key={boardIndex}>
                                <Accordion.Header>
                                    {boardItemKey}
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup variant="flush">
                                        {board.get(boardItemKey).cards.map((card, cardIndex) => (
                                            <ListGroup.Item key={cardIndex} className='d-flex'>
                                                {card.item.name}
                                                <div className='flex-grow-1'/>
                                                <div>
                                                    <QuantitySelector value={card.quantity}
                                                                      min={0}
                                                                      onChange={quantity => update(quantity, boardItemKey, cardIndex)}/>
                                                </div>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    )}
                </Accordion>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={() => props.handleSave(board)}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
