
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { notFound } from "next/navigation";
import React from "react";
import { Metadata } from "next";

interface BlogImage {
  imageUrl: {
    original: string;
    key: string;
  };
  altText: string;
}

interface BlogData {
  _id: string;
  urlSlug: string;
  title: string;
  shortDescription: string;
  metaData: {
    title: string;
    keyword: string;
    description: string;
  };
  body: {
    blocks: Array<{
      type: string;
      id: string;
      data: {
        level?: number;
        text?: string;
        style?: string;
        items?: string[];
        caption?: string;
        file?: { url?: string };
        title?: string;
        message?: string;
        code?: string;
        content?: string[][];
      };
      tunes?: {
        textVariant?: string;
      };
    }>;
  };
  writer: {
    name: string;
    description: string;
    image: BlogImage;
  };
  activityDate: string;
  images: BlogImage;
}

type BlogDetailPageProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;

  const blogResponse = await axios.get(
    `https://api.tablacuisine.com/api/website/activity/${slug}?website=TABLAFRANCHISE`
  );
  const blog: BlogData = blogResponse.data?.data;
  if (!blog) {
    notFound();
  }

  const blogDetails = await axios.get(
    `https://api.tablacuisine.com/api/website/activity?pagination=true&type=BLOG&page=1&limit=6&website=TABLAFRANCHISE`
  );

  const blogList: BlogData[] = blogDetails.data.data.filter(
    (res: BlogData) => res._id !== blog._id
  );

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <>
      <div className=" bg-white dark:bg-gray-200 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex pt-6 bread-outer" aria-label="Breadcrumb">
            <ol className="inline-flex mt-20 flex-wrap items-start space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-800 hover:text-red-700">
                  <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <Link href="/blogs" className="ms-1 text-sm font-medium text-gray-800 hover:text-red-700 md:ms-2">Blogs</Link>
                </div>
              </li>
              <li className="hidden md:block" aria-current="page">
                <div className="flex items-center">
                  <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <span className="ms-1 text-sm font-medium text-gray-600 md:ms-2">{blog?.urlSlug}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <section id="blog-details" className="pb-12 pt-12">
          <div className="max-w-7xl px-4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="relative mb-4">
                <Image
                  width={900}
                  height={400}
                  className="object-cover mb-2 rounded-xl"
                  src={blog?.images?.imageUrl?.original}
                  alt={blog?.images?.altText}
                />
                <div className="absolute top-4 left-4 text-white bg-black bg-opacity-60 px-4 py-1 rounded-md">
                  <span className="font-semibold">{new Date(blog?.activityDate).getDate()}</span>
                  <span>{monthNames[new Date(blog?.activityDate).getMonth()]}</span>
                </div>
              </div>

              {blog?.body?.blocks.map((elem) => {
                switch (elem.type) {
                  case "header":
                    return (
                      <React.Fragment key={elem.id}>
                        {elem.data.level === 1 && (
                          <h1 id={elem.id} className="text-3xl font-semibold mb-4 text-red-700" dangerouslySetInnerHTML={{ __html: elem.data.text || "" }} />
                        )}
                        {elem.data.level === 2 && (
                          <h2 id={elem.id} className="text-2xl font-semibold mb-4 text-gray-800" dangerouslySetInnerHTML={{ __html: elem.data.text || "" }} />
                        )}
                        {elem.data.level === 3 && (
                          <h3 id={elem.id} className="text-xl font-semibold mb-4 text-gray-800" dangerouslySetInnerHTML={{ __html: elem.data.text || "" }} />
                        )}
                        {elem.data.level === 4 && (
                          <h4 id={elem.id} className="text-lg font-semibold mb-4 text-gray-800" dangerouslySetInnerHTML={{ __html: elem.data.text || "" }} />
                        )}
                        {elem.data.level === 5 && (
                          <h5 id={elem.id} className="text-md font-semibold mb-4 text-gray-800" dangerouslySetInnerHTML={{ __html: elem.data.text || "" }} />
                        )}
                        {elem.data.level === 6 && (
                          <h6 id={elem.id} className="text-sm font-semibold mb-4 text-gray-800" dangerouslySetInnerHTML={{ __html: elem.data.text || "" }} />
                        )}
                      </React.Fragment>
                    );

                  case "paragraph":
                    return (
                      <React.Fragment key={elem.id}>
                        <p id={elem.id} className="text-gray-800 mb-4" dangerouslySetInnerHTML={{ __html: elem.data.text || "" }} />
                      </React.Fragment>
                    );

                  case "image":
                    return (
                      <div id={elem.id} className="relative mb-6" key={elem.id}>
                        <figcaption className="text-sm text-gray-600 mb-2">{elem.data.caption}</figcaption>
                        <Image
                          className="max-w-full rounded-lg mb-4"
                          src={elem.data.file?.url || ""}
                          alt="Blog Image"
                          width={900}
                          height={500}
                          layout="responsive"
                        />
                      </div>
                    );

                  default:
                    return null;
                }
              })}
            </div>

            {/* Featured Posts */}
            <div className="p-6 pt-0">
              <h2 className="text-2xl font-semibold text-red-700 mb-6">Featured Posts</h2>
              <div className="space-y-6">
                {blogList.map((blog) => (
                  <div key={blog._id} className="flex flex-col space-y-4 border-b pb-4">
                    <Image
                      width={400}
                      height={140}
                      className="object-cover mb-2 rounded-lg"
                      src={blog.images.imageUrl.original}
                      alt={blog.images.altText || "Blog Image"}
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        <Link href={`/blogs/${blog.urlSlug}`} className="hover:text-blue-500 transition">
                          {blog?.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 text-sm">{blog.shortDescription}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {

  const { slug } = await params; // ✅ Await the promise here


  const blogResponse = await axios.get(
      `https://api.tablacuisine.com/api/website/activity/${slug}?website=TABLAFRANCHISE`
    );
    const blog = blogResponse.data?.data;

    if (!blog) {
      return {
        title: "Blog not found",
        description: "The blog you're looking for does not exist.",
      };
    }

    return {
      title: blog.metaData?.title || blog.title,
      description: blog.metaData?.description || blog.shortDescription,
      keywords: blog.metaData?.keyword?.split(",") || [],
      openGraph: {
        title: blog.metaData?.title || blog.title,
        description: blog.metaData?.description || blog.shortDescription,
        images: [
          {
            url: blog.images?.imageUrl?.original || "",
            alt: blog.images?.altText || "Blog Image",
          },
        ],
        url: `https://yourdomain.com/blogs/${blog.urlSlug}`,
      },
    };
}