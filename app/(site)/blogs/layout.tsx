import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | The Islands by Gaurs",
  description:
    "Read the latest insights, investment guides, and real estate trends in Greater Noida and Yamuna Expressway.",
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
