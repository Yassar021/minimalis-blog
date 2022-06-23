import Head from "next/head";
import {Box,Text,Image,Stack,Flex,Link,HStack,VStack} from "@chakra-ui/react";



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


        {/* Content */}
        <Box bgColor='#F2F8F7' pl='152px' pr='112px'>
            {children}
        </Box>

        {/* Footer */}
        <Box bgColor='#F2F8F7' px='152px' pb='28px' h='435px' pt='103px'>
            <Flex direction='column'>
                <Flex direction='row' gap='110px'>
                    <Box>
                        <Image w='119px' h='27px' src='/logo.png' alt='logo' />
                        <Text mt='24px' fontSize={'14px'} color='#555555'>
                            Did you come here for something in particular or just general Riker
                        </Text>
                    </Box>
                    <Box>
                        <Text fontSize={'17px'} fontWeight='600' color='#222222'>Blogs</Text>
                            <Link>
                                <Text  mt='24px' fontSize={'15px'}color='#555555'>Travel</Text>
                            </Link>
                            <Link>
                                <Text mt='16px' fontSize={'15px'}color='#555555'>Technology</Text>
                            </Link>
                            <Link>
                                <Text my='16px'  fontSize={'15px'}color='#555555'>Lifestyle</Text>
                            </Link>
                            <Link>
                                <Text  fontSize={'15px'}color='#555555'>Fashion</Text>
                            </Link>
                            <Link>
                                <Text mt='16px' fontSize={'15px'}color='#555555'>Business</Text>
                            </Link>
                    </Box>
                    <Box>
                        <Text fontSize={'17px'} fontWeight='600' color='#222222'>Quick links</Text>
                            <Link>
                                <Text  mt='24px' fontSize={'15px'}color='#555555'>FAQ</Text>
                            </Link>
                            <Link>
                                <Text mt='16px' fontSize={'15px'}color='#555555'>Terms & conditions</Text>
                            </Link>
                            <Link>
                                <Text my='16px'  fontSize={'15px'}color='#555555'>Support</Text>
                            </Link>
                            <Link>
                                <Text  fontSize={'15px'}color='#555555'>Privacy policy</Text>
                            </Link>
                    </Box>
                    <Box>
                        <Text fontSize={'17px'} fontWeight='600' color='#222222'>Subscribe For Newsletter</Text>
                        <Link>
                            <Text  mt='24px' fontSize={'15px'}color='#555555'>Form Input Here</Text>
                        </Link>
                        <Box mt='42px'>
                            <Text>Follow On:</Text>
                            <HStack mt='26px' spacing='16px'>
                                <Stack>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="24" height="24" rx="4" fill="#00AAA1"/>
                                        <path d="M18 9.13641C17.5584 9.32841 17.0844 9.46041 16.5864 9.51801C17.0952 9.21801 17.484 8.74281 17.6688 8.17761C17.184 8.46017 16.6549 8.65896 16.104 8.76561C15.8723 8.5227 15.5935 8.32954 15.2846 8.19791C14.9758 8.06629 14.6433 7.99895 14.3076 8.00001C12.948 8.00001 11.8464 9.08601 11.8464 10.424C11.8464 10.6136 11.868 10.7984 11.91 10.976C10.9348 10.9297 9.97994 10.6806 9.10638 10.2447C8.23281 9.80871 7.45971 9.19545 6.8364 8.44401C6.61748 8.81253 6.50221 9.23337 6.5028 9.66201C6.5028 10.502 6.9384 11.246 7.5984 11.6792C7.20773 11.667 6.82543 11.563 6.4824 11.3756V11.4056C6.48611 11.969 6.68496 12.5136 7.0451 12.9468C7.40524 13.3801 7.9044 13.6751 8.4576 13.7816C8.09443 13.8776 7.71443 13.8916 7.3452 13.8224C7.50615 14.3071 7.81401 14.7296 8.22603 15.0313C8.63805 15.333 9.13378 15.4989 9.6444 15.506C8.76836 16.1811 7.69277 16.5458 6.5868 16.5428C6.3888 16.5428 6.1932 16.5308 6 16.5092C7.12857 17.2236 8.43716 17.6019 9.7728 17.6C14.3016 17.6 16.7772 13.9064 16.7772 10.7024L16.7688 10.388C17.2516 10.0487 17.6687 9.62467 18 9.13641Z" fill="white"/>
                                    </svg>
                                </Stack>
                                <Stack>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.6" y="0.6" width="22.8" height="22.8" rx="3.4" stroke="#777777" strokeWidth="1.2"/>
                                        <path d="M10.0722 19H12.5403V12.6125H14.6041L14.9158 10.1275H12.5403V8.535C12.5403 7.8175 12.7341 7.3275 13.728 7.3275H15V5.09625C14.781 5.07 14.0313 5 13.1552 5C11.3189 5 10.0722 6.16375 10.0722 8.29V10.1275H8V12.6125H10.0722V19Z" fill="#777777"/>
                                    </svg>
                                </Stack>
                                <Stack>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.6" y="0.6" width="22.8" height="22.8" rx="3.4" stroke="#777777" strokeWidth="1.2"/>
                                        <path d="M11.9761 5.30273C10.3477 5.31379 8.7737 5.88837 7.52344 6.92819C6.27318 7.96801 5.42431 9.40845 5.12206 11.0031C4.81981 12.5978 5.08295 14.2475 5.86647 15.6702C6.64999 17.0928 7.9052 18.2 9.41738 18.8022C9.31575 18.1394 9.31575 17.4651 9.41738 16.8023L10.2452 13.3024C10.1142 12.9855 10.0493 12.6452 10.0545 12.3025C10.0545 11.3325 10.6215 10.6025 11.3239 10.6025C11.4511 10.6006 11.5773 10.6261 11.6937 10.6774C11.8101 10.7286 11.9141 10.8042 11.9984 10.8992C12.0827 10.9942 12.1455 11.1062 12.1823 11.2276C12.2192 11.349 12.2293 11.4769 12.2119 11.6025C12.2119 12.2025 11.8306 13.1024 11.6299 13.9324C11.5867 14.0872 11.5816 14.2501 11.6149 14.4072C11.6483 14.5644 11.7192 14.7113 11.8215 14.8354C11.9239 14.9595 12.0548 15.0572 12.2031 15.1202C12.3514 15.1832 12.5127 15.2097 12.6735 15.1974C13.9177 15.1974 14.881 13.8824 14.881 11.9925C14.8935 11.6084 14.8255 11.226 14.6815 10.8696C14.5374 10.5132 14.3203 10.1906 14.0442 9.92247C13.768 9.65431 13.4388 9.44647 13.0775 9.31219C12.7163 9.17791 12.3309 9.12015 11.946 9.14259C11.535 9.125 11.1248 9.19069 10.74 9.33569C10.3553 9.48069 10.0041 9.70198 9.70767 9.98617C9.41124 10.2704 9.17576 10.6115 9.01548 10.9891C8.8552 11.3666 8.77346 11.7726 8.77519 12.1825C8.76961 12.7535 8.94521 13.3117 9.2769 13.7774C9.30102 13.8041 9.3182 13.8363 9.32695 13.8712C9.33569 13.9061 9.33574 13.9425 9.32707 13.9774C9.27188 14.1974 9.15147 14.6774 9.13141 14.7724C9.11134 14.8674 9.02605 14.9274 8.8956 14.8674C8.01761 14.4574 7.47075 13.1824 7.47075 12.1525C7.47075 9.94756 9.08124 7.91763 12.1116 7.91763C14.5448 7.91763 16.4413 9.64757 16.4413 11.9625C16.4413 14.3724 14.9362 16.3123 12.7939 16.3123C12.4798 16.3232 12.168 16.2557 11.8867 16.116C11.6055 15.9763 11.3637 15.7688 11.1834 15.5123L10.7469 17.1773C10.5377 17.8243 10.2442 18.4412 9.87393 19.0122C10.5561 19.2131 11.2648 19.3109 11.9761 19.3022C13.8389 19.3022 15.6255 18.5647 16.9427 17.252C18.26 15.9393 19 14.1589 19 12.3025C19 10.446 18.26 8.66561 16.9427 7.35291C15.6255 6.0402 13.8389 5.30273 11.9761 5.30273Z" fill="#777777"/>
                                    </svg>
                                </Stack>
                                <Stack>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.6" y="0.6" width="22.8" height="22.8" rx="3.4" stroke="#777777" strokeWidth="1.2"/>
                                        <path d="M18.9549 8.93007C18.9471 8.34126 18.8368 7.7583 18.6292 7.20728C18.4491 6.74249 18.174 6.32038 17.8215 5.96792C17.4691 5.61545 17.047 5.34039 16.5822 5.1603C16.0382 4.95611 15.4636 4.8457 14.8827 4.83377C14.1348 4.80034 13.8977 4.79102 11.9992 4.79102C10.1007 4.79102 9.8574 4.79102 9.11495 4.83377C8.53433 4.84579 7.95996 4.9562 7.41626 5.1603C6.9514 5.34026 6.52923 5.61528 6.17675 5.96776C5.82427 6.32024 5.54925 6.74242 5.36928 7.20728C5.16468 7.7508 5.05452 8.32531 5.04354 8.90596C5.01011 9.65463 5 9.89175 5 11.7902C5 13.6887 5 13.9313 5.04354 14.6745C5.0552 15.256 5.16482 15.8298 5.36928 16.3748C5.54955 16.8395 5.82477 17.2615 6.17737 17.6138C6.52997 17.9661 6.95218 18.241 7.41704 18.421C7.95924 18.6334 8.53372 18.7517 9.11573 18.7708C9.86439 18.8042 10.1015 18.8143 12 18.8143C13.8985 18.8143 14.1418 18.8143 14.8843 18.7708C15.4651 18.7594 16.0398 18.6492 16.5837 18.4451C17.0484 18.2648 17.4704 17.9896 17.8228 17.6372C18.1753 17.2847 18.4504 16.8627 18.6307 16.3981C18.8352 15.8539 18.9448 15.2801 18.9565 14.6978C18.9899 13.9499 19 13.7128 19 11.8136C18.9984 9.91507 18.9984 9.67407 18.9549 8.93007ZM11.9946 15.3804C10.009 15.3804 8.40049 13.7719 8.40049 11.7864C8.40049 9.80079 10.009 8.19228 11.9946 8.19228C12.9478 8.19228 13.8619 8.57094 14.5359 9.24496C15.21 9.91898 15.5886 10.8331 15.5886 11.7864C15.5886 12.7396 15.21 13.6537 14.5359 14.3277C13.8619 15.0018 12.9478 15.3804 11.9946 15.3804ZM15.7317 8.89741C15.6216 8.89751 15.5126 8.87591 15.4108 8.83383C15.3091 8.79175 15.2167 8.73002 15.1388 8.65218C15.061 8.57433 14.9993 8.4819 14.9572 8.38018C14.9151 8.27845 14.8935 8.16943 14.8936 8.05934C14.8936 7.94933 14.9153 7.84041 14.9574 7.73877C14.9995 7.63714 15.0612 7.5448 15.139 7.46701C15.2167 7.38922 15.3091 7.32752 15.4107 7.28542C15.5124 7.24332 15.6213 7.22166 15.7313 7.22166C15.8413 7.22166 15.9502 7.24332 16.0519 7.28542C16.1535 7.32752 16.2458 7.38922 16.3236 7.46701C16.4014 7.5448 16.4631 7.63714 16.5052 7.73877C16.5473 7.84041 16.569 7.94933 16.569 8.05934C16.569 8.52269 16.1942 8.89741 15.7317 8.89741Z" fill="#777777"/>
                                        <path d="M11.9948 14.1209C13.2842 14.1209 14.3294 13.0757 14.3294 11.7863C14.3294 10.4969 13.2842 9.45166 11.9948 9.45166C10.7054 9.45166 9.66016 10.4969 9.66016 11.7863C9.66016 13.0757 10.7054 14.1209 11.9948 14.1209Z" fill="#777777"/>
                                    </svg>
                                </Stack>
                            </HStack>
                        </Box>
                    </Box>
                </Flex>
            </Flex>
        </Box>
        </>
    )
}

export default HomeLayout