import Layout from "../../../components/layout";

const pageTitle = "Nextjs uygulaması oluştur.";

export default function createNextjsApp() {
  return (
    <Layout siteTitle={pageTitle}>
      <h1>{pageTitle}</h1>
    </Layout>
  );
}
