import {BrowserRouter as Router , Link, Route,Switch} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getComments, getPost, getUsers} from "./services/API";
import User from "./componets/user/User";
import Users from "./componets/users/Users";
import Comments from "./componets/comments/Comments";
import Posts from "./componets/posts/Posts";

export default  function App(props){




    let [posts,setPosts] = useState([]);

    useEffect(()=>{
        getPost().then(value => setPosts(value.data));
    },[])

    let [comments,setComments] = useState([])

    useEffect(()=>{
        getComments().then(value =>setComments(value.data) )
    },[])


    let [user,setUser] = useState([]);

    useEffect(()=>{

        getUsers().then(value => setUser(value.data))
    },[])


     return (
         <Router>
         <div>

             <Link to={'/users'}> user page</Link>
             <br/><hr/>
             <Link to={'/comments'}> comments page</Link>
             <br/><hr/>
             <Link to={'/posts'}> post page</Link>


              <Route path={'/users'} render={()=> <Users items={user}/>}/>
              <Route path={'/comments'} render={()=> <Comments itemsComs={comments}  />}/>
              <Route path={'/posts'} render={()=> <Posts itemsPosts={posts}/>}/>

         </div>
         </Router>)
 };