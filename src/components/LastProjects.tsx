import type { ElementoModelo } from "../utils/ApiCall";
import ProjectCard from './projectCard';

const data = await fetch(
  "https://db-appvendor.onrender.com/api/proyectos?fields[0]=title&populate[coverPicture][fields][0]=url"
)
  .then((response) => response.json())
  .then((data) => data.data);
  console.log(data);
export default function LastProjects() {
  return <>{



    data?.map((item:ElementoModelo,index:number) => (
      <ProjectCard key={index}  title={item.attributes?.title} coverPicture={item.attributes?.coverPicture}/>
    ))
  }</>;
}
