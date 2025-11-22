import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap, Users, BookOpen, Bell } from "lucide-react";

type UserRole = "student" | "teacher" | "parent" | null;

const Login = () => {
  const [role, setRole] = useState<UserRole>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRoleSelect = (selectedRole: UserRole) => {
    setRole(selectedRole);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!role || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    // In a real application, you would validate credentials against a backend
    // For now, we'll just navigate to the appropriate dashboard
    const dashboardMap: Record<UserRole, string> = {
      student: "/student-dashboard",
      teacher: "/teacher-dashboard",
      parent: "/parent-dashboard",
      null: "/",
    };

    navigate(dashboardMap[role]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Navigation Header */}
      <header className="border-b border-border bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
              EduManage
            </span>
          </Link>
          <Link to="/">
            <Button variant="ghost" size="sm">
              Back Home
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Role Selection */}
          {!role ? (
            <div>
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  Select Your Role
                </h1>
                <p className="text-lg text-muted-foreground">
                  Choose how you access EduManage
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Student Role */}
                <button
                  onClick={() => handleRoleSelect("student")}
                  className="group relative bg-white border-2 border-primary-100 rounded-xl p-8 hover:shadow-lg transition-all hover:border-primary-500 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Users className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Student
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Access your grades, attendance, and school announcements
                    </p>
                    <div className="text-sm text-primary-600 font-semibold group-hover:translate-x-1 transition-transform">
                      Continue →
                    </div>
                  </div>
                </button>

                {/* Teacher Role */}
                <button
                  onClick={() => handleRoleSelect("teacher")}
                  className="group relative bg-white border-2 border-secondary-100 rounded-xl p-8 hover:shadow-lg transition-all hover:border-secondary-500 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary-100 to-secondary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <BookOpen className="w-8 h-8 text-secondary-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Teacher
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Manage attendance, record grades, and communicate with
                      students
                    </p>
                    <div className="text-sm text-secondary-600 font-semibold group-hover:translate-x-1 transition-transform">
                      Continue →
                    </div>
                  </div>
                </button>

                {/* Parent Role */}
                <button
                  onClick={() => handleRoleSelect("parent")}
                  className="group relative bg-white border-2 border-accent-100 rounded-xl p-8 hover:shadow-lg transition-all hover:border-accent-500 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-100 to-accent-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Bell className="w-8 h-8 text-accent-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Parent
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Monitor your child's progress and school updates
                    </p>
                    <div className="text-sm text-accent-600 font-semibold group-hover:translate-x-1 transition-transform">
                      Continue →
                    </div>
                  </div>
                </button>
              </div>
            </div>
          ) : (
            /* Login Form */
            <div className="max-w-md mx-auto">
              <button
                onClick={() => setRole(null)}
                className="mb-8 text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2"
              >
                ← Back to roles
              </button>

              <div className="bg-white rounded-2xl border border-border shadow-lg p-8">
                <div className="mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {role === "student" && (
                      <Users className="w-6 h-6 text-primary-600" />
                    )}
                    {role === "teacher" && (
                      <BookOpen className="w-6 h-6 text-secondary-600" />
                    )}
                    {role === "parent" && (
                      <Bell className="w-6 h-6 text-accent-600" />
                    )}
                  </div>
                  <h2 className="text-2xl font-bold text-center text-foreground">
                    {role === "student" && "Student Login"}
                    {role === "teacher" && "Teacher Login"}
                    {role === "parent" && "Parent Login"}
                  </h2>
                  <p className="text-center text-muted-foreground mt-2">
                    Enter your credentials to continue
                  </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                  <div>
                    <Label htmlFor="email" className="text-foreground">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-2 border-border focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="password" className="text-foreground">
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mt-2 border-border focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="rounded border-border w-4 h-4"
                      />
                      <span className="text-muted-foreground">Remember me</span>
                    </label>
                    <a
                      href="#"
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 h-auto"
                  >
                    Sign In
                  </Button>
                </form>

                <p className="text-center text-sm text-muted-foreground mt-6">
                  Don't have an account?{" "}
                  <a
                    href="#"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Sign up
                  </a>
                </p>
              </div>

              <p className="text-center text-xs text-muted-foreground mt-6">
                Demo credentials: Use any email/password combination to access
                the dashboard
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
