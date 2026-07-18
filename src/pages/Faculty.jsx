import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function Faculty() {
    const teachers = [
        {
            name: "Dr. Rajesh Kumar",
            designation: "Principal"
        },
        {
            name: "Mrs. Anitha Rao",
            designation: "Mathematics Teacher"
        },
        {
            name: "Mr. Srinivas",
            designation: "Science Teacher"
        },
        {
            name: "Mrs. Lakshmi",
            designation: "English Teacher"
        },
        {
            name: "Mr. Ramesh",
            designation: "Social Studies"
        },
        {
            name: "Mrs. Kavitha",
            designation: "Computer Science"
        }
    ];

    return (
        <>
            <Navbar />

            {/* Banner */}

            <section className="bg-blue-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold">
                        Our Faculty
                    </h1>

                    <p className="mt-4 text-lg">
                        Experienced Teachers Dedicated to Student Success
                    </p>
                </div>
            </section>

            {/* Faculty */}

            <section className="py-16">

                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-center mb-12">
                        Meet Our Faculty
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {teachers.map((teacher, index) => (

                            <div
                                key={index}
                                className="shadow rounded-lg p-8 text-center"
                            >

                                <div className="w-28 h-28 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">

                                    <img
                                        src={`/images/teacher${index + 1}.jpg`}
                                        alt={teacher.name}
                                        className="w-28 h-28 rounded-full mx-auto object-cover"
                                    />

                                </div>

                                <h3 className="text-2xl font-bold">
                                    {teacher.name}
                                </h3>

                                <p className="text-gray-600 mt-2">
                                    {teacher.designation}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* Why Our Teachers */}

            <section className="bg-gray-100 py-16">

                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-center mb-10">
                        Why Learn With Our Faculty?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="bg-white shadow rounded-lg p-6 text-center">
                            <h3 className="font-bold text-xl mb-3">
                                Experienced
                            </h3>

                            <p>
                                Qualified teachers with years of classroom experience.
                            </p>
                        </div>

                        <div className="bg-white shadow rounded-lg p-6 text-center">
                            <h3 className="font-bold text-xl mb-3">
                                Student Focused
                            </h3>

                            <p>
                                Personalized attention for every student.
                            </p>
                        </div>

                        <div className="bg-white shadow rounded-lg p-6 text-center">
                            <h3 className="font-bold text-xl mb-3">
                                Innovative
                            </h3>

                            <p>
                                Modern teaching methods and digital classrooms.
                            </p>
                        </div>

                    </div>

                </div>

            </section>

            <Footer />

        </>
    );
}

export default Faculty;