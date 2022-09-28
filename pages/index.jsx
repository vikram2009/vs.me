import Head from "next/head";
import { Card, Text } from "@nextui-org/react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

//svg imports :-
import github from "../public/github.svg";

//cards :-
import { Info } from "../cards/Info";
import { About } from "../cards/About";
import { Technologies } from "../cards/Technologies";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vikram Srinivas</title>
        <link rel="icon" href="/icon.ico" />
        <meta
          data-react-helmet="true"
          name="description"
          content="Combine your drives and clouds into one database that you can organize and explore from any device. Designed for creators, hoarders and the painfully disorganized."
        />
        <meta
          data-react-helmet="true"
          property="og:image"
          content="https://raw.githubusercontent.com/spacedriveapp/.github/main/profile/spacedrive_icon.png"
        />
        <meta
          data-react-helmet="true"
          name="keywords"
          content="files,file manager,spacedrive,file explorer,vdfs,distributed filesystem,cas,content addressable storage,virtual filesystem,photos app, video organizer,video encoder,tags,tag based filesystem"
        />
        <meta
          data-react-helmet="true"
          name="author"
          content="Spacedrive Technology Inc."
        />
      </Head>

      <main>
        <Info />
        <About />
        <Technologies />
      </main>
    </div>
  );
}
