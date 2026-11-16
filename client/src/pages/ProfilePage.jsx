import { useAppContext } from "../context/AppContext.jsx"

function ProfilePage() {
  const { user } = useAppContext()

  return (
    <div className="min-h-screen bg-slate-900 p-6 text-white">
      <div className="mx-auto max-w-xl rounded-xl border border-slate-700 bg-slate-800 p-6 shadow-lg">
        <h1 className="mb-4 text-2xl font-semibold">Profile</h1>
        <div className="space-y-3 text-slate-200">
          <p>
            <span className="font-medium text-slate-100">Name:</span>{" "}
            {user?.name || "Not available"}
          </p>
          <p>
            <span className="font-medium text-slate-100">Email:</span>{" "}
            {user?.email || "Not available"}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
