import { useState } from 'react'

const BuyingForm = (cart) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [zip, setZip] = useState('');
  const [card, setCard] = useState('');

  const orderHandler = () => {
    console.log("Cart contains:", cart.cart," Customer Name is:",name," Email is:",email," Address is:",address," City is:", city, " Country is:",country," ZIP code is:", zip," Card details are:",card);
    window.alert("Thank you for your order!");
    window.location.href = "../";
  };

  return (
    <>
      <div className="flex justify-center">
        <form id="frm1" className="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
          <p className="text-gray-800 font-medium">Customer information</p>
          <div>
            <label className="block text-sm text-gray-00" htmlFor="cus_name">
              Name
            </label>
            <input
              className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
              id="cus_name"
              name="cus_name"
              type="text"
              required=""
              placeholder="Your Name"
              aria-label="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <label className="block text-sm text-gray-600" htmlFor="cus_email">
              Email
            </label>
            <input
              className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
              id="cus_email"
              name="cus_email"
              type="text"
              required=""
              placeholder="Your Email"
              aria-label="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <label className=" block text-sm text-gray-600" htmlFor="cus_email">
              Address
            </label>
            <input
              className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
              id="cus_email"
              name="cus_email"
              type="text"
              required=""
              placeholder="Street"
              aria-label="Street"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <label className=" text-sm block text-gray-600" htmlFor="cus_email">
              City
            </label>
            <input
              className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
              id="cus_email"
              name="cus_email"
              type="text"
              required=""
              placeholder="City"
              aria-label="City"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="inline-block mt-2 w-1/2 pr-1">
            <label className=" block text-sm text-gray-600" htmlFor="cus_email">
              Country
            </label>
            <input
              className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
              id="cus_email"
              name="cus_email"
              type="text"
              required=""
              placeholder="Country"
              aria-label="Country"
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
            <label className=" block text-sm text-gray-600" htmlFor="cus_email">
              Zip
            </label>
            <input
              className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
              id="cus_email"
              name="cus_email"
              type="text"
              required=""
              placeholder="Zip"
              aria-label="Zip"
              onChange={(e) => setZip(e.target.value)}
            />
          </div>
          <p className="mt-4 text-gray-800 font-medium">Payment information</p>
          <div className="">
            <label className="block text-sm text-gray-600" htmlFor="cus_name">
              Card
            </label>
            <input
              className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
              id="cus_name"
              name="cus_name"
              type="text"
              required=""
              placeholder="Card Number MM/YY CVC"
              aria-label="Card Number MM/YY CVC"
              onChange={(e) => setCard(e.target.value)}
            />
          </div>
          <button
            className="px-4 py-1 my-5 text-white font-light tracking-wider bg-gray-900 rounded"
            type="button"
            onClick={() => orderHandler()}
          >
            Order
          </button>
        </form>
      </div>
    </>
  )
}

export default BuyingForm