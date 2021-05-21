import Carousel from "react-elastic-carousel"

const CarouselSection = () => {
  const items = [
    {
      id: 1,
      value: (
        <div className="py-5 w-full grid md:grid-cols-2 text-gray-800 rounded">
          <div className="subsec flex-none overflow-hidden">
            <img
              className="icon m-auto rounded-lg"
              src="https://www.makemyassignments.com/blog/wp-content/uploads/2018/07/r.jpg"
              alt=""
            />
          </div>
          <div className="subsec my-auto pl-0 pr-0 md:pl-5 md:mr-0 mt-10">
            <div className="title font-semibold text-3xl mb-5">
              Why are books meaningful?
            </div>
            <div className="font-base font-serif font-semibold mb-0">
              “Reading is to the mind what exercise is to the body.” Indeed,
              just as physical movements and exercise are essential to keep a
              person’s body in good shape; reading is extremely important for
              the overall well being of the human brain. This is perhaps why it
              is so commonly said that books wash away from the soul the dust of
              everyday life. Amidst the humdrum and monotonous everyday life,
              people need books and literature to escape into imaginary worlds
              and seek solace there, even if temporarily. After all, what is
              life without flights of fancy and unrestrained imagination? Books
              show their readers the correct path to follow so that they can
              chase their dreams and pursue them. Successful people all over the
              world, irrespective of the profession that they are into, share
              the common passion of reading books in their leisure time and
              learning new and new things each day from these books. All of
              these people admit that books have made a significant contribution
              in shaping their lives.
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      value: (
        <div className="section py-5 w-full grid md:grid-cols-2 text-gray-800 rounded">
          <div className="subsec flex-none overflow-hidden">
            <img
              className="icon m-auto rounded-lg"
              src="https://images.pexels.com/photos/5531323/pexels-photo-5531323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
          <div className="subsec my-auto pl-0 pr-0 md:pl-5 md:mr-0 mt-10">
            <div className="title font-semibold text-3xl mb-5">
              15 Best Happiness Books and Are They Worth Your Time?
            </div>
            <div className="font-base font-serif font-semibold mb-0">
              Authentic Happiness: Using the New Positive Psychology to Realize
              Your Potential for Lasting Fulfillment – Martin E.P. Seligman
              ‘Authentic Happiness’ was published in 2004, written by Martin
              Seligman. Seligman, a psychologist and best-selling author puts
              forward the idea that happiness is not due to ‘having the right
              genes’ or ‘being lucky’. Rather, according to Seligman, true,
              enduring happiness (i.e. ‘authentic happiness’) is the result of
              paying attention to one’s personal strengths rather than focusing
              on perceived weaknesses.
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      value: (
        <div className="section py-5 w-full grid md:grid-cols-2 text-gray-800 rounded">
          <div className="subsec flex-none overflow-hidden">
            <img
              className="icon m-auto rounded-lg"
              src="https://images.pexels.com/photos/3755511/pexels-photo-3755511.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
          <div className="subsec my-auto pl-0 pr-0 md:pl-5 md:mr-0 mt-10">
            <div className="title font-semibold text-3xl mb-5">
              Why Do Kids Need Books?
            </div>
            <div className="font-base font-serif font-semibold mb-0">
              Books create warm emotional bonds between adults and kids when
              they read books together. Books help kids develop basic language
              skills and profoundly expand their vocabularies—much more than any
              other media. Books are interactive; they demand that kids think.
              Fiction and nonfiction books widen our consciousness. They give us
              new ways to think and new ideas. They expand our universe beyond
              time and place and inspire our own original thoughts. Books
              develop critical thinking skills. A book is read by an individual.
              It has no laugh track or musical score that emotionally primes a
              reader’s reaction. You alone decide what you think about a book
              and its contents with no one leaning over your shoulder telling
              you how to think.
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      value: (
        <div className="section py-5 md:py-28 w-full grid md:grid-cols-2 text-gray-800 rounded">
          <div className="subsec flex-none overflow-hidden">
            <img
              className="icon m-auto rounded-lg"
              src="https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_1280.jpg"
              alt=""
            />
          </div>
          <div className="subsec my-auto pl-0 pr-0 md:pl-5 md:mr-0 mt-10">
            <div className="title font-semibold text-3xl mb-5">
            Can Reading Reduce Stress?
            </div>
            <div className="font-base font-serif font-semibold mb-0">
            Stress affects health in numerous different ways. 
            It can lead to heart problems, anxiety, high blood pressure, 
            mental health problems, and much more. Well-being is something 
            that should be taken care of and many are trying to find a way to
             control and reduce the strains on health as much as possible. 
             One of the best ways to control and reduce stress is reading. 
             Simply opening a book and reading can change your mind and stress levels for the better.
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <Carousel>
      {items.map((item) => (
        <div key={item.id}>{item.value}</div>
      ))}
    </Carousel>
  )
}

export default CarouselSection