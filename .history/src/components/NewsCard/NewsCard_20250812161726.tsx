import React from 'react';
import { Card, Tag, Space, Typography } from 'antd';
import styles from './styles.module.css';

const { Text, Title } = Typography;

interface NewsCardProps {
  post: {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: number;
  };
}

const NewsCard: React.FC<NewsCardProps> = ({ post }) => {
  return (
    <Card className={styles.card} hoverable>
      <Title level={4}>{post.title}</Title>
      <Text 
        className={styles.body} 
        ellipsis={{ 
          tooltip: post.body, 
          rows: 3 
        }}
      >
        {post.body}
      </Text>
      <Space size={[0, 8]} wrap>
        {post.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Space>
      <div className={styles.reactions}>
        <Text type="secondary">Reactions: {post.reactions}</Text>
      </div>
    </Card>
  );
};

export default NewsCard;