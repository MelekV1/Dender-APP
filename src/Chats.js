import React from "react"
import "./chats.css"
import Chat from "./Chat"
function Chats(){
    return(
      <div className="chats">
        <Chat name="Maeve Wiley"
          message="Hey ! how is going?"
          timestamp="30 min ago"
          profilePic="https://i2.wp.com/www.jacketscreator.com/wp-content/uploads/2020/03/sex-education-season-02-maeve-wiley-blazer.jpg?fit=1275%2C1500&ssl=1"  />

          <Chat name="Bertram Gilfoyle"
          message="Got hacked ?"
          timestamp="1h ago"
          profilePic="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-silicon-valley-martin-starr.jpg"      />

          <Chat name="Kelley Erin Hannon"
            message="Work is done"
            timestamp="5 min ago"
            profilePic="https://upload.wikimedia.org/wikipedia/en/9/93/Erin_Hannon.jpg"  />

          <Chat name="Bill Gates"
            message="Did you like the OS ?"
            timestamp="1 weeks ago"
            profilePic="https://resize-parismatch.lanmedia.fr/img/var/news/storage/images/paris-match/people-a-z/bill-gates/6057908-7-fre-FR/Bill-Gates.jpg"  />
      </div>
    )
}
export default Chats ;
