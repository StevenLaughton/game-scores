import React, { useState } from "react";
import { Card, Collapse, Dropdown } from "react-bootstrap";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';

export default function PlayerCard(props) {
    const [open, setOpen] = useState(false);

    const CustomToggle = React.forwardRef(({children, onClick}, ref) => (
        <MenuIcon ref={ref}
                  onClick={e => {
                      e.preventDefault();
                      onClick(e)
                  }}/>

    ));

    return (
        <Card bg='light' border="light">
            <Card.Header>
                <div className='d-flex align-items-center'>
                    <Dropdown className='mx-1'>
                        <Dropdown.Toggle size="sm" as={CustomToggle}/>

                        <Dropdown.Menu>
                            {props.menu}
                        </Dropdown.Menu>
                    </Dropdown>

                    <span>{props.name}</span>
                    <div className='flex-grow-1'/>
                    <div className={open ? "isRotated" : ""}>
                        <ChevronLeftIcon className="mx-1"
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

