import Image from "next/image";
export default function Home() {
  return (
    <div className="grid place-items-center p-5 min-h-screen py-2 font-outfit bg-neutral-very_dark_blue_main text-white">
      <main className="bg-neutral-very_dark_blue_card max-w-sm p-8 space-y-6 rounded-xl">
        <section id="image" className="relative">
          <Image
            src="/image-equilibrium.jpg"
            width="250px"
            height="250px"
            layout="responsive"
            className="rounded-xl bg-opacity-50"
            quality="100"
            alt=""
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
          <h1 className="text-xl font-semibold">
            <a href="#" className="hover:text-primary-cyan">
              Equilibrium #3429
            </a>
          </h1>
          <p className="text-primary-soft_blue mt-4">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="flex justify-between mt-4">
            <p className="flex items-center text-primary-cyan space-x-2">
              <Image
                src="/icon-ethereum.svg"
                width="11px"
                height="18px"
                alt="ethereum icon"
              />
              <span>0.041 ETH</span>
            </p>
            <p className="flex items-center text-primary-soft_blue space-x-2">
              <Image
                src="/icon-clock.svg"
                width="17px"
                height="17px"
                alt="clock icon"
              />
              <span>3 days left</span>
            </p>
          </div>
        </section>
        <hr />
        <section id="user">
          <div className="flex items-center space-x-5">
            <Image
              src="/image-avatar.png"
              width="48px"
              height="48px"
              alt="user icon"
            />
            <div>
              <p>
                <span className="text-primary-soft_blue">Creation of </span>
                <a href="#" className="hover:text-primary-cyan">
                  Jules Wyvern
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <style jsx>{`
        hr {
          border: 0.1px solid hsl(215, 32%, 27%);
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
      `}</style>
    </div>
  );
  {
  }
}
