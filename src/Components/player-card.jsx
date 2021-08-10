import React, { useState } from "react";
import { Card, Collapse } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from "@fortawesome/free-solid-svg-icons/faUserCircle";

export default function PlayerCard(props) {
    const [open, setOpen] = useState(true);

    return (
        <Card bg='light' border="light" className="app-card">
            <Card.Header>
                <div className='d-flex align-items-center'>
                    <FontAwesomeIcon icon={faUserCircle} className="mx-1" onClick={() => setOpen(!open)}/>
                    <span>{props.name}</span>
                    <div className='mx-1'>{props?.slotLeft}</div>
                    <div className='flex-grow-1'/>
                    <div className='mx-1'>{props?.slotRight}</div>
                </div>
            </Card.Header>
            <Collapse in={open}>
                <Card.Body>
                    {props.children}
                </Card.Body>
            </Collapse>
            <Card.Footer className="text-muted text-end">
                <span className='mx-2'>Total: {props.points}</span>
            </Card.Footer>
        </Card>
    )
}

