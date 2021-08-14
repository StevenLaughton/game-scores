import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import React from "react";

const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    ...draggableStyle
});


const DragDrop = (props) => (<DragDropContext onDragEnd={props.onDragEnd}>
    <Droppable droppableId="droppable">
        {provided => (
            <div {...provided.droppableProps}
                 ref={provided.innerRef}>
                {props.children}
                {provided.placeholder}
            </div>)}
    </Droppable>
</DragDropContext>)
const Drag = (props) => (<Draggable key={props.name} draggableId={props.name} index={props.index}>
    {(provided, snapshot) => (
        <div ref={provided.innerRef}
             {...provided.draggableProps}
             {...provided.dragHandleProps}
             className="mb-3"
             style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}>
            {props.children}
        </div>
    )}
</Draggable>);

DragDrop.Drag = Drag;

export default DragDrop;

