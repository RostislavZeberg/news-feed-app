import { Card, Tag, Space, Typography } from 'antd';

import styles from './styles.module.css';
import { INews } from '@/types/news';

const { Title, Paragraph } = Typography;

// Пропсы компонента
interface NewsCardProps {
  news: INews; // Объект новости
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <Card className={styles.card}>
      {/* Заголовок новости */}
      <Title level={4} className={styles.title}>
        {news.title}
      </Title>
      
      {/* Текст новости (ограничен 3 строками) */}
      <Paragraph ellipsis={{ rows: 3 }} className={styles.body}>
        {news.body}
      </Paragraph>
      
      {/* Блок с тегами и реакциями */}
      <Space size="large" className={styles.footer}>
        {/* Отображение тегов */}
        <Space wrap>
          {news.tags.map((tag) => (
            <Tag key={tag} color="blue">
              {tag}
            </Tag>
          ))}
        </Space>
        
        {/* Количество реакций */}
        <span className={styles.reactions}>
          {news.reactions} 👍
        </span>
      </Space>
    </Card>
  );
};

export default NewsCard;