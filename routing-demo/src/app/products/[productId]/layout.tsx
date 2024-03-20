export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    {/* 아래 children은,  productId 안에 있는 page 내용에 해당 한다.*/}
      {children} 
      <h2>추천 제품</h2>
      {/* 캐러셀 돌아가기 */}
    </>
  );
}
