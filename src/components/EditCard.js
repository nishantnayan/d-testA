import React, { useState, useEffect, useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import Form from "@rjsf/core";
const EditCard = (props) => {
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

    const { editCard, cards } = useContext(GlobalContext);
    const [selectedCard, setSelectedCard] = useState({
        id: '',
        cardNo: '',
        cardHolderName: '',
        validThuv: '',
        cvv: ''
    })

    const currentCardId = props.id;

    useEffect(() => {
        const cardId = currentCardId;
        const selectedCard = cards.find(card => card.id === cardId);

        setSelectedCard(selectedCard);
      
    }, [currentCardId, cards])


    const formData = {
        cardNumber:selectedCard? selectedCard.cardNo : "",
        cardHolder: selectedCard? selectedCard.cardHolderName: "",
        validThuv: selectedCard? selectedCard.validThuv: "",
        cvv: selectedCard? selectedCard.cvv: ""
    };   

    const submitFormData = (e) => {
        editCard(selectedCard);
    }
    
    const onChange = (e) => {
        setSelectedCard({ ...selectedCard,
                        ['cardNo']: e.formData.cardNumber,  
                        ['cardHolderName']: e.formData.cardHolder,
                        ['validThuv']: e.formData.validThuv,
                        ['cvv']: e.formData.cvv
                    })
    }
    
    return (
        <>
            <h6>Edit</h6>
            <Form
                schema={schema}
                formData={formData}
                onSubmit={submitFormData}
                onChange={onChange}
            />
        </>
    )
}

export default EditCard;