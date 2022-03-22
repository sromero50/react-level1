import './Items.css';
function Items({task, deleteTask}) {
    return (
        <div className="item">
            {task}
            <button className="btn" type="button" onClick={deleteTask} >X</button>
        </div>
    );

}

export default Items;