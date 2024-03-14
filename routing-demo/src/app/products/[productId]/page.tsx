// 폴더 이름을 대괄호 안에 넣으면, /1, /2.... 원없이 동적 생성 가능하다.
// 대괄호 안의 ID를 prop으로 받아서, 파일 안에서 쓸 수 있다.
export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>Details about product {params.productId}</h1>;
}
