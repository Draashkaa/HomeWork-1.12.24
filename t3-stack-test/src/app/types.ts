import { SkillsProps } from "./components/skills/skills"
import { StaticImageData } from "next/image"

export type userInfo = {
    avatarSrc:StaticImageData,
    CheckMarkSrc:StaticImageData,
    ClockSrc:StaticImageData,
    name:string,
    JobTitle:string,
    skills:Array<string>
    Joined:string,
}

export type userCardComponents = {
    Skills: React.FC<SkillsProps>
}