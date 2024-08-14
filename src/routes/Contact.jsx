
import React ,{useState,useRef, Suspense}from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'
import Fox from '../models/Fox'
import  Loader  from '../Components/Loader'
import useAlert from '../hooks/useAlert'
import Alert from '../Components/Alert'
function Contact() {
  const [form, setForm] = useState({name:"",email:"",message:""})
  const [loading, setLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState('idle')
  const {alert,showAlert,hideAlert}=useAlert()
  const formRef=useRef(null)
  const handleChange=(e)=>{
      setForm({...form,[e.target.name]:e.target.value})
  }
 
    const handleSubmit = (e) => {
      e.preventDefault();
      setCurrentAnimation('hit')
      setLoading(true);
  
      emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
       // formRef.current,
        {from_name:form.name,to_name:"Tarek",message:form.message,from_email:form.email},

        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      ).then((res) => {
        console.log(res);
        setLoading(false);
        showAlert({text:"Message sent successfully !",type:"success"})
        setTimeout(()=>{
          setForm({ name: "", email: "", message: "" });
          setCurrentAnimation('idle')
          hideAlert()
        },[3000])
        
      }).catch((error) => {
        console.log(error);
        setLoading(false);
        showAlert({text:"I didn't recive your message",type:"danger"})
        setCurrentAnimation('idle')
      });
    };
    
  
  const handleFocus=()=>{
    setCurrentAnimation('walk')
  }
  const handleBlur=()=>{
    setCurrentAnimation('idle')
  }
  return (
    <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>
      {alert.show && <Alert {...alert}/>}
     {/* <Alert text="snd" type={'succes'}/> */}
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'> Get in Touch</h1>
        <form ref={formRef} onSubmit={handleSubmit} className='w-full flex flex-col gap-7 mt-14'>
          <label className='text-black-500 font-semibold'>
            Name
            <input
            type='text'
            name='name'
            className='input'
            placeholder='Mohamed'
            required
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
            type='text'
            name='email'
            className='input'
            placeholder='Mohamed@gmail.com'
            required
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
            type='text'
            rows={4}
            name='message'
            className='textarea'
            placeholder='Let me know how I can help you!'
            required
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <button type='submit'
            className='btn'
            disabled={loading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? "Sending...":"Send Message "}
          </button>
        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
      <Canvas camera={{
        position:[0,0,5]
      }}>
        <directionalLight intensity={2.5} position={[0,0,1]}/>
        <ambientLight intensity={0.5}/>
        <Suspense fallback={<Loader/>}>
          <Fox
          currentAnimation={currentAnimation}
           
          position={[0.5,0.35,0]}
          rotation={[12.6,-0.6,0]}
          scale={[0.5,0.5,0.5]}/>
        </Suspense>
      </Canvas>
      </div>
    </section>
  )
}

export default Contact