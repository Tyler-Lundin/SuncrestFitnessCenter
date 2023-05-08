'use client';

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={"w-full h-fit py-8 bg-black flex flex-col gap-4 items-center justify-center"}>
      <p className="text-sm text-gray-300">
        © {YEAR} Suncrest Fitness Center. All rights reserved.
      </p>
      <p className="text-sm text-gray-400">
        Created With ❤️ by <a href="https://www.tylerlundin.me" target="_blank" rel="noreferrer">Tyler Lundin</a>
      </p>
    </footer>
  )
}
