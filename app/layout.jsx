"use client";
import "./globals.css";
import Image from 'next/image'
import { darkTheme } from "./theme/themes";
import { ThemeProvider, CssBaseline , AppBar , Toolbar , Button , Menu , MenuItem } from "@mui/material";
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks'
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function RootLayout({ children }) {
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })
  return (
    <html lang="en">
      <head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
    
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <body className="scrollbar-hide">
          <AppBar position="fixed">
            <Toolbar className="container">
              <div className="container flex justify-between items-center mx-auto w-9/12">
                  <div className="left-container flex">
                    <img src={"https://www.gopaisa.com/images/gopaisa_new_logo.png"} height="35" width="100" alt="Logo"/>
                    <div>
                      <Button className="text-xs" variant="contained" {...bindTrigger(popupState)}>
                        category
                        <ArrowDropDownIcon/>
                      </Button>
                      <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}>Cake</MenuItem>
                        <MenuItem onClick={popupState.close}>Death</MenuItem>
                      </Menu>
                    </div>

                  </div>
                  <div  className="middle-container h-12 w-7/12 bg-[#FFA600] flex items-center ">
                    <input className=" block w-full h-full bg-gray-200 text-gray-700 border-none py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="search" type="text" placeholder="Search"/>
                    <SearchIcon className="w-1/12" />
                  </div>
                  <div className="right-container">
                    <Button color="secondary" variant="contained">LOGIN/SIGNUP</Button>
                  </div>
              </div>
            </Toolbar>
          </AppBar>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
