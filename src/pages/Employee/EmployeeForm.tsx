import React from 'react'
import './EmployeeForm.scss'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import AppTextField from '../../componants/AppComponents/AppTextField/AppTextField';

interface IFormInput {
  empName: string
}

const EmployeeForm:React.FC = () => {
  const navigate = useNavigate()

  const initValues:IFormInput = { 
    empName: ""
  }
  
  const methods = useForm<IFormInput>({ defaultValues: initValues });

  const {
    handleSubmit,
    getValues,
    trigger,
    formState:{errors},
    clearErrors ,
    control
  } = methods

  const formSubmitHandler = (data:IFormInput) => {
    console.log(data, "submited data")
  }

  return (
    <div className='employee-form-container'>
      <div className="header-page">
        <KeyboardBackspaceIcon onClick={()=> navigate(-1)} />
        <div className='header-text' >Add New Employee</div>
      </div>
      <FormProvider {...methods}>
        <div 
          className="new-add-container"
          onSubmit={handleSubmit(formSubmitHandler)}
        >
          <div className="d-grid">
            <Controller
              name='empName'
              control={control}
              rules={{
                required: {
                    value: true,
                    message: "This field is required",
                }
              }}
              render={({field : {onChange, value, onBlur}})=>(
                <div className="preference">
                  <label>Employee Name:</label>
                  <input type="text" name="cheese" id="cheese" />
                </div>
              )}
            />
            {errors?.empName && (
              <span className="reminder_text-danger select-danger-text" role="alert">
                  {errors?.empName?.message}
              </span>
            )}
          </div>
          <AppTextField
            name="empWork"
            label="Employee work"
          />
        </div>
      </FormProvider>
    </div>
  )
}

export default EmployeeForm