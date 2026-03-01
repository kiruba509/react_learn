import Login from "../components/loginForm/login-form"

function LoginPage() {
  return (
    <div className="bg-gray-100 flex min-h-screen flex-col items-center justify-center p-6">
      <div className="w-full">
        <Login />
      </div>
    </div>
  )
}

export default LoginPage