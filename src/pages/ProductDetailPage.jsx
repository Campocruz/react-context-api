import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import LoadingPage from "../components/LoadingPage/LoadingPage";
import ProductDetail from "../components/ProductDetail";

export default function ProductDetailPage() {

  const { id } = useParams();
  const apiUrl = `https://fakestoreapi.com/products/${id}`;

  const [productDetail, setProductDetail] = useState({});

  const navigate = useNavigate()

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.text())
      .then(text => {
        if (!text) {
          throw new Error("Prodotto non trovato");
          navigate('/not-found');
        }
        const data = JSON.parse(text)
        setProductDetail(data)
      })
      .catch(err => {
        console.log(err)
        navigate("/not-found")
      })
      .finally(() => setLoading(false))
  }, [id])

  if (loading) { return <LoadingPage /> }

  return <ProductDetail detail={productDetail} nav={navigate} />

}