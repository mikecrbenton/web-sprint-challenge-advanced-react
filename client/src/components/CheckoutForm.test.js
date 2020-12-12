import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
   const { getByText } = render(<CheckoutForm />);
   const header = getByText(/^Checkout Form$/i);
   expect(header).toBeInTheDocument();
   expect(header).toBeVisible(); 
});

test("form shows success message on submit with form details", () => {
   const { getByText, getByTestId } = render(<CheckoutForm />);

   const firstName = getByTestId(/^firstName$/i);
   const lastName = getByTestId(/^lastName$/i);
   const address = getByTestId(/^address$/i);
   const city = getByTestId(/^city$/i);
   const state = getByTestId(/^state$/i);
   const zip = getByTestId(/^zip$/i);
   const submitButton = getByText(/^Checkout$/i);

   userEvent.type( firstName, "Michael" );
   userEvent.type( lastName, "Benton" );
   userEvent.type( address, "1111 Plymouth" );
   userEvent.type( city, "Springfield" );
   userEvent.type( state, "NJ" );
   userEvent.type( zip, "88808" );
   
   userEvent.click(submitButton);

   expect( getByTestId(/^successMessage$/i) ).toBeVisible();
});
