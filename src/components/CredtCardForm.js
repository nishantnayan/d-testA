import React, { useState, useContext } from "react";
import { Button, Card } from '@material-ui/core';
import { Table, TableContainer, TableRow, TableCell, TableBody } from '@material-ui/core';
import AddCard from "../components/AddCard";
import EditCard from "../components/EditCard";
import { GlobalContext } from "../context/GlobalState"

const CreditCardForm = () => {

    const { cards, removeCard } = useContext(GlobalContext);
    const [flag, setFlag] = useState(true);
    const [cardId, setCardId] = useState("");

    const setCardStatus = (flag, id) => {
        setFlag(flag);
        setCardId(id);
    }
    return (
        <div>
            <h1>Credit Card Form</h1>
            <div className="max-50"> </div>
            <div className="row">
                <div className="col-md-6">
                    <Card variant="outlined" className="outer-card">
                    <div className="max-20"> </div>
                    <h4 className="list-card-title">List of Credit Card</h4>
                    <Button className="add-credit-card" variant="contained" onClick={() => setFlag(!flag)}>
                        + Add Credit Card
                    </Button>
                        <TableContainer
                        variant="outlined"
                        >
                            <Table aria-label="demo table">
                                {cards.length > 0 ? (
                                <TableBody>
                                    { cards.map( item =>
                                            <TableRow key={item.id}>
                                                <TableCell>
                                                    <p>Cardholder Name</p>
                                                    <p>Card No</p>
                                                </TableCell>
                                                <TableCell>
                                                    <p>{item.cardHolderName}</p>
                                                    <p>{item.cardNo}</p>
                                                </TableCell>
                                                <TableCell>
                                                    <Button size="small" className="add-credit-card" variant="contained" onClick={() => removeCard(item.id)}>
                                                        Delete
                                                    </Button>
                                                    <Button size="small" className="add-credit-card" variant="contained" onClick={() => setCardStatus(!flag, item.id)}>
                                                        Edit
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    }
                                </TableBody>
                                ) : (
                                    <h4 className="text-center">No Card Details Available</h4>
                                  )}
                            </Table>
                        </TableContainer>
                    </Card>
                </div>
                <div className="col-md-6">
                    <Card variant="outlined" className="outer-card-view-panel">
                        <Card variant="outlined" className="card-view">
                        </Card>
                        {flag ? <AddCard a={flag} /> : <EditCard id={cardId} />}
                    </Card>
                </div>
            </div>
        </div>

    )
}

export default CreditCardForm;
