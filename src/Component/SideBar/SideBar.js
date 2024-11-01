import { Link } from 'react-router-dom';
import "./SideBar.css"
function SidewBar() {
    return (
        <>
            <div className="SideBar">
                <h4>CRUD operations</h4>
                <ul className="SideBar-ul">
                    <li><Link to={'/'} href="#">Home</Link>
                    </li>
                    <li><Link to="Products" >All products</Link>
                    </li>
                    <li> <Link to={'Products/add'}>Add Prodects </Link></li>
                </ul >
            </div>
        </>
    )
}

export default SidewBar;