import DashboardHeader from '../components/DashboardHeader';
import DashboardFooter from '../components/DashboardFooter';
import DashboardSidebar from '../components/DashboardSidebar';

const AdminLayout = ({ children }) => {
  return (
    <>
      <DashboardHeader />
      <DashboardSidebar />
      <main>{children}</main>
      <DashboardFooter />
    </>
  );
};

export default AdminLayout;
