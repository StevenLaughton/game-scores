import React from "react";
import { Card } from "react-bootstrap";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

export default function AddPlayerCard(props) {

    return (
        <Card onClick={props.onClick}
              bg='secondary'
              border="secondary"
              className="text-center app-card">
            <Card.Body>
                <AddCircleOutlineIcon style={{fontSize: 65}}/>
            </Card.Body>
        </Card>
    )

}
