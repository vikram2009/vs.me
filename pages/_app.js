import '../styles/globals.css'
import { createTheme, NextUIProvider} from "@nextui-org/react"

function MyApp({ Component, pageProps }) {

  const myDarkTheme = createTheme({
    type: 'dark',

  })
  
  return (<>
<NextUIProvider theme={myDarkTheme}>
  
    <Component {...pageProps} />

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
</NextUIProvider>


    </>)
    
  
}

export default MyApp
