import React from 'react'

const Hero3 = () => {
  return (
    <div>
         <main>
        <section className="mt-3">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              {/* <p>We care to cure your Health</p> */}
              <h1 className="text-3xl font-bold mb-4">Why Choose Us?</h1>
              <p className="mb-2">
                Expertise: Our team consists of experienced IT professionals who
                are passionate about staying up-to-date with the latest industry
                trends.
              </p>
              <p className="mb-2">
                Customization: We understand that every business is unique.
                That's why we create solutions that are tailored to your specific
                needs and goals.
              </p>
              <p className="mb-2">
                Customer-Centric Approach: We prioritize your satisfaction and
                provide top-notch support to address your IT concerns.
              </p>
              <p className="mb-2">
                Affordability: We offer competitive pricing without compromising
                on the quality of our services.
              </p>
              <p className="mb-4">
                Reliability: Count on us to be there when you need us. We're
                committed to ensuring your IT environment is reliable and
                available 24/7.
              </p>
              <div className="flex space-x-4">
                <NavLink to="/contact">
                  <button className="bg-blue-400 text-black px-4 py-2 rounded">Connect Now</button>
                </NavLink>
                <button className="bg-gray-500 text-white px-4 py-2 rounded">Learn More</button>
              </div>
            </div>
            <div>
              <img
                src="/images/about.png"
                alt="coding buddies"
                width="400"
                height="500"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}

export default Hero3