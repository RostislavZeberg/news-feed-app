import React from 'react';
import { Layout } from 'antd';
import NewsList from './components/NewsList/NewsList';
import './styles/global.css';

const { Header, Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo">News Feed</div>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <NewsList />
        </div>
      </Content>
    </Layout>
  );
};

export default App;