import {Box, Container, Stack, Typography} from "@mui/material";
import Moviecard from "../MovieCard";
import { useEffect, useState } from "react";
import { IMovie } from "../../@libs/types";
import { MoviesService } from "../../services/movies-service";


type SectionProps = {
    title: string;
}


function Section({
    title

}:SectionProps){ 
    const [movies, setMovies] = useState<IMovie[]>([]);

useEffect(() =>{
// executa oque esta aqui dentro quando carrega o componente

MoviesService.getMovies()
.then(result =>{
    setMovies(result)
});

},[]); 
        
    return(
        
        <Box>
          <Container>
            <Typography
                variant="h6"
                sx={{
                    fontWeight:400,
                    paddingTop: '2rem'
                }}
            >
            

                {title}
            </Typography>
            <Stack
                direction="row"
                gap="5rem"
                sx={{
                    overflowY:"hidden",
                    whiteSpace: 'nowrap',
                    paddingY: "1rem"


                }}
            >
                {movies.map(item=>(
                    <Moviecard key={item.id} poster={'assets/'+ item.poster}/>
                ))}
                

            </Stack>

            </Container>  
        </Box>
    )
}

export default Section;