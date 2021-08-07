import React from "react";
import { Card } from "react-bootstrap";
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AddPlayerCard(props) {

    return (
        <Card
            onClick={props.onClick}
            bg='secondary'
            border="secondary"
            className="text-center app-card">
            <Card.Body>
                <FontAwesomeIcon icon={faPlusCircle} size="4x"/>
            </Card.Body>
        </Card>
    )

}
