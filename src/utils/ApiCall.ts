export type ElementoModelo = {
    id?: number;
    attributes?: {
      title?: string;
      coverPicture?: {
        data?: {
          id?: number;
          attributes?: {
            url?: string;
          };
        };
      };
    };
  };
 export type Title = string;

 export type CoverPicture = {
  data: {
    id: number;
    attributes: {
      url: string;
    };
  };
};

export interface ProjectCardProps {

  title: Title;
  coverPicture: CoverPicture;
}


  
  export default async function fetchData(): Promise<ElementoModelo[]> {
    try {
      const response = await fetch(
        "https://db-appvendor.onrender.com/api/proyectos?fields[0]=title&populate[coverPicture][fields][0]=url"
      );
      if (!response.ok) {
        throw new Error("No se pudo completar la solicitud");
      }
      const data = await response.json();
   console.log(data.data);
      return data.data;
    } catch (error) {
      console.error(error);
      throw error; // Puedes manejar el error o lanzarlo nuevamente
    }
  }

