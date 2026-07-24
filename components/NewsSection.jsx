"use client"
import Image from "next/image";
import NewsData from "@/data/newsData";
import { useRouter } from "next/navigation";

export default function NewsSection() {
  const router = useRouter();

  const latestNews = [...NewsData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section className="w-full bg-[#FAF8F4] py-16 px-6" id="news">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        {/* Heading */}
        <div className="text-center">
          <h6 className="uppercase text-xs tracking-widest text-[#DCA54A] mb-3" data-reveal>
            Latest News
          </h6>
          <h2 className="text-3xl font-bold text-gray-900" data-reveal data-reveal-delay="1">
            Market & Infrastructure Updates
          </h2>
        </div>

        {/* Latest News Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {latestNews.map((item, i) => (
            <div
              key={item.id}
              onClick={() => router.push(`/news/${item.slug}`)}
              className="card-lift group bg-white rounded-lg overflow-hidden shadow cursor-pointer"
              data-reveal
              data-reveal-delay={String(i + 1)}
            >
              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-[180px] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-[#DCA54A] mb-2 uppercase tracking-wider">{item.category}</p>
                <h3 className="font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-[#B8892A]">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.excerpt}</p>
                <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-[#B8892A] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400">
                  Read Update <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Global Read More Button */}
        <div className="text-center mt-6" data-reveal>
          <button
            onClick={() => router.push("/news")}
            className="btn-sheen px-6 py-3 text-sm font-medium text-white bg-[#DCA54A] rounded hover:bg-[#C49A2B] cursor-pointer"
          >
            Read More News
          </button>
        </div>
      </div>
    </section>
  );
}
