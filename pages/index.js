import Head from 'next/head'
import HideAppBar from '../components/AppBar.js'
import { TabTitle } from '../assets/text/Contents.js';

const Index = () => (
  <div>
    <Head>
      <title>
        {TabTitle}
      </title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    </Head>
    <HideAppBar/>
    <p>Hello Next.js</p>
  </div>
)

export default Index
