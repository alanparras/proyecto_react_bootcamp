"use client"
import { Fragment, useState } from "react"
import MenuItem from "./sub-components/menuitem"

const Loading = () => {
  return (
    <Fragment>
      <div className="w-[300px] rounded-3xl animate-pulse h-[100px] bg-slate-300"></div>
      <div className="w-[300px] rounded-3xl animate-pulse h-[100px] bg-slate-300"></div>
      <div className="w-[300px] rounded-3xl animate-pulse h-[100px] bg-slate-300"></div>
    </Fragment>
  )
}
const Menu = () => {
  const [isLoading, setIsLoading] = useState(true)
  setTimeout(() => {
    setIsLoading(false)
  }, 2000);
  return (
    <section className="container max-w-[1400px] mx-auto px-4">
        <h2 className="text-2xl font-bold text-start px-6">Our Catalogue</h2>
        <div className="flex py-10 gap-4 flex-col md:flex-row justify-center mt-2">
          {isLoading ? (
            <Loading/>
          ) : (
            <Fragment>
              <MenuItem name="adidas" price="$200" imgSrc={"/adidas.png"}/>
              <MenuItem name="nike" price="$300" imgSrc={"/nike.png"}/>
              <MenuItem name="jordan" price="$400" imgSrc={"/jordan.png"}/>
            </Fragment>
          )}
        </div>
    </section>
  )
}

export default Menu