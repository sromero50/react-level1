import './Details.css';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function Details() {
    const lists = useSelector((state) => state.lists);
    const params = useParams();
    const id = params.id
    const [data, setData] = useState({})

    useEffect(() => {
        fetch('https://www.therogerlab.com/examples/lists-stats.php', { method: "GET" })
            .then(response => response.json())
            .then((response) => setData(response))
            .catch(error => console.error('error', error));
    }, [])

    console.log(data)
    return <div className="details">
        <div>
            <Link to="/lists">
                Go back
            </Link>
        </div>
        <div className="stats">
            <p>TOTAL: <b>{data.total}</b></p>
            <p>DONE: <b>{data.done}</b></p>
            <p>DELAYED: <b>{data.delayed}</b></p>
        </div>
        <ul>
            {
                lists[id].list.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })
            }
        </ul>
    </div>
}

export default Details;