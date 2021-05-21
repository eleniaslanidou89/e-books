import React, { useState } from 'react'
import BestSellers from './BestSellers/Best_Sellers'
import BuyingForm from './BuyingForm/BuyingForm'
import BestSellersSectionTitle from './BestSellers/BestSellersSectionTitle'

const PAGE_PRODUCTS = "dataBooks";
const PAGE_CART = "cart";
const PAGE_FORM = "form";

const Books = ({ dataBooks, getBooks, index, setIndex, setLoading }) => {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);
  const [readMore, setReadMore] = useState(false);
  const [maxResults, setmaxResults] = useState(16);
  const [body, setBody] = useState("");
  const [add, setAdd] = useState(false);
  const [buy, setBuy] = useState(false);

  // Next Button
  const nextButton = () => {
    setLoading(true);
    const tempPage = index;
    if (body.totalItems <= index + maxResults) {
      //no more books
      setIndex(tempPage);
      setLoading(false);
      return;
    }
    if (dataBooks.length < maxResults) {
      if (dataBooks.length === 0) {
        //no more books
        setIndex(tempPage);
        setLoading(false);
        return;
      } else {
        setIndex(tempPage + dataBooks.length);
        getBooks(tempPage + dataBooks.length);
      }
    } else {
      setIndex(tempPage + maxResults);
      getBooks(tempPage + maxResults);
    }
  };

  // Previous Button
  const previousButton = () => {
    setLoading(true);
    const tempPage = index;
    setIndex(tempPage - maxResults);
    if (index < maxResults) {
      setIndex(tempPage);
      setLoading(false);
      //msg
    } else {
      getBooks(tempPage - maxResults);
      setIndex(tempPage - maxResults);
    }
  };

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

  const renderCart = () => {
    if (buy) {
      return <BuyingForm cart={cart}></BuyingForm>;
    }
    if (cart.length === 0) {
      return (
        <main>
          <div className="bg-red-100 w-full min-h-screen flex flex-wrap justify-center items-center gap-3 py-5">
            <h2 className="mr-10">no books left</h2>
            <button
              className="mr-1 p-1 px-2 font-bold border-t border-b border-gray-400"
              onClick={() => navigateTo(PAGE_PRODUCTS)}
            >
              view books
            </button>
          </div>
        </main>
      );
    }
    return (
      <>
        <div className="bg-red-100 w-full min-h-screen flex flex-wrap justify-center items-center gap-3">
          <div className="bg-opacity-10 rounded-md p-3 text-white border border-gray-300 shadow-lg">
            <div className="w-full mt-5 mb-3 pb-3 border-b border-1 border-white">
              <h1 className="text-3xl font-semibold text-shadow text-center">
                Cart
              </h1>
            </div>
            <div className="flex flex-wrap">
              {cart.map((book, idx) => (
                <div
                  className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative cursor-pointer rounded transform hover:scale-105 duration-300 ease-in-out col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-cent"
                  key={idx}
                >
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt="image"
                    className="w-20 h-20 mt-2 mb-2 ml-10 rounded-lg"
                  />
                  <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-200 rounded-xl">
                    <span className="mr-1 flex items-center p-1 px-2 font-bold">
                      <button
                        className="mr-1 p-1 px-1 text-sm font-bold text-red-700 border-gray-400 focus:outline-none"
                        onClick={() => RemoveFromCart(book)}
                      >
                        remove
                      </button>
                    </span>
                    <span className="mr-1 flex items-center px-4 text-sm font-bold border-l border-gray-400">
                      100kr
                    </span>
                  </div>
                  <p className="grid w-20 ml-5 mr-5 text-black sm:grid-cols-4 md:grid-cols-1 lg:grid-cols-1 lg:w-15">
                    {book.volumeInfo.title}
                  </p>
                </div>
              ))}
            </div>
            <div className="w-full mt-5 mb-0 pb-3 border-t border-1 border-white">
              <button
                className="mr-1 p-1 px-2"
                onClick={() => navigateTo(PAGE_PRODUCTS)}
              >
                <img
                  src="https://www.flaticon.com/svg/vstatic/svg/507/507257.svg?token=exp=1620919188~hmac=cda63ed78be0ca3e1e7f9c1e98b9e7ef"
                  className="mt-3 h-5 w-5"
                  alt="back"
                />
              </button>
            </div>
            <div>
              <button
                className="mr-1 p-1 px-2 font-bold text-red-700 focus:outline-none hover:shadow-2xl"
                onClick={() => setBuy(true)}
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const linkName = readMore ? "Read Less << " : "Read More >> ";

  const renderProducts = () => (
    <>
      <div className="sm:text-center lg:text-center justify-items-center">
        <div className="inline justify-items-center">
          <BestSellersSectionTitle />
          <button
            className="inline justify-items-center pl-20 pt-10 focus:outline-none"
            onClick={() => navigateTo(PAGE_CART)}
          >
            <img
              className="md:mb-0 lg:mb-5 lg:inline h-7 w-8"
              src="https://www.flaticon.com/premium-icon/icons/svg/2702/2702173.svg"
              alt="cart"
            />
          </button>{" "}
          <span className="inline justify-items-center">({cart.length})</span>
        </div>
      </div>

      <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        {dataBooks.map((book, idx) => (
          <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative cursor-pointer rounded transform hover:scale-105 duration-300 ease-in-out col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center">
            <div className="bg-white rounded-lg mt-5">
              <img
                src={imageBook(book)}
                className="h-20 w-20 rounded-md transform focus:scale-105 duration-300 ease-in-out"
                alt="not found"
              />
            </div>
            <div className="badge absolute top-0 right-0 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold shadow-2xl rounded-lg">
              Best seller
            </div>
            <div className="info-box text-xs flex mt-5 p-1 font-semibold text-gray-500 bg-gray-200 rounded-xl">
              <span className="mr-1 flex items-center p-1 px-2 font-bold">
                <button
                  className="mr-1 p-1 px-1 text-sm font-bold border-gray-400 focus:outline-none focus:shadow-2xl focus:text-red-500"
                  onClick={() => addToCart(book)}
                >
                  Add to cart
                </button>
              </span>
              <span className="mr-1 flex items-center px-4 text-sm font-bold border-l border-gray-400">
                100kr
              </span>
            </div>
            <div className="p-5">
              <p>{book.volumeInfo.title}</p>
              <a
                className="read-more-link font-bold"
                onClick={() => {
                  setReadMore(!readMore);
                }}
              >
                {readMore && book.volumeInfo.description}
                <p>{linkName}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center">
        <div className="flex pl-0 list-none rounded my-2">
          <button
            className="relative block py-2 px-3 font-serif focus:outline-none leading-tight bg-white border border-gray-300 text-blue-700 rounded-r rounded-l hover:bg-gray-200"
            onClick={() => previousButton()}
          >
            previous
          </button>
          <button
            className="relative block py-2 px-3 font-serif focus:outline-none leading-tight bg-white border border-gray-300 text-blue-700 rounded-r rounded-l hover:bg-gray-200"
            onClick={() => nextButton()}
          >
            next
          </button>
        </div>
      </div>
    </>
  );

  //Add to cart
  const addToCart = (book) => {
    setCart([...cart, { ...book }]);
  };

  const addBook = () => {
    setAdd(true);
    cart.length++;
  };

  //Remove from cart
  const RemoveFromCart = (bookToRemove) => {
    console.log("cart.length", cart.length);
    setCart(cart.filter((book) => book !== bookToRemove));
  };

  return (
    <>
      <BestSellers
        page={page}
        PAGE_CART={PAGE_CART}
        PAGE_PRODUCTS={PAGE_PRODUCTS}
        renderProducts={renderProducts}
        renderCart={renderCart}
      ></BestSellers>
      {/* {page === PAGE_PRODUCTS && renderProducts()}
            {page === PAGE_CART && renderCart()} */}
    </>
  )
}

export default Books

