import Breadcrumbs from "@/components/BreadCrumb";

export default function MineralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Breadcrumbs />
      {children}
    </>
  );
}