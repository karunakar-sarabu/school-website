import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function Gallery() {

    return (

        <>
            <Navbar />

            <section className="bg-blue-700 text-white py-16">
                <div className="max-w-7xl mx-auto text-center px-6">
                    <h1 className="text-5xl font-bold">
                        Gallery
                    </h1>

                    <p className="mt-4">
                        School Life Through Pictures
                    </p>
                </div>
            </section>

            <section className="py-16">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

                        {[1, 2, 3, 4, 5, 6, 7, 8].map((img) => (

                            <div
                                key={img}
                                className="bg-gray-300 h-60 rounded-lg flex items-center justify-center"
                            >
                                <img
                                    src={`/images/gallery${img}.jpg`}
                                    alt={`Gallery ${img}`}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>

                        ))}

                    </div>

                </div>

            </section>

            <Footer />
        </>

    );

}

export default Gallery;