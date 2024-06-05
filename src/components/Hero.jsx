import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto">
     <div className="flex flex-col gap-4">
     <p>ITS TIME TO GET</p>
      <h1 className="uppercase font-semibold text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
        Swole<span className="text-blue-400">normous</span>
      </h1>
     </div>
      <p className="text-sm md:text-base font-light">
        {" "}
        <span className="text-blue-400 font-medium">Lorem</span> Ipsum is simply
        dummy text of the printing and typesetting industry.{" "}
        <span className="text-blue-400 font-medium">Lorem Ipsum</span> has been
        the industry's standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen
        book
      </p>
      <Button text={"Accept & Begin"}></Button>
    </div>
  );
}
