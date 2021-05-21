import Books from '../Books'
import Footer from '../../components/footer'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Loading from '../../components/Loading'
import IntroCategories from './IntroCategories'

const NavbarCategoriesBooks = () => {
  const [dataBooks, setDataBooks] = useState([])
  const [searchTerm, setSearchTerm] = useState()
  const [searchTermValue, setSearchTermValue] = useState()
  const [index, setIndex] = useState(0); //totalitems
  const [maxResults, setmaxResults] = useState(16)
  const [loading, setLoading] = useState(true)
  const [body, setBody] = useState("")

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
      console.log("Error. See error message below:", error);
    }
  };

  useEffect(() => {
    getBooks(index);
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setSearchTermValue(event.target.value);
    setIndex(0)
  }

  const handleClick = () => {
    getBooks(index);
    setSearchTermValue("")
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
            <Link href="/">
              <a
                href="#responsive-header"
                className="block mt-1 lg:inline-block sm:mt-0 lg:mt-0 text-teal-200 hover:text-red-500 mr-4"
              >
                Home
              </a>
            </Link>
          </div>
        </div>
        <div className="bg-white rounded-full hidden lg:flex items-center">
          <input
            className="rounded-l-full w-full p-3 ml-6 mt-0 focus:outline-none"
            value={searchTermValue}
            onChange={handleChange}
            id="search"
            type="text"
            placeholder="Find a book"
          />
          <button
            onClick={handleClick}
            className="ml-0 rounded-full focus:outline-none w-7 h-7 flex items-center justify-center"
          >
            <img
              onClick={handleClick}
              className="w-10 h-5 mr-7"
              src="https://www.flaticon.com/premium-icon/icons/svg/2652/2652234.svg"
            />
          </button>
        </div>
      </nav>
      <IntroCategories />
      <Books
        dataBooks={dataBooks}
        getBooks={getBooks}
        index={index}
        setIndex={setIndex}
        loading={loading}
        setLoading={setLoading}
      />
      <Footer />
    </>
  )  
}

export default NavbarCategoriesBooks
