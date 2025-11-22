import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  LogOut,
  Users,
  CheckCircle,
  AlertCircle,
  Clock,
  BookOpen,
} from "lucide-react";

const TeacherDashboard = () => {
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
              Welcome, Teacher
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
            Manage your classes and students
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Total Students</p>
                <p className="text-3xl font-bold text-foreground">128</p>
              </div>
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Classes</p>
                <p className="text-3xl font-bold text-foreground">4</p>
              </div>
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-secondary-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Avg. Attendance</p>
                <p className="text-3xl font-bold text-foreground">92%</p>
              </div>
              <div className="w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-success-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Pending Grades</p>
                <p className="text-3xl font-bold text-foreground">8</p>
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
            {/* Today's Classes */}
            <div className="bg-white rounded-xl border border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Today's Classes
              </h2>
              <div className="space-y-3">
                {[
                  {
                    class: "Grade 5A",
                    subject: "Mathematics",
                    time: "9:00 - 10:00",
                  },
                  {
                    class: "Grade 5B",
                    subject: "Mathematics",
                    time: "10:15 - 11:15",
                  },
                  {
                    class: "Grade 6A",
                    subject: "Mathematics",
                    time: "1:00 - 2:00 PM",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 bg-foreground/5 rounded-lg border border-border/50"
                  >
                    <div>
                      <p className="font-medium text-foreground">
                        {item.class}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.subject}
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {item.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Attendance Management */}
            <div className="bg-white rounded-xl border border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Attendance This Week
              </h2>
              <div className="space-y-3">
                {["Grade 5A", "Grade 5B", "Grade 6A"].map((grade, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 bg-foreground/5 rounded-lg"
                  >
                    <span className="text-foreground font-medium">{grade}</span>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm font-semibold text-foreground">
                          42/45
                        </p>
                        <p className="text-xs text-muted-foreground">93%</p>
                      </div>
                      <div className="w-32 h-2 bg-border rounded-full overflow-hidden">
                        <div
                          className="h-full bg-success-500"
                          style={{ width: "93%" }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Announcements */}
            <div className="bg-white rounded-xl border border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Messages
              </h2>
              <div className="space-y-4">
                {[
                  {
                    from: "Parent - John Doe",
                    message: "Question about assignment",
                    time: "2 hours ago",
                  },
                  {
                    from: "Principal",
                    message: "Schedule meeting for tomorrow",
                    time: "4 hours ago",
                  },
                  {
                    from: "Student - Sarah",
                    message: "Can I submit assignment late?",
                    time: "Yesterday",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 border-l-4 border-primary-500 bg-primary-50 rounded"
                  >
                    <p className="font-medium text-foreground">{item.from}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.message}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {item.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Today's Check-in */}
            <div className="bg-white rounded-xl border border-border p-6">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary-600" />
                Today's Check-in
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Check-in</span>
                  <span className="font-medium text-success-600">
                    8:02 AM ✓
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Check-out</span>
                  <span className="text-muted-foreground">Not yet</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-secondary-600 to-secondary-700 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left hover:opacity-80 transition py-2 px-3 rounded-lg hover:bg-white/10">
                  Mark Attendance
                </button>
                <button className="w-full text-left hover:opacity-80 transition py-2 px-3 rounded-lg hover:bg-white/10">
                  Record Grades
                </button>
                <button className="w-full text-left hover:opacity-80 transition py-2 px-3 rounded-lg hover:bg-white/10">
                  Send Announcement
                </button>
                <button className="w-full text-left hover:opacity-80 transition py-2 px-3 rounded-lg hover:bg-white/10">
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

export default TeacherDashboard;
