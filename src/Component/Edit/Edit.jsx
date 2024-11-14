import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
// import { blogpic } from '../../Helper/helper'
import { blogpic } from '../../Helper/Helper';
import './Edit.css';
import {update,detail} from '../../Redux/crud'
export default function PostBlog() {
    const dispatch=useDispatch()
    const {id}=useParams()
    const {details}=useSelector((s)=>s.crud)
    const[blog,setBlog]=useState({
        title:"",
        description:"",
        id:""
    })
    const [img,setImg]=useState()
    const [error,setError]=useState({})

    

    useEffect(()=>{
        dispatch(detail(id))
    },[]
    )
    console.log(details,"detail")
    const validation=()=>{
        let error={}
    if(!blog.title){
        error.title="*Please enter a title"
    }
    if(!blog.description){
        error.description="*Please enter a description"
    }

    return error
    }

    let name,value
    const postBlog=(e)=>{
        name=e.target.name
        value=e.target.value

        if(name==="title"){
            if(value.trim().length===0){
                setError({...error,title:"Tile cannot be empty"})
                setBlog({...blog,title:""})
            }else{
                setBlog({...blog,title:value})
                setError({...error,title:""})
            }    
        }

        if(name==="description"){
            if(value.trim().length===0){
                setError({...error,description:"Description cannot be empty"})
                setBlog({...blog,description:""})
            }else{
                setBlog({...blog,description:value})
                setError({...error,description:""})
            }    
        }
    }
    const image=(e)=>{
        setImg(e.target.files[0])
    }
    

    useEffect(()=>{
        if(details!==null){
            setBlog({
                title:details.title,
                description:details.description,
                
            })
        }
    },[details])

    const submit=(e)=>{
        e.preventDefault()
        setError(validation())
        let formData=new FormData()

        formData.append('title',blog.title)
        formData.append('description',blog.description)
        formData.append('image',img)
        formData.append('id',details._id)
        dispatch(update(formData))
    }
  return (
    <>
    <div className="edit-block">
    <div className="container">
        <div className="edit-container">
            <h1>Edit Form</h1>
            <div className="form-group text-left">
    <label htmlFor="">Title<span>*</span></label>
    <input type="text" name='title' placeholder="enter your Title" onChange={(e)=>postBlog(e)} value={blog.title} className="form-control" id="" />
    <span className='error'>{error.title}</span>
    </div>

    <div className="form-group text-left">
    <label htmlFor="">Description<span>*</span></label>
    <textarea className="form-control" name='description' value={blog.description} onChange={(e)=>postBlog(e)} id="" rows="4"></textarea>
    <span className='error'>{error.description}</span>
    </div>

    <div className="form-group text-left">
    <label htmlFor="">Image<span>*</span></label>
    <input type="file" name='img' accept='image/*' onChange={image} className="form-control" id="" />
    </div>
    
    <div className="edit-img">
        <img src={blogpic(details.image)} alt="" />
    </div>


    <button type='submit' className="btn edit-btn" onClick={submit}>Update</button>
    </div>
    </div>
    </div>
    
    </>
  )
}