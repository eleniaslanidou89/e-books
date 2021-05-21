import { useEffect, useState } from "react"
import React from "react"
import Head from "next/head"
import fetch from "isomorphic-unfetch"
import Loading from "../components/Loading"
import IntroSection from "../components/IntroSection"
import CarouselSection from "../components/CarouselSection"
import NavbarSection from "../components/NavbarSection"
import Footer from "../components/Footer"

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [dataBooks, setDataBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState();
  const [page, setPage] = useState("0"); //totalitems
  const [maxResults, setmaxResults] = useState("16");
  const [cart, setCart] = useState([]);

  const getBooks = async () => {
    try {
      const LabelsData = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          searchTerm +
          "&maxResults=" +
          maxResults +
          "&startIndex=" +
          page
      );
      const body = await LabelsData.json();
      if (LabelsData.status !== 200) {
        console.log(
          "Error while getting Labels. See error message below: Status ",
          LabelsData.status
        );
      }
      const books = body.items;
      console.log("books", books);
      setDataBooks(books);
      console.log("dataBooks", dataBooks);
      setLoading(false);
    } catch (error) {
      console.log("Labels error. See error message below:", error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);
  
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <div>
      <Head>
        <title>E-books</title>
      </Head>
      <NavbarSection />
      <IntroSection />
      <CarouselSection />
      <Footer />
    </div>
  )
}

export default Home
