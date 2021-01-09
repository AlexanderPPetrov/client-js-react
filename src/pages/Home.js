import Carousel from '../components/carousel/Carousel';
import Example from '../components/example/Example';

function Home(props) {
    return <>
        <div className="container">
            <div className="row">
                <Carousel/>
                <Example/>
            </div>
        </div>
   
    </>
}
export default Home;