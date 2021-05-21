import Head from 'next/head'
import NavbarCategoriesBooks from './NavbarCategoriesBooks'

const CategoriesBooks = () => {
  return (
    <>
      <Head>
        <title>E-books</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarCategoriesBooks />
    </>
  )
}

export default CategoriesBooks
