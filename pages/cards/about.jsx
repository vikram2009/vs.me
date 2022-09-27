import React from 'react'
import {Text} from '@nextui-org/react'
import styles from '../../styles/info.module.css'

export const About = () => {
    return (
      <div className={styles.about}>
            
            <Text
    h1
    size={60}
    css={{
        textGradient: "45deg, $blue600 -20%, $pink600 50%",
    }}
    weight="bold"
    >
    About
            </Text>
            
            <Text
    h1
    size={29}
    css={{
        textGradient: "45deg, $yellow600 -20%, $red600 100%",
    }}
    weight="bold"
    >
    I am Vikram Srinivas a 13 year old software developer , Building the future 
            </Text>
            
      </div>
 
    )
}
