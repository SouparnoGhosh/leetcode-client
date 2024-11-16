import ProfileIconWithAuthModal from "@/components/common/ProfileIconWithAuthModal";

const TitleBar = () => {
  return (
    <header className="w-full border-b bg-white mb-4">
      <div className="relative  flex h-14 items-center justify-center">
        <h1 className="text-xl font-semibold">LeetCode</h1>
        <div className="absolute right-0">
          <ProfileIconWithAuthModal />
        </div>
      </div>
    </header>
  );
};

export default TitleBar;
