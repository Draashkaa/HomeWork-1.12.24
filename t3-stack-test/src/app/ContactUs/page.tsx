"use client"
import Link from 'next/link'
import styles from './index.module.css'
import { Mainpage } from './components/mainpage/mainpage'

const Home = () => {
    return (
        <main className={styles.main}>
        <Link href='http://localhost:3000' ><button className={styles.btn}>Назад</button></Link>    
        <Mainpage></Mainpage>
        </main>
    )
}
export default Home