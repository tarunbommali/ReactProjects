import "./App.css";
import Accordion from "./components/Accordion";
import ImageSlider from "./components/ImageSlider";
import RandomColorGenerator from "./components/RandomColorGenerator";
import StarRating from "./components/StarRating";

function App() {
    return (
        <div className="App">
            <Accordion />
            <RandomColorGenerator />
            <StarRating />
            <ImageSlider />
        </div>
    )
}


export default App;
