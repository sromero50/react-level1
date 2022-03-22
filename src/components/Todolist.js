import './Todolist.css'
import Items from './Items';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { saveList } from '../store/action';
import { useHistory } from "react-router-dom";
function Todolist() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    const handlerOnChange = e => {
        setTask(e.target.value)
    }
    
    const handlerSubmit = e => {
		e.preventDefault();
		setTask("");
	};

    const handlerAdd = () => {
        let newList = [...taskList, task]
        setTaskList(newList)
    }

    const handlerDelete = (index) => {
        let newList = [...taskList];
        newList.splice(index, 1);
        setTaskList(newList);
    }

    const handlerSaveList = () => {
        dispatch(saveList(taskList));
        history.push('/lists');
    }

    return (
        <div className="todolist">
            <form onSubmit={handlerSubmit} >
                <input type="text"  value={task} onChange={handlerOnChange} placeholder="Practice react" />
                <button onClick={handlerAdd} >Add</button>
                <button onClick={handlerSaveList}>Save</button>
            </form>
            <div>
                {taskList.map((task, index) => {
                    return <Items task={task} key={index} deleteTask={() => handlerDelete(index)} />
                })}
                
            </div>
        </div>
    );

}

export default Todolist;