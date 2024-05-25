function Nav() {
    return (
        <nav className="w-full h-10 mt-4">
            <ul className="flex justify-start h-full">
                <li className="nav-list-item w-auto"> <a href="./page.js">Home</a></li>
                <li>/</li>
                <li className="nav-list-item">About me</li>
                <li>/</li>
                <li className="nav-list-item">Projects</li>
                <li>/</li>
                <li className="nav-list-item">Contact</li>
            </ul>
        </nav>
    )
}


export default Nav;