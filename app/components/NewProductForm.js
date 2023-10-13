'use client';

import axios from "axios";
// import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
var test1;
export default function NewProductForm(params) {
    console.log("params->",params)
    const [title, setTitle] = useState(params.title || '')
    const [description,setDescription] = useState(params.description || '')
    const [price, setPrice] = useState(params.price || 1)
    const [goToProducts,setGoToProducts] = useState(false)
    const router = useRouter();
    async function onFormSubmit(formData) {
        const data = {title: title, description: description,price: price}
        console.log("formData",data)
        if (params._id) {
            // Update
            test1 = await axios.put("/api/products",{...data, _id:params._id})
        }
        else {
            // Add New Product
            test1 = await axios.post("/api/products",data)
        }
        // setGoToProducts(true)
        if (test1.status == 200) {
        // if (goToProducts) {
            router.push("/products")
        }
        // console.log("test-",test1.status)
        // await fetch("/api/products",{
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data)
        //     // body: JSON.stringify({title: 'hi',description: 'hello'})
        // })
    }
    return(
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log("on submit",e)
                onFormSubmit(e)
            }}>
                <label>Product Name</label>
                <input placeholder=""
                    value={title}
                    onChange={ev => setTitle(ev.target.value)}
                />
                <label>Description</label>
                <textarea placeholder="Description"
                    value={description}
                    onChange={ev => setDescription(ev.target.value)}
                />
                <label>Price (INR)</label>
                <input placeholder="" type="number" min="0"
                    value={price}
                    onChange={ev => setPrice(ev.target.value)}
                />
                <button type="submit" className="btn-primary">Save</button>
            </form>
        </div>
    )
}