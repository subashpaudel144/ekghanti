import React from "react"
import {
  IconGitPullRequest,
  IconAlertCircle,
  IconMessages,
  IconDatabase,
  IconDashboard,
  IconUser,
  IconUsers,
  IconReportAnalytics,
  IconSettingsPause,
  IconUserCircle,
  IconTicket,
  IconMail,
} from "@tabler/icons-react"
import { ThemeIcon, UnstyledButton, Group, Text } from "@mantine/core"
import { useRouter } from "next/router"

interface MainLinkProps {
  icon: React.ReactNode
  color: string
  label: string
  pathname: string
}

function MainLink({ icon, color, label, pathname }: MainLinkProps) {
  const router = useRouter()
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
    >
      <Group
        onClick={() => router.push(pathname)}
        style={{
          background: `${router.pathname === pathname ? "blue" : ""}`,
        }}
        className={router.pathname === pathname ? "p-1 text-light" : ""}
      >
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  )
}

const data = [
  {
    icon: <IconDashboard size="1rem" />,
    color: "blue",
    label: "Main Dashboard",
    pathname: "/",
  },
  {
    icon: <IconUser size="1rem" />,
    color: "teal",
    label: "Users",
    pathname: "/users",
  },
  {
    icon: <IconUsers size="1rem" />,
    color: "violet",
    label: "Groups",

    pathname: "/groups",
  },
  {
    icon: <IconReportAnalytics size="1rem" />,
    color: "grape",
    label: "Project",
    pathname: "/project",
  },
  {
    icon: <IconSettingsPause size="1rem" />,
    color: "grape",
    label: "Ticket Status",
    pathname: "/ticket-status",
  },
  {
    icon: <IconUserCircle size="1rem" />,
    color: "grape",
    label: "Role",
    pathname: "/role",
  },
  {
    icon: <IconTicket size="1rem" />,
    color: "grape",
    label: "Ticket",
    pathname: "/ticket",
  },
  {
    icon: <IconMail size="1rem" />,
    color: "grape",
    label: "SMS/Email",
    pathname: "/sms-email",
  },
]

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />)
  return <div>{links}</div>
}
