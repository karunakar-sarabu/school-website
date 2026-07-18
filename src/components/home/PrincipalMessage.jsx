function PrincipalMessage() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="bg-gray-200 h-80 rounded-xl flex items-center justify-center">
            <p className="text-gray-500 text-xl">
              Principal Image
            </p>
          </div>

          <div>

            <h2 className="text-4xl font-bold mb-6">
              Principal's Message
            </h2>

            <p className="text-gray-600 leading-8">
              At ABC Public School, we believe education is not only about
              academics but also about building character, confidence,
              creativity, and leadership. Every child is encouraged to
              discover their talents and become a responsible citizen.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default PrincipalMessage;