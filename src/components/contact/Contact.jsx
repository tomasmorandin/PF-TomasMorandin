import { useForm } from 'react-hook-form';


export default function Contact() {

  const {register, handleSubmit} = useForm()

  const submit = (data)=>{
    console.log(data)
  }
  
    return (
        <>
       <div className="container">
       <h1 className="text-center card-text1">Dejanos tu consulta</h1>
       <form className="form" onSubmit={handleSubmit(submit)}>
        <input className="input" type="text" required placeholder="Nombre" {...register("nombre")} />
        <input className="input" required placeholder="e-mail" {...register("email")} />
        <input className="input" required placeholder="Teléfono" {...register("telefono")} />
        <textarea className="textarea"  cols="40" rows="8" placeholder="Mensaje"></textarea>
        <button className="btn" type="submit">Enviar</button>
       </form>
       </div>
        </>
      )
  }