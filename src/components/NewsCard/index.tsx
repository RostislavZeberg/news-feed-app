import { Card, Tag, Space, Typography } from 'antd';
import { INews } from '@/types/news';
import styles from './styles.module.css';

const { Title, Paragraph } = Typography;

interface NewsCardProps {
  news: INews;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <Card className={styles.card}>
      <Title level={4} className={styles.title}>{news.title}</Title>
      <Paragraph ellipsis={{ rows: 3 }} className={styles.body}>
        {news.body}
      </Paragraph>
      <Space size="large" className={styles.footer}>
        <Space wrap>
          {news.tags.map((tag) => (
            <Tag key={tag} color="blue">{tag}</Tag>
          ))}
        </Space>
        <span className={styles.reactions}>
          {news.reactions.likes} 👍 {news.reactions.dislikes} 👎
        </span>
      </Space>
    </Card>
  );
};

export default NewsCard;