import { TextField, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import NaviparkingLogo from "./naviparking-logo.svg";

const ContactTextField = withStyles({
  root: {
    marginTop: '10px',
    marginBottom: '10px',
    padding: '16px 40px 15px',
    '&:first-child': {
      marginTop: 0
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: '27.5px',
      boxShadow: '0 4px 24px 0 rgba(9, 55, 105, 0.08)',
    },
    '& fieldset': {
      border: 0
    }
  },
})(TextField)

interface Props {}

function Contact(props: Props) {
  const {} = props;

  return (
    <Box width="100%" my="3.75rem" display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h2">Let's stay <u>in touch</u></Typography>
      <Box display="flex" flexDirection="row" width="100%" flexWrap="wrap" sx={{marginTop: {xs: "2.5rem", md: "5rem"}, paddingLeft: {xs: "2.75rem", md: "8.4375rem"}, paddingRight: {xs: "2.75rem", md: "5rem"}, justifyContent: 'center'}}>
        <Box display="flex" flexDirection="column" maxWidth="510px">
            <p><Typography variant="body1">
              What should we talk about in next episodes? We would love to hear
              from you! <strong>Drop us a line!</strong>
            </Typography></p>
            <p><Typography variant="body1">
              Smart City Navigators are brought to you by
            </Typography><br />
            <Box component="div" sx={{width: {xs: "180px", md: "362px"}}}><NaviparkingLogo /></Box></p>
        </Box>
        <Box display="flex" flexDirection="column" flex="1" alignContent="center" sx={{marginTop: {xs: '2.5rem', md: 0}, marginLeft: {md: '95px'}, maxWidth: "620px"}}>
          <ContactTextField placeholder="Name" fullWidth disabled></ContactTextField>
          <ContactTextField placeholder="E-mail address" fullWidth disabled></ContactTextField>
          <ContactTextField placeholder="Your message" multiline fullWidth disabled rows={5}></ContactTextField>
        </Box>
      </Box></Box>)}

export default Contact;
