import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../../admin_assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'
const Add = () => {

    const url ="http://localhost:4000";
    const[image,setImage] = useState(false);
    const [data,setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"Breakfast"
    })

    const onSubmitHandler = async(event)=>{
        event.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("category",data.category)
        formData.append("image",image)
        const response = await axios.post(`http://localhost:4000/api/food/add`,formData)
        if (response.data.success) {
            setData({
                name:"",
                description:"",
                price:"",
                category:"Breakfast"
            })
            setImage(false)
            toast.success(response.data.message)

        }
        else{
            toast.error(response.data.message)
        }
    }

    const onChangeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))

    }

    

  return (

    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
            <p>Upload Image</p>
            <label htmlFor='image'>
                <img src={image?URL.createObjectURL(image):assets.upload_area}/>
            </label>
            <input onChange={(event)=>setImage(event.target.files[0])} type='file' id='image' hidden required></input>
        </div>
        <div className="add-product-name flex-col">
            <p>Product Name</p>
            <input onChange={onChangeHandler}  value={data.name} type='text' name='name' placeholder='Type here'></input>
        </div>
        <div className="add-product-description flex-col">
            <p>Product Description</p>
            <textarea onChange={onChangeHandler}  value={data.description}  name="description" rows="6" placeholder='Write content here ' required></textarea>
        </div>
        <div className="add-category-price">
            <div className="add-category flex-col">
                <p> Product Category</p>
                <select onChange={onChangeHandler} name='category'>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Snaks">Snaks</option>
                    <option value="Dinner">Dinner</option>
                    
                </select>
            </div>
            <div className="add-price flex-col">
                <p>Product Price</p>
                <input  onChange={onChangeHandler}  value={data.price} type='Number' name='price' placeholder='Rs 20'></input>
            </div>
        </div>
        <button type='Submit' className='add-btn' > ADD</button>
      </form>
    </div>
  )
}

export default Add
