function ElementoP({ children, title }) {
  return (
    <section className=" w-full min-h-dvh p-2 flex flex-col gap-12">
      <div className=" h-fit pb-5 self-center  overflow-hidden">
        {title && (
          <h1 className="text-8xl font-extrabold text-shadow-[0_0_8px] text-white text-shadow-black mt-7">
            {title}
          </h1>
        )}
      </div>
      {children}
    </section>
  );
}

export default ElementoP;
