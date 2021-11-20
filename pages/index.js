import Head from "next/head";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 font-outfit bg-neutral-very_dark_blue_main text-white">
      <Head>
        <title>NFT-preview-card</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main className="bg-neutral-very_dark_blue_card max-w-sm p-8 space-y-6 rounded-xl">
        <section id="image">
          <Image
            src="/image-equilibrium.jpg"
            width="250px"
            height="250px"
            layout="responsive"
            className="rounded-xl"
          />
        </section>
        <section id="content">
          <h1 className="text-xl">Equilibrium #3429</h1>
          <p className="text-primary-soft_blue mt-4">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="flex justify-between mt-4">
            <p className="flex items-center text-primary-cyan space-x-2">
              <Image
                src="/icon-ethereum.svg"
                width="11px"
                height="18px"
                fill="responsive"
              />
              <span>0.041 ETH</span>
            </p>
            <p className="flex items-center text-primary-soft_blue space-x-2">
              <Image
                src="/icon-clock.svg"
                width="17px"
                height="17px"
                fill="responsive"
              />
              <span>3 days left</span>
            </p>
          </div>
        </section>
        <hr />
        <section id="user">
          <div className="flex items-center space-x-5">
            <div id="border-image" className="rounded-full">
              <Image
                src="/image-avatar.png"
                width="48px"
                height="48px"
                fill="responsive"
                id="borde-xd"
              />
            </div>
            <p>
              <span className="text-primary-soft_blue">Creation of </span>Jules
              Wyvern
            </p>
          </div>
        </section>
      </main>
      <style jsx>{`
        #border-image {
          width: 48px;
          height: 48px;
          border: 1.5px solid white;
        }
        hr {
          border: 0.5px solid hsl(215, 32%, 27%);
          height: 1px;
          width: 100%;
        }
      `}</style>
    </div>
  );
  {
  }
}
