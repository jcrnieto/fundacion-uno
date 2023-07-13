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
      //console.log('17',e)
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
      <div className="container" data-aos="flip-left" id="Contacto">
      <div class="row ">
        <div class="col-12 col-md-6 col-lg-3">
          <h2>Contacto</h2>
          <ul className='col-12 col-md-3 list-unstyled'>
          <li>
             <a className='link-secondary text-decoration-none d-flex mt-3' href="https://wa.me/+543512216357" target="_blank" rel="noreferrer"><i className="mx-2"><FaWhatsapp/></i>5493512216357</a>
         </li>
         <li>
             <a className='link-secondary text-decoration-none d-flex mt-3' href="somosunoservicio@gmail.com" target="_blank" rel="noreferrer"><i className="mx-2"><SiGmail/></i>somosunoservicio@gmail.com</a>
         </li>
         <li>
             <a className='link-secondary text-decoration-none d-flex mt-3'  target="_blank" rel="noreferrer"><i className="mx-2"><GrLocation/></i> Córdoba Capital</a>
         </li>
          </ul>
        </div>
        <div class="col-12 col-md-6 col-lg-9">
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
           <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Nombre</label>
              <input 
                 type="text"
                 class="form-control" 
                 id="exampleInputPassword1" 
                 name='user_name'
                 {...register('user_name',{
                 required:true,
                 pattern: /[a-zA-Z ]{2,254}/
                })}
               />
              {errors.user_name?.type === 'required' && <p style={{color:'red'}}>El campo nombre es requerido</p>}
              {errors.user_name?.type ==='pattern'  && <p style={{color:'red'}}>El campo nombre es incorrecto</p>}
           </div>
           <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input 
                 type="email" 
                 class="form-control"
                 id="exampleInputEmail1" 
                 aria-describedby="emailHelp" 
                 name='user_email'
                 {...register('user_email',{
                 required:true,
                 pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
              })}
              />
              {errors.user_email?.type === 'required' && <p style={{color:'red'}}>El campo email es requerido</p>}
              {errors.user_email?.type ==='pattern'  && <p style={{color:'red'}}>El campo email es incorrecto</p>}
           </div>
           <div class="mb-3">
              <label for="examplephone" class="form-label">Telefono</label>
              <input 
                 type="number" 
                 class="form-control"
                 id="exampleInputEmail1" 
                 aria-describedby="emailHelp" 
                //  name='user_phone'
                 {...register('user_phone',{
                 required:true
              })}
             />
              {errors.user_phone?.type === 'required' && <p style={{color:'red'}}>El campo telefono es requerido</p>}
           </div>
           <div >
              <label for="floatingTextarea">Mensaje</label>
              <textarea 
                  class="form-control" 
                  id="floatingTextarea" {...register('message',{
                  required:true
              })}
              >
              </textarea>
              {errors.message?.type === 'required' && <p style={{color:'red'}}>El campo mensaje es requerido</p>}
           </div>
           <button type="submit" class="btn btn-primary" style={{marginTop:'10px', marginBottom:'10px'}}>Enviar</button>
        </form>
        </div>

        </div>
      </div>
   )
}

export default Forms;

