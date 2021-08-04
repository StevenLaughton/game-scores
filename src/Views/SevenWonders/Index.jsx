import { Col, Container, Row } from "react-bootstrap";
import PlayerCard from "../../Components/PlayerCard";
import AddPlayerCard from "../../Components/AddPlayerCard";
import React from "react";
import update from 'immutability-helper';

export default class SevenWondersHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [
                {name: 'steven'},
                {name: 'charlotte'}
            ]
        };
    }

    addPlayer = () => {
        const playerName = prompt("Please enter player name");
        if (playerName) {
            this.setState((state) => ({
                players: update(state.players, {$push: [{name: playerName}]})
            }));
        }
    }

    addPlayerScore = (index) => {
        const players = [...this.state.players];
        players[index] = update(players[index], {$merge: {score: this.getScore()}});
        this.setState({players: players});
    }

    getScore = () => (
        {
            military: {
                points: 0,
                cards: [
                    {
                        item: 'Battle Wins',
                        quantity: 1,
                    },
                    {
                        item: 'Battle Losses',
                        quantity: 1,
                    }
                ]
            },
            money: {
                points: 1,
                cards: [
                    {
                        item: 'silver',
                        quantity: 1,
                    },
                    {
                        item: 'gold',
                        quantity: 1,
                    }
                ]
            },
            wonders: {
                points: 10,
                cards: [
                    {
                        item: 'phase 1',
                        quantity: 1,
                    },
                    {
                        item: 'phase 2',
                        quantity: 1,
                    },
                    {
                        item: 'phase 3',
                        quantity: 1,
                    }]
            },
            civic: {
                points: 3,
                cards: [
                    {
                        item: 'statue',
                        quantity: 1,
                    }]
            },
            science: {
                points: 10,
                cards: [
                    {
                        item: 'tablet',
                        quantity: 1,
                    },
                    {
                        item: 'cog',
                        quantity: 1,
                    },
                    {
                        item: 'compass',
                        quantity: 1,
                    }]
            },
            commerce: {
                points: 3,
                cards: [
                    {
                        item: 'market',
                        quantity: 1,
                    }
                ]
            }
        })


    removePlayer = (index) => {
        this.setState((state) => update(state, {players: {$splice: [[index, 1]]}}));
    };


    render() {
        return (
            <div>
                <h1 className="m-3">7-Wonders</h1>
                <Container>
                    <Row>
                        {this.state.players.map((player, index) => {
                            return (
                                <Col xs={12} sm={6} key={index}>
                                    <PlayerCard player={player}
                                                index={index}
                                                removeHandler={this.removePlayer}
                                                addHandler={this.addPlayerScore}
                                    />
                                </Col>
                            )
                        })
                        }
                        <Col xs={12} md={6}>
                            <AddPlayerCard onClick={this.addPlayer}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
