"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton () {
    const { data: session } = useSession();
    // const session = await getServerSession();
    if (!session) {
        console.log("testtttt")
        return(
            <button onClick={() => signIn('google')} className="bg-white p-2 px-4 rounded-lg">Login with Google</button>
        )
    }
    // else {
    //     return (
    //         <div className="flex flex-row">
    //             <p>Logged in as {session?.user?.name}</p>
    //             <button onClick={() => signOut()} className="bg-white p-2 px-4 rounded-lg">Signout</button>
    //         </div>
    //     )
    // }
}
