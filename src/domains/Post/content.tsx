import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

interface Props {}

function Content(props: Props) {
  const {} = props

  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={{width: "100%", marginTop: "80px"}}><Box display="inline-flex" justifyContent="center" alignItems="center" sx={{width: "840px"}}><Typography variant="body1" color="primary">{`Is smart city another word for surveillance?

    What exactly is the purpose of turning a city smart?
    
    Is it possible to witness today what a smart city is in person? Or is a smart city something that is a figment of the imagination of dreamers with a fascination with technology?
    
    In today’s episode, we explore all that and much more. 
    
    We invited smart city enthusiast Marek Stawinski on the show to discuss what smart cities are, why the idea of a smart city was created and whether they actually exist today or are something in the far away future. 
    
    As Founder and CEO of NaviParking, he is close to and quite passionate about the topic of smart cities. His mission is to use technology to improve the lives of city populations, with the short term goal of decreasing the amount of traffic in cities and the long term goal of decreasing the necessary parking space in cities and replacing it with parks, playgrounds and other recreational spaces that will make a city greener. 
    
    “If you manage parking resources well, then suddenly you open up hidden resources to everyone. If you look around, even in Warsaw, there are plenty of parking spaces that are absolutely not accessible. They are not known. They are only accessible to a specific group of people. With our technology, we can make them visible on the app, and we can help the owners of the parking lot make money but what is most important is we reduce traffic.” 
    
    In this conversation with our host, Michal Vasquez Plewniak, Marek goes in-depth about when he first came across the concept of a smart city, how a trip to Krakow led to his decision to launch a startup specialising in the digitalisation of parking lots, what the benefits of digitalisation are and what the future of smart cities may look like. 
    
    “Parking in my vision is just a component of the bigger picture. I believe in a kind of ecosystem of partners and also in the platform economy. We are developing a platform and what we try to do is we try to build an ecosystem of partners.” 
    
    How can the digitalisation of parking lots result in fewer parking facilities in cities? And where does parking fit into the whole concept of smart cities?
    
    Check out the full episode and find out.
    `}</Typography></Box></Box>
  )
}

export default Content
