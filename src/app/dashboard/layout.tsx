import { DashboardSiderBar } from "@/components/DashboardSiderBar/DashboardSiderBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SessionProviderWrapper from "@/container/SessionProviderWrapper/SessionProviderWrapper";
import { getServerSession } from "next-auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <SessionProviderWrapper session={session}>
      <SidebarProvider>
        <div className="flex min-h-screen min-w-screen max-w-screen bg-gray-100 dark:bg-gray-900 transition-colors">
          <DashboardSiderBar />

          <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
            {/* Header */}
            <header className="border-b bg-white dark:bg-gray-800 transition-colors">
              <div className="flex items-center w-full gap-4">
                <SidebarTrigger />
              </div>
            </header>

            <main className="flex-1 p-4 bg-gray-50 dark:bg-gray-900 transition-colors">
              {children}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </SessionProviderWrapper>
  );
}
