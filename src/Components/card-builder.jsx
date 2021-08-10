import { Accordion, Button, ListGroup, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { boardService } from "../Services/board.service";
import QuantitySelector from "./shared/quantity-selector";
import Select from 'react-select'
import getWonderMap, { wonders, wondersSelect } from "../Cards/wonders.cards";

export default function CardBuilder(props) {
    const [board, setBoard] = useState(props.board ?? boardService.get())


    const update = (value, boardItemKey, cardIndex) => {
        const map = board.get(boardItemKey);
        map.cards[cardIndex].quantity = value;
        setBoard(state => new Map(state).set(boardItemKey, map))
    }


    const WonderPicker = () => {
        return (
            <Select options={wondersSelect()}
                    onChange={(option) => setBoard(state => getWonderMap(new Map(state), option.value))}/>
        )
    }

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Scoreboard Builder</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-0">
                <Accordion>

                    {[...board.keys()].map((boardItemKey, boardIndex) => (
                            <Accordion.Item eventKey={boardIndex} key={boardIndex}>
                                <Accordion.Header>
                                    {boardItemKey}
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup variant="flush">
                                        {(boardItemKey === 'wonders') && <WonderPicker/>}
                                        {
                                            board?.get(boardItemKey).cards.map((card, cardIndex) => (
                                                <ListGroup.Item key={cardIndex} className='d-flex'>
                                                    {card.item.name}
                                                    <div className='flex-grow-1'/>
                                                    {
                                                        <QuantitySelector
                                                            value={card.quantity}
                                                            onChange={quantity => update(quantity, boardItemKey, cardIndex)}>
                                                        </QuantitySelector>
                                                    }
                                                </ListGroup.Item>
                                            ))

                                        }
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
