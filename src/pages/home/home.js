import '../home/home.css';
import Mynavbar from '../../components/navbar/navbar';
import ArticleItem from '../../components/articleItem/articleItem';
import { Row, Col, Container } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function Home() {
const [articles , setArticles] = useState([])

useEffect(()=>{
  axios
  .get("http://localhost:4001/articles")
  .then((response) => setArticles(response.data))
} , []);

  return (
    <>
      <Mynavbar />

      <Container>
        <h1 style={{ marginTop: '20px' }}>لیست مقالات</h1>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
          
         {articles.map((article) => (
            <Col key={article.id}>
              <ArticleItem {...article} />
            </Col>
          ))}
          
        </Row>
      </Container>
    </>
  );
}

export default Home;
