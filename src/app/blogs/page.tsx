
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { Metadata } from "next";
import Head from "next/head";

interface BlogPost {
  isFav: boolean;
  _id: string;
  urlSlug: string;
  title: string;
  shortDescription: string;
  images: {
    imageUrl: {
      original: string;
    };
    altText: string;
  };
  type: "BLOG";
  createdAt: string;
  updatedAt: string;
}

async function getBlogs() {
  try {
    const response = await axios.get(
      "https://api.tablacuisine.com/api/website/activity?pagination=true&type=BLOG&page=1&limit=5000&website=TABLAFRANCHISE"
    );
    return response.data?.data || [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export const metadata: Metadata = {
  title: "Franchise Industry Insights & Tips | Tabla Blog",
  description:
    "Read the latest franchise news, tips, and success stories from Tabla Franchise. Stay informed and inspired!",
};

export default async function Blog() {
  const blogs: BlogPost[] = await getBlogs();

  return (
    <>
      <Head>
        <title>Franchise Industry Insights & Tips | Tabla Blog</title>
        <link rel="canonical" href="https://www.tablafranchise.com/blogs" />
        <meta
          name="description"
          content="Read the latest franchise news, tips, and success stories from Tabla Franchise. Stay informed and inspired!"
        />
        <meta
          name="keywords"
          content="blog tabla franchise, tabla franchise news, articles tabla franchise"
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Franchise Industry Insights & Tips | Tabla Blog",
              "alternateName": "Tabla Franchise",
              "url": "https://www.tablafranchise.com/blogs",
              "logo": "https://www.tablafranchise.com/shared/logo-new.svg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1 (689) 698-9212",
                "contactType": "customer service",
                "areaServed": "US",
              },
              "sameAs": [
                "https://www.facebook.com/Tablacuisine",
                "https://x.com/tablacuisine",
                "https://www.instagram.com/tablacuisine/",
                "https://www.youtube.com/@Tablacuisine",
              ],
            }),
          }}
        />
      </Head>

      <section id="blog" className="py-24 bg-white dark:bg-gray-200">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-black mb-12">
      Checkout Our <span className="text-red-400">Latest Blogs</span>
    </h2>

    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <div
          key={blog._id}
          className="relative group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl overflow-hidden shadow-lg transition hover:shadow-2xl"
        >
          <Link href={`/blogs/${blog.urlSlug}`}>
            <div className="relative p-4 w-full h-56 overflow-hidden">
              <Image
                src={blog.images.imageUrl?.original}
                alt={blog?.images?.altText || "Blog image"}
                fill
                className="object-cover p-4 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>

          <div className="p-6 text-left">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-red-500 transition-colors duration-300">
              <Link href={`/blogs/${blog.urlSlug}`}>{blog.title}</Link>
            </h1>
            <p className="mt-3 text-gray-600 dark:text-gray-400 line-clamp-3 group-hover:text-gray-300">
              {blog.shortDescription}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </>
  );
}

