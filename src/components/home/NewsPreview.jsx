function NewsPreview() {

  const news = [
    "Admissions Open for 2026-27",
    "Annual Sports Day - August 25",
    "Science Exhibition - September 12"
  ];

  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Latest News & Events
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {news.map((item, index) => (

            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
            >

              <h3 className="text-xl font-semibold mb-4">
                {item}
              </h3>

              <p className="text-gray-600">
                Stay updated with all important announcements and
                upcoming events.
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default NewsPreview;