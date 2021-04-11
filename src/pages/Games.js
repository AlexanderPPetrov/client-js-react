import { useQuery, gql } from '@apollo/client';
import CreateGame from "../components/create-game/CreateGame";

const GET_GAMES = gql`
  query getGames {
    games {
      _id
      title
    }
  }
`;

function Games(props) {

    const { loading, error, data } = useQuery(GET_GAMES);

    const getGames = () => {
        if(!data){
            return null;
        }
        const gamesList = data.games.map(game => {
            return <div
                key={game._id}
            >{ game.title }</div>
        })
        return gamesList;
    }

    return <>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <CreateGame/>
                </div>
                <div className="col">
                    <div>Games List:</div>
                    { getGames() }
                </div>
            </div>
        </div>
    </>
}
export default Games;