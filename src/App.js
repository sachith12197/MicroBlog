import React from 'react';   

import Header from './components/Header';
import Composer from './components/composer';
import Post from './components/post';

import posts from './data/posts';

class App extends React.Component{
 constructor(props){
   super(props);

   this.state = {
     posts:posts
   };
 }

//deconstruct and assign the values
 /*renderPostItem({_id, ...rest}){
    return <Post key = {_id} {...rest} /> 
 }*/

 renderPostItem = (post) => {
  return <Post key={post._id} {...post} onDelete={this.onDelete}/> //rest means a variable get the rest to rest variable
}

 //when press send the text appear 
onSubmit = (text) =>{
  const {posts} = this.state;
  const _id = posts.length +1;
  const timestamp = String(new Date());
  const post = {_id, text, timestamp};

  posts.push(post);  
  this.setState({
    posts
  })
}

onDelete = (_id) =>{
  const {posts} =  this.state;
  
  const filteredPosts = posts.filter((post) =>{
    return post._id !== _id;
  });

  this.setState({
    posts: filteredPosts
  });

}

  render(){
    const {posts} = this.state;

    return (
      <div className="container">
          <Header />
        <div className="content">
              <Composer onSubmit={this.onSubmit}/>
  
            <div className="posts">
                {posts.map(this.renderPostItem)}
            </div>
          </div>
      </div>
    );
  }
}

export default App;
