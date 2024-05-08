'use client';
import { useRouter } from 'next/navigation';

export default function OrderProductPage() {
  const router = useRouter();
  const handleClick = () => {
    console.log('Placing your order');
    // NOTE: Navigating
    // router.push('/'); --> 현재 페이지 스택에 새로운 페이지를 추가하고 해당 페이지로 이동, 이렇게 하면 브라우저의 뒤로가기 버튼을 사용하여 이전 페이지로 되돌아갈 수 있음.
    // router.replace('/order-confirmation'); --> router.replace의 API는 router.push의 API와 완전히 동일하다. 차이점은 replace는 브라우저 히스토리에 새로운 항목을 추가하지 않는다. 그래서 router.back()을 통해서는 replace로 이동시킨 페이지로 돌아올 수 없다.
    // router.forward(); --> 다음페이지로 이동
    // router.back(); --> 브라우저의 뒤로 버튼을 클릭하는 것과 같습니다. window.history.back()을 실행하는 것과 동일.
    router.back();
  };

  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place order</button>
    </>
  );
}
