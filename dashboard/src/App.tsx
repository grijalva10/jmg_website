import { AppProvider } from '@/providers/app';
import { MainLayout } from '@/components/Layout';
import { LoginForm } from '@/features/auth/components/LoginForm'; 
import { BaseTable } from '@/components/Table';




export default function App() {

  // return the page when found
   return (
      <AppProvider>
      <MainLayout>
        <BaseTable/>
      </MainLayout>
      </AppProvider>
  );
}
