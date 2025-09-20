import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="bg-[var(--primary-bg)] h-screen flex">
        <div className="flex-1">teste</div>
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
