import React from "react";
import styles from'./index.module.css'

export interface SkillsProps{
  styles:object;
  SkillsArray: Array<string>;
}

export const Skills: React.FC<SkillsProps> = (props) => {
    const {SkillsArray,styles} = {...props}
  return (
    <main>
        <div className={styles.mainSkills}>
            {SkillsArray.map(function(data) {
                return (
                    <div className={styles.skills}>
                        {data}
                    </div>
                )
            })}
        </div>
    </main>
  );
}