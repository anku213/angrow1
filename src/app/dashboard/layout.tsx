export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* You can add a sidebar, topbar, etc. */}
      {children}
    </div>
  );
}
  