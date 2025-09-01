export default async function Reviewproduct({params}:{params:Promise<{productId:string,reviewId:string}>}){
    const{productId,reviewId}=await params
    return <h1>review-{reviewId}for{productId}</h1>
}