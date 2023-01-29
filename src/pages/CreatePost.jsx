import React, { useContext } from 'react'
import { useState } from 'react';
import {
  BtnBold, BtnItalic, DefaultEditor, Editor, EditorProvider, Toolbar
  ,
  BtnNumberedList,
  BtnRedo,
  BtnStyles,
  BtnUnderline,
  BtnUndo,
  HtmlButton,
  Separator,
  BtnBulletList,
  BtnLink,
  BtnClearFormatting,
} from 'react-simple-wysiwyg';
import { UserContext } from '../context/userContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createPost } from '../services/postService';

function CreatePost() {
  const { userId } = useContext(UserContext);
  var html;

  const addPost = async(values,userId) => {
    const newPost = {
      title:values.title,
      content:values.content,
      userId:userId
    }
    console.log(newPost);
     await createPost(newPost)
 
  }
  const formik = useFormik({
    initialValues: {
      title: '',
      content: ''
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required('Title is required')
        .max(30, 'Title must be no longer than 30 characters'),
      content: Yup.string()
        .required('Content is required')
        .max(2000, 'Content must be no longer than 2000 characters'),
    }),
    onSubmit: (values, { setSubmitting }) => {
      console.log(values, userId);
      addPost(values,userId);
    },
  });

  return (
    <div className="hero items-center  flex justify-center ">
      <form className=" p-6 rounded-lg shadow-md w-full m-6" onSubmit={formik.handleSubmit}>
        <div  className="mb-4">
          <label className="block font-medium mb-2" htmlFor="username">
            Title
          </label>
          <input type="text" placeholder="why i did.." value={formik.values.title}
            onChange={formik.handleChange} className="bg-white text-black input input-bordered  w-full rounded-none" name="title"
            id="title" />
          {formik.touched.title && formik.errors.title ? (
          <div className="alert alert-error shadow-lg rounded-none">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>    
                <div>{formik.errors.title}</div>
           
              </span>
            </div>
          </div> ) :null}
        </div>

        <div className="mb-4 bg-white text-black">
          <EditorProvider>
            <Editor value={formik.values.content} onChange={formik.handleChange} name="content" id='content'>
              <Toolbar>
                <BtnUndo />
                <BtnRedo />
                <Separator />
                <BtnBold />
                <BtnItalic />
                <BtnUnderline />
                <BtnLink />
                <Separator />

              </Toolbar>
            </Editor>
          </EditorProvider>
          {formik.touched.content && formik.errors.content ? (
          <div className="alert alert-error shadow-lg rounded-none">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>    
                <div>{formik.errors.content}</div>
           
              </span>
            </div>
          </div> ) :null}
        </div>

        <div className="flex items-center justify-between">
          <button type='submit' className="btn btn-success">Success</button>

        </div>
      </form>



    </div>)
}

export default CreatePost