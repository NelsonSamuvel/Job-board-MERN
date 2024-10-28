import { Input } from "@/components/ui/input";

const MobileSearchBar = () => {
  return (
    <div className="px-4">
      <Input
        className="rounded-full bg-muted border-none lg:hidden"
        placeholder="Search by jobs, locations"
      />
    </div>
  );
};

export default MobileSearchBar;
