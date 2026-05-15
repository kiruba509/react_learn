import Register from "../components/registerForm/register-form"

function RegisterPage() {
  return (
    <div className="bg-gray-100 flex min-h-screen flex-col items-center justify-center p-6">
      <div className="w-full">
        <Register />
      </div>
    </div>
  )
}

export default RegisterPage