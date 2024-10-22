import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("profile")

  const tabs = [
    { id: "profile", label: "Profile" },
    { id: "account", label: "Account" },
    { id: "appearance", label: "Appearance" },
    { id: "notifications", label: "Notifications" },
    { id: "display", label: "Display" },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Profile</h2>
            <p className="text-muted-foreground">This is how others will see you on the site.</p>
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
                This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days.
              </p>
            </div>
          </div>
        )
      case "account":
        return <div>Account settings content</div>
      case "appearance":
        return <div>Appearance settings content</div>
      case "notifications":
        return <div>Notifications settings content</div>
      case "display":
        return <div>Display settings content</div>
      default:
        return null
    }
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>Manage your account settings and set e-mail preferences.</CardDescription>
      </CardHeader>
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
  )
}