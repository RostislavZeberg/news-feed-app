'use client';

import { Card, Tag, Space, Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function NewsCard({
  news,
  className = '',
}: {
  news: any;
  className?: string;
}) {
  return (
    <Card className={`shadow-md ${className}`}>
      <Title level={4} className="!text-blue-600 !mb-3">
        {news.title}
      </Title>
      
      <Paragraph ellipsis={{ rows: 3 }} className="!text-gray-600 !mb-4">
        {news.body}
      </Paragraph>
      
      <Space size="large" className="flex justify-between">
        <Space wrap>
          {news.tags.map((tag: string) => (
            <Tag key={tag} color="blue">
              {tag}
            </Tag>
          ))}
        </Space>
        
        <span className="font-bold text-red-500">
          {news.reactions.likes} 👍 {news.reactions.dislikes} 👎
        </span>
      </Space>
    </Card>
  );
}