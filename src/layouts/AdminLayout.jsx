import DashboardHeader from '../components/AdminComponents/DashboardHeader';
import DashboardFooter from '../components/AdminComponents/DashboardFooter';
import DashboardSidebar from '../components/AdminComponents/DashboardSidebar';

const AdminLayout = ({ children }) => {
  return (
    <>
      <DashboardHeader />
      <DashboardSidebar />
      <main className='dashboard-main'>{children}</main>
      <DashboardFooter />
    </>
  );
};

export default AdminLayout;
