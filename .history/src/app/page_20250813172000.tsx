'use client';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import NewsList from '../components/NewsList';
import Head from 'next/head';

export default function Home() {
  return (
    <Provider store={store}>
      <div>
        <Head>
          <title>News Feed</title>
          <meta name="description" content="Infinite scroll news feed" />
        </Head>
        
        <main>
          <h1 style={{ textAlign: 'center', margin: '20px 0' }}>News Feed</h1>
          <NewsList />
        </main>
      </div>
    </Provider>
  );
}