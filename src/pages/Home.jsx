import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Home() {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading secure session...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>🔒</span> Enterprise-Grade Security
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Secure Authentication
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Made Simple
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Advanced login system built with Firebase Authentication, 
            featuring cutting-edge security and seamless user experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            {currentUser ? (
              <Link
                to="/dashboard"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 inline-flex items-center gap-2"
              >
                🚀 Continue to Dashboard
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            ) : (
              <>
                <Link
                  to="/register"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 inline-flex items-center gap-2"
                >
                  🎯 Get Started Free
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link
                  to="/login"
                  className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-500 hover:bg-blue-50 transform hover:-translate-y-1 transition-all duration-200"
                >
                  🔑 Sign In
                </Link>
              </>
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">99.9%</div>
              <div className="text-gray-600 text-sm">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">256-bit</div>
              <div className="text-gray-600 text-sm">Encryption</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">24/7</div>
              <div className="text-gray-600 text-sm">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">Zero</div>
              <div className="text-gray-600 text-sm">Breaches</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with the latest security standards and best practices to protect your data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center p-8 rounded-2xl bg-gradient-to-b from-white to-blue-50 border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Military-Grade Security</h3>
              <p className="text-gray-600 leading-relaxed">
                End-to-end encryption with TLS 1.3, advanced hashing algorithms, 
                and comprehensive threat protection.
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl bg-gradient-to-b from-white to-purple-50 border border-purple-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 mx-auto mb-6 bg-purple-100 rounded-2xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600 leading-relaxed">
                Optimized authentication flows with sub-second response times 
                and seamless user experience.
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl bg-gradient-to-b from-white to-green-50 border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-2xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <span className="text-3xl">🔧</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Easy Integration</h3>
              <p className="text-gray-600 leading-relaxed">
                Simple setup with comprehensive documentation and multiple 
                authentication methods.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Security Features */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-600">
              Multiple layers of protection for your peace of mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🌐", title: "TLS Encryption", desc: "End-to-end encrypted connections" },
              { icon: "🔑", title: "OAuth 2.0", desc: "Secure third-party authentication" },
              { icon: "📧", title: "Email Verification", desc: "Auto-verification system" },
              { icon: "🛡️", title: "Rate Limiting", desc: "Brute force attack prevention" },
              { icon: "🔒", title: "Password Hashing", desc: "Bcrypt with salt rounds" },
              { icon: "⚡", title: "Session Management", desc: "Auto-refresh tokens" },
              { icon: "👁️", title: "Activity Monitoring", desc: "Real-time security logs" },
              { icon: "🚫", title: "XSS Protection", desc: "Input sanitization" },
              { icon: "📊", title: "Security Analytics", desc: "Threat detection & analysis" }
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
              >
                <div className="text-2xl flex-shrink-0">{feature.icon}</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">{feature.title}</h4>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Secure Your Application?
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Join thousands of developers who trust our authentication system.
              </p>
              {!currentUser && (
                <Link
                  to="/register"
                  className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                >
                  🚀 Start Free Today
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}