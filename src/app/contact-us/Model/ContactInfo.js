export default function ContactInfo() {
  return (
    <section className=" px-40 py-12 md:py-16 bg-[#F8FAFC] relative" style={{
        backgroundImage: `url("/Assets/Home/Contactbg.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      <div className="relative z-10 w-full px-4">
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="text-center md:text-left">
            <p className="font-medium text-gray-700 text-m tracking-wide mb-1">Contact info</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">We are always <br></br> happy to assist you</h2>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-40">
            <div className="text-center md:text-left">
              <p className="font-semibold text-sm tracking-wide text-gray-700 mb-1">Email Address</p>
              <p className="text-xl md:text-xl font-semibold text-gray-900 m-0 leading-relaxed">help@info.com</p>
              <p className="text-sm text-gray-600 m-0 leading-normal mt-1">Assistance hours:</p>
              <p className="text-sm text-gray-600 m-0 leading-normal">Monday - Friday 6 am to</p>
              <p className="text-sm text-gray-600 m-0 leading-normal">8 pm EST</p>
            </div>

            <div className="text-center md:text-left">
              <p className="font-semibold text-sm tracking-wide text-gray-700 mb-1">Number</p>
              <p className="text-xl md:text-xl font-semibold text-gray-900 m-0 leading-relaxed">(808) 998-34256</p>
              <p className="text-sm text-gray-600 m-0 leading-normal mt-1">Assistance hours:</p>
              <p className="text-sm text-gray-600 m-0 leading-normal">Monday - Friday 6 am to</p>
              <p className="text-sm text-gray-600 m-0 leading-normal">8 pm EST</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
