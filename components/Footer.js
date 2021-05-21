const Footer = () => {
  return (
    <div className="heading_section bg-gray-200 shadow z-10 text-black-300">
      <div className="footer w-5/6 mx-auto text-center">
        <div className="sub flex-1 p-8">
          <div className="text-3xl mb-3 uppercase font-serif">Contact Us</div>
          <div className="info">
            <div className="name font-serif">E-books</div>
            <div className="name text-sm font-serif">
              Street 4996 Brown Bear Drive <br />
              City Mira Loma State CA State Full California <br />
              Zip Code 91752 <br />
              Phone Number 951-634-4557 <br />
              Mobile Number 951-903-8940 <br />
            </div>
          </div>
        </div>
        <div className="sub flex flex-wrap p-5 w-5/6 mx-auto border-t font-serif">
          <div className="cursor-pointer hover:underline items mx-auto">Our Parterners</div>
          <div className="cursor-pointer hover:underline items mx-auto">Policy</div>
          <div className="cursor-pointer hover:underline items mx-auto">Facilities</div>
          <div className="cursor-pointer hover:underline items mx-auto">Developer</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
