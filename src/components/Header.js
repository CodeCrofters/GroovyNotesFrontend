import Title from "./Title";
import Userlogo from "./Userlogo";

const Header = () => {
    return (
        <nav className="bg-gray-400 shadow-sm">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                <Title />
                <div className="mr-auto ml-auto">
                    <ul className="p-2 m-2 flex flex-wrap justify-center">
                        <li className="p-2 m-2">Home</li>
                        <li className="p-2 m-2">About</li>
                        <li className="p-2 m-2">Contact Us</li>
                    </ul>
                </div>
                <Userlogo />
            </div>
        </nav>
    )
}

export default Header;