import {Avatar} from './components/avatar';
import { Skills } from './components/skills';
import styles from'./index.module.css'

const Home = () => {
  const SkillsArray = ['DOTA2','CS2','HTML','CSS','JS','React','Redux','Node','MongoDB','Python','Flask','Django','NumPy','Pandas','Data Analysis','MYSQL','GraphQL','D3.js','Gatsby','Docker','Heroku','Git']
  const avatarSrc = "./avatar.jpeg"
  return (
    <main className={styles.main}>
    <Avatar avatarSrc={avatarSrc} styles={styles}/>
    <h1 className={styles.TextHeading}>Vadim Kozakov<img className={styles.checkmark} src={"./checkmark.png"}/></h1>
    <h2 className={styles.TextMain}>Senior streamer, Serbia</h2>
    <h3 className={styles.TextHeading}>SKILLS</h3>
    <Skills styles={styles} SkillsArray={SkillsArray}/>
    <h2 className={styles.TextMain}><img className={styles.clock} src={"./clock.svg"}/>Joined on Jun 18, 2013</h2>
    </main>
  );
}
export default Home
