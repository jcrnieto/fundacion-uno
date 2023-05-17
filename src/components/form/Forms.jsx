import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { GrLocation } from "react-icons/gr";
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Forms = () => {
 
  const { register, handleSubmit, formState: {errors} } = useForm();
  const form = useRef();

  const onSubmit = (e) => {
      console.log('17',e)
      emailjs.sendForm('service_mh0ql2j', 'template_1g2pe8f', form.current, 'ZIqqp_vKJRp4C5CA8')
      .then((result)=>{
         console.log(result.text);
         alert('Formulario enviado con éxito')
         resetForm();
    }, (error)=>{
      console.log(error.text);
    });
   }

   const resetForm = () => {
    form.current.reset();
  };
  

  useEffect(()=>{
     Aos.init({duration:2000})
  },[])
   return(
      <div className="container" data-aos="flip-left">
      <div class="row ">
        <div class="col-12 col-md-6 col-lg-3">
          <h2>Contacto</h2>
          <ul className='col-12 col-md-3 list-unstyled'>
          <li>
             <a className='link-secondary text-decoration-none d-flex mt-3' href="https://github.com/jcrnieto" target="_blank" rel="noreferrer"><i className="mx-2"><FaWhatsapp/></i>5493516468746</a>
         </li>
         <li>
             <a className='link-secondary text-decoration-none d-flex mt-3' href="https://github.com/jcrnieto" target="_blank" rel="noreferrer"><i className="mx-2"><SiGmail/></i> placeress.sintacc@gmail.com</a>
         </li>
         <li>
             <a className='link-secondary text-decoration-none d-flex mt-3' href="https://github.com/jcrnieto" target="_blank" rel="noreferrer"><i className="mx-2"><GrLocation/></i> Córdoba Capital</a>
         </li>
          </ul>
        </div>
        <div class="col-12 col-md-6 col-lg-9">
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
           <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="exampleInputPassword1" {...register('name',{
                required:true,
                pattern: /[a-zA-Z ]{2,254}/
              })}
            //   name='user_name'
              />
              {errors.name?.type === 'required' && <p style={{color:'red'}}>El campo nombre es requerido</p>}
              {errors.name?.type ==='pattern'  && <p style={{color:'red'}}>El campo nombre es incorrecto</p>}
           </div>
           <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('email',{
                required:true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
              })}
            //   name='user_email'
              />
              {errors.email?.type === 'required' && <p style={{color:'red'}}>El campo email es requerido</p>}
              {errors.email?.type ==='pattern'  && <p style={{color:'red'}}>El campo email es incorrecto</p>}
           </div>
           <div class="mb-3">
              <label for="examplephone" class="form-label">Telefono</label>
              <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('phone',{
                required:true
              })}
            //   name='user_phone'
              />
              {errors.phone?.type === 'required' && <p style={{color:'red'}}>El campo telefono es requerido</p>}
           </div>
           <div >
              <label for="floatingTextarea">Mensaje</label>
              <textarea class="form-control" id="floatingTextarea" {...register('message',{
                required:true
              })}
            //   name='message'
              >
              </textarea>
              {errors.phone?.type === 'required' && <p style={{color:'red'}}>El campo mensaje es requerido</p>}
           </div>
           <button type="submit" class="btn btn-primary" style={{marginTop:'10px', marginBottom:'10px'}}>Enviar</button>
        </form>
        </div>

        </div>
      </div>
   )
}

export default Forms;

