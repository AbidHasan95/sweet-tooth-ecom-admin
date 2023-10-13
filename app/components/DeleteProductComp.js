"use client";
import axios from "axios";
import { useRouter } from "next/navigation"

export default function DeleteProductComp(params)
 {
     const router = useRouter()
     const {_id} = params
     console.log("on delete comp", "id",_id,"params",params)
    function goback() {
        router.push("/products")
    }

    async function deleteItem() {
        // await axios.delete("/api/products",{id:params._id})
        await axios.delete("/api/products?id="+params._id)
        goback()
    }
    return (
        <div>
            <h1 className="text-center">Do you really want to delete product: {params?.title}</h1>
            <div className="flex gap-2 justify-center">
                <button className="btn-red" onClick={deleteItem}>Yes</button>
                <button className="btn-default" onClick={goback}>No</button>
            </div>
        </div>
    )
 }