import "./Header.css"


const Header = (props) => {
    return(
        <div>
        <h1 className="Header-Title">{props.title}</h1>
        </div>
    )
 
};
    
export default Header;