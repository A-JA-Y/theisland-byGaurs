import createMDX from "@next/mdx";
import bundleAnalyzer from "@next/bundle-analyzer";
import { NextConfig } from "next";

const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: ["rehype-slug"],
  },
});

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});


const nextConfig: NextConfig = {
  output:"export",

  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

  images: {
    qualities: [75, 80],
    unoptimized:true
  },

  allowedDevOrigins: ["192.168.29.216"],

  async redirects() {
    return [
      { source: "/about-godrej-golf-links", destination: "/about-the-islands-by-gaurs", permanent: true },
      { source: "/about-godrej-properties", destination: "/about-gaurs", permanent: true },
      { source: "/villas-configurations", destination: "/price", permanent: true },
    ];
  },
};

export default withBundleAnalyzer(withMDX(nextConfig));