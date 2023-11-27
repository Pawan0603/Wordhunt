import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import Alert from "./components/Alert"; 
import React, {useState} from 'react';


export default function App() {
    const [alert, setAlert] = useState(null);
    const [Mode, setMode] = useState('light');

    const showAlert = (message, type)=>{
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1000); 
    }

    const mode = ()=>{
        if(Mode === 'light'){
            setMode('dark');
            showAlert("Dark mode in enebled", "Seccess");
            document.body.style.backgroundColor = "grey";
        }
        else{
            setMode('light');
            showAlert("Light mode in enebled", "Seccess");
            document.body.style.backgroundColor = "white";
        }
    }
    return (
        <>
            <Navbar Mode={Mode} mode={mode} />
            <Alert alert={alert}/>
            <TextFrom Mode={Mode} showAlert={showAlert}/>
        </>
    )
}
