import React, {Fragment, useState} from 'react';
import {useForm} from 'react-hook-form';
import Axios from 'axios';
import {BsPerson as I_person} from 'react-icons/bs';
import {BsLock as I_lock} from 'react-icons/bs';
import {BsEnvelope as I_envelope} from 'react-icons/bs';
import history from '../history';

//ADD DEFENSIVE PROGRAMMING TO THE REGISTER BUTTON IN CASE DE USERNAME ALREADY EXIST

export default function registerForm (){

    const post_user = 'http://3.135.234.254:3000/createUser/';

    //Hook-Form validation
    const {register, errors, handleSubmit} = useForm({mode: 'onChange'});

    //State variables
    const [registerData, setRegisterdata] = useState({
        email: '',
        username:'',
        password:'',
        user_name: '',
        lastname: ''
    })

    const [registerFilled, setRegisterfilled] = useState({
        email: false,
        username: false,
        password: false,
        user_name: false,
        lastname: false
    });

    const handleInputChange = (e) =>{
        setRegisterdata({
            ...registerData,
            [e.target.name]:e.target.value,
        })

        if(e.target.value != ''){
            setRegisterfilled({
                ...registerFilled,
                [e.target.name]: true
            });
        }else{
            setRegisterfilled({
                ...registerFilled,
                [e.target.name]: false
            });
        }
    }

    const createUser = () =>{
        const fetchData = async () =>{
            try{
                const { data } = await Axios.post(post_user,
                  {
                      username: registerData.username,
                      contrasena: registerData.password,
                      nombres: registerData.user_name,
                      apellidos: registerData.lastname,
                      correo: registerData.email
                  }
                );
                history.push(`/home/${registerData.username}`);
                history.go();
            } catch (error){
                console.log(error)
                alert("Usuario o correo ya existente. Prueba con un correo o un usuario distinto")
            }
        }
        fetchData();
    };

    const onSubmit = (data) =>{
        console.log(data)
        createUser();
    }

    const handleClick = () => {
        console.log('testing')

    }

    function getSong (){
        fetch(get_song)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    return(
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)} >
                {/* EMAIL INPUT */}
                <div className={'position-relative mt-2'}>
                    <input className={"input " + (registerFilled.email? 'is-filled':' ')}
                           type={'email'}
                           name={'email'}
                           onChange={handleInputChange}
                           ref={
                               register({
                                   required:{
                                       value: true,
                                       message: 'Ingresa tu correo electrónico'
                                   },
                                   pattern:{
                                       value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                       message: 'Ingresa un correo válido'
                                   }
                               })
                           }
                    />
                    <label className={'label'}> <I_envelope/>  Correo electrónico</label>
                    <small className="text-danger text-small d-block mb-2">
                        {/*<Exclamation_icon/>*/}
                        {errors?.email?.message}
                    </small>
                </div>
                {/*USERNAME INPUT*/}
                <div className={'position-relative mt-2'}>
                <input className={"input " + (registerFilled.username? 'is-filled':' ')}
                       type={'text'}
                       name={'username'}
                       onChange={handleInputChange}
                       ref={
                           register({
                               required:{
                                   value: true,
                                   message: 'Ingresa tu usuario'
                               },
                           })
                       }
                />
                <label className={'label'}> <I_person/>  Usuario</label>
                <small className="text-danger text-small d-block mb-2">
                    {/*<Exclamation_icon/>*/}
                    {errors?.username?.message}
                </small>
            </div>
                {/*PASSWORD INPUT*/}
                <div className={'position-relative mt-2'}>
                    <input className={'input ' + (registerFilled.password? 'is-filled':' ')}
                       type={'password'}
                       name={'password'}
                       onChange={handleInputChange}
                       ref={
                           register({
                               required:{
                                   value: true,
                                   message: 'Ingresa una contraseña'
                               },
                               minLength:{
                                   value: 8,
                                   message: 'Mínimo 8 caracteres'
                               },
                               maxLength:{
                                   value: 15,
                                   message: 'Máximo 15 caracteres'
                               },

                           })
                       }
                    />
                    <label className={'label'}><I_lock/>  Contraseña</label>
                    <small className="text-danger text-small d-block mb-2">
                        {errors?.password?.message}
                    </small>
                </div>
                {/*NOMBRE*/}
                <div className={'position-relative mt-2'}>
                    <input className={"input " + (registerFilled.user_name? 'is-filled':' ')}
                           type={'text'}
                           name={'user_name'}
                           onChange={handleInputChange}
                           ref={
                               register({
                                   required:{
                                       value: true,
                                       message: 'Ingresa tu nombre'
                                   },
                               })
                           }
                    />
                    <label className={'label'}>Nombre</label>
                    <small className="text-danger text-small d-block mb-2">
                        {/*<Exclamation_icon/>*/}
                        {errors?.user_name?.message}
                    </small>
                </div>
                {/*APELLIDOS*/}
                <div className={'position-relative mt-2'}>
                    <input className={"input " + (registerFilled.lastname? 'is-filled':' ')}
                           type={'text'}
                           name={'lastname'}
                           onChange={handleInputChange}
                           ref={
                               register({
                                   required:{
                                       value: true,
                                       message: 'Ingresa tu apellido'
                                   },
                               })
                           }
                    />
                    <label className={'label'}>Apellido</label>
                    <small className="text-danger text-small d-block mb-2">
                        {/*<Exclamation_icon/>*/}
                        {errors?.lastname?.message}
                    </small>
                </div>
                {/*REGISTER BUTTON*/}
                <button onSubmit={onSubmit} className={`btn btn-zoa purple-btn my-3 w-100`}>REGISTRARTE</button>
            </form>
        </Fragment>
    );
}
