import Head from "next/head";
import { Card, Text } from "@nextui-org/react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

//svg imports :-
import github from '../public/github.svg'

//cards :-
import { Info } from '../cards/Info'
import { About } from '../cards/About'
import { Technologies } from '../cards/Technologies'

export default function Home() {


  return (

    <div>
      <Head>
        <title>Vikram Srinivas</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
   
      <main>
    
        <Info />
        <About />
        <Technologies />
      </main> 
 

        


    </div>
  );
}
