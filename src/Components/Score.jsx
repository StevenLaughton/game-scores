import { Table } from "react-bootstrap";

export default function Score(props) {
    const cards = props.cards;

    return (
        <>
            {
                cards && Object.keys(cards).map((typeName, index) => {
                    return (
                        <Table key={index} responsive striped>
                            <thead>
                                <tr>
                                    <th>{typeName}</th>
                                    <th>Card/Item</th>
                                    <th>Points</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cards[typeName].map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td/>
                                                <td>{item.item}</td>
                                                <td>{item.points}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    )
                })
            }
        </>
    )
}
