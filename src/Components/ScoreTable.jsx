import { Accordion, Badge, Table } from "react-bootstrap";

export default function ScoreTable(props) {

    return (
        <Accordion>
            {
                Object.keys(props.score).map((key, index) => {
                    return (
                        <Accordion.Item eventKey={index} key={index}>
                            <Accordion.Header>{key}
                                <Badge bg="success" className="mx-2" pill> {props.score[key].points}</Badge>
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
                                        props.score[key].cards.map((card, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{card.item}</td>
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
