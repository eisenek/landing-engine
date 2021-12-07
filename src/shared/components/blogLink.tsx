import { Link } from '@mui/material';
import { Box, BoxProps } from '@mui/system';
import React from 'react';
import ExternalLinkIcon from "../graphics/icon-link-ext.svg";

type Props = BoxProps;

function BlogLink(props: Props) {

  return (
    <Box alignItems="center" sx={{marginX: 2.75, display: {xs: 'none', md: 'flex'}}} {...props}>
    <Link href="https://blog.naviparking.com" referrerPolicy="no-referrer" target="_blank" sx={{color: 'white', lineHeight: 2, textDecoration: 'none', marginRight: 1}}>
      NaviParking Blog <ExternalLinkIcon /></Link>
  </Box>
  )
}

export default BlogLink
