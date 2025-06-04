import "./card.css"
function Card(props){
    return(
<>
<div id="container">
    <div id="imagebox">
 <img src={props.image } alt="the man" />
 </div>
    <h3 id="title">{props.name}</h3>
    <p id="desc">{props.disc}</p>
</div>
</>



    )
}
export default Card;