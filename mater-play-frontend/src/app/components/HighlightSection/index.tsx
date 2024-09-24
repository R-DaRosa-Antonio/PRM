import {Button, Container, Stack, Typography } from "@mui/material";

function HighLightSection(){
    return(
        <Stack>
            <Container>
                <Stack
                    direction="row"
                >
                    <img src="assets/house-of-dragons-poster.jpg"/>
                    <Stack
                     sx={{

                        justifyContent:'center'
                     }}
                    >
                        <Typography variant="h4"> A Casa do Dragão
                        </Typography>

                        <Typography variant = "subtitle2"> <span style={{
                            borderWidth:'1px',
                            borderStyle:'solid',
                            padding:'0.2rem',
                            marginRight:'0.3rem'
                            
                            }}>18</span> Aventura, Fantasia, Ação
                        </Typography>


                        <Typography variant="subtitle1"
                            sx= {{
                               
                            }}
                        > Sinopse
                        </Typography>


                        <Typography variant= "body2">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure beatae quibusdam at. 
                            Aspernatur voluptate quis a ipsum, laudantium qui eum, consequatur illum repellendus provident 
                            beatae consequuntur corporis amet animi tempore.
                        </Typography>


                        <Stack
                        gap={1}
                        direction="row">
                          

                            <Button 
                            variant="outlined">Assistir</Button>

                            <Button
                            variant="outlined">Detalhes</Button>

                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Stack>
    )
}

export default HighLightSection;