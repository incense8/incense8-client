import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { StoreProivder } from "../context/authContext";




function MyApp({ Component, pageProps }) {

  if (typeof window !== undefined) {
  return (<StoreProivder ><Component {...pageProps} />   </StoreProivder>) 

  }
  else{
    return <div> <h1> Loadding....</h1></div>
  }

}

export default MyApp;
