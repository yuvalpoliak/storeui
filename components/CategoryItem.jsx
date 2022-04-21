import styled from 'styled-components'
import { mobile } from '../responsive'
import Link from 'next/link'

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({height: '30vh'})}
    
`
const Info = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    align-item: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    text-align: center;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: navajowhite;
    color: gray;
    cursor: pointer;
    width: 100%;
    height: 100%
`
const CategoryItem = ({item})=> {
    return(
        <Container>
            <Image src={item.image}/>
            <Info>
                <Title>{item.title}</Title>
                <Link href = '/Products'>
                <a style={{textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Button>SHOP NOW</Button></a>
                </Link>

                
            </Info>
        </Container>
    )
}

export default CategoryItem