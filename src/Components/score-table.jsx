import { Accordion, Badge, Table } from "react-bootstrap";
import { CardWithQuantity } from "../Models/card-with-quantity.model";

export default function ScoreTable(props) {

    const Body = (props) => {
        return (
            <Table responsive striped>
                <thead>
                <tr>
                    <th>Card</th>
                    <th>Quantity</th>
                </tr>
                </thead>
                <tbody>
                {
                    props.board.get(props.index).cards.map((card: CardWithQuantity, index: number) => {
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
        )
    }

    return (
        <Accordion>
            {
                [...props.board.keys()].map((key, index) => {
                    return (
                        <Accordion.Item eventKey={index} key={index}>
                            <Accordion.Header>
                                <Badge bg="success" className="mx-2" pill> {props.board.get(key).points}</Badge>
                                {key}
                            </Accordion.Header>
                            <Accordion.Body>
                                <Body index={key} board={props.board}/>
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })
            }
        </Accordion>
    )
}
