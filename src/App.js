import React from 'react';   
import Header from './components/Header';
import Composer from './components/composer';
import Post from './components/post';

function App() {
  return (
    <div className="container">
        <Header />
      <div className="content">
            <Composer />

          <div className="posts">
              <Post />
              <Post />
              <Post />  
          </div>
        </div>
    </div>
  );
}

export default App;
