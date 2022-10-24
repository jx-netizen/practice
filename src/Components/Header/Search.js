import React from 'react'
import { Box, InputBase, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

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
const Search = () => {
  return (
    <Searchbox>
        <Inputbox 
        placeholder='Search for products, brands and more'/>
        <Searchicon>
        <SearchIcon />
        </Searchicon>
    </Searchbox>
  )
}

export default Search