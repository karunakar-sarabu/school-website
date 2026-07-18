import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function News() {

  const news = [

    "Admissions Open for 2026",

    "Science Fair on August 20",

    "Sports Meet Next Month",

    "School Ranked No.1 in District"

  ];

  return (

    <>
      <Navbar />

      <section className="bg-blue-700 text-white py-16">

        <div className="max-w-7xl mx-auto text-center px-6">

          <h1 className="text-5xl font-bold">
            News & Events
          </h1>

        </div>

      </section>

      <section className="py-16">

        <div className="max-w-6xl mx-auto px-6">

          {news.map((item,index)=>(

            <div
              key={index}
              className="shadow rounded-lg p-8 mb-6"
            >

              <h2 className="text-2xl font-bold mb-3">
                {item}
              </h2>

              <p>
                Stay updated with the latest announcements,
                competitions and school events.
              </p>

            </div>

          ))}

        </div>

      </section>

      <Footer />

    </>

  );

}

export default News;