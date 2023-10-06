export default function AboutMe() {
  const data = [
    { stack: "HTML" },
    { stack: "CSS" },
    { stack: "TailwindCSS" },
    { stack: "Javascript" },
    { stack: "Node" },
    { stack: "ExpressJs" },
    { stack: "MongoDB" },
    { stack: "Figma" },
    { stack: "Sass" },
    { stack: "Adobe XD" },
    { stack: "React" },
    { stack: "Typescript" },
    { stack: "Solidity" },
    { stack: "Bootstrap" },
    { stack: "Firebase" },
    { stack: "Git" },
    { stack: "Github" },
    { stack: "netlify" },
    { stack: "Vercel" },
    { stack: "Bash" },
    { stack: "NextJs" },
  ];
  return (
    <section className="about-me flex flex-col justify-center items-center pt-[100px] pb-[60px] mx-auto px-3 w-[85%] lg:w-[60%]">
      <div className="flex flex-col justify-center items-center text-2xl sm:text-3xl md:text-4xl font-bold mt-[48px] mb-[12px]">
        About Me
        <div className="w-[100px] h-[5px] mt-[6px] bg-black rounded-md"></div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-center text-[#4b5563] text-[14px] nun-sans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, modi repellat itaque
          officia minima error!
        </p>
        <p className="text-center text-[#4b5563] text-[14px] nun-sans">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi quo, alias earum ducimus
          quaerat ullam velit modi voluptate mollitia? Nobis?
        </p>
        <p className="text-center text-[#4b5563] text-[14px] nun-sans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, modi repellat itaque
          officia minima error!
        </p>
        <p className="text-center text-[#4b5563] text-[14px] nun-sans">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi quo, alias earum ducimus
          quaerat ullam velit modi voluptate mollitia? Nobis?
        </p>{" "}
        <p className="text-center text-[#4b5563] text-[14px] nun-sans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, modi repellat itaque
          officia minima error!
        </p>
        <p className="text-center text-[#4b5563] text-[14px] nun-sans">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi quo, alias earum ducimus
          quaerat ullam velit modi voluptate mollitia? Nobis?
        </p>{" "}
        <p className="text-center text-[#4b5563] text-[14px] nun-sans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, modi repellat itaque
          officia minima error!
        </p>
        <p className="text-center text-[#4b5563] text-[14px] nun-sans">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi quo, alias earum ducimus
          quaerat ullam velit modi voluptate mollitia? Nobis?
        </p>
      </div>

      <div className="stack-wrapper flex flex-wrap justify-center items-center gap-2 mt-[40px] mb-[40px] text-[#4b5563] text-[12px] nun-sans">
        {data.map((item) => (
          <span className="bg-black text-white px-2 py-1">{item.stack}</span>
        ))}
      </div>
    </section>
  );
}
