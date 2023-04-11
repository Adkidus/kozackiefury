import React, {useEffect} from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  Divider,
  Image
} from '@chakra-ui/react';
import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaCar, FaCalendarAlt } from "react-icons/fa";
import {RiTeamFill} from 'react-icons/ri';
import { IoMdSettings } from "react-icons/io";
import { FiLogOut, FiMenu, FiHelpCircle } from "react-icons/fi";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { VscChromeClose } from "react-icons/vsc";
import mainLogo from'../assets/logo.png';

const Sections = [
    { name: 'Dashboard', icon: MdDashboard, href: '/', role: [] },
    { name: 'Flota', icon: FaCar, href: '/cars', role: [] },
    { name: 'Kalendarz', icon: FaCalendarAlt, href: '/calendar', role: [] },
    { name: 'Team', icon: RiTeamFill, href: '/team', role: [] },
];

export default function Sidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  useEffect(() => {
    onClose()
    // ga('send', 'pageview');
  }, [location, onClose]);
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 64 }} p={{base: 4, md: 8}} minH={'100vh'} pb={24} bg={'black'}>
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={'rgb(33, 33, 33)'}
      w={{ base: 'full', md: 64 }}
      pos="fixed"
      h="full"
      overflowY={'auto'}
      color={'#fff'}
      fontSize={'lg'}
      {...rest}>
      <Flex h={'100%'} px={6} py={8} pt={{base: 4, md: 8}} flexFlow={'column'} justifyContent={'space-between'}>
        <Flex flexFlow={'column'}>
            <Flex justifyContent={'end'}>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            <Flex alignItems={'center'} gap={'.5rem'}>
                <Flex fontSize={'md'} justifyContent={'space-between'} alignItems={'center'} flex={1}>
                    <Image flex={1} src={mainLogo} alt={'logo'} />
                </Flex>
            </Flex>
            <Divider my={6} borderColor={'rgb(163, 130, 58)'} />
            {Sections.map((section, index) => {
                return <NavItem key={section.name} icon={section.icon} href={section.href}>
                    {section.name}
                </NavItem>
            })}
        </Flex>
        <Flex flexFlow={'column'}>
            <NavItem icon={IoMdSettings} href={'/settings'}>
                Ustawienia
            </NavItem>
            <NavItem icon={FiHelpCircle} href={'/help'}>
                Pomoc
            </NavItem>
            <Divider my={6} borderColor={'rgb(163, 130, 58)'} />
            <NavItem icon={FiLogOut} onClick={() => console.log('wyloguj')}>
                Wyloguj
            </NavItem>
        </Flex>
      </Flex>
    </Box>
  );
};

const NavItem = ({ icon, children, href, ...rest }) => {
  return (
    <Link to={href ? href : ''} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        py={2}
        px={3}
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'rgb(163, 130, 58)',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 24 }}
        height="20"
        alignItems="center"
        bg={'rgb(33, 33, 33)'}
        borderBottomWidth="1px"
        borderBottomColor={'rgb(163, 130, 58)'}
        justifyContent="flex-start"
        {...rest}>
            <IconButton
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<FiMenu />}
            />
            <Flex w="full" justifyContent={'center'}>
                <Image maxW={'200px'} src={mainLogo} alt={'logo'} />
            </Flex>
    </Flex>
  );
};