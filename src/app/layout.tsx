import './globals.css';

export const metadata = {
  title: 'Template Next.js',
  description: 'Template Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
