import '../styles/addVideo.css'
import { useRef } from 'react';

const AddVideo = () => {
let thumbnail = useRef(null)
let title = useRef(null)
let channel = useRef(null)
let views = useRef(null)

let upload = (e)=>{
    e.preventDefault() //prevents the page from reloading
    let data = {
        thumbnail : thumbnail.current.value,
        title : title.current.value,
        channel : channel.current.value,
        views : views.current.value
    }
   fetch('http://localhost:4000/videos',{
    method : 'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(data)
   })
   alert('video uploaded successfully')
}

    return ( 
        <div className="addVideo">
            <div className="image">
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
            </div>
            <div className="content">
                <div className="cont1">
                    <h1>Welcome to Youtube</h1>
                    <p>Common and add a video</p>
                </div>   
                <div className="cont2">
                   <form action="" onSubmit={upload}>
                   <label htmlFor="">thumbnail</label><br />
                    <input ref={thumbnail} type="url"  placeholder="enter thumbnail"/><br />
                    <label htmlFor="">title</label><br />
                    <input ref={title} type="text" placeholder="enter title"/><br />
                    <label htmlFor="">channnel</label><br />
                    <input ref={channel} type="text"  placeholder="enter channel name"/><br />
                    <label htmlFor="">views</label><br />
                    <input ref={views} type="text" placeholder="enter views"/><br />
                    <button>Upload Video</button>
                   </form>

                </div>
            </div>
        </div>
     );
}
export default AddVideo;