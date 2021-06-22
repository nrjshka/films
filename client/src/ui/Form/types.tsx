type FormProps<FormValue> = {
  onSubmit: (val: FormValue) => void
  isRegistration?: boolean
}

export type { FormProps }
