import { adminDb } from "@/lib/firebase/admin";
import { Package, FileText, CheckCircle, Clock } from "lucide-react";

export const revalidate = 0; // Dynamic route for admin

async function getDashboardStats() {
  try {
    const productsSnap = await adminDb.collection("products").get();
    const inquiriesSnap = await adminDb.collection("inquiries").get();

    const totalProducts = productsSnap.size;
    const publishedProducts = productsSnap.docs.filter((doc: any) => doc.data().status === "published").length;
    const draftProducts = totalProducts - publishedProducts;

    const totalInquiries = inquiriesSnap.size;
    const pendingInquiries = inquiriesSnap.docs.filter((doc: any) => doc.data().status === "New").length;

    return {
      totalProducts,
      publishedProducts,
      draftProducts,
      totalInquiries,
      pendingInquiries,
    };
  } catch (error) {
    console.error("Failed to load dashboard stats", error);
    return { totalProducts: 0, publishedProducts: 0, draftProducts: 0, totalInquiries: 0, pendingInquiries: 0 };
  }
}

export default async function AdminDashboardPage() {
  const stats = await getDashboardStats();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-serif mb-2">Dashboard Overview</h1>
        <p className="text-foreground/70">Welcome back. Here is what is happening with Her Colors of India today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {/* KPI Cards */}
        <div className="bg-card p-6 rounded-xl border border-border shadow-sm flex items-center space-x-4">
          <div className="p-3 bg-primary/10 text-primary rounded-full">
            <Package className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground/60">Total Products</p>
            <h3 className="text-2xl font-bold">{stats.totalProducts}</h3>
          </div>
        </div>

        <div className="bg-card p-6 rounded-xl border border-border shadow-sm flex items-center space-x-4">
          <div className="p-3 bg-green-500/10 text-green-600 rounded-full">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground/60">Published Products</p>
            <h3 className="text-2xl font-bold">{stats.publishedProducts}</h3>
          </div>
        </div>

        <div className="bg-card p-6 rounded-xl border border-border shadow-sm flex items-center space-x-4">
          <div className="p-3 bg-yellow-500/10 text-yellow-600 rounded-full">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground/60">Draft Products</p>
            <h3 className="text-2xl font-bold">{stats.draftProducts}</h3>
          </div>
        </div>

        <div className="bg-card p-6 rounded-xl border border-border shadow-sm flex items-center space-x-4">
          <div className="p-3 bg-red-500/10 text-red-600 rounded-full">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground/60">Pending Inquiries</p>
            <h3 className="text-2xl font-bold">{stats.pendingInquiries}</h3>
          </div>
        </div>
      </div>
      
      {/* Additional dashboard widgets can go here */}
      <div className="mt-12 bg-muted p-8 rounded-xl border border-border flex flex-col items-center justify-center text-center">
         <h3 className="text-lg font-semibold mb-2">Homepage Analytics</h3>
         <p className="text-sm text-foreground/70 mb-4">Integrate with Google Analytics 4 Data API to display live traffic here.</p>
         <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium text-sm">
           Connect GA4
         </button>
      </div>
    </div>
  );
}
