'use client'

import {
    Box,
    Flex,
    IconButton,
    Stack,
    Collapse,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react'
import {
    HamburgerIcon,
    CloseIcon,
} from '@chakra-ui/icons'
import { usePathname } from 'next/navigation'

interface NavItem {
    label: string
    link?: string
}

const WithSubnavigation = () => {
    const { isOpen, onToggle, onClose } = useDisclosure()
    const pathname = usePathname()
    const isHome = pathname === '/'

    const navItems: NavItem[] = isHome
        ? [
            { label: 'Domů', link: '/' },
            { label: 'Co je to Cansat?', link: '#cansat' },
            { label: 'Co umí?', link: '#co-umi' },
            { label: 'Kdo jsme?', link: '#team' },
            { label: 'Live web', link: '#live-web' },
        ]
        : [{ label: 'Domů', link: '/' }]

    return (
        <Box
            position="sticky"
            top="-1"
            w="100%"
            zIndex={1}
            bg="rgba(255, 255, 255, 0.5)"
            backdropFilter="blur(1rem)"
        >
            <Flex
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 4 }}
                px={{ base: 4 }}
                align={'center'}
                justify="space-between"
                w="100%"
            >
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}
                >
                    <IconButton
                        onClick={onToggle}
                        icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>

                <Flex
                    flex={1}
                    justify="center"
                    align="center"
                    w="100%"
                    display={{ base: 'none', md: 'flex' }}
                >
                    <DesktopNav navItems={navItems} />
                </Flex>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav navItems={navItems} onLinkClick={onClose} />
            </Collapse>
        </Box>
    )
}

export default WithSubnavigation

interface DesktopNavProps {
    navItems: NavItem[]
}

const DesktopNav = ({ navItems }: DesktopNavProps) => {
    const linkColor = useColorModeValue('black', 'black')
    const linkHoverColor = useColorModeValue('gray.600', 'white')

    return (
        <Flex w="100%" justify="space-evenly">
            {navItems.map((navItem) => (
                <Box key={navItem.label}>
                    <Box
                        as="a"
                        px={4}
                        href={navItem.link ?? '#'}
                        fontSize="xl"
                        fontWeight={300}
                        color={linkColor}
                        _hover={{
                            textDecoration: 'none',
                            color: linkHoverColor,
                        }}
                    >
                        {navItem.label}
                    </Box>
                </Box>
            ))}
        </Flex>
    )
}

interface MobileNavProps {
    navItems: NavItem[]
    onLinkClick: () => void
}

const MobileNav = ({ navItems, onLinkClick }: MobileNavProps) => {
    const textColor = useColorModeValue('gray.600', 'gray.200')
    const bg = useColorModeValue('gray.100', 'gray.700')

    return (
        <Stack bg="transparent" p={4} display={{ md: 'none' }}>
            {navItems.map((navItem) => (
                <Box 
                    as="a" 
                    href={navItem.link ?? '#'} 
                    key={navItem.label} 
                    onClick={onLinkClick}
                    display="block" 
                    p={2} 
                    mb={2}
                    borderRadius="md"
                    _hover={{
                        bg: bg,
                        textDecoration: 'none',
                    }}
                >
                    <Box fontWeight={600} color={textColor}>
                        {navItem.label}
                    </Box>
                </Box>
            ))}
        </Stack>
    )
}