import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function Facilities() {
    const facilities = [
        "Smart Classrooms",
        "Computer Laboratory",
        "Science Laboratory",
        "Library",
        "Sports Playground",
        "School Transportation",
        "Digital Learning",
        "Cafeteria"
    ];

    return (
        <>
            <Navbar />

            <section className="bg-blue-700 text-white py-16">
                <div className="max-w-7xl mx-auto text-center px-6">
                    <h1 className="text-5xl font-bold">Facilities</h1>
                    <p className="mt-4 text-lg">
                        World-Class Infrastructure for Better Learning
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {facilities.map((facility, index) => (

                            <div
                                key={index}
                                className="shadow rounded-lg p-8 text-center"
                            >
                                <div className="bg-gray-200 h-28 rounded mb-6 flex items-center justify-center">
                                    <img
                                        src={`/images/${[
                                                "classroom",
                                                "lab",
                                                "library",
                                                "playground",
                                                "bus",
                                                   "classroom",
                                                "lab",
                                                "library",
                                            ][index]
                                            }.jpg`}
                                        alt={facility}
                                        className="rounded-lg h-28 w-full object-cover"
                                    />
                                </div>

                                <h3 className="text-xl font-bold">
                                    {facility}
                                </h3>

                            </div>

                        ))}

                    </div>

                </div>
            </section>

            <Footer />
        </>
    );
}

export default Facilities;