import { Button, CloseButton, Col, Container, Row } from "react-bootstrap";
import PlayerCard from "../Components/player-card";
import AddPlayerCard from "../Components/add-player-card";
import React from "react";
import update from 'immutability-helper';
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
            modalOpen: false,
            modalPlayer: null,
            playerIndex: null
        };
    }

    componentDidMount() {
        console.log('did mount')
    }

    addPlayer = () => {
        const playerName = prompt("Please enter player name");
        if (playerName) {
            this.setState((state) => ({
                players: update(state.players, {$push: [new Player(playerName),]})
            }));
        }
    }

    updatePlayer = (player, index) => {
        const statePlayers = this.state.players.slice();
        statePlayers[index] = player;
        this.setState({players: statePlayers});
    }

    removePlayer = (index) => {
        this.setState((state) => update(state, {players: {$splice: [[index, 1]]}}));
    };

    calculateScores = () => {
        const players = scoreService.calculate(this.state.players.slice());
        this.setState({players: players});
    };

    openModal = (player, playerIndex) => {
        this.setState({modalOpen: true, modalPlayer: player, playerIndex: playerIndex})
    }

    closeModal = () => {
        this.setState({modalOpen: false, modalPlayer: null})
    }

    saveModal = (board) => {
        const index = this.state.playerIndex;
        const player = this.state.players[index]
        player.board = board;
        this.updatePlayer(player, index);
        this.closeModal();
    }

    getPoints = (player) => {
        return player.board
            ? ([...player.board.values()].reduce((acc, val) => acc + val.points, 0))
            : 0;
    }

    render() {
        return (
            <div>
                <h1 className="m-3">7-Wonders</h1>
                <Container>
                    <div className="d-grid gap-2">
                        <Button variant="primary" size="lg" onClick={() => this.calculateScores()}>
                            Calculate
                        </Button>
                    </div>
                    <Row>
                        {
                            this.state.players.map((player, index) => {
                                return (
                                    <Col xs={12} sm={6} key={index}>
                                        <PlayerCard name={player.name}
                                                    points={this.getPoints(player)}
                                                    slotLeft={
                                                        <FontAwesomeIcon icon={faPlus}
                                                                         onClick={() => this.openModal(player, index)}/>
                                                    }
                                                    slotRight={<CloseButton onClick={() => this.removePlayer(index)}/>}>
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
                {
                    this.state.modalPlayer && <CardBuilder show={this.state.modalOpen}
                                                           handleClose={this.closeModal}
                                                           handleSave={this.saveModal}
                                                           board={this.state.modalPlayer.board}/>}
            </div>
        )
    }
}
