'use client'

import {
    Box,
    Flex,
    Text,
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
        <Box>
            <Flex
                bg={bg}
                color={color}
                minH={'60px'}
                py={{ base: 9 }}
                px={{ base: 4 }}
                align={'center'}>
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
                <Flex flex={1} justify="center" w="100%">
                    <Flex display={{ base: 'none', md: 'flex' }} justifyContent="space-between">
                        <DesktopNav navItems={navItems} />
                    </Flex>
                </Flex>
            </Flex>

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
                        px={12}
                        href={navItem.link ?? '#'}
                        fontSize={'lg'}
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
                    <Text fontWeight={600} color={textColor}>
                        {navItem.label}
                    </Text>
                </Box>
            ))}
        </Stack>
    )
}