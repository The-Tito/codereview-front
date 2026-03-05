export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col main-container items-center">
      {children}
    </section>
  );
}
