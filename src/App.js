import { Formik, Form, Field, ErrorMessage } from 'formik';
import TextInput from './components/TextInput';
import Checkbox from './components/Checkbox';
import Radio from './components/Radio';
import Select from './components/Select';

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

  if(!values.radio) {
    errors.radio = 'Required'
  }

  return errors
}

const App = () => {

  return (
    <Formik
      initialValues={{
        name: '',
        lastname: '',
        email: '',
        gender: '',
        radio: ''
      }}
      validate={validate}
      onSubmit={values => console.log(values)}
    >
      <Form>
        <TextInput name='name' label='Name' />
        <br />

        <TextInput name='lastname' label='Last Name' />
        <br />

        <TextInput name='email' label='Email' />
        <br />

        <Select name='gender' label='Gender'>
          <option value=''>Gender</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </Select>
        <br />

        <Checkbox name='accept'>
          Agree terms and conditions
        </Checkbox>
        <br />

        <Radio name='radio' value='blue' label='blue' />
        <Radio name='radio' value='green' label='green' />
        <Radio name='radio' value='yellow' label='yellow' />
        <ErrorMessage name='radio' />
        <br/>

        <button type='submit'>Send</button>
      </Form>
      
    </Formik>
  );
}

export default App;
