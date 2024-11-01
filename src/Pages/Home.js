import { Link } from "react-router-dom";
import "./Home.css"
function Home() {
    return (
        <>
            <div className="container">
                <div className="content">
                    <div className="left-content">
                        <h2>CRUD operations</h2>
                        <p>
                            CRUD stands for Create, Read, Update, and Delete. It is a set of basic operations that are commonly used in database management and application development to interact with persistent data.</p>
                        <Link to={'Products/add'} class="learn-more">
                            <span class="circle" aria-hidden="true">
                                <span class="icon arrow"></span>
                            </span>
                            <span class="button-text">Git Start</span>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;