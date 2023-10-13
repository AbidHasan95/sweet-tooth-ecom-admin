import MyLayout from "@/app/components/MyLayout";
import NewProductForm from "@/app/components/NewProductForm";
import axios from "axios";

export default async function EditProduct({ params }) {
    console.log("params--",params.id)
    // var data = axios.get("http://localhost:3000/api/products",{params})
    var data = await axios.get("http://localhost:3000/api/products?id="+params.id)
    console.log("data---",data.data)
    return(
        <MyLayout>
            <h1>Edit Product</h1>
            <NewProductForm {...data.data}/>
        </MyLayout>
    )
}