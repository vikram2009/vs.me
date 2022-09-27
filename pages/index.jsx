import Head from "next/head";
import { Card, Text } from "@nextui-org/react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

//svg imports :-
import github from '../public/github.svg'

//cards :-
import { Info } from './cards/info'
import { About } from './cards/about'
export default function Home() {


  return (
    <div>
      <Head>
        <title>Vikram Srinivas</title>
        
      </Head>
   
      <main>
        <Info />
        <About />
      </main> 
 

        


    </div>
  );
}
