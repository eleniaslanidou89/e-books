import TextSection from './TextSection'

const IntroSection = () => {
  return (
    <>
      <div className="section bg-image flex overflow-hidden h-screen sm:h-mobile text-gray-800">
        <div className="italic font-serif hover:text-gray-700 text-left text-7xl grid md:grid-cols-1 w-5/6 m-auto mt-30 p-8 rounded-lg text-pink-900">
          E-Books
        </div>
      </div>
      <TextSection />
    </>
  )
}

export default IntroSection
