import Navbar from "@/components/navigation/navbar";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = (props: RootLayoutProps) => {
  // ** Destructor the props
  const { children } = props;

  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default RootLayout;
