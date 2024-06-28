import { Link } from 'react-router-dom';
import logo from './src/images/logo.svg';
import NavData from '../Data/NavData';

const Navbar = () =>{
    return(
        <div>
            <img src ={logo} alt='logo' width={100}/>

            <ul>
                {NavData.map((data, index)=>(

                    <li key={index}>
                        <Link to={data.link}>{data.linkName}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Navbar;