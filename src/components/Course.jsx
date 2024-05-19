import { Link } from "react-router-dom";
import list from "../../public/list.json";
import Cards from "../components/Cards";

const Course = () => {
  console.log(list)
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
          We&coppy;re delighted to have you {" "}
          <span className="text-pink-500">Herex!:)</span>
        </h1>
        <p className="mt-12">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, modi. Veniam asperiores vero repellat dolor et deserunt veritatis blanditiis. Accusamus molestiae dolore ducimus culpa et iure, asperiores dolores nobis repellat!. Cumque soluta facilis inventore facere. Expedita, eaque nulla molestiae iure excepturi quod animi vero eius aliquid soluta id eum ut sit quo.
        </p>
        <Link to={"/"}>
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </Link>

      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {
          list.map((item) => (
            <Cards item={item} key={item.id} />
          ))
        }
      </div>

    </div>
  )
}

export default Course