import { FC } from "react"
import { ICard } from "../shared/types"
import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa"
import ListOfExperience from "./ListOfExperience"

const Card: FC<ICard> = ({ cardInfo }) => {
  return (
    <div className="border border-gray-300 rounded-lg w-1/2  pl-10">
        <div className="flex flex-col  py-3 border-gray-300 border-b mb-3">
            <div className="flex items-center gap-5">
                <p className="italic text-lg">{cardInfo.name}</p>
                <a href="#" title={cardInfo.phone_number}>
                    <FaPhone className="text-gray-500 m-0"/>
                </a>
                <a href={cardInfo.personal_email}>
                    <FaEnvelope className="text-gray-500 m-0"/>
                </a>
                <a href={cardInfo.linkedIn}>
                    <FaLinkedin className="pl-2 border-gray-300 border-l m-0 w-7"/>
                </a>
            </div>

            <div className="flex items-center">
                <p>{cardInfo.current_title}</p>
                <div className="mx-2 w-1 h-1 bg-gray-300 rounded-full"></div>
                <p className="text-gray-400 m-0">{cardInfo.location}</p>
            </div>
        </div>
        <div className="">
            <ListOfExperience title={"Experience"} list={cardInfo.experience} />
            <ListOfExperience title={"Education"} list={cardInfo.education} />
        </div>
    </div>
  )
}

export default Card