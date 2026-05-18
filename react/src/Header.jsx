import NombreEmpresa from './nombreEmpresa.jsx';
import './Header.css'
import SearchBar from './searchBar.jsx';

function Header(){

    return (
        <>
            <div class= "header">
                <NombreEmpresa nombre="Instagram" />
                <SearchBar/>
            </div>
        </>

    );
}
export default Header;