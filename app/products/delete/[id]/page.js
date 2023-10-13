import DeleteProductComp from "@/app/components/DeleteProductComp";
import MyLayout from "@/app/components/MyLayout";
import axios from "axios";
// import NewProductForm from "@/app/components/NewProductForm";
// import axios from "axios";
// import { useRouter } from "next/navigation";

export default async function DeleteProduct({ params }) {
    console.log("delete - params--",params)
    // const product_id = params.id
    var data = await axios.get("http://localhost:3000/api/products?id="+params.id)
    console.log("delete - data---",data.data)
    // const router = useRouter()
    // var data = axios.get("http://localhost:3000/api/products",{params})
    // var data = await axios.get("http://localhost:3000/api/products?id="+params.id)
    // console.log("delete data---",data.data)
    // function goback() {
    //     router.push("/products")
    // }
    return(
        <MyLayout>
            {/* <h1>Do you really want to delete product: {params.title}</h1>
            <div className="gap-2">
                <button>Yes</button>
                <button onClick={goback}>No</button>
            </div> */}
            <DeleteProductComp {...data.data}/>
        </MyLayout>
    )
}