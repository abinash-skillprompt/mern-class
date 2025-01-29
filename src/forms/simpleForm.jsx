import { ErrorMessage, Field, Form, Formik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

const validationSchema = z.object({
  name: z.string().min(5, 'Name is required').max(50, 'Name is too long'),
  email: z.string().email('Invalid email address'),
  age: z.number().min(18, 'You must be at least 18 years old'),
});

const SimpleForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Form Values:', values);
    setSubmitting(false);
  };

  const initialValues = {
    name: '',
    email: '',
    age: '',
  };

  return (
    <div>
      <h1 className="text-center mb-4 font-bold">Form</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={toFormikValidationSchema(validationSchema)}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <div>
              <label>Name</label>
              <Field
                type="text"
                name="name"
                className="border border-red-500 rounded-md"
              />
              {errors.name}
            </div>

            <div>
              <label>Email</label>
              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
                className="border border-red-500 rounded-md"
              />
              {errors.email}
              {ErrorMessage.email}
            </div>

            <div>
              <label>Age</label>
              <Field
                type="number"
                name="age"
                className="border border-red-500 rounded-md"
              />
              {errors.age}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="border border-green-500 rounded-md"
            >
              {isSubmitting ? 'Submitting....' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SimpleForm;
