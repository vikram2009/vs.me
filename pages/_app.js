import '../styles/globals.css'
import { createTheme, NextUIProvider} from "@nextui-org/react"

function MyApp({ Component, pageProps }) {

  const myDarkTheme = createTheme({
    type: 'dark',

  })
  
  return (<>
<NextUIProvider theme={myDarkTheme}>
  
    <Component {...pageProps} />
</NextUIProvider>
    </>)
    
  
}

export default MyApp
