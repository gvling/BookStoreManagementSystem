import Head from 'next/head';
import { TabTitle } from '../assets/text/Contents.js';
import HideAppBar from '../components/AppBar.js';
import AddBook from '../components/AddBook.js';

const Index = () => (
  <div>
    <Head>
      <title>
        {TabTitle}
      </title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    </Head>
    <HideAppBar/>
    <AddBook/>
  </div>
)

export default Index
