export default async function ProductReview({ params } : { params: Promise<{ productsId: string, reviewId: string; }> }) {
  const { productsId, reviewId } = await params;
  return (
    <div className="">
      <div className="flex justify-center items-center">
        <h1 className="">Review {reviewId} for product {productsId}</h1>
      </div>
    </div>
  );
}