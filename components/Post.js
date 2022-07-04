import React from 'react'

const post=[{name:'name',descr:'',message:'hello',photoUrl:''},
{name:'name',descr:'',message:'hello',photoUrl:''},
{name:'name',descr:'',message:'hello',photoUrl:''},
{name:'name',descr:'',message:'hello',photoUrl:''}
,{name:'name',descr:'',message:'hello',photoUrl:''}]







const Post = ({name,descr,message,photoUrl}) => {
  return (
    <>
        <div className="post">
            <div className="post__header"></div>
            <div className="post__info"></div>
            <div className="post__body"></div>        
        </div>    
    </>
  )
}

export default Post