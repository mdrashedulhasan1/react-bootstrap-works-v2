import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import NewsCard from './components/NewsCard/NewsCard';
function App() {
  const [news, setNews] = useState([]);
  useEffect(()=>{
    fetch('https://newsapi.org/v2/everything?q=apple&from=2022-05-05&to=2022-05-05&sortBy=popularity&apiKey=4cd085843a734cd48a840560799a02df')
    .then(res => res.json())
    .then(data => setNews(data.articles))
  },[])
  return (
    <div className="App">
      <h1>Popular News</h1>
      {
        news.length === 0? <Spinner animation="border" variant="success" />
        :
        <Row xs={1} md={3} lg={4} className="g-4">
            {
              news.map(news => <NewsCard key={news.title} news={news}></NewsCard>)
            }
        </Row>
      }
    </div>
  );
}

export default App;
