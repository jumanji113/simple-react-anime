import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AnimeItem from './components/AnimeItem';
import Gallery from './components/Gallery';
import Homepage from './components/Homepage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/anime/:id" element={<AnimeItem />}></Route>
                <Route path="/character/:id" element={<Gallery />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
