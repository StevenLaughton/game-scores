import React, { useState } from "react";
import { Card, Collapse, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function PlayerCard(props) {
    const [open, setOpen] = useState(false);

    return (
        <Card bg='light' border="light">
            <Card.Header>
                <div className='d-flex align-items-center'>
                    <Dropdown className='mx-1'>
                        <Dropdown.Toggle size="sm"/>
                        <Dropdown.Menu>
                            {props.menu}
                        </Dropdown.Menu>
                    </Dropdown>

                    <span>{props.name}</span>
                    <div className='flex-grow-1'/>
                    <div className={open ? "isRotated" : ""}>
                        <FontAwesomeIcon icon={faChevronLeft}
                                         className="mx-1"
                                         onClick={() => setOpen(!open)}/>
                    </div>
                </div>
            </Card.Header>
            <Collapse in={open}>
                <Card.Body className="p-0">
                    {props.children}
                </Card.Body>
            </Collapse>
            <Card.Footer className="text-muted text-end">
                <span className='mx-2'>Total: {props.points}</span>
            </Card.Footer>
        </Card>
    )
}

