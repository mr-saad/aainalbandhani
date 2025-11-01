"use client"
export default function Toggler() {
  return (
    <div
      onClick={() => document.querySelector("nav").classList.toggle("hidden")}
      className="w-4 h-2 flex flex-col gap-1 justify-self-end md:hidden"
    >
      <span className="h-0.5 bg-black"></span>
      <span className="h-0.5 bg-black"></span>
    </div>
  )
}
