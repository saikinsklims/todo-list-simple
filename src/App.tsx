import './App.css';
import { AppBar } from './AppBar';
import { Content } from './Content';
import { Footer } from './Footer';

// TODO: implement a progressbar (e.g. 8/10 tasks done)

function App() {
    return (
        <div className="App">
            <AppBar /> 
            <Content />
            <Footer />
        </div>  
    );
}

export default App;