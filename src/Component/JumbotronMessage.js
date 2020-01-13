import React from 'react'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'

export default function MapForm(props) {
    let handleChange = (e) => {
        props.onChange(e.target.value, e);
    }

    let handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.target.value = '';
        }
    }
    return (
        <Jumbotron>
            <h1>{props.title || "Title"}</h1>
            <p>
                {props.sub || "Subtitle"}
            </p>
            <p>
                <Button variant="primary">Close</Button>
            </p>
        </Jumbotron>
    )
}