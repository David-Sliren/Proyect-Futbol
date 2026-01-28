function ElementoP({ children, title }) {
  return (
    <section className=" w-full min-h-dvh p-2 flex flex-col gap-12">
      <div className=" h-fit pb-5 self-center  overflow-hidden">
        {title && (
          <h1 className="text-5xl md:text-8xl font-bold text-shadow-[0_0_8px] text-white text-shadow-black mt-6">
            {title}
          </h1>
        )}
      </div>
      {children}
    </section>
  );
}

export default ElementoP;
