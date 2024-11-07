import Image from "next/image";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <main className="absolute top-0 left-0">
      <div className="fixed inset-0 bg-[url('/assets/images/pagenotfound.webp')] bg-no-repeat bg-cover z-30">
        <div className="bg-black/70 w-full h-full flex flex-col justify-center items-center">
          <article className="flex flex-col items-center text-white">
            <Image
              src="/assets/icon/warnchat.png"
              alt="Warning icon for page not found"
              width={150}
              height={150}
              className="object-contain fill-white invert scale-150 my-20"
            />
            <h4
              role="heading"
              className="text-5xl max-w-60 md:text-7xl md:max-w-sm text-center min-w-60"
            >
              Page Not Found
            </h4>
            <p className="text-center md:max-w-sm md:text-2xl text-base max-w-60 py-4">
              The page you are looking for doesn&apos;t exist or has been moved.
            </p>
            <Link
              href="/"
              aria-label="Go back to homepage"
              className="px-4 py-2 md:max-w-sm text-base lg:text-xl max-w-60 text-black hover:text-white rounded-xl bg-clean-green-10 hover:bg-black"
            >
              Back To Home
            </Link>
          </article>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;
