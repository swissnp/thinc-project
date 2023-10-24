// Check your email
// A sign in link has been sent to your email address. Please check your inbox or junk box and click on the link to verify your email.
// create a page that have this message centered
import Head from "next/head";
export default function Verify() {
  return (
    <>
      <Head>
        <title>💡🎰 BlubBet</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h4 className="text-3xl font-extrabold tracking-tight sm:text-[5rem]">
            Check your email
          </h4>
          <div className="text-base-content grid max-w-3xl grid-cols-1 gap-4 md:gap-8 ">
            <p className="text-center text-xl font-normal">
              A sign in link has been sent to your email address. Please check
              your inbox or{" "}
              <b className="text-primary whitespace-nowrap">junk box</b> and
              click on the link to sign in with your email.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
