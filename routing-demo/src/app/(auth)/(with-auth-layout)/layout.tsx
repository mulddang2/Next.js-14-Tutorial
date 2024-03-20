export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2>auth 안에만 박혀있는 고정 레이아웃</h2>
      {children}
    </div>
  );
}
