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
        <section id="image" className="relative">
          <Image
            src="/image-equilibrium.jpg"
            width="250px"
            height="250px"
            layout="responsive"
            className="rounded-xl bg-opacity-50"
            quality="100"
          />
          <div
            id="box-image"
            className="absolute inset-y-0 w-full h-full bg-primary-cyan invisible opacity-0 rounded-xl"
          >
            <svg
              id="eye"
              width="48"
              height="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h48v48H0z" />
                <path
                  id="eye-fill"
                  d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z"
                  fill="hsl(208, 100%, 97.1%)"
                  fillRule="nonzero"
                />
              </g>
            </svg>
          </div>
        </section>
        <section id="content">
          <h1 className="text-xl hover:text-primary-cyan">Equilibrium #3429</h1>
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
            <div>
              <p className="hover:text-primary-cyan">
                <span className="text-primary-soft_blue">Creation of </span>
                Jules Wyvern
              </p>
            </div>
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
        #image:hover #box-image {
          opacity: 0.5;
          visibility: visible;
        }
        #eye {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        // #fill-eye {
        //   fill: #00f5d4;
        // }
      `}</style>
    </div>
  );
  {
  }
}
