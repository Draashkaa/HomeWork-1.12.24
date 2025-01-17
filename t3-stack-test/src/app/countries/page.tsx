import { Userpage } from './components/userpage/userpage';
import * as Data from '../Data'
import styles from'./index.module.css'
import {countriesData} from '../countries' 

const Home = () => {
  return (
    <main className={styles.main}>
        <Userpage UserData={Data.UserData} UserPageComponents={Data.userCardComponents} CountriesData={countriesData}/>
    </main>
  );
}
export default Home