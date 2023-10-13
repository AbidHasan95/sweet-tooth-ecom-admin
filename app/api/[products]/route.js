// import { NextResponse } from "next/server";
// import { useSearchParams } from "next/navigation";
import { mongooseConnect } from "../../lib/mongoose"
import { Product } from "../../models/Product";

async function handle(req) {
    const {method} = req
    await mongooseConnect();
    console.log("Handle----------",method)
    if (method === 'POST') {
        var req1 = await new Request(req).json();
        const {title, description, price} = req1;
        console.log("POST request received with params:",title,description,price)
        await Product.create({
            title, description, price
        })
        var productDoc = true
        console.log("productdoc",productDoc)
        return Response.json(productDoc)
    }
    if (method === 'PUT') {
        var req1 = await new Request(req).json();
        const {_id,title, description, price} = req1;
        console.log("PUT request received with params:",title,description,price,_id)
        // using update One
        var prods = await Product.updateOne({_id:_id},{title:title, description: description, price:price})
        // Using FindOne
        // var prods = await Product.findOne({_id})
        // prods.title = title
        // prods.description = description
        // prods.price = price
        // prods.save()

        return Response.json(true)
    }
    if (method === 'GET') {
        // await mongooseConnect()
        console.log("Get-->")
        const searchParams = req.nextUrl.searchParams
        const query = searchParams.get("id")
        console.log("req",query)
        if (query) {
            console.log("findOne--")
            var prods = await Product.findOne({_id:query})
        }
        else {
            console.log("findall--")
            var prods = await Product.find()
            // console.log(prods)
        }
        // console.log(prods,"---")
        return Response.json(prods)
    }

    if (method === "DELETE") {
        const searchParams = req.nextUrl.searchParams
        const query = searchParams.get("id")
        console.log("DELETE request",query)
        await Product.deleteOne({_id:query})
        return Response.json(true)
    }
}

export {handle as GET, handle as POST, handle as PUT, handle as DELETE}


// export async function POST(req) {
//     const {method} = req
//     if (method === 'POST') {
//         var req1 = await new Request(req).json();
//         await mongooseConnect();
//         const {title, description, price} = req1;
//         console.log("I am hereeeee222",title,description,price)
//         const productDoc = await Product.create({
//             title, description, price
//         })
//         console.log("productdoc",productDoc)
//         return Response.json(productDoc)
//     }
// }

// export async function GET(req) {
//     const {method} = req
//     if (method === "GET") {
//         // await mongooseConnect()
//         var prods = await Product.find()
//         console.log(prods)
//         return Response.json(prods)
//     }
// }

