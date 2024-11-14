import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { create } from '../../Redux/crud'
import "./PostBlog.css";


export default function Blog() {
  const dispatch=useDispatch()
  const [blog,setBlog]=useState({
    title:"",
    description:""

  })

  const [img,setImg]=useState()
  const[error,setError]=useState({})

  const validation=()=>{
    let error={}
    if(!blog.title){
      error.title="please enter title"
    }
    if(!blog.description){
      error.description="please enter a description"
    }
    return error

  }

  let name,value
  const postBlog=(e)=>{
    name=e.target.name
    value=e.target.value

    if(name==="title"){
      if(value.trim().length===0){
        setBlog({...blog,title:""})
        setError({...error,title:"title cannot ne empty"})
      }else{
        setBlog({...blog,title:value})
        setError({...error,title:""})
      }
    }

    if(name==="description"){
      if(value.trim().length===0){
        setBlog({...blog,description:""})
        setError({...error,description:"description cannot be empty"})
      }else{
        setBlog({...blog,description:value})
        setError({...error,description:""})
      }
    }
  }

  // const image=(e)=>{
  //   setImg(e.target.file[0])
  // }

  const submit=(e)=>{
    e.preventDefault()
    setError(validation())
    let formData=new FormData()
    formData.append("title",blog.title)
    formData.append("description",blog.description)
    formData.append("image",img)
    dispatch(create(formData))

  }
  return (
    <>
    



<section className="blog-block">
      <div className="container">
        <div className="block-container">
          <h2>PostBlog Form</h2>
        <form>
  <div className="form-group text-left">
    <label htmlfor="">Title<span>*</span></label>
    <input type="text" name="title" placeholder="enter your Title" onChange={(e)=>postBlog(e)} value={blog.title} className="form-control" id="" />
    <span className="error">{error.title}</span>
  </div>
  <div className="form-group text-left">
    <label htmlFor="">Description<span>*</span></label>
    <textarea className="form-control" name="description" value={blog.description} onChange={(e)=>postBlog(e)} id="" rows="3"></textarea>
  </div>
  <div className="form-group text-left">
    <label htmlfor="">Image<span>*</span></label>
    {/* <input type="file" name="img" accept="image/*" onChange={image}  className="form-control" id="" /> */}
    <input type="file" name="img" accept="image/*" onChange={(e)=>setImg(e.target.files[0])}  className="form-control" id="" />
  </div>
  {/* <div className="form-group text-left form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
  <button type="submit" className="btn blog-btn" onClick={submit}>Submit</button>
</form>

          
        </div>
        
      </div>
      
    </section>
      
    </>
  )
}
