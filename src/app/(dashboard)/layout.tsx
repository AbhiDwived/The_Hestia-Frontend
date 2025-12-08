'use client';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen">
            {/* TODO: Add Sidebar */}
            <div className="flex-1">
                {/* TODO: Add Header */}
                <main>{children}</main>
            </div>
        </div>
    );
}
