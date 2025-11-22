import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  LogOut,
  BookOpen,
  CheckCircle,
  AlertCircle,
  Clock,
} from "lucide-react";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
              EduManage
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-foreground">
              Welcome, Student
            </span>
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Welcome Back!
          </h1>
          <p className="text-lg text-muted-foreground">
            Here's what's happening with your school
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Attendance</p>
                <p className="text-3xl font-bold text-foreground">95%</p>
              </div>
              <div className="w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-success-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Current GPA</p>
                <p className="text-3xl font-bold text-foreground">3.8</p>
              </div>
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Pending Tasks</p>
                <p className="text-3xl font-bold text-foreground">2</p>
              </div>
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-accent-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Grades */}
            <div className="bg-white rounded-xl border border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Recent Grades
              </h2>
              <div className="space-y-3">
                {[
                  { subject: "Mathematics", grade: "A", percentage: 92 },
                  { subject: "English", grade: "A-", percentage: 88 },
                  { subject: "Science", grade: "B+", percentage: 85 },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 bg-foreground/5 rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-foreground">
                        {item.subject}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.percentage}%
                      </p>
                    </div>
                    <div className="text-lg font-bold text-primary-600">
                      {item.grade}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Announcements */}
            <div className="bg-white rounded-xl border border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Announcements
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "School Assembly",
                    date: "Tomorrow at 8:00 AM",
                    type: "event",
                  },
                  {
                    title: "Assignment Deadline Extended",
                    date: "Due: Next Friday",
                    type: "update",
                  },
                  {
                    title: "Sports Day Registrations Open",
                    date: "Register by Wednesday",
                    type: "event",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 border-l-4 border-primary-500 bg-primary-50 rounded"
                  >
                    <p className="font-medium text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Attendance */}
            <div className="bg-white rounded-xl border border-border p-6">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary-600" />
                Today's Status
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Check-in</span>
                  <span className="font-medium text-success-600">
                    8:05 AM ✓
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Check-out</span>
                  <span className="text-muted-foreground">Not yet</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left hover:opacity-80 transition py-2 px-3 rounded-lg hover:bg-white/10">
                  View Schedule
                </button>
                <button className="w-full text-left hover:opacity-80 transition py-2 px-3 rounded-lg hover:bg-white/10">
                  Submit Assignment
                </button>
                <button className="w-full text-left hover:opacity-80 transition py-2 px-3 rounded-lg hover:bg-white/10">
                  Message Teacher
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
