import { useFormik } from 'formik';

const validate = (values) => {
  const errors = {}
  if(!values.name) {
    errors.name = 'Required'
  } else if (values.name.length < 2) {
    errors.name = 'The name must be at least 2 characters'
  }

  if(!values.lastname) {
    errors.lastname = 'Required'
  } else if (values.lastname.length < 2) {
    errors.lastname = 'The lastname must be at least 2 characters'
  }
  return errors
}

const App = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
    },
    validate,
    onSubmit: values => console.log(values)
  });

  return (
    <form onSubmit={ formik.handleSubmit }>
      <label>Name</label>
      <input type='text' {...formik.getFieldProps('name')}/>
      { formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null }
      <br />

      <label>Last Name</label>
      <input type='text' {...formik.getFieldProps('lastname')}/>
      { formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null }
      <br />

      <label>Email</label>
      <input type='email' {...formik.getFieldProps('email')}/>
      { formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null }
      <br />

      <button type='submit'>Send</button>
    </form>
  );
}

export default App;
