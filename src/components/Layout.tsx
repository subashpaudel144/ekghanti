import React, { ReactNode } from "react"
import { AppShell, Navbar, Header, Group, Image, Button } from "@mantine/core"
import { MainLinks } from "./_mainLinks"
import { IconBell } from "@tabler/icons-react"

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          <Navbar.Section grow mt="xs">
            <MainLinks />
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          <Group sx={{ height: "100%" }} px={20} position="apart">
            <Image
              src="/ekghanti_logo.png"
              alt="logo"
              height={40}
              width={120}
            />

            <div className="d-flex right_tools">
              <div className="d-flex align-items-center me-4 notification_icon ">
                <div className="icon">
                  <IconBell color={"#8279d2"} />
                </div>
                <div className="count">9</div>
              </div>
              <div></div>
              <Button variant="subtle">Admin</Button>
              <Button variant="subtle">Logout</Button>
            </div>
          </Group>
        </Header>
      }
    >
      {children}
    </AppShell>
  )
}

export default Layout
