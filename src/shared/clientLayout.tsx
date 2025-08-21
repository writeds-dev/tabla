import Layout from "@/components/Home/shared/layout";
import PixelScripts from "@/components/Home/pixelScripts";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PixelScripts />
        <Layout>
          {children}
        </Layout>
    </>
  );
}
