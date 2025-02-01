export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.thithithara.com/images/slider/test4.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            Sail Smoothly to Your Dream Home
          </h1>
          <div className="flex justify-center gap-6 mt-4">
            <span className="flex items-center gap-2 text-lg">
              <span className="text-yellow-400">✔</span> Verified Properties
            </span>
            <span className="flex items-center gap-2 text-lg">
              <span className="text-yellow-400">✔</span> Effortless Navigation
            </span>
            <span className="flex items-center gap-2 text-lg">
              <span className="text-yellow-400">✔</span> AI Powered Assistance
            </span>
          </div>
        </div>
      </div>

      <h1>Home page</h1>
    </main>
  );
}
