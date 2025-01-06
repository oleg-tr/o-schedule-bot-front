import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from 'react-router-dom';
import Form from "./components/Form/Form";

function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        if (tg) {
            tg.ready();
        }
    }, [tg]);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="form" element={<Form />} />
            </Routes>
        </div>
    );
}

export default App;