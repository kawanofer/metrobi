import React from "react";
import "./App.css";

import ExtraContent from "./components/ExtraContent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MainContent from "./components/MainContent";
import RelatedImages from "./components/RelatedImages";
import RelatedPosts from "./components/RelatedPosts";
import Sidebar from "./components/Sidebar";

import question1 from "./questions/1";
import question2 from "./questions/2";
import question3 from "./questions/3";
import question4 from "./questions/4";
import question5 from "./questions/5";
import question6 from "./questions/6";
import question7 from "./questions/7";

function App() {

  console.log("#1 - Find Duplicates: ", question1([1, 2, 3, 4, 3, 2, 5]));

  console.log("#2 - Print With Delay:", question2(["a", "b", "c", "d"]));

  console.log("#3 - Highest safe floor is:", question3(100));

  console.log("#4 - Are Brackets Balanced: {[()]} - ", question4("{[()]}"));
  console.log("#4 - Are Brackets Balanced: {[[(])]} - ", question4("{[(])}"));
  console.log("#4 - Are Brackets Balanced: {[([)]} - ", question4("{([)]}"));

  console.log("#5 - Highest safe floor is:", question5(100));

  question6();

  console.log("#7 - Get Max Value: ", question7([
    { kg: 5, price: 100 },
    { kg: 7, price: 150 },
    { kg: 3, price: 70 },], 36));

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-2">
        <div className="flex flex-col gap-2 min-h-screen">
          {/* Header - Full width on all screens */}
          <header className="h-20 w-full bg-cyan-300 flex items-center justify-center">
            <Header />
          </header>

          {/* Main Content Area - Stack on mobile, side-by-side on desktop */}
          <main className="flex flex-col md:flex-row gap-2 flex-1">
            {/* Left Column - Full width on mobile, 1.5 ratio on desktop */}
            <div className="w-full md:w-auto flex flex-col gap-2 md:flex-[1.5]">
              <aside className="h-48 md:h-auto md:flex-[1] bg-purple-200 flex items-center justify-center">
                <Hero />
              </aside>
              <aside className="h-48 md:h-auto md:flex-[2] bg-green-300 flex items-center justify-center">
                <Sidebar />
              </aside>
            </div>

            {/* Right Column - Full width on mobile, 3 ratio on desktop */}
            <div className="w-full md:w-auto flex flex-col gap-2 md:flex-[3]">
              <section className="h-64 md:h-auto md:flex-[3] bg-yellow-300 flex items-center justify-center">
                <MainContent />
              </section>
              <section className="h-48 md:h-auto md:flex-1 bg-gray-400 flex items-center justify-center">
                <ExtraContent />
              </section>
            </div>
          </main>

          {/* Related Section - Stack on mobile, side-by-side on tablet and up */}
          <div className="flex flex-col sm:flex-row gap-2">
            <section className="h-32 sm:h-20 flex-1 bg-green-400 flex items-center justify-center">
              <RelatedImages />
            </section>
            <section className="h-32 sm:h-20 flex-1 bg-pink-200 flex items-center justify-center">
              <RelatedPosts />
            </section>
          </div>

          {/* Footer - Full width on all screens */}
          <footer className="h-20 w-full bg-orange-400 flex items-center justify-center">
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
