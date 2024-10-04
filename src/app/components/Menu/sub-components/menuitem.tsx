import Image, { StaticImageData } from "next/image"

type MenuItemProps ={
    name: string,
    price: string,
    imgSrc: StaticImageData | string
}
const MenuItem = ({name, price, imgSrc}: MenuItemProps) => {
  return (
    <article className="bg-white group shadow-lg px-5 hover:scale-110 transition-transform ease-in-out duration-200 relative flex rounded-3xl h-[100px] md:justify-between justify-around items-center w-full md:w-[300px]">
        <div>
        <Image 
            className="size-32 group-hover:scale-110 transition-transform ease-in-out duration-200 absolute -top-5 object-contain" 
            src={imgSrc} 
            alt={name} 
            width={300} 
            height={300}/>
        </div>
        <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-primary text-xl font-bold ">{price}</p>
        </div>
    </article>
    
  )
}

export default MenuItem