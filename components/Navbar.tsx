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

interface NavItem {
    label: string
    link?: string
}

interface WithSubnavigationProps {
    navItems: NavItem[]
}

export default function WithSubnavigation({ navItems }: WithSubnavigationProps) {
    const { isOpen, onToggle } = useDisclosure()

    const bg = useColorModeValue('transparent', 'gray.800')
    const color = useColorModeValue('gray.600', 'white')

    return (
        <Box position="absolute" top="0" w="100%" zIndex={2}> {/* Ensures navbar is on top of the heading */}
            <Flex
                bg={bg}
                color={color}
                minH={'60px'}
                py={{ base: 4 }}
                px={{ base: 4 }}
                align={'center'}
                justify="space-between"
                w="100%">
                
                {/* Hamburger menu for mobile */}
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>

                {/* Desktop Nav Items */}
                <Flex
                    flex={1}
                    justify={'center'}
                    display={{ base: 'none', md: 'flex' }}>
                    <DesktopNav navItems={navItems} />
                </Flex>
            </Flex>

            {/* Mobile Navigation */}
            <Collapse in={isOpen} animateOpacity>
                <MobileNav navItems={navItems} />
            </Collapse>
        </Box>
    )
}

interface DesktopNavProps {
    navItems: NavItem[]
}

const DesktopNav = ({ navItems }: DesktopNavProps) => {
    const linkColor = useColorModeValue('gray.600', 'gray.200')
    const linkHoverColor = useColorModeValue('gray.800', 'white')

    return (
        <Stack direction={'row'} spacing={8}>
            {navItems.map((navItem) => (
                <Box key={navItem.label}>
                    <Box
                        as="a"
                        px={4}
                        href={navItem.link ?? '#'}
                        fontSize={'md'}
                        fontWeight={600}
                        color={linkColor}
                        _hover={{
                            textDecoration: 'none',
                            color: linkHoverColor,
                        }}>
                        {navItem.label}
                    </Box>
                </Box>
            ))}
        </Stack>
    )
}

interface MobileNavProps {
    navItems: NavItem[]
}

const MobileNav = ({ navItems }: MobileNavProps) => {
    const bg = useColorModeValue('white', 'gray.800')
    const textColor = useColorModeValue('gray.600', 'gray.200')

    return (
        <Stack bg={bg} p={4} display={{ md: 'none' }}>
            {navItems.map((navItem) => (
                <Box py={2} as="a" href={navItem.link ?? '#'} key={navItem.label}>
                    <Box fontWeight={600} color={textColor}>
                        {navItem.label}
                    </Box>
                </Box>
            ))}
        </Stack>
    )
}
