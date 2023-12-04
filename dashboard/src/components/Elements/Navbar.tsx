import {
  createStyles,
  Navbar as MantineNavbar,
  TextInput,
  Code,
  UnstyledButton,
  Badge,
  Text,
  Group,
  ActionIcon,
  Burger,
  Tooltip,
  rem,
  Avatar,
  ScrollArea,
} from '@mantine/core';

import {
  IconBulb,
  IconUser,
  IconSelector,
  IconCheckbox,
  IconSearch,
  IconPlus,
  IconSettings,
  IconBell,
  IconHelpHexagon,
  IconTargetArrow,
  IconUser,
  IconBriefcase2,
  IconBuildingSkyscraper,

} from '@tabler/icons-react';
import { UserButton } from '../UserButton/UserButton'; 
import { useDisclosure } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  MantineNavbar: {
    paddingTop: 0,
    paddingRight: 0,
  },

  section: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    marginBottom: theme.spacing.md,

   
  },
  headerSection: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    marginBottom: theme.spacing.md,
  },

  searchCode: {
    fontWeight: 700,
    fontSize: rem(10),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]
    }`,
  },

  mainLinks: {
    paddingLeft: `calc(${theme.spacing.md} - ${theme.spacing.xs})`,
    paddingRight: `calc(${theme.spacing.md} - ${theme.spacing.xs})`,
    paddingBottom: theme.spacing.md,
  },

  mainLink: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    fontSize: theme.fontSizes.xs,
    padding: `${rem(8)} ${theme.spacing.xs}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  mainLinkInner: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },

  mainLinkIcon: {
    marginRight: theme.spacing.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
  },

  mainLinkBadge: {
    padding: 0,
    width: rem(20),
    height: rem(20),
    pointerEvents: 'none',
  },

  collections: {
    paddingLeft: `calc(${theme.spacing.md} - ${rem(6)})`,
    paddingRight: `calc(${theme.spacing.md} - ${rem(6)})`,
    paddingBottom: theme.spacing.md,
  },

  collectionsHeader: {
    paddingLeft: `calc(${theme.spacing.md} + ${rem(2)})`,
    paddingRight: theme.spacing.md,
    marginBottom: rem(5),
  },

  collectionLink: {
    display: 'block',
    padding: `${rem(8)} ${theme.spacing.xs}`,
    textDecoration: 'none',
    borderRadius: theme.radius.sm,
    fontSize: theme.fontSizes.xs,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    lineHeight: 1,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
    
  },
  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));

const links = [
  { icon: IconSearch, label: 'Search'},
  { icon: IconCheckbox, label: 'Tasks', notifications: 4 },
   { icon: IconBell, label: 'Notifications', notifications: 4 },
  
];

const workspace_links = [
  { icon: IconBriefcase2, label: 'Companies'},
  { icon: IconUser, label: 'People' },
  { icon: IconBuildingSkyscraper, label: 'Properties' },
   { icon: IconTargetArrow, label: 'Opportunities'},
  
];

const footer_links = [
   { icon: IconSettings, label: 'Settings' },
  { icon: IconHelpHexagon, label: 'Support'},
 
  
];

const collections = [
  { emoji: '👍', label: 'Sales' },
  { emoji: '🚚', label: 'Deliveries' },
  { emoji: '💸', label: 'Discounts' },
];


const  Navbar = ({ data, hidden }: Props) => {
  const { classes } = useStyles();
  const [opened, { toggle, close }] = useDisclosure(false);

  const mainLinks = links.map((link) => (
    <UnstyledButton key={link.label} className={classes.mainLink}>
      <div className={classes.mainLinkInner}>
        <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
        <span>{link.label}</span>
      </div>
      {link.notifications && (
        <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
          {link.notifications}
        </Badge>
      )}
    </UnstyledButton>
  ));
  
  const workspaceLinks = workspace_links.map((link) => (
    <UnstyledButton key={link.label} className={classes.mainLink}>
      <div className={classes.mainLinkInner}>
        <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
        <span>{link.label}</span>
      </div>
      {link.notifications && (
        <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
          {link.notifications}
        </Badge>
      )}
    </UnstyledButton>
  ));

  const collectionLinks = collections.map((collection) => (
    <a
      href="/"
      onClick={(event) => event.preventDefault()}
      key={collection.label}
      className={classes.collectionLink}
    >
      <span style={{ marginRight: rem(9), fontSize: rem(16) }}>{collection.emoji}</span>{' '}
      {collection.label}
    </a>
  ));
  
    const footerLinks = footer_links.map((link) => (
    <UnstyledButton key={link.label} className={classes.mainLink}>
      <div className={classes.mainLinkInner}>
        <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
        <span>{link.label}</span>
      </div>
      {link.notifications && (
        <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
          {link.notifications}
        </Badge>
      )}
    </UnstyledButton>
  ));


  return (
    <MantineNavbar hidden={hidden} withBorder={false} width={{ sm: 240 }} p="md" className={classes.navbar}>
      
      <MantineNavbar.Section className={classes.headerSection}>
          <UnstyledButton className={classes.mainLink}>
              <div className={classes.mainLinkInner}>
              <Group>
              <Avatar size={20} color="blue">BH</Avatar>
              <span>Bob Handsome</span>
              </Group>
              </div>
              <IconSelector size="0.9rem" stroke={1.5} className={classes.mainLinkBadge} />
          </UnstyledButton>
      </MantineNavbar.Section>

      <MantineNavbar.Section className={classes.section}>
        <div className={classes.mainLinks}>{mainLinks}</div>
      </MantineNavbar.Section>

      <MantineNavbar.Section className={classes.section}>
        <Group className={classes.collectionsHeader} position="apart">
          <Text size="xs" weight={500} color="dimmed">
            FAVORITES
          </Text>
        </Group>
        <ScrollArea  h={150}>
        <div className={classes.collections}>{collectionLinks}</div>
        </ScrollArea >
      </MantineNavbar.Section> 
      
            <MantineNavbar.Section grow className={classes.section}>
        <Group className={classes.collectionsHeader} position="apart">
          <Text size="xs" weight={500} color="dimmed">
            WORKSPACE
          </Text>
        </Group>
        <div className={classes.mainLinks}>{workspaceLinks}</div>
      </MantineNavbar.Section> 
      
            <MantineNavbar.Section className={classes.section}>
        <div className={classes.mainLinks}>{footerLinks}</div>
      </MantineNavbar.Section>
      
    </MantineNavbar>
  );
}

export default Navbar;