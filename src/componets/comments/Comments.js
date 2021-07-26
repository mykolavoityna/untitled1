import Coment from "./Coment";

export default  function Comments({itemsComs}){
     return (
         <div>
             {
                 itemsComs.map((value,index) => <Coment key={index} itemCom={value}/>)
             }
         </div>)
 };