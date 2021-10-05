import './App.css';
import { AppBar } from './AppBar';
import { Content } from './Content';
import { Footer } from './Footer';


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