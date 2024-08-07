import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-blue-700 text-9xl tracking-tighter">Hello Next</h1>
      <Link
        href={{
          pathname: "properties",
          query: { name: "test" },
        }}
      >
        Go to Properties
      </Link>
    </>
  );
}
