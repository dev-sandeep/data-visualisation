import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import UrlCall from '../Context/UrlCall'
import UseAppContext from '../Context/UseAppContext'

export default function MapForm(props) {
    const { setData } = UseAppContext();

    const saveFilter = (e) => {

        //call the api
        // let data = UrlCall.getTopicData("einstein");
        UrlCall().setTopicData("einstein").then((data) => {
            //now send this data
            setData([data], "wikimedia");
        }, (e) => {
            console.warn(e)
        });
    }

    return (
        <div id="search-box" className="">
            <div className="row">
                <InputGroup className="col-lg-12">
                    <FormControl
                        placeholder="Search topic"
                        aria-label="Search topic"
                        aria-describedby="search topic"
                    />
                    <InputGroup.Append>
                        <Button variant="secondary">SEARCH</Button>
                    </InputGroup.Append>
                </InputGroup>
                <InputGroup className="col-lg-6 form-m-t-d">
                    <FormControl
                        placeholder="From Date"
                        aria-label="From Date"
                        type="date"
                        aria-describedby="from date"
                    />
                </InputGroup>
                <InputGroup className="col-lg-6 form-m-t-d">
                    <FormControl
                        placeholder="To Date"
                        aria-label="To Date"
                        type="date"
                        aria-describedby="from date"
                    />
                </InputGroup>
                <br />
                <div className="col-lg-12 align-justify">
                    <Button onClick={saveFilter} type="submit">Submit</Button>
                </div>

            </div>

        </div>
    )
}