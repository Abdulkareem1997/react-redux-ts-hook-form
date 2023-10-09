import { Alert, Box, Button, FormControl, Snackbar, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import "./SignInPage.scss"
import {useForm, Controller} from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import {RootState} from '../../redux/store'
import { userList } from '../../utils/constants'
import { authLogin } from '../../redux/reducers/AuthReducer/AuthReducer'

interface SignInForm {
  username: string;
  password: string;
}

type snackType = {
  isOpen:boolean;
  message:string;
  severity: "error" | "success";
}

const SignInPage:React.FC = () => {

  // const userList = useSelector((state:RootState) => state.userAuth.userList)
  // const [open, setOpen] = useState<boolean>(false);
  // const [snackMessage, setSnackMessage] = useState<string>('');
  const dispatch = useDispatch()
  const [snackState, setSnackState] = useState<snackType>({
    isOpen:false,
    message:"",
    severity:"error"
  })

  const defaultValues:SignInForm = {
    username:"",
    password:""
  }

  const {
    handleSubmit,
    getValues,
    trigger,
    clearErrors,
    control,
    formState:{errors}
  } = useForm<SignInForm>({defaultValues})

  const signInSubmit = (data:SignInForm) => {
    const userData = userList.find((list:any) => list?.username === data?.username)
    if(userData){
      console.log(userData)
      if(userData?.password === data?.password){
        setSnackState({
          isOpen:true,
          message:"Successfully logged in...!",
          severity:"success"
        })
        setTimeout(()=>{
          dispatch(authLogin(userData))
        },1000)
        
      }else{
        setSnackState({
          isOpen:true,
          message:"Wrong password...!",
          severity:"error"
        })
      }
    }else{
      setSnackState({
        isOpen:true,
        message:"User Name does not excist!",
        severity:"error"
      })
    }

  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackState({
      isOpen:false,
      message:"",
      severity:"error"
    })
  };

  return (
    <>
      <Box className='signin-container' sx={{ boxShadow: 3 }} >
        <Box
          component="form"
          data-testid="formHandle"
          id="mandateForm"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(signInSubmit)}
        >
          <Box className="sign-header">
            <Typography className='primary-text'>Sign In</Typography>
          </Box>
          <Box className="sign-form">
            <FormControl fullWidth>
              <Controller
                name="username"
                control={control}
                rules={{
                  required: {
                      value: true,
                      message: "username is required",
                  }
                }}
                render={({ field:{value, onChange} }) => (
                  <TextField
                    label='Username'
                    placeholder='Username'
                    className='username-text'
                    value={value}
                    onChange={onChange}
                    required
                  />
                )}
              />
              {errors?.username && (
                <span className="form-error-text" role="alert">
                    {errors?.username?.message}
                </span>
              )}
            </FormControl>
            <FormControl fullWidth>
              <Controller
                name="password"
                control={control}
                rules={{
                  required: {
                      value: true,
                      message: "password is required",
                  }
                }}
                render={({ field:{value, onChange} }) => (
                  <TextField
                    label='password'
                    placeholder='password'
                    className='password-text'
                    value={value}
                    onChange={onChange}
                    required
                  />
                )}
              />
              {errors?.password && (
                <span className="form-error-text" role="alert">
                    {errors?.password?.message}
                </span>
              )}
            </FormControl>
          </Box>
          <Box className="sign-footer">
            <Button 
              variant="contained"
              type="submit"
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Box>
      <Snackbar 
        open={snackState.isOpen} 
        autoHideDuration={6000} 
        onClose={handleClose}
        anchorOrigin={{ vertical:"top", horizontal:"right" }}
      >
        <Alert onClose={handleClose} variant="filled" severity={snackState.severity} sx={{ width: '100%' }}>
          {snackState.message}
        </Alert>
      </Snackbar>
    </>
  )
}

export default SignInPage