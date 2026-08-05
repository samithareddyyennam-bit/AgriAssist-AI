import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
return ( <div> <Navbar />

```

  <Hero />

  <section className="bg-gray-100 dark:bg-gray-900 py-12">
    <h2 className="text-4xl font-bold text-center text-green-700 mb-10">
      Our Features
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">

      {/* Crop Recommendation */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <img
          src="/images/crop.jpg"
          alt="Crop Recommendation"
          className="w-full h-56 object-cover"
        />

        <div className="p-6">
          <h3 className="text-2xl font-bold text-green-700 mb-3">
            Crop Recommendation
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Get AI suggestions for the best crops based on soil and climate.
          </p>

        <Link href="/login">     
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Learn More
          </button>
        </Link>
        </div>
      </div>

      {/* Weather Updates */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <img
          src="/images/weather.jpg"
          alt="Weather Updates"
          className="w-full h-56 object-cover"
        />

        <div className="p-6">
          <h3 className="text-2xl font-bold text-green-700 mb-3">
            Weather Updates
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Receive weather forecasts to improve farming decisions.
          </p>

        <Link href="/login">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Learn More
          </button>
        </Link>
        </div>
      </div>

      {/* Disease Detection */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <img
          src="/images/disease.jpg"
          alt="Disease Detection"
          className="w-full h-56 object-cover"
        />

        <div className="p-6">
          <h3 className="text-2xl font-bold text-green-700 mb-3">
            Disease Detection
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Identify crop diseases using AI-powered analysis.
          </p>
        <Link href="/login">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Learn More
          </button>
        </Link>
        </div>
      </div>

    </div>
  </section>
   {/* Paste new sections here */}
   <section className="py-20 bg-white dark:bg-gray-800">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

    <img
      src="/images/about.jpg"
      alt="About"
      className="rounded-2xl shadow-xl h-[420px] object-cover w-full"
    />

    <div>
      <h2 className="text-4xl font-bold text-green-700 mb-6">
        About AgriAssist AI
      </h2>

      <p className="text-lg text-gray-600 dark:text-gray-300 leading-8">
        AgriAssist AI is an intelligent farming platform developed to help
        farmers make better decisions using Artificial Intelligence.
        Farmers can get crop recommendations based on soil and season,
        check live weather updates, detect crop diseases, and receive
        smart farming tips to improve productivity.
      </p>

      <Link href="/about">
       <button className="mt-8 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
         Learn More
       </button>
     </Link>
    </div>

  </div>
</section>
<section className="py-20 bg-green-50 dark:bg-gray-900">

<h2 className="text-4xl font-bold text-center text-green-700 mb-14">
Why Choose AgriAssist AI?
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">

<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">

<h1 className="text-5xl mb-4">🤖</h1>

<h3 className="text-xl font-bold mb-2">
AI Powered
</h3>

<p>
Smart crop prediction using Artificial Intelligence.
</p>

</div>

<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">

<h1 className="text-5xl mb-4">🌤</h1>

<h3 className="text-xl font-bold mb-2">
Weather Forecast
</h3>

<p>
Real-time weather updates for better farming.
</p>

</div>

<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">

<h1 className="text-5xl mb-4">🦠</h1>

<h3 className="text-xl font-bold mb-2">
Disease Detection
</h3>

<p>
Identify diseases and get treatment suggestions.
</p>

</div>

<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">

<h1 className="text-5xl mb-4">🌾</h1>

<h3 className="text-xl font-bold mb-2">
Crop Recommendation
</h3>

<p>
Suggests the best crop for your farm conditions.
</p>

</div>

</div>

</section>
<section className="py-20 bg-white dark:bg-gray-800">

<h2 className="text-4xl font-bold text-center text-green-700 mb-14">
Our Impact
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">

<div className="text-center">

<h1 className="text-5xl font-bold text-green-700">
5000+
</h1>

<p className="mt-3">
Farmers Helped
</p>

</div>

<div className="text-center">

<h1 className="text-5xl font-bold text-green-700">
50+
</h1>

<p className="mt-3">
Supported Crops
</p>

</div>

<div className="text-center">

<h1 className="text-5xl font-bold text-green-700">
100+
</h1>

<p className="mt-3">
Diseases Covered
</p>

</div>

<div className="text-center">

<h1 className="text-5xl font-bold text-green-700">
95%
</h1>

<p className="mt-3">
Prediction Accuracy
</p>

</div>

</div>

</section>
<section className="py-20 bg-green-50 dark:bg-gray-900">

<h2 className="text-4xl font-bold text-center text-green-700 mb-12">
Farmer Reviews
</h2>

<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6">

<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">

⭐⭐⭐⭐⭐

<p className="mt-4 italic">
"AgriAssist AI helped me choose the right crop for my soil. Very useful and easy to use."
</p>

<h3 className="mt-6 font-bold">
Ramesh Kumar
</h3>

</div>

<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">

⭐⭐⭐⭐⭐

<p className="mt-4 italic">
"The weather updates and disease detection saved my crops during the rainy season."
</p>

<h3 className="mt-6 font-bold">
Lakshmi Devi
</h3>

</div>

</div>

</section>
  <Footer />
</div>

);
}
