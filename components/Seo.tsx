import Head from "next/head";

const Seo = (props: any) => {
  const gettitle = `${props.title} | Next.js`
  return (
    <Head>
      <title>{gettitle}</title>
    </Head>
  );
};
export default Seo;
