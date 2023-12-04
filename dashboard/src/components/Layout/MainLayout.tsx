import { useState } from 'react'
import {AppShell, MediaQuery, Burger } from '@mantine/core';
import Navbar from '@/components/Elements/Navbar'
import AdminHeader from '@/components/Elements/AdminHeader'

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
    const [opened, setOpened] = useState(false);


  return (
            <AppShell
      styles={{
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<Navbar hidden={!opened} />}
      header={<AdminHeader 
                burger={<MediaQuery largerThan="md" styles={{ display: 'none' }}>
                <Burger
				opened={opened}
				onClick={() => setOpened(o => !o)}
				size="sm"
				mr="xl"
			/>
			</MediaQuery>
					}
				/>}
    >
    {children}

    </AppShell>
  );
};