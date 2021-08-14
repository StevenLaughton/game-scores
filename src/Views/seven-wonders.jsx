import { Container, Dropdown } from "react-bootstrap";
import PlayerCard from "../Components/player-card";
import React from "react";
import update from 'immutability-helper';
import Player from "../Models/player.model";
import { scoreService } from "../Services/score.service";
import AddPlayerCard from "../Components/add-player-card";
import CardBuilder from "../Components/card-builder";
import PlayerScoreboard from "../Components/player-scoreboard";
import DragDrop from "../Components/shared/drag-drop";
import { reorder } from "../Helpers/array.helper";

export default class SevenWonders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [
                new Player('steven'),
                new Player('charlotte'),
            ],
            modalOpen: false,
            modalIndex: null
        };

        this.onDragEnd = this.onDragEnd.bind(this);
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
        this.setState({players: statePlayers}, () => this.calculateScores());
    }

    removePlayer = (index) => {
        this.setState((state) => update(state, {players: {$splice: [[index, 1]]}}));
    };

    calculateScores = () => {
        this.setState({players: scoreService.calculate(this.state.players.slice())});
    };

    openModal = (index) => {
        this.setState({modalOpen: true, modalIndex: index})

    }

    closeModal = () => {
        this.setState({modalOpen: false, modalIndex: null})
    }

    saveModal = (board) => {
        const index = this.state.modalIndex;
        const player = this.state.players[index]
        player.board = board;
        this.updatePlayer(player, index);
        this.closeModal();
    }

    getPoints = (player) => {
        return player.board ? ([...player.board.values()].reduce((acc, val) => acc + val.points, 0)) : 0;
    }

    dropdownMenu = (index) => {
        return (
            <>
                <Dropdown.Item eventKey="1" as="button" onClick={() => this.openModal(index)}>
                    Add/Edit Scoreboard
                </Dropdown.Item>
                <Dropdown.Divider/>
                <Dropdown.Item eventKey="2" as="button" onClick={() => this.removePlayer(index)}>
                    Delete Player
                </Dropdown.Item>
            </>
        )
    }

    onDragEnd(result) {
        if (!result.destination) {
            return;
        }
        const players = reorder(this.state.players, result.source.index, result.destination.index);

        this.setState({players: players});
    }

    render() {
        return (
            <>
                <h1 className="m-3">7-Wonders</h1>
                <Container>
                    <DragDrop onDragEnd={this.onDragEnd}>
                        {this.state.players.map((player, index) => (
                            <DragDrop.Drag key={index} name={player.name} index={index}>
                                <PlayerCard name={player.name}
                                            points={this.getPoints(player)}
                                            menu={this.dropdownMenu(index)}>
                                    {player.board && <PlayerScoreboard board={player.board}/>}
                                </PlayerCard>
                            </DragDrop.Drag>
                        ))}
                    </DragDrop>
                    <AddPlayerCard onClick={this.addPlayer}/>
                </Container>
                {this.state.modalIndex !== null
                && <CardBuilder show={this.state.modalOpen}
                                handleClose={this.closeModal}
                                handleSave={this.saveModal.bind(this)}
                                board={this.state.players[this.state.modalIndex].board}/>
                }
            </>
        )
    }
}
