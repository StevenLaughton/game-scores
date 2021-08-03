import { Row, Col, Container } from "react-bootstrap";
import PlayerList from "../../Components/PlayerList";
import AddPlayer from "../../Components/AddPlayer";
import React from "react";
import update from 'immutability-helper';

export default class SevenWondersHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [
                { name: 'steven' },
                { name: 'charlotte' }
            ]
        };
    }

    addPlayer = () => {
        const playerName = prompt("Please enter player name");
        if (playerName) {
            this.setState((state) => ({
                players: update(state.players, { $push: [{ name: playerName }] })
            }));
        }
    }

    addPlayerCards = (index) => {
        let players = [...this.state.players];
        players[index] = update(players[index], { $merge: { cards: this.getCards() } });
        this.setState({ players: players });
    }

    getCards = () => (
        {
            military: [
                {
                    item: 'Battle Wins',
                    points: 1
                },
                {
                    item: 'Battle Losses',
                    points: -1
                }
            ],
            money: [
                {
                    item: 'coins',
                    points: 3
                }]
        })


    removePlayer = (index) => {
        this.setState((state) => update(state, { players: { $splice: [[index, 1]] } }));
    };


    render() {
        return (
            <div>
                <h1 className="m-3">7-Wonders</h1>
                <Container>
                    <Row >
                        <PlayerList
                            players={this.state.players}
                            removePlayer={this.removePlayer}
                            addPlayerCards={this.addPlayerCards}
                        />
                        <Col xs={12} md={6}>
                            <AddPlayer onClick={this.addPlayer} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}