import {Card, Form, Button} from "react-bootstrap";
import {useState} from "react";

const Search=(props)=>{
    const [term, setTerm]=useState('')
    const handleChange=(e)=>{
        setTerm(e.target.value)
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        props.onSearch(term)
    }

    console.log(term)
    return(
        <>
        <Card>
            <Card.Header>Bajeriukai su Chuck Norris</Card.Header>
            <Card.Body>
                <Form onSubmit={submitHandler}>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Juokelis..." name="term" value={term} onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Button type="submit" variant="primary" className="mt-2">Ieškoti</Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
        </>
    )
}
export default Search