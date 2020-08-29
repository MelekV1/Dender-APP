import React ,{useState} from "react"
import "./ChatScreen.css"
import Avatar from '@material-ui/core/Avatar';

function ChatScreen(){
  const [input,setInput]=useState("")
  const [messages , setMessages]=useState([
    {
      name:"Maeve Wiley",
      message:"What's up ?",
      photo:"https://i2.wp.com/www.jacketscreator.com/wp-content/uploads/2020/03/sex-education-season-02-maeve-wiley-blazer.jpg?fit=1275%2C1500&ssl=1"
    },{
      message:"it s all good"
    },{
      name:"Maeve Wiley",
      message:"Meet you in school",
      photo:"https://i2.wp.com/www.jacketscreator.com/wp-content/uploads/2020/03/sex-education-season-02-maeve-wiley-blazer.jpg?fit=1275%2C1500&ssl=1"
    }
  ])
  const handleSend=e=>{
    e.preventDefault();
    setMessages([...messages,{message:input}]);
    setInput("");
  }
  return(
    <div className="ChatScreen">
      <p className="ChatScreen__timestamp">You matched with Maeve on 28/08/20</p>
      {messages.map(
        (message)=>(
          message.name?(
            <div className="ChatScreen__message">
              <Avatar className="ChatScreen__image" alt={message.name} src={message.photo}/>
              <p className="ChatScreen__text">{message.message}</p>
            </div>
          ) : (
            <div className="ChatScreen__message">
              <p className="ChatScreen__textUser">{message.message}</p>
            </div>
          )

      ))}

      <div   className="ChatScreen__input">
        <form>
          <input
            className="ChatScreen__inputField"
            type="text"
            onChange={(e)=>setInput(e.target.value)}
            placeholder="Type a message"/>
          <button  onClick={handleSend} className="ChatScreen__inputButton">SEND</button>
        </form>
      </div>

    </div>
  )
}
export default ChatScreen
