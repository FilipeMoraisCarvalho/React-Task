import * as C from "./styled";
import rocket from "../../assets/images/rocket.svg";
import logo from "../../assets/images/todo.svg";
export const Header = () => {
    return(
        <C.HeaderArea>
            <C.LogoArea>    
                <img src={rocket} height={36} width={22}/>
                <img src={logo} height={48} width={92} />
            </C.LogoArea>
            
        </C.HeaderArea>
    );
}