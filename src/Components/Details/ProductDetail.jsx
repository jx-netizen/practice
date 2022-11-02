import { useEffect } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../../Redux/Action/productActions";
import { Box, Grid, styled } from "@mui/material";
import ActionItem from "./ActionItem";
import ProductData from "./ProductData";

const Component = styled(Box)`
  background: #f2f2f2;
`;
const Container = styled(Grid)(({ theme }) => ({
  background: '#FFFFFF',
  display: 'flex',
  [theme.breakpoints.down('md')]: {
      margin: 0
  }
}))
const RightContainer = styled(Grid)`
  margin-top: 30px;
  padding-left: 20px;
`;

const ProductDetail = () => {
 
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useSelector((state) => state.getProductDetail);
  //console.log(product);

  useEffect(() => {
    // if(product && id !==product.product.id);
    dispatch(getProductDetail(id));
  }, [dispatch, id]);

  return (
    <Component>
      {product && Object.keys(product).length && (
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} sx={12}>
            <ProductData product={product} />
          </RightContainer>
        </Container>
      )}
    </Component>
  );
};

export default ProductDetail;
