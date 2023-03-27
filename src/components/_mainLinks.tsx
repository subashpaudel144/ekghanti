import React from "react"
import {
  IconGitPullRequest,
  IconAlertCircle,
  IconMessages,
  IconDatabase,
} from "@tabler/icons-react"
import { ThemeIcon, UnstyledButton, Group, Text } from "@mantine/core"

interface MainLinkProps {
  icon: React.ReactNode
  color: string
  label: string
}

function MainLink({ icon, color, label }: MainLinkProps) {
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
      <Group>
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
    icon: <IconGitPullRequest size="1rem" />,
    color: "blue",
    label: "Main Dashboard",
  },
  {
    icon: <IconAlertCircle size="1rem" />,
    color: "teal",
    label: "Users",
  },
  {
    icon: <IconMessages size="1rem" />,
    color: "violet",
    label: "Groups",
    redirect: "/discussions",
  },
  {
    icon: <IconDatabase size="1rem" />,
    color: "grape",
    label: "Project",
  },
  {
    icon: <IconDatabase size="1rem" />,
    color: "grape",
    label: "Ticket Status",
  },
  {
    icon: <IconDatabase size="1rem" />,
    color: "grape",
    label: "Role",
  },
  {
    icon: <IconDatabase size="1rem" />,
    color: "grape",
    label: "Ticket",
  },
  {
    icon: <IconDatabase size="1rem" />,
    color: "grape",
    label: "SMS/Email",
  },
]

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />)
  return <div>{links}</div>
}
