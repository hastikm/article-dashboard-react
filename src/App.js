import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from '../src/pages/home/home.js';
import EditArticle  from './pages/editArticle/editArticle.js';
import Article from './pages/Article/article.js';
import Addarticle from './pages/addArticle/addarticle.js';
import About from './pages/about/about.js';

import './App.css';

function App() {
  return (
   <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/editarticle/:articleId' element={<EditArticle/>}/>
    <Route path='/article/:articleId' element={<Article />}/>
    <Route path='/addarticle' element={<Addarticle />}/>
    <Route path='/about' element={<About />}/>
  </Routes>
  </BrowserRouter>


   </>
  );
}

export default App;
