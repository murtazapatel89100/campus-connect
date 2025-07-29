import CloudinaryNav from "@/components/navbar/cloudinaryNav";

export default function CloudinaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#99908B] min-h-screen w-full overflow-x-hidden">
      <CloudinaryNav />
      <main className="min-h-screen">{children}</main>
    </div>
  );
}
