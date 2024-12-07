import * as types from './types'
import avatarSrc from '../../public/avatar.jpeg'
import CheckMarkSrc from '../../public/checkmark.png'
import ClockSrc from '../../public/clock.svg'
import { Skills } from './components/skills/skills'

export const SkillsArray:Array<string> = ['DOTA2','CS2','HTML','CSS','JS','React','Redux','Node','MongoDB','Python','Flask','Django','NumPy','Pandas','Data Analysis','MYSQL','GraphQL','D3.js','Gatsby','Docker','Heroku','Git']

export const UserData:types.userInfo = {   
    avatarSrc: avatarSrc,
    CheckMarkSrc: CheckMarkSrc,
    ClockSrc: ClockSrc,
    name: 'Vadim Kozakov',
    JobTitle: 'Senior streamer, Serbia',
    Joined: 'Joined on Jun 18, 2013',
    skills: SkillsArray
}

export const userCardComponents:types.userCardComponents = {
    Skills: Skills
}
