import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";

const inter = Inter({ subsets: ["latin"] });

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      testLocale: locale,
    },
  };
};

export default function Home({
  testLocale,
}: {
  testLocale: string | undefined;
}) {
  const { locale, query, asPath } = useRouter();

  return (
    <main className="p-4">
      Locale using useRouter: {locale}
      <br />
      <span
        className={
          testLocale !== locale
            ? "text-red-500 font-bold"
            : "text-green-500 font-bold"
        }
      >
        Locale from getStaticProps: {testLocale}
      </span>
      <br />
      <Link className="text-blue-500 underline" href="/test-page-1">
        Test page 1
      </Link>{" "}
      -{" "}
      <Link className="text-blue-500 underline" href="/test-page-2">
        Test page 2
      </Link>
      <br />
      <pre className="mt-4 p-2 rounded border bg-slate-100">
        {JSON.stringify(
          {
            asPath,
            locale,
            query,
          },
          null,
          2
        )}
      </pre>
    </main>
  );
}
