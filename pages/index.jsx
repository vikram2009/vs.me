import Head from "next/head";
import { Card, Text } from "@nextui-org/react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import 'animate.css';

//svg imports :-
import github from "../public/github.svg";

//cards :-
import { Info } from "../cards/Info";
import { About } from "../cards/About";
import { Technologies } from "../cards/Technologies";
import { Contact } from "../cards/Contact";
export default function Home() {

  return (
    <div className="animate__animated animate__slideInDown">
      <Head>
        <title>Vikram Srinivas</title>
        <link rel="icon" href="/icon.ico" />
        <meta
          data-react-helmet="true"
          name="description"
          content="13 year old full stack developer"
        />
        <meta
          data-react-helmet="true"
          property="og:image"
          content="https://www.vikramsrinivas.me/icon.jpg"
        />
        <meta
          data-react-helmet="true"
          name="keywords"
          content="files,file manager,codezzzzzzzzz,file explorer,vdfs,distributed filesystem,cas,content addressable storage,virtual filesystem,photos app, video organizer,video encoder,tags,tag based filesystem , vikram srinivas , vs , toxic , coder , programmer , vikramsrinivas , 13 year old  full stack developer , 13 year old software developer , toxic coder ,_toxic_coder , vikram2009 , vikrams , vsrinivas , rust , c , c++ , cpp , html , css , radix-ui , next-ui , 13 yeard old , 13 y/o , blog , blogger , vlog , vlogger , coder 24/7 , golang , tech , nerd"
        />
        <meta
          data-react-helmet="true"
          name="author"
          content="Vikram Srinivas"
        />
        <link href="https://www.vikramsrinivas.me/icon.jpg" rel="canonical" />
        <meta content="" property="og:image" />
      </Head>
      <main>
      <Info />
        <About />
        <Technologies />
        <Contact />
      
      </main>
    </div>
  );
}

