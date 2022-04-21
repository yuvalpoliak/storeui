import Layout from '../components/Layout'
import Head from 'next/head';
import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  width: 100%;
`

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Web site created using create-react-app" />
    <title>Peeler</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
<link href="https://fonts.googleapis.com/css2?family=Space+Mono&family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
 rel="stylesheet" />
    </Head>
    <Container>
  <Layout>
   <Component {...pageProps} />
   </Layout>
   </Container>
   </>
  );
}

export default MyApp
