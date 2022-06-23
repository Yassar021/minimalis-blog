import Head from "next/head";
import {Box,Text,Image,Stack,Flex,Link,HStack} from "@chakra-ui/react";



const HomeLayout = ({pageTitle, children}) => {
    return(
        <>
        <Head>
            <title>Home | {pageTitle}</title>
        </Head>

        {/* Navbar */}
        <Box bgColor={'#E8F3F3'} px={{xl:'152px'}} pt='24px' pb='19px'>
            <Flex justifyContent={'space-between'} direction={'row'}>
                <Stack direction={'row'} spacing={'40px'}>
                    <Link>
                        <Text fontSize={'15px'} fontWeight='500'>Homepages</Text>
                    </Link>
                    <Link>
                        <Text fontSize={'15px'} fontWeight='500'>About</Text>
                    </Link>
                    <Link>
                        <Text fontSize={'15px'} fontWeight='500'>Categories</Text>
                    </Link>
                    <Link>
                        <Text fontSize={'15px'} fontWeight='500'>Pages</Text>
                    </Link>
                </Stack>

                <Box w='119px' h='27px'>
                    <Image src='/logo.png' alt='logo' />
                </Box>

                <Stack direction={'row'} spacing={'40px'}>
                    <Link  my='auto'>
                        <Stack>
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.33332 12.1518C9.27883 12.1518 11.6666 9.65539 11.6666 6.5759C11.6666 3.49642 9.27883 1 6.33332 1C3.38781 1 1 3.49642 1 6.5759C1 9.65539 3.38781 12.1518 6.33332 12.1518Z" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M13.0002 13.5456L10.1002 10.5137" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Stack>
                    </Link>
                    <Link>
                        <Stack my='auto'>
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.1859 0.320957L12.5386 0.673651C13.0246 1.16025 12.951 2.02285 12.373 2.60032L5.09971 9.87358L2.74324 10.7356C2.44734 10.8444 2.1592 10.7033 2.10062 10.4217C2.08082 10.3196 2.09014 10.214 2.12752 10.1169L3.00627 7.74008L10.2592 0.486544C10.8373 -0.0909173 11.6999 -0.165043 12.1859 0.321555V0.320957ZM4.78229 1.04428C4.86079 1.04428 4.93852 1.05974 5.01105 1.08978C5.08358 1.11982 5.14948 1.16386 5.20499 1.21937C5.2605 1.27488 5.30453 1.34078 5.33457 1.4133C5.36461 1.48583 5.38007 1.56356 5.38007 1.64206C5.38007 1.72057 5.36461 1.7983 5.33457 1.87083C5.30453 1.94335 5.2605 2.00925 5.20499 2.06476C5.14948 2.12027 5.08358 2.16431 5.01105 2.19435C4.93852 2.22439 4.86079 2.23985 4.78229 2.23985H2.39114C2.07406 2.23985 1.76996 2.36581 1.54575 2.59003C1.32153 2.81424 1.19557 3.11834 1.19557 3.43542V10.6089C1.19557 10.9259 1.32153 11.23 1.54575 11.4543C1.76996 11.6785 2.07406 11.8044 2.39114 11.8044H9.56458C9.88166 11.8044 10.1858 11.6785 10.41 11.4543C10.6342 11.23 10.7601 10.9259 10.7601 10.6089V8.21771C10.7601 8.05917 10.8231 7.90712 10.9352 7.79501C11.0473 7.68291 11.1994 7.61993 11.3579 7.61993C11.5165 7.61993 11.6685 7.68291 11.7806 7.79501C11.8927 7.90712 11.9557 8.05917 11.9557 8.21771V10.6089C11.9557 11.243 11.7038 11.8512 11.2554 12.2996C10.8069 12.7481 10.1987 13 9.56458 13H2.39114C1.75697 13 1.14878 12.7481 0.70035 12.2996C0.251923 11.8512 0 11.243 0 10.6089V3.43542C0 2.80125 0.251923 2.19305 0.70035 1.74463C1.14878 1.2962 1.75697 1.04428 2.39114 1.04428H4.78229Z" fill="#222222"/>
                            </svg>
                        </Stack>
                    </Link>
                    <Link>
                        <Text fontSize={'15px'} fontWeight='500'>Contact</Text>
                    </Link>
                    <Link>
                        <Image src='/nav-darkbtn.png' w='50px' h='21px' alt='darkbtn' />
                    </Link>
                </Stack>
            </Flex>
        </Box>
        </>
    )
}

export default HomeLayout