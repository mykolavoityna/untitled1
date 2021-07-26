export default  function post({itemPost}){
    return (
        <div>
            {itemPost.id} - {itemPost.title}-{itemPost.body}
        </div>)
};