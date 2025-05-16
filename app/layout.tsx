
export const metadata = {
  title: "UpLivio Tech",
  description: "Marketing agency specializing in lead generation and digital strategies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
