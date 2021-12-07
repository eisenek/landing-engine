import { AppBar } from "@mui/material";
import React from "react";
import AppBarCollapsed from "./appBar.collapsed";
import AppBarExpanded from "./appBar.expanded";

declare const document: any;

type Props = {};

const Header: React.FC<Props> = (props) => {
  const [trigger, setTrigger] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (document) {
      document.onscroll = () => {
        console.log(window.scrollY)
        setTrigger(window.scrollY > 0);
      };
    }
    return () => {
      if (document) {
        document.onscroll = null;
      }
    };
  });

  return (
    <AppBar
      position={trigger ? 'sticky' : "relative"}
      sx={{ backgroundColor: "rgb(59, 141, 237)" }}
    >
        {true ? <AppBarCollapsed  /> : <AppBarExpanded />}
    </AppBar>
  );
};

export default Header;
