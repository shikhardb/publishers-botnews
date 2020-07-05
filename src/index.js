import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import logo from './logo.png';
import axios from 'axios';

import './index.css';

function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    axios.post(`http://localhost:8000/new`, data).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  return (
    <>
      <div className="center">
        <img src={logo} alt="Boltnews" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Publisher</label>
        <input
          name="publisher"
          ref={register({ required: true, minLength: 3, maxLength: 40 })}
        />
        {errors.publisher && <p>This field is required</p>}

        <label>Category</label>
        <input
          name="category"
          ref={register({ required: true, minLength: 3, maxLength: 30 })}
        />
        {errors.category && <p>This field is required</p>}

        <label>Language</label>
        <input
          name="language"
          ref={register({ required: true, maxLength: 20 })}
        />
        {errors.language && <p>This field is required</p>}

        <label>URL</label>
        <input
          name="source"
          ref={register({ required: true, minLength: 10 })}
        />
        {errors.source && <p>This field is required</p>}
        <input type="submit" />
      </form>
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
