"use client"
import { useState } from 'react'
import * as types from '../../../types'
import styles from'./countries.module.css'
export interface countriesData{
    Countries: Array<types.countriesData>
}

export const Countries: React.FC<countriesData> = (props) => {
    const {Countries,} = {...props}
    const i = Math.floor(Math.random()*10)
    const [Country,setCountry] = useState<types.countriesData>({
        flag: Countries[i]!.flag,
        name: Countries[i]!.name,
        capital: Countries[i]!.capital,
        population: Countries[i]!.population,
        languages: Countries[i]!.languages,
        currency: Countries[i]!.currency,
    })
    const handleClick = () => {
        const i = Math.floor(Math.random()*10)
        let NextCountry: types.countriesData = {
        flag: Countries[i]!.flag,
        name: Countries[i]!.name,
        capital: Countries[i]!.capital,
        population: Countries[i]!.population,
        languages: Countries[i]!.languages,
        currency: Countries[i]!.currency,
    } 
        setCountry(NextCountry)
    };
    return (
        <main>
            <div className={styles.CounryWrapper}>
                <img className={styles.img} src={Country.flag}></img>
                <p className={styles.name}>{Country.name}</p>
                <div className={styles.mainText}>
                <p><b>Capital</b>: {Country.capital}</p>
                <p><b>Population</b>: {Country.population}</p>
                <p><b>Languages</b>: {Country.languages}</p>
                <p><b>Currency</b>: {Country.currency}</p>
                </div>
                <button onClick={handleClick} className={styles.btn}>Change</button>
            </div>
        </main> 
    );
}