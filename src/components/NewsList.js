import styled from 'styled-components';
import { NewsItem } from './NewsItem';
import axios from '../../node_modules/axios/index';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=4550eeefa6964ab297ccdff00ee598c5`,
    );
  }, [category]);
  // 대기중일때
  if (loading) {
    return <NewsListBlock>대기중 ...</NewsListBlock>;
  }
  // 아직 articles 값이 설정되지 않았을때
  if (!response) {
    return null;
  }
  if (error) {
    return <NewsListBlock>에러발생!</NewsListBlock>;
  }
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
