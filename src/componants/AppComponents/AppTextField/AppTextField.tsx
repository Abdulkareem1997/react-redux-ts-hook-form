import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

type TAppTextProp = {
  name : string,
  label : string
}

const AppTextField:React.FC<TAppTextProp> = ({ name, label }) => {

  const { control, formState: { errors },getValues } : any = useFormContext()
  
  return (
    <div className="App-text-field">
      <Controller
        name={name}
        control={control}
        rules={{
          required: {
              value: true,
              message: "This field is required",
          }
        }}
        render={({field : {onChange, value, onBlur}})=>(
          <div className="preference">
            <label>{label}:</label>
            <input type="text" value={value} onChange={onChange} />
          </div>
        )}
      />
      {errors[name] && (
        <span className="reminder_text-danger select-danger-text" role="alert">
            {errors[name]?.message as string}
        </span>
      )}
    </div>
  )
}

export default AppTextField