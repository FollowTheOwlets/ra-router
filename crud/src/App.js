import logo from './logo.svg';
import './App.css';
import { PostContext } from './context/PostContext';
import { usePost } from './hooks/usePost';
import { Menu } from './components/Menu';
import { Page } from './components/Page';
import { BrowserRouter } from 'react-router-dom';

function App() {

  const { post, setPost, clearContext } = usePost();

  return (
    <PostContext.Provider value={{ post, setPost, clearContext }} >
      <BrowserRouter>
        <Menu />
        <Page />
      </BrowserRouter>
    </PostContext.Provider>
  );
}

export default App;
