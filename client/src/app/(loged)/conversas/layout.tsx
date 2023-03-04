import Chat from "@/components/Chat";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-[calc(100vh_-_3rem)] ">
      <section className=" w-64 pt-6 px-3 bg-slate-100 border-r">
        <Chat />
      </section>
      <section>{children}</section>
    </section>
  );
}
