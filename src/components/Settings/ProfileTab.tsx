import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function Component({
  username = "johndoe",
}: {
  username?: string;
}) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [confirmUsername, setConfirmUsername] = useState("");

  const handleLogout = () => {
    // Add logout logic here
    console.log("Logging out...");
  };

  const handleDeleteAccount = () => {
    // Add delete account logic here
    console.log("Deleting account...");
    setShowDeleteDialog(false);
    setConfirmUsername("");
  };

  const handleOpenChange = (open: boolean) => {
    // Only allow closing the dialog through the Cancel button
    if (!open) {
      return;
    }
    setShowDeleteDialog(open);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Profile</h2>
      </div>

      <div className="space-y-2">
        <Button onClick={handleLogout} variant="outline" className="w-full">
          Log out
        </Button>
        <Button
          onClick={() => setShowDeleteDialog(true)}
          variant="destructive"
          className="w-full"
        >
          Delete account
        </Button>
      </div>

      <Dialog open={showDeleteDialog} onOpenChange={handleOpenChange}>
        <DialogContent onPointerDownOutside={(e) => e.preventDefault()}>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2 py-4">
            <label htmlFor="confirm-username" className="text-sm font-medium">
              Type in your username to confirm
            </label>
            <Input
              id="confirm-username"
              value={confirmUsername}
              onChange={(e) => setConfirmUsername(e.target.value)}
              placeholder={`Type "${username}" to confirm`}
            />
          </div>
          <DialogFooter>
            <Button
              variant="ghost"
              onClick={() => {
                setShowDeleteDialog(false);
                setConfirmUsername("");
              }}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteAccount}
              disabled={confirmUsername !== username}
            >
              Confirm deletion
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
