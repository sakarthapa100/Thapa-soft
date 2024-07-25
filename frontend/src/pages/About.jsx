import { NavLink } from "react-router-dom";
import { Analytics } from "../components/Analytics.jsx";

export const About = () => {
  return (
    <>
      <main className="bg-gray-800 min-h-screen mt-[5rem] p-4 ">
        <section className="mt-12">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4  ">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold mb-4 text-white ">Why Choose Us?</h1>
              <p className="mb-2 text-white ">
                Expertise: Our team consists of experienced IT professionals who
                are passionate about staying up-to-date with the latest industry
                trends.
              </p>
              <p className="mb-2 text-white ">
                Customization: We understand that every business is unique.
                That's why we create solutions that are tailored to your specific
                needs and goals.
              </p>
              <p className="mb-2 text-white " >
                Customer-Centric Approach: We prioritize your satisfaction and
                provide top-notch support to address your IT concerns.
              </p>
              <p className="mb-2 text-white">
                Affordability: We offer competitive pricing without compromising
                on the quality of our services.
              </p>
              <p className="mb-4 text-white">
                Reliability: Count on us to be there when you need us. We're
                committed to ensuring your IT environment is reliable and
                available 24/7.
              </p>
              <div className="flex space-x-4">
                <NavLink to="/contact">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Connect Now</button>
                </NavLink>
                <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">Learn More</button>
              </div>
            </div>
            <div>
              <img
                src="/images/about.png"
                alt="coding buddies"
                className="w-full h-auto rounded-md shadow-lg"
              />
            </div>
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
};
