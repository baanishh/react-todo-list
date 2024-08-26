import './Css/TodoItems.css'
import tick from './Assets/tick.png'
import not_tick from './Assets/not_tick.png'
import cross from './Assets/cross.png'


const TodoItems = ({no,display,text,setTodo}) => {

const del=(no)=>{
  let data=JSON.parse(localStorage.getItem("todos"))
  data=data.filter((item)=>item.no !==no)
  setTodo(data)
}

const toggle=(no)=>{
let data=JSON.parse(localStorage.getItem("todos"))
for(let i=0; i<data.length; i++){
  if(data[i].no===no){
    if(data[i].display===""){
      data[i].display="line-through";
    }
    else{
      data[i].display="";
    }
    break;
  }
}
setTodo(data);
}

  return (
    <div className='todoitems'>
      <div onClick={()=>{toggle(no)}} className={`todoitems-container ${display}`}>
       {display==="" ? <img src={not_tick} alt="" /> : <img src={tick} alt="" /> } 
        <div className="todoitems-text">{text}</div>
      </div>
      <img onClick={()=>{del(no)}} className='todoitem-cross-icon' src={cross} alt="" />
    </div>
  )
}

export default TodoItems
