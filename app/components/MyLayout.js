import { getServerSession } from "next-auth";
import Nav from "./Nav";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function MyLayout({children}) {
    const session = await getServerSession(authOptions);
    // const session  = useSession();
    // const { data: session } = useSession();
    if (session) {
      return (
        <div className='bg-red-500 min-h-screen flex'>
            {/* <button onClick={() => signIn('google')} className="bg-white p-2 px-4 rounded-lg">Login with Google</button> */}
            {/* <AuthButton></AuthButton> */}
            <Nav/>
            <div className="bg-white flex-grow mt-1 mr-1 rounded-lg p-4">{children}</div>
        </div>
      )
    }
    return(
      <div>Please login first</div>
    )
  }