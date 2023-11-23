import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className=" border-b border-solid border-blue-500 fixed w-full z-50 h-60px text-center bg-white top-0 ">
        <div className=" max-w-950px pl-5 mx-auto text-center ">
          <div className=" float-left leading-60px clear-both inline-block max-w-full text-center ">
            <a
              href="#"
              rel="home"
              className=" text-slate-700 no-underline bg-transparent cursor-pointer "
            >
              <img
                src="/images/home/logo.png"
                className=" h-10 border-0 inline-block "
                alt="logo"
              />
            </a>
          </div>
          <nav className=" bg-transparent float-none clear-both text-center ">
            <div className=" float-right max-w-950px relative px-0 mx-auto ">
              <form className=" absolute pointer-events-none invisible z-20 w-full top-0 opacity-0 "></form>
              <div className=" hidden absolute right-0 top-0 z-30 list-none "></div>
              <button className=" text-left hidden bg-transparent w-full text-white "></button>
            </div>
            <div className=" hidden "></div>
            <ul className=" flex absolute top-1/2 -translate-y-1/2 right-20 items-center list-none "></ul>
            <div className=" fixed z-50 left-0 top-60px w-full max-h-0 overflow-auto bg-slate-800 "></div>
            <div className=" inline-block w-10 h-10 bg-blue-600 leading-10 text-center absolute right-5 top-10px text-white "></div>
          </nav>
        </div>
      </header>
    </>
  );
}
