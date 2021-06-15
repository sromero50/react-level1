import './Todolist.css';
import Items from './Items';
import { useState, useRef } from "react";
function Todolist() {
    //const [task, setTask] = useState([]);
    const [listItems, setListItems] = useState([]);

    const task = useRef("");

    function submitHandler(e) {
        e.preventDefault();
    }
    function addItem() {
        setListItems([
            ...listItems,
            task.current.value
        ]);
    }
    return (
        <div className="todolist">
            <form onSubmit={submitHandler}>
                <input ref={task} type="text" ></input>
                <button onClick={addItem}>Add</button>
            </form>
            <div>
                {
                    listItems.map((item, index) => {
                        return <Items key={index} text={item}/>;
                    })
                }
            </div>
        </div>
    );

}

export default Todolist;