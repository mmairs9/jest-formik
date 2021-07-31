import React from "react";

import { Formik, Field } from "formik";
import './App.css';

function App() {
  return (
      <div className="app">
          <Formik
              key="test"
              enableReinitialize
              onSubmit={values => {
                console.log(values)
              }}
              initialValues={{
                  repeats: 'daily'
              }}
          >
              {(props) => {
            /**
             * Add your code here
             */


            return (
                <form onSubmit={props.handleSubmit}>
                    <>
                        <Field
                            {...props}
                            >
                            {({field}) => (
                                <div className="field__wrapper">
                                    <select {...field}  name="repeats" onBlur={props.handleBlur} onChange={props.handleChange}>
                                           <option value="daily">Daily</option>
                                        <option value="yearly">yearly</option>
                                        <option value="minutes">minutes</option>
                                        <option value="hourly">hourly</option>
                                    </select>
                                </div>
                            )}
                        </Field>
                  <p>{new Date().toISOString()}</p>
                        { console.log(new Date())}
                  <input
                      data-testid="the-input"
                      value={props.values.name}
                      type="text"
                      onChange={props.handleChange}
                      onBlur={props.handleSubmit}
                  />
                  <button type="submit">Submit</button>
                    </>
                </form>
            )
          }}
        </Formik>
      </div>
  );
}

export default App;
