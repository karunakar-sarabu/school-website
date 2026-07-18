// function GalleryPreview() {

//     return (

//         <section className="py-20">

//             <div className="max-w-7xl mx-auto px-6">

//                 <h2 className="text-4xl font-bold text-center mb-12">
//                     School Gallery
//                 </h2>

//                 <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

//                     {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (

//                         <div
//                             key={item}
//                             className="bg-gray-200 h-56 rounded-xl flex items-center justify-center hover:scale-105 transition"
//                         >

//                             <div
//                                 key={item}
//                                 className="h-60 rounded-lg overflow-hidden"
//                             >
//                                 <img
//                                     src={`/images/gallery${item}.jpg`}
//                                     alt={`Gallery ${item}`}
//                                     className="w-full h-full object-cover"
//                                 />
//                             </div>

//                         </div>

//                     ))}

//                 </div>

//             </div>

//         </section>

//     );

// }

// export default GalleryPreview;
function GalleryPreview() {
  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          School Gallery
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {[1,2,3,4,5,6,7,8].map((item) => (

            <div
              key={item}
              className="h-56 rounded-xl overflow-hidden hover:scale-105 transition"
            >

              <img
                src={`/images/gallery${item}.jpg`}
                alt={`Gallery ${item}`}
                className="w-full h-full object-cover"
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default GalleryPreview;