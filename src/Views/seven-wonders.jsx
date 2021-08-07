import { Button, Col, Container, Row } from "react-bootstrap";
import PlayerCard from "../Components/player-card";
import AddPlayerCard from "../Components/add-player-card";
import React from "react";
import update from 'immutability-helper';
import { boardService } from "../Services/board.service";
import ScoreTable from "../Components/score-table";
import Player from "../Models/player.model";
import { scoreService } from "../Services/score.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import CardBuilder from "../Components/card-builder";

export default class SevenWonders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [
                new Player('steven'),
                new Player('charlotte'),
            ],
            modalOpen: false
        };
    }

    addPlayer = () => {
        const playerName = prompt("Please enter player name");
        if (playerName) {
            this.setState((state) => ({
                players: update(state.players, {$push: [new Player(playerName),]})
            }));
        }
    }

    addPlayerScore = (index) => {
        const players = [...this.state.players];
        players[index] = update(players[index], {$merge: {board: boardService.get()}});
        this.setState({players: players});
    }

    removePlayer = (index) => {
        this.setState((state) => update(state, {players: {$splice: [[index, 1]]}}));
    };

    calculateScore = () => {
        const players = scoreService.calculate(this.state.players);
        this.setState({players: players});
    };

    openModal = () => {
        console.log('open')
        this.setState(state => update(state, {modalOpen: {$set: !state.modalOpen}}))
    }

    render() {
        return (
            <div>
                <h1 className="m-3">7-Wonders</h1>
                <Container>
                    <div className="d-grid gap-2">
                        <Button variant="primary" size="lg" onClick={() => this.calculateScore()}>
                            Calculate
                        </Button>
                    </div>
                    <Row>
                        {
                            this.state.players.map((player, index) => {
                                return (
                                    <Col xs={12} sm={6} key={index}>
                                        <FontAwesomeIcon icon={faPlus} className="mx-2" onClick={this.openModal}/>
                                        <PlayerCard player={player}
                                                    index={index}
                                                    removeHandler={this.removePlayer}
                                                    addHandler={this.addPlayerScore}>
                                            {player.board && <ScoreTable board={player.board}/>}
                                        </PlayerCard>
                                    </Col>
                                )
                            })
                        }
                        <Col xs={12} md={6}>
                            <AddPlayerCard onClick={this.addPlayer}/>
                        </Col>
                    </Row>
                </Container>
                <CardBuilder show={this.state.modalOpen} handleClose={this.openModal}/>
            </div>
        )
    }
}
