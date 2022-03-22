import './Lists.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Lists () {
    const lists = useSelector((state) => state.lists);

    console.log(lists)

    return (
        <div className='todolist'>
            <Link to="todo">
                Add new TodoList
            </Link>
            <div className='list'>
                {
                    lists.map((allLists, index) => {
                        let list = allLists.list.map((task, index) => {
                            return <li key={index} >{task}</li>
                        })
                    
                        return <ul key={index}>{list}</ul> 
                    })
                }
            </div>
        </div>
    )
}

export default Lists;
