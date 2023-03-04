import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <section className="flex w-screen">
          <Navbar />
          <section className="w-screen h-screen ml-56">
            <Header />
            <section className="min-h-[calc(100%_-_3rem)] bg-theme-100">
              {children}
            </section>
          </section>
        </section>
      </body>
    </html>
  );
}
