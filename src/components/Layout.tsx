import React, { ReactNode } from "react"
import { AppShell, Navbar, Header, Group, Image } from "@mantine/core"
import { MainLinks } from "./_mainLinks"
import Link from "next/link"

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

            <div className="right_tools">
              <button>notification</button>
              <button>admin</button>
              <button>logout</button>
            </div>
          </Group>
        </Header>
      }
      // styles={(theme) => ({
      //   main: {
      //     backgroundColor:
      //       theme.colorScheme === "dark"
      //         ? theme.colors.dark[8]
      //         : theme.colors.gray[0],
      //   },
      // })}
    >
      {children}
    </AppShell>
  )
}

export default Layout
