import Link from "next/link";
import Layout from "../components/layout";

const pageTitle = "Nextjs uygulaması oluştur.";

export default function Home() {
  return (
    <Layout siteTitle={pageTitle}>
      <p>First</p>
      <Link href="/basics/create-nextjs-app">
        <a>Nextjs uygulaması oluştur.</a>
      </Link>
      <Link href="/basics/create-nextjs-app/setup">
        <a>Kurulum</a>
      </Link>
    </Layout>
  );
}
