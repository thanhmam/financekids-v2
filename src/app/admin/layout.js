import AdminNav from "@/components/admin/AdminNav";

export const metadata = {
  title: "FinanceKids — Quản trị",
};

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#F4F8EF] md:flex" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <AdminNav />
      <main className="flex-1 md:ml-60 px-4 md:px-8 py-6">{children}</main>
    </div>
  );
}
