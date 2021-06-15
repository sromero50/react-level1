import './Items.css';
function Items(props) {
    return (
        <div className="item">
            <div>{props.text}</div>
            <button className="close">&times;</button>
        </div>
    );

}

export default Items;