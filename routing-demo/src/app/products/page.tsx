import Link from 'next/link';

export default function ProductList() {
  const productId = 100;
  return (
    <>
      <Link href={'/'}>홈으로 돌아가기</Link>
      <h1>Product List</h1>
      <h2>
        <Link href={'products/1'}>Product 1</Link>
      </h2>
      <h2>
        <Link href={'products/2'}>Product 2</Link>
      </h2>
      <h2>
        <Link href='products/3' replace>
          {/* replace 속성을 사용할 경우, 뒤로가기 하면, 홈으로 돌아감. */}
          Product 3
        </Link>
      </h2>
      <h2>
        {/* 동적으로 링크 연결하기 */}
        <Link href={`products/${productId}`}>Product {productId}</Link>
      </h2>
    </>
  );
}
