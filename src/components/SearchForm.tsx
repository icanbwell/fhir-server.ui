import { useState } from 'react';
import { TextField, Button, Box, Grid } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchFormQuery from '../utils/searchFormQuery';
import { getAdvSearchFormData, getFormData, FieldInfo } from '../utils/searchForm.utils';

export default function SearchForm({
    onSearch,
    resourceType,
}: {
    onSearch: any;
    resourceType: string;
}) {
    const advSearchFormData = getAdvSearchFormData(resourceType);
    const formData = getFormData(resourceType);

    // create defaultValues for searchParams
    let defaultValues: any = { start: null, end: null };
    formData.forEach((data) => {
        defaultValues[`${data.name}`] = '';
    });
    advSearchFormData.forEach((data) => {
        defaultValues[`${data.name}`] = '';
    });
    const [searchParams, setSearchParams] = useState(defaultValues);

    const resetFields = () => {
        setSearchParams(defaultValues);
    };

    const handleSearch = (e: any) => {
        e.preventDefault();

        onSearch(new SearchFormQuery(searchParams));
    };

    const handleChange = (e: any) => {
        e.preventDefault();

        setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
    };

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: { xs: '90%', sm: '25ch' } },
            }}
            noValidate
            autoComplete="on"
            onSubmit={handleSearch}
        >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <DatePicker
                        label="Last Updated After"
                        value={searchParams.start}
                        slotProps={{
                            field: {
                                clearable: true,
                            },
                        }}
                        onChange={(newValue) => {
                            console.log(newValue);
                            setSearchParams({ ...searchParams, start: newValue });
                        }}
                    />
                    <DatePicker
                        label="Last Updated Before"
                        value={searchParams.end}
                        slotProps={{
                            field: {
                                clearable: true,
                            },
                        }}
                        onChange={(newValue) => setSearchParams({ ...searchParams, end: newValue })}
                    />
                    {formData.map((data: FieldInfo) => (
                        <TextField
                            name={data.name}
                            label={data.label}
                            type="text"
                            value={searchParams[`${data.name}`]}
                            onChange={handleChange}
                            fullWidth
                        />
                    ))}
                    {advSearchFormData.map((data: FieldInfo) => (
                        <TextField
                            name={data.name}
                            label={data.label}
                            type="text"
                            value={searchParams[`${data.name}`]}
                            onChange={handleChange}
                            fullWidth
                        />
                    ))}
                </Grid>
                <Grid item xs={12}>
                    <Button variant="outlined" color="secondary" onClick={resetFields}>
                        Reset
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={handleSearch}
                    >
                        Search
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}
