import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";

interface IProps {
    image?: any;
    title?: string
    description?: string
    maxPlayers: number
    currentPlayers: number
    onClick: VoidFunction
}

export const RoomCard = React.memo(({}: IProps) => {
    return <Card>
        <Card.Body>
            <Card.Title>Trip name</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Button variant="primary">Go to boat</Button>
        </Card.Body>
    </Card>
})