import "./globals.css";
import TopMenu from "@/components/TopMenu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-0">
        <TopMenu />
        {children}
      </body>
    </html>
  );
}