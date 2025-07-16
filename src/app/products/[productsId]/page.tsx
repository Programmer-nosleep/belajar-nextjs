export default async function ProductDetails({ params }: { params: Promise<{ productsId: string; }> }) {
  const productsId  = (await params).productsId;
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center"> 
        Details for product { productsId }
      </div>
    </div>
  );
}