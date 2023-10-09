import React from 'react';

type Title = string;

type CoverPicture = {
  data: {
    id: number;
    attributes: {
      url: string;
    };
  };
};

interface ProjectCardProps {
  title: Title;
  coverPicture: CoverPicture;
}

export default function ProjectCard({ title='', coverPicture }: any): JSX.Element {
  return (
    <div 
      className="h-96 p-6  overflow-hidden  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
 
  <img src={coverPicture.data.attributes.url} className=" object-cover w-full h-full " alt={title}  />
  
   
    </div>
  );
}
