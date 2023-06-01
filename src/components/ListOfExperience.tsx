import { FaUniversity } from "react-icons/fa"
import './style.css'

const ListOfExperience = ({ title, list }: { title: string, list: string[] }) => {
    return (
        <div className="container flex gap-5">
            <p className="w-[4.5rem]">{title}</p>


            <div className="step pb-4">
                <ul>
                    {list.map((item, index) => (
                        <li className="stepper flex items-center gap-3 pb-3" key={index}>
                            <div className="circle"></div>
                            <div className="line "></div>
                            <span><FaUniversity /></span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ListOfExperience