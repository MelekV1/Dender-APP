import React , {useState , useEffect} from "react"
import TinderCard from 'react-tinder-card'
import database from "./firebase"
import "./tindercard.css"

function TinderCards(){
  const [profiles , setProfiles]=useState([
    {
      name:"Maeve Wiley",
      photo:"maeve+wiley.jpg"
    },
    {
      name:"Bertram Gilfoyle",
      photo:"gilfoyle.jpg"
    }
  ]);
  useEffect( ()=>{
    const unsubscribe = database.collection("profiles")
      .onSnapshot( (snapshot)=>
      setProfiles(snapshot.docs.map( (doc) => doc.data() ) )
    )
    return () =>{
      unsubscribe()
    }

  },[])
  return (
    <div>
      <div className="tinderCards__cardContainer ">
      {profiles.map(person => (
        <TinderCard className="swipe"
        key={person.name}
        preventSwipe={['up','down']}>
          <div style={{backgroundImage :`url(${person.photo})`}}
          className="card ">
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
      </div>
    </div>
  );
}
export default TinderCards
