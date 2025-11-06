import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useAccount } from "../hooks/useAccount";
import Loading from "../components/ui/Loading";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import ProfileCard from "../components/dashboard/ProfileCard";
import ActivityCard from "../components/dashboard/ActivityCard";

const SECURITY_FEATURES = [
  { icon: "🌐", title: "Encrypted Connection", description: "End-to-end TLS encryption" },
  {
    icon: "✅",
    title: "Email Verified",
    description: "Secure account access",
  },
  { icon: "🔐", title: "Google OAuth", description: "Third-party authentication" },
  {
    icon: "🛡️",
    title: "Access Control",
    description: "Role-based permissions",
  },
  { icon: "⚡", title: "Threat Protection", description: "Rate limiting & monitoring" },
  { icon: "🔒", title: "Data Encryption", description: "Advanced hashing algorithms" },
];

export default function Dashboard() {
  const { userData, loading: authLoading, refreshUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const {
    resendVerification,
    deleteAccount,
    checkEmailVerification,
    resendLoading,
    deleteLoading,
  } = useAccount();
  const [checkingVerification, setCheckingVerification] = useState(false);

  useEffect(() => {
    if (!authLoading) {
      setLoading(false);
    }
  }, [authLoading]);

  useEffect(() => {
    const autoCheckVerification = async () => {
      if (!authLoading && userData && !userData.emailVerified) {
        const result = await checkEmailVerification();
        if (result.success && result.verified) {
          await refreshUser();
        }
      }
    };

    autoCheckVerification();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authLoading]);

  const handleCheckVerification = async () => {
    setCheckingVerification(true);
    try {
      const result = await checkEmailVerification();
      if (result.success && result.verified) {
        await refreshUser();
      }
    } catch (error) {
      console.error("Error checking verification:", error);
    } finally {
      setCheckingVerification(false);
    }
  };

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm(
      "⚠️ Permanent Account Deletion\n\nThis will permanently erase all your data. This action cannot be reversed!"
    );

    if (!confirmed) return;

    const password = window.prompt(
      "Please enter your password to confirm account deletion:"
    );

    if (!password) {
      return;
    }

    await deleteAccount(password);
  };

  if (loading) {
    return <Loading fullScreen message="Loading your dashboard..." />;
  }

  const displayName = userData?.displayName || userData?.fullName || "Friend";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-3 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        </div>
        <p className="text-gray-600 ml-5">Manage your account and security settings</p>
      </div>

      {/* Welcome Section */}
      <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{displayName}</span>! 👋
            </h2>
            <p className="text-gray-600">
              Your account is secured with our advanced protection system
            </p>
          </div>
          <div className="text-4xl">🎯</div>
        </div>
      </Card>

      {/* User Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <ProfileCard userData={userData} />
        </div>
        <div className="lg:col-span-1">
          <ActivityCard userData={userData} />
        </div>
      </div>

      {/* Security Features */}
      <Card className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-green-100 rounded-lg">
            <span className="text-2xl">🛡️</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800">Security Overview</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SECURITY_FEATURES.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-2xl mt-1">{feature.icon}</div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Account Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 rounded-lg">
              <span className="text-2xl">⚙️</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Account Settings</h3>
          </div>
          <div className="space-y-4">
            {!userData?.emailVerified && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">⚠️</span>
                  <h4 className="font-bold text-yellow-800">Email Verification Required</h4>
                </div>
                <p className="text-yellow-700 text-sm mb-3">
                  Please verify your email to access all features
                </p>
                <div className="flex gap-2">
                  <Button
                    onClick={resendVerification}
                    loading={resendLoading}
                    variant="warning"
                    className="flex-1"
                  >
                    📧 Resend Email
                  </Button>
                  <Button
                    onClick={handleCheckVerification}
                    loading={checkingVerification}
                    variant="primary"
                    className="flex-1"
                  >
                    🔄 Check Status
                  </Button>
                </div>
              </div>
            )}
            <Link to="/reset-password" className="block">
              <Button variant="primary" className="w-full justify-center">
                🔑 Change Password
              </Button>
            </Link>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red-100 rounded-lg">
              <span className="text-2xl">🚨</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Danger Zone</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-bold text-red-800 mb-2">Permanent Account Deletion</h4>
              <p className="text-red-700 text-sm mb-3">
                Once deleted, all your data will be permanently removed and cannot be recovered.
              </p>
              <Button
                onClick={handleDeleteAccount}
                loading={deleteLoading}
                variant="danger"
                className="w-full justify-center"
              >
                🗑️ Delete Account
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}