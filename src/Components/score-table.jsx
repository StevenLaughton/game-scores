import { Accordion, Badge, Table } from "react-bootstrap";
import { CardWithQuantity } from "../Models/card-with-quantity.model";

export default function ScoreTable(props) {
    return (
        <Accordion>
            {
                [...props.board.keys()].map((key, index) => {
                    return (
                        <Accordion.Item eventKey={index} key={index}>
                            <Accordion.Header>{key}
                                <Badge bg="success" className="mx-2" pill> {props.board.get(key).points}</Badge>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Table responsive striped>
                                    <thead>
                                    <tr>
                                        <th>Card</th>
                                        <th>Quantity</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        props.board.get(key).cards.map((card: CardWithQuantity, index: number) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{card.item.name}</td>
                                                    <td>{card.quantity}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </Table>
                            </Accordion.Body>
                        </Accordion.Item>

                    )
                })
            }
        </Accordion>
    )
}
