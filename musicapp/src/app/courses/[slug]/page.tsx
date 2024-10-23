

import courseData from "@/data/music_details.json";
import ProductDetails from './productItem';
export async function generateMetadata({
  params,
}:
{
params:{slug:string}
}){
  const course = courseData.courses.filter(
    (course: Course) => course.slug === params.slug
  )[0];
  if(!course){
    return {title:'course not found'}
}
  return{
      title:course.title,
      description:course.description,
  }
}

export default function page({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div>
      <ProductDetails slug={params.slug}/>
    </div>
  )
}
