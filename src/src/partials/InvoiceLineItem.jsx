import React from 'react';
import {Typography, Table, TableHead, TableBody, TableRow, TableCell, Box, Link} from '@mui/material';
import CodeableConcept from '../partials/CodeableConcept';
import InvoicePriceComponent from './InvoicePriceComponent';
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
  table: {},
});

const InvoiceLineItem = ({ invoiceLineItem: lineItems, name }) => {
    const classes = useStyles();
    if (!Array.isArray(lineItems)) {
        lineItems = [lineItems];
    }
    if (lineItems && lineItems.length > 0 && lineItems[0]) {
        return (
            <Box>
                <Typography variant="h4">{name}</Typography>
                <Table className="table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Item</TableCell>
                            <TableCell>Code</TableCell>
                            <TableCell>Price Component</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {lineItems.map((lineItem) => {
                            return (
                                <TableRow key={lineItem.chargeItemReference.reference}>
                                    <TableCell>{lineItem.chargeItemReference.reference}</TableCell>
                                    <TableCell>
                                        <CodeableConcept resourceType="" codeableConcept={lineItem.chargeItemCodeableConcept} name="Code" searchParameter="" />
                                    </TableCell>
                                    <TableCell>
                                        <InvoicePriceComponent name="" invoicePriceComponent={lineItem.priceComponent} />
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Box>
        );
    } else {
        return null;
    }
};

export default InvoiceLineItem;
