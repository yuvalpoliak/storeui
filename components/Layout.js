import Announcement from "./Anouncement"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Newsletter from "./Newsletter"
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100%
`
const Layout =  ({children}) => {
    return(
        <Container>
        <Announcement/>
        <Navbar/>
        { children }
        <Newsletter/>
        <Footer/>
        </Container>
    )
}

export default Layout