import Post from "../post/Post";

export default  function Posts({itemsPosts}){
     return (
         <div>
             {
                 itemsPosts.map((value,index) => <Post ket={index} itemPost={value}/>)
             }
         </div>)
 };