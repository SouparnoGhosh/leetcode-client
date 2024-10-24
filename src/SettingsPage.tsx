import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ThemeSwitch from "@/components/settings/ThemeSwitch";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = React.useState("profile");

  const navigate = useNavigate();

  const tabs = [
    { id: "profile", label: "Profile" },
    { id: "address", label: "Address" },
    { id: "orders", label: "Orders" },
    { id: "payments", label: "Payments" },
    { id: "appearance", label: "Appearance" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Profile</h2>
            <p className="text-muted-foreground">
              This is how others will see you on the site.
            </p>
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full p-2 border rounded-md"
                placeholder="Enter your username"
              />
              <p className="text-sm text-muted-foreground">
                This is your public display name. It can be your real name or a
                pseudonym. You can only change this once every 30 days.
              </p>
            </div>
          </div>
        );
      case "address":
        return <div>Address settings content</div>;
      case "orders":
        return <div>Orders settings content</div>;
      case "payments":
        return <div>Payments settings content</div>;
      case "appearance":
        return <ThemeSwitch />;
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center min-h-screen">
      <Card className="w-full max-w-4xl mt-[15vh] max-h-[59vh]">
        <div className="flex items-center">
          <button
            className="pl-6"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft size={32} />
          </button>
          <CardHeader className="">
            <CardTitle>Settings</CardTitle>
            <CardDescription>Manage your account settings.</CardDescription>
          </CardHeader>
        </div>
        <CardContent>
          <div className="flex">
            <div className="w-1/4 pr-4">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant="ghost"
                  className={cn(
                    "w-full justify-start text-left mb-1",
                    activeTab === tab.id && "bg-muted"
                  )}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </Button>
              ))}
            </div>
            <div className="w-3/4 pl-4 border-l">{renderContent()}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
