import React from 'react';
import {useState, useContext } from 'react';
import {Dialog,Box,Typography,TextField,Button,styled} from "@mui/material";
import { authenticateSignup, authenticateLogin } from '../../Service/api';
import { DataContext } from '../../Context/DataProvider';

const accountInitialValue = {
    login: {
        view:'login',
        heading: 'Login',
        subheading:'Get access to your Orders, whistlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading:"Look's like you're new here",
        subheading:'Signup with your mobile to get started'
    }
}
const signupInitialvalue = {
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
    password:''
}
const loginInitialvalue = {
    email:'',
    password:''
}


const Component = styled(Box)`
    height:70vh;
    width:90vh:
`
const Wrapper = styled(Box)`
    display:flex;
    flex-direction:column;
    padding:20px 35px;
    flex:1;
    & > div , & > button , & > p{
        margin-top: 10px;
    }
`
const LoginButton = styled(Button)`
    text-transform: none;
    background:#fb641b;
    height: 48px;
    color:#fff;
    border-radius: 2px;
    :hover {
        color: #fb641b;
        border: 1px solid #fb641b;
    }
`
// const RequestOTP = styled (Button)`
//     text-transform: none;
//     background:#fff;
//     height: 48px;
//     color:#2874f0;
//     border-radius: 2px;
//     box-shadow: 0 2px 3px 0 rgb(0,0,0,20);
// `
const Text = styled(Typography)`
    font-size: 12px;
    color:#878787;
`
const Account = styled (Typography)`
    font-size: 12px;
    color:#2874f0;
    font-weight: 600;
    cursor: pointer;
    text-align:center;
`
const Error = styled(Typography)`
    font-size: 10px;
    color:#ff6161;
    line-height:0;
    font-weight:600;
    margin-top:10px
`

const LoginDialog = ({open,setOpen}) => {

    const [account, toggleAccount] = useState(accountInitialValue.login);
    const [signup, setSignup] = useState(signupInitialvalue);
    const [login,setLogin] = useState(loginInitialvalue);
    const [error, setError] = useState(false);
    const {setAccount} = useContext(DataContext);

    const handleClose = () =>{
        setOpen(false);
        toggleAccount(accountInitialValue.login);
        setError(false);
    }
    const toggleSignup = ()=>{
        toggleAccount (accountInitialValue.signup);
    }
    const onInputChange = (e)=>{
        setSignup ({...signup , [e.target.name] : e.target.value});
    
    }
    const SignupUser = async()=>{
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.firstname);
    }
    const onValueChange =(e)=>{
        setLogin({...login, [e.target.name] : e.target.value});
    }
    const LoginUser = async()=>{
        let response = await authenticateLogin(login);
        if(response.status === 200){
            handleClose();
            setAccount(response.data.data.firstname);
        }
        else {
            setError(true);
        }
        
    }

//https://assets.aftership.com/couriers/svg/ekart.svg PaperProps={{sx:{maxWidth:'unset'}}}
  return (
    <Dialog open={open} onClose={handleClose} >
           <Component>
            <Box style={{display:'flex',height:'100%'}}>
                <Box style={{background:'#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 80% no-repeat',height:'77.5%',width:'30%',padding:'45px 35px'}}>
                    <Typography variant="h5" style={{color:'#ffffff',fontWeight:'600'}}>{account.heading}</Typography>
                    <Typography style={{marginTop:'20px',color:'#ffffff',fontSize:'12px'}}>{account.subheading}</Typography>

                </Box>
                {
                    account.view === 'login' ?
                
                <Wrapper>
                    <TextField variant="standard" onChange= {(e)=> onValueChange(e)} name='email' label="Enter Email"></TextField>
                    {
                    error && 
                    <Error>Please enter valid email and password</Error>
                    }

                    <TextField variant="standard" onChange= {(e)=> onValueChange(e)} name="password" label="Enter Password"></TextField>
                    <Text style={{marginBottom:"20px"}}>By continuing you agree E-Cart to Terms of Use and Privacy policy.</Text>
                    <LoginButton onClick={()=> LoginUser()}>LOGIN</LoginButton>
                    {/* <Typography style={{textAlign:'center'}}>OR</Typography>
                    <RequestOTP>Request OTP</RequestOTP> */}
                    <Account onClick={ () => toggleSignup()}>New to E-Cart? Create an account</Account>
                </Wrapper>
                :
                <Wrapper>
                    <TextField variant="standard" onChange= {(e)=> onInputChange(e)} name="firstname" label="Enter Firstname"></TextField>
                    <TextField variant="standard" onChange= {(e)=> onInputChange(e)} name="lastname" label="Enter Lastname"></TextField>
                    {/* <TextField variant="standard" label="Enter username"></TextField> */}
                    <TextField variant="standard" onChange= {(e)=> onInputChange(e)} name="email" label="Enter Email"></TextField>
                    <TextField variant="standard" onChange= {(e)=> onInputChange(e)} name="phone" label="Enter Phone"></TextField>
                    <TextField variant="standard" onChange= {(e)=> onInputChange(e)} name="password" label="Enter Password"></TextField>
                    <LoginButton onClick ={()=> SignupUser()}>Continue</LoginButton>
                    
                </Wrapper>
                }

            </Box>    
           </Component>
    </Dialog>
  )
}

export default LoginDialog