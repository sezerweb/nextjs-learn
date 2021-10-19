import styles from "./layout.module.css";
import Head from "next/head";
import SidebarMenu from "./sidebar-menu.js";

export default function Layout({ children, siteTitle }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header></header>
      <SidebarMenu>sss</SidebarMenu>
      
      <main>{children}</main>
    </div>
  );
}
