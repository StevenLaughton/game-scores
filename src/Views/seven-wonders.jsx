import { Container, Dropdown } from "react-bootstrap";
import PlayerCard from "../Components/player-card";
import React from "react";
import Player from "../Models/player.model";
import AddPlayerCard from "../Components/add-player-card";
import CardBuilder from "../Components/card-builder";
import PlayerScoreboard from "../Components/player-scoreboard";
import DragDrop from "../Components/shared/drag-drop";
import { reorder } from "../Helpers/array.helper";
import { useDeepCompareEffect, useList } from "react-use";
import { scoreService } from "../Services/score.service";
import useModal from "../Hooks/modal.hook";

export default function SevenWonders() {
    const initialPlayers = [new Player('steven'), new Player('charlotte')];

    const [players, {set, push, updateAt, removeAt}] = useList(initialPlayers);
    const [modal, {openModal, closeModal}] = useModal(false)

    useDeepCompareEffect(() => {
        set(scoreService.calculate(players.slice()));
    }, [players, modal]);


    const addPlayer = () => {
        const playerName = prompt("Please enter player name");
        if (playerName) {
            push(new Player(playerName));
        }
    }

    const saveModal = (board) => {
        const index = modal.index;
        const player = players[index]
        player.board = board;
        updateAt(index, player)
        closeModal();
    }

    const getPoints = (player) => {
        return player.board ? ([...player.board.values()].reduce((acc, val) => acc + val.points, 0)) : 0;
    }

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        set(reorder(players.slice(), result.source.index, result.destination.index));
    }

    const dropdownMenu = (index) => {
        return (
            <>
                <Dropdown.Item eventKey="1" as="button" onClick={() => openModal({index: index})}>
                    Add/Edit Scoreboard
                </Dropdown.Item>
                <Dropdown.Divider/>
                <Dropdown.Item eventKey="2" as="button" onClick={() => removeAt(index)}>
                    Delete Player
                </Dropdown.Item>
            </>
        )
    }

    return (
        <>
            <h1 className="m-3">7-Wonders</h1>
            <Container>
                <DragDrop onDragEnd={onDragEnd}>
                    {players.map((player, index) => (
                        <DragDrop.Drag key={index} name={player.name} index={index}>
                            <PlayerCard key={index} name={player.name}
                                        points={getPoints(player)}
                                        menu={dropdownMenu(index)}>
                                {player.board && <PlayerScoreboard board={player.board}/>}
                            </PlayerCard>
                        </DragDrop.Drag>
                    ))}
                </DragDrop>
                <AddPlayerCard onClick={addPlayer}/>
            </Container>
            {modal.open && <CardBuilder show={modal.open}
                                        handleClose={closeModal}
                                        handleSave={saveModal}
                                        board={players[modal.index]?.board}/>
            }
        </>
    )
}
