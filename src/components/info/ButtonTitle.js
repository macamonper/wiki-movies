import { Button } from "@mui/material"

const ButtonTitle = ( {title} ) => {

    return (
   
                <Button
                    variant="text"
                    size="large"
                    sx={{
                        color: "#BD1E1E",
                        fontFamily: " 'Bebas Neue', cursive",
                        fontSize: 25,
                    }}
                >
                    {title}
                </Button>
            
        
    )
} 

export default ButtonTitle;


