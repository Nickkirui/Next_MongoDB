import LoginPage from "./login/page"


// import { useRouter } from 'next/navigation'

export default function Home() {

//   const router = useRouter() 

//   const onLogin = async () => {
//     try {
        
//         router.push("/login");
//     } catch (error:any) {
//         console.log("Login failed", error.message);
       
//     }
//   }
  return (
    <main>
    <div>
      <LoginPage/>
    </div>

    </main>
  )
  
}
