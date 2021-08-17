import { Accordion, Button, Form, ListGroup, Modal, Row } from "react-bootstrap";
import React from "react";
import { boardService } from "../Services/board.service";
import QuantitySelector from "./shared/quantity-selector";
import Select from 'react-select'
import { getWonder, wondersSelect } from "../Cards/wonders.cards";
import useMap from "../Hooks/map.hook";
import { FormControlLabel, Switch } from "@material-ui/core";

export default function CardBuilder(props) {
    const [board, {set}] = useMap(props.board ?? boardService.get())

    const update = (value, boardItemKey, cardIndex) => {
        const map = board.get(boardItemKey);
        map.cards[cardIndex].quantity = value;
        set(boardItemKey, map)
    }

    const WonderPicker = () => {
        return (
            <>
                <Row>
                    <Select options={wondersSelect()}
                            value={{label: board.get('wonders').option}}
                            isSearchable={false}
                            onChange={option => set('wonders', getWonder(board, option.value))}>
                    </Select>
                    <FormControlLabel
                        label={`Side ${board.get('wonders').sideA ? 'A' : 'B'}`}
                        control={
                            <Switch checked={board.get('wonders').sideA}
                                    onChange={val => set('wonders', getWonder(board, null, val.target.checked))}/>
                        }/>
                </Row>
                <div className="my-2">
                    {board?.get('wonders').cards.map((card, cardIndex) => (
                        <Form.Check key={cardIndex}
                                    inline
                                    label={`Phase ${cardIndex + 1}`}
                                    checked={card.quantity === 1}
                                    onChange={val => update(+val.target.checked, 'wonders', cardIndex)}
                                    type='checkbox'>
                        </Form.Check>
                    ))}
                </div>

            </>
        )
    }

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Scoreboard Builder</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-0">
                <Accordion>
                    {
                        [...board.keys()].map((boardItemKey, boardIndex) => (
                            <Accordion.Item eventKey={boardIndex} key={boardIndex}>
                                <Accordion.Header>
                                    {boardItemKey}
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup variant="flush">
                                        {(boardItemKey === 'wonders')
                                            ? <WonderPicker/>
                                            : board?.get(boardItemKey).cards.map((card, cardIndex) => (
                                                <ListGroup.Item key={cardIndex} className='d-flex'>
                                                    {card.item.name}
                                                    <div className='flex-grow-1'/>
                                                    <QuantitySelector
                                                        value={card.quantity}
                                                        onChange={quantity => update(quantity, boardItemKey, cardIndex)}>
                                                    </QuantitySelector>
                                                </ListGroup.Item>
                                            ))}
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
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
