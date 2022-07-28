import React from 'react';
import { Categories } from '../components/Categories';
import NewsList from '../components/NewsList';
import { useParams } from '../../node_modules/react-router-dom/index';

export const NewsPage = ({ match }) => {
    // 카테고리가 선택되지않았으면 기본값으로 all 을 사용한다.
  const params = useParams();
  const category = params.category || 'all';
    return (
        <>
            <Categories></Categories>
            <NewsList category={category}></NewsList>
        </>
  );
};
