import { notFound } from 'next/navigation';

function ReviewDetail({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  // NOTE: 리뷰가 1000개 보다 많으면, [reviewId] 안에 있는 notFound 페이지 띄운다.
  // http://localhost:3000/products/100/reviews/1001 에서는 notFound 페이지가 뜬다.
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}

export default ReviewDetail;
