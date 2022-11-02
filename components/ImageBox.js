import { Box } from "@mui/material"

export default function ImageBox() {
    return (
        <Box className="flex items-center justify-center" sx={{
            width: 510,
            height: 300,
            backgroundColor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
        }}>
            <img src={"https://www.gopaisa.com/images/gopaisa_new_logo.png"} height="35" width="100" alt="Logo"/>
        </Box>
    )
}