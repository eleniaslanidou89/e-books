import Link from 'next/link'

const LinksSection = () => {
  return (
    <div className="w-full block flex-grow lg:flex lg:items-right lg:w-auto">
      <div className="flex items-center flex-shrink-0 text-black mr-6 mt-5">
        <Link href="/Categories/CategoriesPage">
          <a
            href="#responsive-header"
            className="block mt-0 lg:inline-block sm:mt-0 lg:mt-0 text-teal-200 hover:text-red-500 mr-4"
          >
            Categories
          </a>
        </Link>
        <Link href="">
          <a
            href="#responsive-header"
            className="block mt-0 lg:inline-block sm:mt-0 lg:mt-0 text-teal-200 hover:text-red-500"
          >
            Blog
          </a>
        </Link>
      </div>
    </div>
  )
}

export default LinksSection
