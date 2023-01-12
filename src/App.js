import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";

function App() {

    const [listItem, setListItem] = useState([]);
    const handlePlusClick = () => setListItem([listItem.length ? listItem[0] + 1 : 1, ...listItem]);
    const handleMinusClick = () => setListItem([listItem.length ? listItem[0] - 1 : -1, ...listItem]);

    return (
        <div className="App container mt-5">
            <div className="btn-group font-monospace" role="group">
                <button onClick={handlePlusClick} type="button" className="btn btn-outline-success">+</button>
                <button onClick={handleMinusClick} type="button" className="btn btn-outline-danger">-</button>
            </div>
            {listItem.length ? <div className="list-group">
                {listItem.map((item, index) => <button key={index} type="button"
                                                       className="list-group-item list-group-item-action">{item}</button>)}
            </div> : ``}
        </div>
    );
}

export default App;
