export default function Banner() {
  return (
    <section className="w-full mb-7 ">
      <section className="flex   flex-col md:flex-row  container lg:max-h-[800px]   mx-auto md:px-6 lg:px-24 px-3">
        <article className=" flex-1 flex flex-col justify-center  order-2 md:order-1">
          <div>
            <h1 className="text-lg  capitalize">
              estudio de diseño web
            </h1>
            <p className="text-sm py-2 lg:py-8 hidden ">
              Bienvenido a [Tu Nombre de Empresa], tu socio digital para la
              creación de sitios web profesionales y aplicaciones móviles
              personalizadas. Transformamos tus visiones en realidad digital,
              ofreciendo soluciones que impulsan tu presencia en línea y
              conectan con tu audiencia. Desde la estrategia hasta la ejecución,
              estamos aquí para potenciar tu éxito en el mundo digital.
            </p>
            <p className="text-3xl py-3 lg:py-8 flex lg:text-5xl lg:font-extrabold lg:pr-4">Diseño Web y Apps Móviles de Alto Impacto</p>
            <div className="flex w-full py-3">
              <button className=" bg-black text-white px-10 py-3 rounded-md">
                Asesoria gratis
              </button>
             
            </div>
          </div>
        </article>

        <article className=" flex-1 order-1 md:order-2">
          <div className=" flex justify-center items-end h-full w-full py-9 flex-1 md:px-0 ">
            <div className="aspect-[9/14] md:aspect-[1.2/1] bg-gray-400 flex-1 ">
              <div className=" bg-slate-400 lg:w-[500px] md:flex-1"></div>{" "}
            </div>
          </div>
        </article>
      </section>
    </section>
  );
}
