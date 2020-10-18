
import React, {useEffect, useRef, useState} from 'react'

function Form ({setData}) {

    const nameRef = useRef(null)
    const titleRef = useRef(null)
    const contentRef = useRef(null)

    let name;
    let title;
    let content;
  
    useEffect(() => {
      nameRef.current.focus()
    },[]);

    const [comment, setComment] = useState({})
  
    function onEnter (e, i) {
        if (e.keyCode === 13) {
          switch (i) {
            case 'name' :
              titleRef.current.focus()
              break;
            case 'title' :
              contentRef.current.focus();
              break;
            case 'content' :
              handleClick()
              break;
            default:
              console.log('default')
          }
      };
    };

    function handleClick () {
      if (comment.name === undefined || comment.title === undefined || comment.content === undefined) alert ("All fields are required")
      else if (comment.name.length < 1 || comment.title.length < 1 || comment.content.length < 1) alert("All fields are required")
      else {
        setData((prevData)=>([...prevData, comment]));
        setComment({name: '', title: '', content: ''})
        nameRef.current.value = '';
        titleRef.current.value = '';
        contentRef.current.value = '';
        nameRef.current.focus()
      }
      console.log(comment)
      
    }
  
    return (
        <div>
          <input 
            onKeyUp={(e) => onEnter(e, 'name')} 
            onChange={e => {name = e.target.value; setComment(prev=>({...prev, name: name}))}} ref={nameRef}
            placeholder='Name'
          />
          <input 
            onKeyUp={(e) => onEnter(e, "title")} 
            onChange={e => {title = e.target.value; setComment(prev=>({...prev, title: title}))}} ref={titleRef}
            placeholder='Title'
          />
          <input 
            onKeyUp={(e) => onEnter(e, "content")} 
            onChange={e => {content = e.target.value; setComment(prev=>({...prev, content: content}))}} ref={contentRef}
            placeholder='Your comment...'
          />
          <button onClick={handleClick}>Submit</button>
        </div>
    );
  }
  
  export default Form;