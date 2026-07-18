import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function About() {
    return (
        <>
            <Navbar />

            {/* Banner */}

            <section className="bg-blue-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold">About Our School</h1>
                    <p className="mt-4 text-lg">
                        Learn Today, Lead Tomorrow
                    </p>
                </div>
            </section>

            {/* About */}

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                    <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                        <img
                            src="/images/school.jpg"
                            alt="School"
                            className="rounded-lg w-full h-full object-cover"
                        />
                    </div>

                    <div>

                        <h2 className="text-4xl font-bold mb-6">
                            Welcome to ABC Public School
                        </h2>

                        <p className="text-gray-700 leading-8 mb-6">
                            ABC Public School is committed to providing quality
                            education that helps students achieve academic excellence
                            while developing leadership, creativity, discipline, and
                            confidence.
                        </p>

                        <p className="text-gray-700 leading-8">
                            We believe every child has unique talents. Our mission is
                            to nurture those talents through innovative teaching,
                            modern facilities, and experienced faculty.
                        </p>

                    </div>

                </div>
            </section>

            {/* Vision & Mission */}

            <section className="bg-gray-100 py-16">

                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

                    <div className="bg-white p-8 rounded-lg shadow">
                        <h2 className="text-3xl font-bold mb-4">
                            Our Vision
                        </h2>

                        <p>
                            To become a center of excellence that prepares students
                            for a successful future with knowledge, values, and
                            leadership qualities.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow">
                        <h2 className="text-3xl font-bold mb-4">
                            Our Mission
                        </h2>

                        <p>
                            To provide high-quality education through innovation,
                            discipline, technology, and holistic development.
                        </p>
                    </div>

                </div>

            </section>

            {/* Values */}

            <section className="py-16">

                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-center mb-12">
                        Our Core Values
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        <div className="shadow rounded-lg p-6 text-center">
                            <h3 className="font-bold text-xl mb-3">Integrity</h3>
                            <p>Doing the right thing with honesty.</p>
                        </div>

                        <div className="shadow rounded-lg p-6 text-center">
                            <h3 className="font-bold text-xl mb-3">Respect</h3>
                            <p>Respecting everyone equally.</p>
                        </div>

                        <div className="shadow rounded-lg p-6 text-center">
                            <h3 className="font-bold text-xl mb-3">Innovation</h3>
                            <p>Learning through creativity and technology.</p>
                        </div>

                        <div className="shadow rounded-lg p-6 text-center">
                            <h3 className="font-bold text-xl mb-3">Excellence</h3>
                            <p>Always striving to achieve the best.</p>
                        </div>

                    </div>

                </div>

            </section>

            <Footer />
        </>
    );
}

export default About;