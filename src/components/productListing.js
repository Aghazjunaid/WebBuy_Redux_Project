import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import { Card, Container } from "react-bootstrap";
import "../App.css";
import Header from "./Header";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;

    return (
      <>
        <Card style={{ width: "15rem", margin: "10px" }} key={id}>
          <Card.Img variant="top" src={image} alt={title} style={{ width: "14rem", height: "14rem" }}/>
          <Card.Body style={{bottom: 0}}>
            <Card.Title>{title}</Card.Title>
            <Card.Text>$ {price}</Card.Text>
            <Card.Subtitle className="text-muted">{category}</Card.Subtitle>
          </Card.Body>
        </Card>
      </>
    );
  });
  return (
    <>
    <Header/>
      <Container>
        <div className="grid">{renderList}</div>
      </Container>
    </>
  );
};

export default ProductPage;
