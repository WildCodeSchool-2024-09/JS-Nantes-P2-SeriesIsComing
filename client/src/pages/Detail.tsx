import { useLoaderData } from "react-router-dom";
import "./Detail.css"

function Detail() {
  const data = useLoaderData();
  return(
    <main className="detail">
      <section>
      <hgroup>
          <h2> Image </h2>
          <p> <img src={data.imageUrl} alt= {data.name} /></p>
        </hgroup>
        <hgroup>
          <h2> Name </h2>
          <p>{data.name}</p>
        </hgroup>
        <hgroup>
          <h2> Job </h2>
          <p> {data.job} </p>
        </hgroup>
        <hgroup>
          <h2> Description </h2>
          <p> {data.description} </p>
        </hgroup>
      </section>
    </main>
    
  )
}

export default Detail;