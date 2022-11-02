import React from 'react'
import { Box, InputBase, List, ListItem, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import {useState,useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {getProduct} from "../../Redux/Action/productActions"
import { Link } from 'react-router-dom';

const Searchbox = styled(Box)`
    border-radius: 2px;
    width: 38%;
    background: #fff;
    margin-left: 10px;
    display: flex;
`
const Searchicon = styled(Box)`
    color: blue;
    padding: 5px;
    display: flex;
`
const Inputbox = styled(InputBase)`
    width: 100%;
    margin-left:20px;
`
const ListWrapper = styled(List)`
  position:absolute;
  background:#FFFFFF;
  color:#000;
  margin-top:38px;
`
const Search = () => {

  const {products} = useSelector(state =>state.getProducts)
  let data = products.products;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  const [search,setSearch] = useState('');
  const getText = (text)=>{
    setSearch(text);

  }
  return (
    <Searchbox>
        <Inputbox 
        placeholder='Search for products, brands and more'
        onChange={(e)=> getText(e.target.value)}
        value={search}
        />
        <Searchicon>
        <SearchIcon />
        </Searchicon>
        {
          search && 
          <ListWrapper>
            {
              data.filter(product => product.title.longTitle.toLowerCase().includes(search.toLowerCase())).map(product =>(
                <ListItem>
                  <Link 
                  to={`/product/${product.id}`} 
                  style={{textDecoration:'none',color:'inherit'}}
                  onClick={()=>setSearch( '')}>
                      {product.title.longTitle}
                  </Link>
                </ListItem>
              ))
            }
          </ListWrapper>
        }
    </Searchbox>
  )
}

export default Search