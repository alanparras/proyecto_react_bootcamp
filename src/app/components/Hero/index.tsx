import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex items-center justify-center flex-col py-8 px-8 max-w-[1400px] mx-auto">
        <div className="container flex items-center lg:flex-row flex-col justify-between xl:min-h-[680px]">
            {/* Left Column */}
            <div className="flex flex-col justify-center py-14 md:py-0 text-center md:text-left space-y-6 lg:max-w-[580px]">
                <h1 className="text-5xl lg:text-6xl font-bold">
                    The <br />
                    Best <span className="text-secondary">Shoes!!</span>
                </h1>
                <h2 className="text-2xl tracking-wide">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ea?
                </h2>
                <p className=" text-lg mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ea saepe ex optio vero laboriosam quidem esse, 
                    totam quaerat vitae. Similique.
                </p>
                <button className="bg-primary text-white px-6 py-2 rounded-lg">Order now</button>
            </div>

            {/* Right Column */}
            <article className="flex items-center justify-center">
                <Image
                src={"/icono.png"}
                alt="Logo pagina"
                width={550}
                height={550}
                className="w-[350px] md:w-[550px] drop-shadow-2xl brightness-105"
                />
            </article>
        </div>
    </section>
  )
}

export default Hero