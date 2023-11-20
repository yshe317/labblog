import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

import Container from './container' 
type Props = {
  preview?: boolean
  children: React.ReactNode
}
// style={{color: "red"}}
const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen" >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
