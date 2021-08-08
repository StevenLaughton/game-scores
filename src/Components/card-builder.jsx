import { Accordion, Button, ListGroup, Modal } from "react-bootstrap";
import { CardWithQuantity } from "../Models/card-with-quantity.model";
import QuantitySelector from "./shared/quantity-selector";
import { useState } from "react";
import update from "immutability-helper";


export default function CardBuilder(props) {
    const [player, setPlayer] = useState(props.player);

    const ItemRow = (props) => {
        const card = props.card;
        return (
            <ListGroup.Item>
                <div className="position-relative py-3">
                    <div
                        className="position-absolute top-50 start-0 translate-middle-y">
                        {card.item.name}
                    </div>
                    <div
                        className="position-absolute top-50 end-0 translate-middle-y">
                        <QuantitySelector quantity={card.quantity}
                                          min={0}
                                          onChange={quantity => props.onChange({item: card.item, quantity: quantity})}/>
                    </div>
                </div>
            </ListGroup.Item>
        )
    }

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            {
                player?.board && <>
                    <Modal.Header closeButton>
                        <Modal.Title>{player.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Accordion>
                            {
                                [...player.board.keys()].map((key, index) => {
                                    const setPlayerCardQuantity = (card: CardWithQuantity) => {
                                        const boardItem = player.board.get(key);
                                        boardItem.cards = update(boardItem.cards, {$merge: [card]});
                                        player.board.set(key, {
                                            cards: update(boardItem.cards, {$merge: [card]}),
                                            points: boardItem.points
                                        });
                                        setPlayer(player)
                                    }
                                    return (
                                        <Accordion.Item eventKey={index} key={index}>
                                            <Accordion.Header>
                                                {key}
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <ListGroup variant="flush" key={index}>
                                                    {
                                                        player.board.get(key).cards.map((card: CardWithQuantity, index: number) => {
                                                            return <ItemRow key={index} card={card}
                                                                            onChange={setPlayerCardQuantity}/>
                                                        })
                                                    }
                                                </ListGroup>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    )
                                })
                            }
                        </Accordion>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => props.handleSave(player)}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </>
            }
        </Modal>
    )
}
