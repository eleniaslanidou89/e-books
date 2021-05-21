import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Loading from '../../components/Loading'

const TechnologyPage = () => {
  const [dataBooks, setDataBooks] = useState([])
  const [searchTerm, setSearchTerm] = useState("technology")
  const [index, setIndex] = useState(0) //totalitems
  const [maxResults, setmaxResults] = useState(16)
  const [body, setBody] = useState("")
  const [loading, setLoading] = useState(true)

  const getBooks = async (index) => {
    try {
      const LabelsData = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          searchTerm +
          "&maxResults=" +
          maxResults +
          "&startIndex=" +
          index
      );
      const body = await LabelsData.json();
      if (LabelsData.status !== 200) {
        console.log(
          "Error while getting Labels. See error message below: Status ",
          LabelsData.status
        );
      }
      setBody(body);
      const books = body.items;
      setDataBooks(books);
      setLoading(false);
    } catch (error) {
      console.log("Labels error. See error message below:", error);
    }
  };

  useEffect(() => {
    getBooks(index);
  }, []);

  function imageBook(b) {
    try {
      console.log("image", b.volumeInfo.imageLinks);
      var image = b.volumeInfo.imageLinks.thumbnail;
    } catch {
      var image =
        "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg";
    }
    return image;
  }

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <>
      <nav className="section font-semibold px-16 text-gray-800 fixed w-full top-0 flex header_section bg-gray-100 shadow z-10">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href="/">
            <img
              className="w-20 h-15"
              src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/857/4661951857_c3d5529a-63e7-4b01-91bb-a020279cf822.png?cb=1613511896"
              alt=""
            />
          </Link>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="flex items-center flex-shrink-0 text-black mr-6 mt-6">
            <Link href="/Categories/CategoriesPage">
              <a
                href="#responsive-header"
                className="block mt-0 lg:inline-block sm:mt-0 lg:mt-0 text-teal-200 hover:text-red-500 mr-4"
              >
                Back
              </a>
            </Link>
          </div>
        </div>
      </nav>
      <div className="mt-40 bg-gray-100 w-full min-h-screen flex flex-wrap justify-center items-center gap-3">
        <div className="backdrop w-8/12 md:w-3/4 bg-opacity-10 rounded-md p-3 text-black border border-gray-300 shadow-lg">
          <div className="w-full mt-5 mb-3 pb-3 border-b border-1 border-white">
            <h1 className="text-xl font-semibold text-shadow text-center">
              Technology
            </h1>
          </div>
          <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
            {dataBooks.map((book, idx) => (
              <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative cursor-pointer rounded transform hover:scale-105 duration-300 ease-in-out col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center">
                <div className="bg-white rounded-lg mt-2 mb-2">
                  <img
                    src={imageBook(book)}
                    className="h-20 w-20 rounded-md"
                    alt="not found"
                  />
                </div>
                <div className="badge absolute top-0 right-0 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold shadow-2xl rounded-lg">
                  Technology
                </div>
                <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-200 rounded-xl">
                  <span className="mr-1 flex items-center p-1 font-bold">
                    <button
                      className="text-sm font-bold border-gray-400 focus:outline-none"
                      // onClick={() => addToCart(book)}
                    >
                      Add to cart
                    </button>
                  </span>
                  <span className="mr-1 flex items-center px-4 text-sm font-bold border-l border-gray-400">
                    100kr
                  </span>
                </div>
                <div className="desc p-4 rounded-lg">
                  <p>{book.volumeInfo.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default TechnologyPage
