import React from 'react';
import  {Formik , Form , Field , ErrorMessage} from 'formik';
import * as Yup from 'yup';

export default function UsersForm(props){
    // validation schema Yup
    const schema = Yup.object().shape({
        name:Yup.string().required('the name is required'),
        email:Yup.string().email().required('the email is required'),
    });

    return (
        <Formik
          enableReinitialize={true}
          initialValues={props.values}
          onSubmit={props.onSubmit}
          validationSchema={schema}
          render={props=>{
              return (
                  <div className={"card"}>
                      <div className="card-header">
                          <h2 className="card-title">Register New User</h2>
                      </div>
                      <div className="card-body">
                          <Form>
                              <div className={"form-group"}>
                                  <label htmlFor="name">Name</label>
                                  <Field name={"name"} className={"form-control"}/>
                                    <ErrorMessage className={"alert alert-danger"} name={"name"}/>
                              </div>

                              <div className={"form-group"}>
                                  <label htmlFor="email">Email</label>
                                  <Field name={"email"} className={"form-control"}/>
                                    <ErrorMessage name={"email"}/>
                              </div>

                              <div className={"form-group"}>
                                  <button className={"btn btn-success btn-sm"}>Save User</button>
                              </div>

                          </Form>
                      </div>
                  </div>
              )
          }}
        />
    );


}