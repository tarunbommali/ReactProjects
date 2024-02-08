import { useEffect, useState } from "react";
import "./index.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fecthProducts() {}

  useEffect(() => {
    fecthProducts();
  }, []);
  return <div className="load-more-data-container"></div>;
}
