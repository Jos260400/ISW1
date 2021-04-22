import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  username: z.string().nonempty({ message: 'Ingresa un usuario' }),
  age: z.number().min(10),
});

function RegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });
  const [registerData, setRegisterdata] = useState({
    email: '',
    username: '',
    password: '',
    user_name: '',
    lastname: '',
  });

  const [registerFilled, setRegisterfilled] = useState({
    email: false,
    username: false,
    password: false,
    user_name: false,
    lastname: false,
  });

  const handleInputChange = (e) => {
    console.log(e.target.value);
    console.log('wtf');
    setRegisterdata({
      ...registerData,
      [e.target.name]: e.target.value,
    });

    if (e.target.value !== '') {
      setRegisterfilled({
        ...registerFilled,
        [e.target.name]: true,
      });
    } else {
      setRegisterfilled({
        ...registerFilled,
        [e.target.name]: false,
      });
    }
  };

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Username */}
        <div className="position-relative mt-2">
          <input
            className={`input ${registerFilled.username ? 'is-filled' : ' '}`}
            type="text"
            name="username"
            onInput={handleInputChange}
            {...register('username')}
          />
          <label className="label">Usuario</label>
          <small className="text-danger text-small d-block mb-2">
            {/* <Exclamation_icon/> */}
            {errors.username?.message}
          </small>
        </div>
      </form>
    </>
  );
}

export default RegisterForm;
