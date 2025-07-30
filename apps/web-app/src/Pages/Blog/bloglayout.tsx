import Image from "next/image";

export default function BlogLayout() {
  return (
    <main className="min-h-screen w-full bg-white text-black font-poppins">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 max-w-screen-xl mx-auto">
        {/* Left Column - Popular List */}
        <div className="bg-white shadow p-6 rounded-xl border col-span-1">
          <h2 className="text-2xl font-semibold text-[#0F1935] mb-6">Popular</h2>
          <div className="space-y-4">
            {[
              "Fruit juices to boost your immune",
              "Juice variations using avocado",
              "Simple recipe strawberry juice",
            ].map((title, i) => (
              <div key={i} className="flex justify-between items-center border-b pb-2">
                <p className="text-lg text-[#121212]">{title}</p>
                <span className="rotate-[-90deg] text-xl">→</span>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Column - Featured Article */}
        <div className="col-span-1 flex flex-col items-start">
          <div className="bg-[#F5F6F8] rounded-xl overflow-hidden mb-6">
            <Image
              src="/images/juice-hero.png"
              alt="Fruit Combo"
              width={500}
              height={300}
              className="object-cover"
            />
            <div className="p-6">
              <h2 className="text-3xl font-medium text-[#121212]">
                Fruit combination for daily juice
              </h2>
              <p className="text-sm text-[#121212]/70 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              </p>
              <div className="flex items-center mt-4 gap-2">
                <div className="w-6 h-6 rounded-full bg-black"></div>
                <span className="text-sm font-medium">Samantha William</span>
              </div>
            </div>
          </div>

          {/* Trending Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            {[
              {
                title: "Fruit juices to boost your immune",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                img: "/images/orange.jpg",
                bg: "bg-[#F5F6F8]",
              },
              {
                title: "Juice variations using avocado",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                img: "/images/avocado.jpg",
                bg: "bg-[#F5F6F8]",
              },
              {
                title: "Simple recipe strawberry juice",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                img: "/images/strawberry.jpg",
                bg: "bg-[#F5F6F8]",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`rounded-xl overflow-hidden ${item.bg}`}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={200}
                  className="object-cover w-full h-40"
                />
                <div className="p-4">
                  <h3 className="font-medium text-lg">{item.title}</h3>
                  <p className="text-sm text-black/50 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Video + Contributors */}
        <div className="col-span-1 space-y-6">
          {/* Video Card */}
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/images/orange-juice.jpg"
              alt="Orange Juice"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
            <div className="absolute bottom-4 left-6 right-6">
              <div className="text-white text-3xl font-bold">Simple Orange Juice Recipe</div>
              <div className="mt-4 h-1 w-full bg-white/20 rounded-full">
                <div className="h-1 w-[70%] bg-white rounded-full"></div>
              </div>
              <div className="text-white text-sm text-right mt-1">19:05</div>
            </div>
          </div>

          {/* Top Contributors */}
          <div className="bg-white shadow p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-[#0F1935] mb-6">Top Contributors</h2>
            <div className="space-y-4">
              {["Andrea Wise", "Karen Smith", "Samantha William", "Renata Hope", "Angela Smith"].map((name, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EC4F3C]" />
                  <div>
                    <p className="font-medium text-[#273240]">{name}</p>
                    <p className="text-sm text-[#2C3A4B]/50">135 articles</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
