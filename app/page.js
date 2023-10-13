
// "use client";
// import { useSession, signIn, signOut } from "next-auth"
import { getServerSession } from "next-auth"
// import { authOptions } from "./auth/[...nextauth]"
// import AuthButton from "./components/AuthButton";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Nav from "./components/Nav";
import MyLayout from "./components/MyLayout";

// export default async function Home() {
//   const session = await getServerSession(authOptions);
//   if (session) {
//     return (
//       <div className='bg-red-500 min-h-screen flex'>
//           <Nav/>
//           <div className="bg-white flex-grow mt-1 mr-1 rounded-lg p-4">Hi, <b>{session.user.name}</b></div>
//       </div>
//     )
//   }
//   return(
//     <div>Please login first</div>
//   )
// }



export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session){
    return (
      <MyLayout>
        <div className="flex justify-between">
          <h2>
            Hi, <b>{session?.user?.name}</b>
          </h2>
          <div className="flex bg-gray-300 rounded-md">
            <img className="w-6 h-6" src={session.user.image} alt="texttt"></img>
            <span className="px-2">{session.user.name}</span>
          </div>
        </div>
      </MyLayout>
    )
  }
  else {
    return (
      <p>Please login first</p>
    )
  }
}
