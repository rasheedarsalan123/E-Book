
import { Link } from "react-router-dom"

export const Hero = () => {
  return (
    <>   
     <div>

    </div>
    <section className="flex flex-col lg:flex-row text-slate-100  items-center  m-10 " >
      <div className="text my-5">
        <h1 className="text mx-1 font-bold">The Ultimate eBook Store</h1>
        <p className="text-2x1  my-7 px-1 text-slate-500">CodeBook is a popular retail store known for its diverse product range, competitive pricing, and excellent customer service. With a strong online presence and efficient shipping services, it has become a preferred destination for quality shopping experiences. </p>
        <Link to='/Product'><button className="rounded-md bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition duration-300">Explore eBook</button>
</Link>
      </div>
      <div className=" visual my-5 lg:max-w-xl">
        <img className="rounded-lg max-h-full h-180" src="/images/Hero-img.jpg" alt="Hero"  height={100} />
      </div>
    </section>
    </>

  )
}
