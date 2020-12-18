export default function (props){
    return(
        <ul style={{listStyle:'none'}}>
            <span>name</span><li>{props.user.name}</li>
            <span>email</span><li>{props.user.email}</li>
        </ul>
    )
}