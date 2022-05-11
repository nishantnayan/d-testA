import React, { useState, useContext } from "react";
import Form from "@rjsf/core";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";

const AddCard = () => {
    const schema = {
        title: "Credit Card",
        type: "object",
        required: ["cardNumber","cardHolder"],
        properties: {
            cardNumber: {type: "number", title: "Card Number", default: ""},
            cardHolder: {type: "string", title: "Card Holder Name", default: ""},
            validThuv: {type: "string", title: "Valid Thruv", default: ""},
            cvv: {type: "number", title: "Security Code Cvv", default: ""},
        }
    };

    const [formData, setFormData] = React.useState(null);

    const {  addCard } = useContext(GlobalContext);

 

    const submitFormData = (e) => {
        const newCard = {
            id: uuid(),
            cardNo: formData['cardNumber'],
            cardHolderName: formData['cardHolder']
        }
        console.log("addCard", addCard)

        addCard(newCard);
        console.log("additionalData", newCard)
    }
    

    return (
        <>
            <h6>Add</h6>
            <Form
                schema={schema}
                formData={formData}
                onSubmit={submitFormData}
                onChange={e => setFormData(e.formData)}
            />
        </>
    )
}

export default AddCard;
