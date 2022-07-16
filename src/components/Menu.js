import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import img from '../images/burger.a264aebc643407f64b08.jpeg'
import img1 from '../images/coke.jpeg'
import img2 from '../images/fries.jpeg'
import img3 from '../images/pepsi.jpeg'

function Menu() {
    const [addBurger, setAddBurger] = useState(0)
    const [totalBurger, setTotalBurger] = useState(0)
    const [addFries, setAddFries] = useState(0)
    const [totalFries, setTotalFries] = useState(0)
    const [addPepsi, setAddPepsi] = useState(0)
    const [totalPepsi, setTotalPepsi] = useState(0)
    const [addCoke, setAddCoke] = useState(0)
    const [totalCoke, setTotalCoke] = useState(0)
    const handleAddBurger = () => {

        let x = addBurger + 200
        let y = totalBurger + 1
        setAddBurger(x)
        setTotalBurger(y)
    }
    const handleDeleteBurger = () => {
        let x = addBurger - 200
        let y = totalBurger - 1
        setAddBurger(x)
        setTotalBurger(y)
    }
    const handleAddFries = () => {

        let x = addFries + 100
        let y = totalFries + 1
        setAddFries(x)
        setTotalFries(y)
    }
    const handleDeleteFries = () => {
        let x = addFries - 100
        let y = totalFries - 1
        setAddFries(x)
        setTotalFries(y)
    }
    const handleAddCoke = () => {

        let x = addCoke + 50
        let y = totalCoke + 1
        setAddCoke(x)
        setTotalCoke(y)
    }
    const handleDeleteCoke = () => {
        let x = addCoke - 50
        let y = totalCoke - 1
        setAddCoke(x)
        setTotalCoke(y)
    }
    const handleAddPepsi = () => {

        let x = addPepsi + 50
        let y = totalPepsi + 1
        setAddPepsi(x)
        setTotalPepsi(y)
    }
    const handleDeletePepsi = () => {
        let x = addPepsi - 200
        let y = totalPepsi - 1
        setAddPepsi(x)
        setTotalPepsi(y)
    }
    console.log('aaaaa', addBurger)
    return (
        <Box>
            <Grid container columnGap={1}>
                <Card>
                    <CardMedia
                        component="img"
                        height="450px"
                        sx={{ width: '350px' ,marginTop: '30px',marginLeft:'50px',marginRight:'50px'}}
                        image={img}
                        alt="Paella dish" />
                    <CardContent>
                        <Typography variant='h6' align='center'>
                            Hamburger
                        </Typography>
                        <Typography variant='body2' align='center'>
                            Price:200
                        </Typography>
                        {addBurger > 0 ? (<>
                            <Typography variant='body2' align='center' sx={{ margin: 1 }}>
                                Totals:{totalBurger}
                            </Typography>
                            <Typography variant='body2' align='center'>
                                Cost (INR):{addBurger}
                            </Typography>
                        </>) : ('')}
                        <Button onClick={handleAddBurger} variant='contained' sx={{
                            marginLeft: '150px', marginTop: '10px'

                        }}>+</Button>
                        <Button onClick={handleDeleteBurger} variant='contained' sx={{ backgroundColor: 'red', marginTop: '10px' }}
                        >-</Button>

                    </CardContent>

                </Card>
                <Card>
                    <CardMedia
                        component="img"
                        height="450px"
                        sx={{ width: '350px' ,marginTop: '30px',marginLeft:'50px',marginRight:'50px'}}
                        image={img2}
                        alt="Paella dish" />
                    <CardContent>
                        <Typography variant='h6' align='center'>
                            Fries
                        </Typography>
                        <Typography variant='body2' align='center'>
                            Price:100
                        </Typography>
                        {addFries > 0 ? (<>
                            <Typography variant='body2' align='center' sx={{ margin: 1 }}>
                                Totals:{totalFries}
                            </Typography>
                            <Typography variant='body2' align='center'>
                                Cost (INR):{addFries}
                            </Typography>
                        </>) : ('')}
                        <Button name='burger' onClick={handleAddFries} variant='contained' sx={{
                            marginLeft: '150px', marginTop: '10px'

                        }}>+</Button>
                        <Button onClick={handleDeleteFries} variant='contained' sx={{ backgroundColor: 'red', marginTop: '10px' }}
                        >-</Button>

                    </CardContent>

                </Card>
                <Card>
                    <CardMedia
                        component="img"
                        height="450px"
                        sx={{ width: '350px' ,marginTop: '30px',marginLeft:'50px',marginRight:'50px'}}
                        image={img1}
                        alt="Paella dish" />
                    <CardContent>
                        <Typography variant='h6' align='center'>
                            Coke
                        </Typography>
                        <Typography variant='body2' align='center'>
                            Price:50
                        </Typography>
                        {addCoke > 0 ? (<>
                            <Typography variant='body2' align='center' sx={{ margin: 1 }}>
                                Totals:{totalCoke}
                            </Typography>
                            <Typography variant='body2' align='center'>
                                Cost (INR):{addCoke}
                            </Typography>
                        </>) : ('')}
                        <Button name='burger' onClick={handleAddCoke} variant='contained' sx={{
                            marginLeft: '150px', marginTop: '10px'

                        }}>+</Button>
                        <Button onClick={handleDeleteCoke} variant='contained' sx={{ backgroundColor: 'red', marginTop: '10px' }}
                        >-</Button>

                    </CardContent>

                </Card>

                <Card>
                    <CardMedia
                        component="img"
                        height="450px"
                        sx={{ width: '350px' ,marginTop: '30px',marginLeft:'50px',marginRight:'50px'}}
                        image={img3}
                        alt="Paella dish" />

                    <CardContent>
                        <Typography variant='h6' align='center'>
                            Pepsi
                        </Typography>
                        <Typography variant='body2' align='center'>
                            Price:50
                        </Typography>
                        {addPepsi > 0 ? (<>
                            <Typography variant='body2' align='center' sx={{ margin: 1 }}>
                                Totals:{totalPepsi}
                            </Typography>
                            <Typography variant='body2' align='center'>
                                Cost (INR):{addPepsi}
                            </Typography>
                        </>) : ('')}
                        <Button onClick={handleAddPepsi} variant='contained' sx={{
                            marginLeft: '150px', marginTop: '10px'

                        }}>+</Button>
                        <Button onClick={handleDeletePepsi} variant='contained' sx={{ backgroundColor: 'red', marginTop: '10px' }}
                        >-</Button>

                    </CardContent>
                </Card>
            </Grid>

        </Box>
    

    )
}

export default Menu