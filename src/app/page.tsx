import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="bg-[var(--primary-bg)] h-screen flex">
        <div className="flex-1">
          <div>
            <p className="text-[var(--terciary-bg)]">
              Olá! Muito prazer,meu nome é Mateus
            </p>
            <p className="text-[var(--orange-bg)] text-[84px] font-extrabold text-start text leading-22">
              Desenvolvedor <br /> Full-stack
            </p>
            <div className="border-l-2 border-[var(--orange-bg)] pl-2">
              <p className="text-[var(--terciary-bg)]">
                Desenvolvedor Full Stack com experiência em&nbsp;
                <b>Next.js, Nodejs e Java.</b> <br />
                Também crio experiências digitais intuitivas através de{" "}
                <b>UI/UX</b>.
                <br />
                Sempre aprendendo, sempre evoluindo — porque com a lógica certa,
                tudo é possível. <br />
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-[504px] h-screen mr-12">
          <Image
            src="/main.png"
            alt="Imagem principal"
            fill
            className="object-contain"
          />
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </>
  );
}
