export default function Home() {
  return (
    <div className="relative w-full mx-auto px-6 md:px-20 pt-24 md:pt-36">
      {/* Background gambar */}
      <img
        src="/assets/images/home.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Isi konten */}
      <div className="relative max-w-full">
        <h3 className="text-white text-xl font-medium ">
          Welcome To ManakeTrip
        </h3>

        <h1 className="text-white font-bold text-5xl md:text-6xl leading-tight mt-2">
          Explore <br /> The World
        </h1>

        <p className="text-gray-200 mt-5 max-w-xl text-lg">
          Live the trips exploring the world, discover paradises, islands,
          mountains and much more. Get your trip now.
        </p>

        {/* Tombol */}
        <button className="mt-8 px-6 py-3 bg-white text-black rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-200 transition">
          Start Your Journey
          <span className="text-xl">→</span>
        </button>

        {/* Card Destinasi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pb-10">
          {/* Card */}
          <DestinationCard
            title="Curug Hiji"
            image="/dest1.jpg"
          />
          <DestinationCard
            title="Semeru"
            image="/dest2.jpg"
          />
          <DestinationCard
            title="Kawah Ratu"
            image="/dest3.jpg"
          />
          <DestinationCard
            title="Bromo"
            image="/dest4.jpg"
          />
        </div>
      </div>
    </div>
  );
}

function DestinationCard({ title, image }) {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
      />
      <div className="absolute bottom-0 left-0 p-4 pb-6 bg-gradient-to-t from-black/70 to-transparent w-full">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
      </div>
    </div>
  );
}
