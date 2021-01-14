import './Card.css';

function Card(props){
    console.log(props)
    return (
        <div className='card'>
            <div className='card-head'>
                <img
                    className='profile-pic'
                    src={props.profile_pic}
                    alt='Profile pic'
                />
                <div className='info-holder'>
                    <span><b>Nome:</b> {props.name}</span>
                    <span><b>E-mail:</b> {props.email}</span>
                    <span><b>Telefone:</b> {props.phone}</span>
                </div>
            </div>
            <div className='card-body'>
                <p>{props.children}</p>
            </div>
        </div>
    );
}

export default Card;
