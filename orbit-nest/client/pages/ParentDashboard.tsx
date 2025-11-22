import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  LogOut,
  CheckCircle,
  AlertCircle,
  Clock,
  TrendingUp,
  MessageCircle,
} from "lucide-react";

const ParentDashboard = () => {
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
              Welcome, Parent
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
            Monitor your child's academic progress and activities
          </p>
        </div>

        {/* Student Selector */}
        <div className="bg-white rounded-xl border border-border p-4 mb-8">
          <p className="text-sm text-muted-foreground mb-3">Viewing:</p>
          <div className="flex gap-2 flex-wrap">
            <button className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition">
              Sarah (Grade 5)
            </button>
            <button className="px-4 py-2 bg-foreground/5 text-foreground rounded-lg font-medium hover:bg-foreground/10 transition">
              Michael (Grade 3)
            </button>
          </div>
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
                <p className="text-muted-foreground text-sm">Overall Grade</p>
                <p className="text-3xl font-bold text-foreground">A-</p>
              </div>
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Alerts</p>
                <p className="text-3xl font-bold text-foreground">1</p>
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
            {/* Latest Grades */}
            <div className="bg-white rounded-xl border border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Latest Grades
              </h2>
              <div className="space-y-3">
                {[
                  {
                    subject: "Mathematics",
                    grade: "A",
                    percentage: 92,
                    date: "Last updated: 2 days ago",
                  },
                  {
                    subject: "English",
                    grade: "A-",
                    percentage: 88,
                    date: "Last updated: 3 days ago",
                  },
                  {
                    subject: "Science",
                    grade: "B+",
                    percentage: 85,
                    date: "Last updated: 1 week ago",
                  },
                  {
                    subject: "Social Studies",
                    grade: "A",
                    percentage: 90,
                    date: "Last updated: 4 days ago",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 bg-foreground/5 rounded-lg border border-border/50"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-foreground">
                        {item.subject}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.date}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary-600">
                        {item.grade}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {item.percentage}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Attendance Trend */}
            <div className="bg-white rounded-xl border border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Attendance This Week
              </h2>
              <div className="space-y-3">
                {[
                  { day: "Monday", present: true },
                  { day: "Tuesday", present: true },
                  { day: "Wednesday", present: true },
                  { day: "Thursday", present: true },
                  { day: "Friday", present: false },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-lg bg-foreground/5"
                  >
                    <span className="text-foreground font-medium">
                      {item.day}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        item.present
                          ? "bg-success-100 text-success-700"
                          : "bg-destructive/10 text-destructive"
                      }`}
                    >
                      {item.present ? "Present" : "Absent"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* School Announcements */}
            <div className="bg-white rounded-xl border border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">
                School Announcements
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Parent-Teacher Conference",
                    description: "Schedule your appointment online",
                    date: "Next week",
                    priority: "high",
                  },
                  {
                    title: "School Excursion",
                    description:
                      "Trip to Science Museum - Permission slip required",
                    date: "In 2 weeks",
                    priority: "medium",
                  },
                  {
                    title: "Uniform Day Changes",
                    description: "New uniform policy starting next month",
                    date: "Starting next month",
                    priority: "low",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg border-l-4 ${
                      item.priority === "high"
                        ? "border-destructive bg-destructive/10"
                        : item.priority === "medium"
                          ? "border-accent bg-accent-50"
                          : "border-primary-500 bg-primary-50"
                    }`}
                  >
                    <p className="font-medium text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {item.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Today's Status */}
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

            {/* Contact Information */}
            <div className="bg-white rounded-xl border border-border p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Teacher Contact
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Class Teacher</p>
                  <p className="font-medium text-foreground">Mrs. Smith</p>
                  <p className="text-sm text-primary-600 hover:text-primary-700 cursor-pointer">
                    Send Message
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-accent-600 to-accent-700 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left hover:opacity-80 transition py-2 px-3 rounded-lg hover:bg-white/10 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Send Message
                </button>
                <button className="w-full text-left hover:opacity-80 transition py-2 px-3 rounded-lg hover:bg-white/10 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Request Meeting
                </button>
                <button className="w-full text-left hover:opacity-80 transition py-2 px-3 rounded-lg hover:bg-white/10 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  View Reports
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ParentDashboard;
