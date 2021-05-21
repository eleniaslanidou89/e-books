import Link from 'next/link'

const CategoriesSection = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-3 -mt-20">
        <div className="sm:p-10 text-center cursor-pointer">
          <div className="m-5 md:m-0 my-0 md:py-5 max-w-sm rounded overflow-hidden shadow-lg transform hover:scale-105 duration-300 ease-in-out bg-white">
            <div className="px-6 py-4">
              <div className="space-y-5">
                <div className="font-bold text-xl mb-2 hover:scale-105 duration-300 ease-in-out font-serif">
                  <Link href="/Technology/TechnologyPage">
                    <a
                      href="#responsive-header"
                      className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-red-500 mr-4"
                    >
                      Technology
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:p-10 text-center cursor-pointer">
          <div className="m-5 md:m-0 my-0 md:py-5 max-w-sm rounded overflow-hidden shadow-lg transform hover:scale-105 duration-300 ease-in-out bg-white">
            <div className="px-6 py-4">
              <div className="space-y-5">
                <div className="font-bold text-xl mb-2 hover:scale-105 duration-300 ease-in-out font-serif">
                  <Link href="/Science/SciencePage">
                    <a
                      href="#responsive-header"
                      className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-red-500 mr-4"
                    >
                      Science
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:p-10 text-center cursor-pointer">
          <div className="m-5 md:m-0 my-0 md:py-5 max-w-sm rounded overflow-hidden shadow-lg transform hover:scale-105 duration-300 ease-in-out bg-white">
            <div className="px-6 py-4">
              <div className="space-y-5">
                <div className="font-bold text-xl mb-2 hover:scale-105 duration-300 ease-in-out font-serif">
                  <Link href="/Medicine/MedicinePage">
                    <a
                      href="#responsive-header"
                      className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-red-500 mr-4"
                    >
                      Medicine
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoriesSection
