import React from 'react';
import { Card, Tag, Space, Typography } from 'antd';
import styles from './styles.module.css';

const { Paragraph, Title } = Typography;

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
      <Paragraph 
        className={styles.body} 
        ellipsis={{ 
          rows: 3,
          expandable: false,
          tooltip: post.body
        }}
      >
        {post.body}
      </Paragraph>
      <Space size={[0, 8]} wrap>
        {post.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Space>
      <div className={styles.reactions}>
        <Typography.Text type="secondary">Reactions: {post.reactions}</Typography.Text>
      </div>
    </Card>
  );
};

export default NewsCard;