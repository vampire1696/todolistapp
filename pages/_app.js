import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../components/Layout'
import Authcontext from '../context/Authcontext'

function MyApp({ Component, pageProps }) {
  return <Authcontext><Layout><Component {...pageProps} /></Layout></Authcontext>
}

export default MyApp
