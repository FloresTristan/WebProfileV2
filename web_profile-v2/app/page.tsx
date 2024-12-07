import Head from 'next/head';
import './globals.css';
import ThemeController from './components/ThemeController';
import Image from 'next/image';

export default function Home() {
  return (
    <div className=" min-h-screen">
      <Head>
        <title>Michael Flores - Portfolio</title>
        <meta name="description" content="Welcome to Michael Flores' portfolio. Explore projects, learn more about me, and get in touch." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className=" md:flex md:justify-around shadow">
        <div className='flex mx-auto items-center'>
          <Image src={'data:image/jpeg;base64,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'} alt='me' width={200} height={100} />
          <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <h1 className="text-xl font-bold ">Michael Flores</h1>
            <nav className="mt-2 navbar">
              <ul className="flex space-x-4">
                <li><a href="#about" className="hover:text-blue-500">About Me</a></li>
                <li><a href="#portfolio" className=" hover:text-blue-500">Portfolio</a></li>
                <li><a href="#contact" className=" hover:text-blue-500">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="md:max-w-max flex items-center mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ThemeController />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section id="about" className="my-8">
          <h2 className="text-2xl font-bold  mb-4">About Me</h2>
          <p className=" leading-relaxed">
            Hi, I’m Michael Flores, a Computer Engineering technology student passionate about web development, tech, and fantasy. I enjoy building projects that solve problems and look aesthetically pleasing.
          </p>
        </section>

        <section id="portfolio" className="my-8">
          <h2 className="text-2xl font-bold  mb-4">Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Add project cards here */}
            <div className="shadow-xl rounded-lg p-4">
              <h3 className="text-lg font-bold">Project Name</h3>
              <p className=" mt-2">Skibidi toilet skbidi rompers skibidi skibidi medio is fcking gay and he likes to gobble on these nuts.</p>
              <a href="#" className="text-blue-500 hover:underline mt-2 inline-block">View Project</a>
            </div>
          </div>
        </section>

        <section id="contact" className="my-8">
          <h2 className="text-2xl font-bold  mb-4">Contact</h2>
          <p className=" leading-relaxed">
            Interested in working together? Feel free to reach out!
          </p>
          <form className="mt-4 space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Your email" />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea id="message" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" rows={4} placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Send</button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          &copy; {new Date().getFullYear()} Michael Flores. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
