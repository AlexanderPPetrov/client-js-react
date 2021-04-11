import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { gql, useMutation } from '@apollo/client';
import { useState } from "react";
const CREATE_GAME = gql`
  mutation CreateGame($data: CreateGameInput!) {
    createGame(data: $data) {
      _id
      title
      description
      rating
    }
  }
`;
function CreateGame(props) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');

    const [createGame, { data }] = useMutation(CREATE_GAME);

    const onCreateGame = () => {
        const gameData = { 
            variables: { 
                data: {
                    title,
                    description,
                    rating: Number(rating),
                } 
            }
        }
        createGame(gameData).then( response => {
            console.log(response);
        });
        resetState();
    }
    const resetState = () => {
        setTitle('');
        setDescription('');
        setRating('');
    }

    const getOptions = () => {
        let options = [];
        for(let i = 0; i < 10; i++){
            options.push(<option value={i} key={i}>{i}</option>)
        }
        return options;
    }

    return <>
        <Form onSubmit={e => {
          e.preventDefault();
          onCreateGame()
        }}>
            <FormGroup>
                <Label for="title">Title</Label>
                <Input 
                    type="text" 
                    name="title" 
                    id="title" 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Game title"/>
            </FormGroup>
            <FormGroup>
                <Label for="description">Description</Label>
                <Input 
                    type="text" 
                    name="description" 
                    id="description" 
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Game description"/>
            </FormGroup>
            <FormGroup>
                <Label for="rating">Rating</Label>
                <Input 
                    type="select" 
                    name="rating" 
                    id="rating"
                    value={rating} 
                    onChange={e => setRating(e.target.value)}
                    >
                    {getOptions()}
                </Input>
            </FormGroup>
            <Button type="submit">Add game</Button>
        </Form>
    </>
}
export default CreateGame;