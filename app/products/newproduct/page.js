// import { useState } from "react"
import MyLayout from "../../components/MyLayout"
import NewProductForm from "@/app/components/NewProductForm"

export default async function NewProduct() {
    // const [title, setTitle] = useState('')
    // const [description,setDescription] = useState('')
    // const [price, setPrice] = useState(1)
    return (
        <MyLayout>
            <h1>New Product</h1>
            {/* <label>Product Name</label>
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
            <button className="btn-primary">Save</button> */}
            <NewProductForm/>
        </MyLayout>
    )
}