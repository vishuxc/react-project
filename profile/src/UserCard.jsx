const userdata=[
{
  name:"Arthur",
   city:"japan",
   description:"seventh hokage",
   skills:["front-end","html","node.js","python","Node.js"],
   online:true,
   profile:"images/img1.png",
 

},
{
  name:"Luffy",
  city:"japan",
  description:"future king of pirates",
  skills:["package-end","mysql","solidity","sonala","java"],
  online:true,
  profile:"images/img3.png",

},
{
  name:"Eren",
  city:"America",
  description:"hope of mankind",
  skills:["back-end","react.js","ux"],
  online:false,
  profile:"images/img4.jpg",

}
];
function User(props){
  return (
    <div className='card-container'>
  <span className={props.online?"pro online":"pro offline"}>{props.online?"online":"offline"}

  </span>
  <img src={props.profile} className='img'alt='User' height='130px'></img>
   <h3>{props.name}</h3>
   <h3>{props.city}</h3>
   <p>{props.description}</p>
   <div className='buttons'>
      <button className='primary'>Message</button>
      <button className='primaryoutline'>Following</button>
   </div>
   <div className='skills'>
  <h6>Skills</h6>
  <ul>
    {props.skills.map((skill, index) => (
      <li key={index}>{skill}</li>
    ))}
  </ul>
</div>
</div>
  )
}

export const UserCard = () => {
  return (
    <>
    {
      userdata.map((user,index) =>(
        <User key={index}
        name={user.name}
        city={user.city}
        description={user.description}
        online={user.online}
        profile={user.profile}
        skills={user.skills}/>
      ))
    }
    </>
  
    // <User  name="vishnu" city="new york" description="Front-end developer" skills={["ui/ux","react","html","node.js"]} online={true} profile="img2.png"/>

  )
}
