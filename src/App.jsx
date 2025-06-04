import Card from "./card"
import "./App.css"
let discription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque molestias amet repudiandae reiciendis vel, ex eaque. Quibusdam eum dignissimos iste."
function App() {
  return (
    <>
    <div id="cardcont">
      <Card name="arun" disc={discription}  image="https://cdn.pixabay.com/photo/2025/04/05/11/06/water-drops-9515029_1280.jpg"/>
      <Card name="pankaj" disc={discription} image="https://cdn.pixabay.com/photo/2025/05/19/13/34/girl-9609522_640.jpg"/>
      <Card name="naman" disc={discription} image="https://cdn.pixabay.com/photo/2022/11/13/15/49/water-drop-7589539_1280.jpg"/>
      <Card name="rahul" disc={discription} image="https://cdn.pixabay.com/photo/2025/05/06/03/51/man-9581593_640.jpg"/>
    </div>
    </>

  )
}
export default App;