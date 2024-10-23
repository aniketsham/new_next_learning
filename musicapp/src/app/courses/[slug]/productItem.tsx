"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  
import courseData from "@/data/music_details.json";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
 
}

export default function ProductDetails({slug}:{slug:string}) {
  const course = courseData.courses.filter(
    (course: Course) => course.slug === slug
  )[0];

  if (!course) {
    return <div>Product not found</div>;
  }

  const router = useRouter();
  return (
    <>
      {/* Breadcrumb for easier navigation */}
      <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/courses">Courses</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>{course.title}</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
      <div className="container mx-auto px-4 md:py-[10rem] sm:py-0  md:flex">
        {/* Left: Course Image and Details */}
        <div className="md:w-2/3">
          <Image
            src={course.image}
            alt={course.title}
            width={640}
            height={640}
            sizes="100vw"
            className="rounded-lg shadow-lg"
          />

          <div className="mt-6 space-y-4">
            <h1 className="text-3xl font-bold">{course.title}</h1>
            <p className="text-sm text-gray-300">
              {course.isFeatured ? "Featured Course" : ""}
            </p>

            

            <p className="text-gray-300">{course.description}</p>

            {/* Course Details */}
            <ul className="mt-4 space-y-2">
           
              <li className="text-gray-300">
                <strong>Instructor: </strong> {course.instructor}
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Pricing and Action */}
        <div className="md:w-1/3 md:ml-8 mt-8 md:mt-0 sticky top-20">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold">Price:</span>
              <span className="text-2xl font-bold text-green-600">
                ${course.price}
              </span>
            </div>

            <Button
              onClick={() => router.push("/checkout")}
              className="w-full bg-green-500 hover:bg-green-600 text-white"
            >
              Enroll Now
            </Button>

            <Button
              onClick={() => router.push("/courses")}
              variant="outline"
              className="w-full mt-4"
            >
              Back to all courses
            </Button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Reviews</h2>
        <div className="space-y-4">
          {/* Example of a single review */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <p className="font-semibold">John Doe</p>
            <div className="flex items-center space-x-2 text-yellow-400">
              <span>★ ★ ★ ★ ★</span>
              <span className="text-gray-500">5/5</span>
            </div>
            <p className="text-gray-700 mt-2">
              This course was fantastic! I learned so much and the instructor
              was great.
            </p>
          </div>
          {/* Add more reviews dynamically */}
        </div>
      </div>
    </>
  );
}
