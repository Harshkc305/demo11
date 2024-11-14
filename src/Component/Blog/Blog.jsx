import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { read } from '../../Redux/crud'
import {Pagination} from '@mui/material'
import { NavLink } from 'react-router-dom'
import { blogpic } from '../../Helper/Helper'
import SweetAlertComponent from '../SweetAlert/SweetAlert'
import { deleted } from '../../Redux/crud'
import "./Blog.css";


export default function Blog() {
    const dispatch= useDispatch()
    const {blog, totalpage}= useSelector((s)=> s.crud)
    console.log(Blog,"blog");

    // useEffect(()=>{
    //     dispatch(PostBlog())
    // },[])


    const [totalRecords,setPage]=useState()



    const[deleted_id,setdelete_id]=useState()
    const [isDelete,setIsdelete]=useState(false)

    const del_func=()=>{
        if(deleted_id){
            let formData={
                id:deleted_id
            }
            dispatch(deleted(formData)).then(()=>{
                dispatch(read())
            })

            setdelete_id("")
            setIsdelete(false)
        }
    }

    const handleChange=(value,pageno)=>{
        setPage(pageno)
        // let pageination={
        //     page:pageno,
        //     perpage:10
        // }
        dispatch(read({page:pageno,perpage:10}))
    }
    useEffect(() => {
        dispatch(read({
            page:1,
            perpage:10
        }))
    }, [])

    
  return (
    <>
    <div className="blog-container">
                {blog?.map((value, index) => {
                    return (
                        <>
                        <div className="container-fluid">
                        <div class="card-deck">
                            <div className="card blog-card">
                                <img className='blog-image' src={blogpic(value.image)} alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{value.title}</h5>
                                    <p class="card-text"> {value.description.substring(0, 50)}...Read More</p>
                                    <div class="d-flex justify-content-between">

                                    <NavLink to={`/edit/${value._id}`}><button class="btn btn1">Edit</button></NavLink>
                                    <NavLink to='' onClick={()=>{
                                        setdelete_id(value?._id)
                                        setIsdelete(true)
                                    }}><button class="btn btn2">Delete</button></NavLink>

                                </div>
                                </div>
                            </div>
                            </div>
                            </div>
                        </>
                    )
                })}

                {isDelete && 
                <SweetAlertComponent
                title={"You will not be able to recover"}
                subtitle={"Are you sure?"}
                cancel={()=>setIsdelete(false)}
                confirm={del_func}
                />
            }

               
            
                </div>
            
            <div className="page">
            {/* <Pagination className="tp" count={totalpage}
                totalRecords={totalRecords}
                onChange={handleChange}/> */}
                <Pagination 
  count={totalpage}
  page={totalRecords}
  onChange={handleChange}
  classes={{ ul: 'custom-pagination' }}/>

            </div>
      
    </>
  )
}
