import Link from "next/link";
import axios from "axios";
import MyLayout from "../components/MyLayout";
// import { useEffect } from "react";

async function getData() {
  console.log("getData..")
  // const res = await fetch('http://localhost:3000/api/products')
  const res = await axios.get("http://localhost:3000/api/products")
  // console.log("ress->",res.data)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.status==200) {
    console.log("Error...")
    // This will activate the closest `error.js` Error Boundary
    // throw new Error('Failed to fetch data',res)
  }
  return res.data
}
export default async function Products() {
  // var my_prods = await axios.get("/api/products")
  // await fetch("/api/products")
  var prods
  prods = await getData()
  if (!prods) {
    prods = [{title: "hii",description: "hello",price:2}]
  }
  // console.log("my_prods",prods)
  // useEffect(() => {

  // },[])
    return (
        <MyLayout>
          
          <Link className="bg-red-500 text-white rounded-md px-2 py-1" href="/products/newproduct">Add new product</Link>

          <table className="basic mt-2">
            <thead>
              <tr>
                <td>Name</td>
                <td>Description</td>
                <td>Price</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {prods.map(product => (
                <tr>
                  <td>{product.title}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>
                    <Link href={"/products/edit/"+product._id}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                    Edit</Link>
                    <Link href={"/products/delete/"+product._id}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
                    </svg>
                    Delete</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </MyLayout>
        // <div>testttt</div>
  )
}