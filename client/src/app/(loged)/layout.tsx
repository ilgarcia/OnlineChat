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
        <section className="flex">
          <Navbar />
          {children}
        </section>
      </body>
    </html>
  );
}
