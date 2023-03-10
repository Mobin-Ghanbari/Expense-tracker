import React, {useContext} from 'react'
import { Card, CardHeader, CardContent , Divider, Typography, Grid } from "@material-ui/core";
import { ExpenseTrackerContext } from "../../context/context";
import usestyle from './styles';
import Form from './Form/Form';
import List from './List/List';

const Main = () => {
    const classes = usestyle();
    const {balance} = useContext(ExpenseTrackerContext);
  return (
    <Card className={classes.root}>
        <CardHeader title="Expense Tracker"  />
        <CardContent>
            <Typography align='center' variant='h5' >Total Balance ${balance}</Typography>
            <Typography variant='subtitle' style={{lineHeight: '1.5em', marginTop: '20px'}}>
            </Typography>
            <Divider />
            <Form />
        </CardContent>
        <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <List />
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  )
}

export default Main