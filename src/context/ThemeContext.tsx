import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

interface ThemeContextType {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

interface ThemeContextProviderProps {
    children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Get initial theme from localStorage or default to false (light mode)
        const savedTheme = localStorage.getItem('darkMode');
        return savedTheme ? JSON.parse(savedTheme) : false;
    });

    useEffect(() => {
        // Save theme preference to localStorage whenever it changes
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode((prev: boolean) => !prev);
    };

    // Create Material-UI theme based on isDarkMode
    const theme = createTheme({
        palette: {
            mode: isDarkMode ? 'dark' : 'light',
            primary: {
                main: '#1976d2',
            },
            secondary: {
                main: '#dc004e',
            },
            background: {
                default: isDarkMode ? '#121212' : '#fafafa',
                paper: isDarkMode ? '#1e1e1e' : '#ffffff',
            },
        },
        components: {
            // Customize components for better dark mode support
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundColor: isDarkMode ? '#1e1e1e' : '#1976d2',
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff',
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff',
                    },
                },
            },
            MuiTableContainer: {
                styleOverrides: {
                    root: {
                        backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff',
                    },
                },
            },
            MuiTableHead: {
                styleOverrides: {
                    root: {
                        backgroundColor: isDarkMode ? '#2d2d2d' : '#f5f5f5',
                    },
                },
            },
            MuiTableRow: {
                styleOverrides: {
                    root: {
                        '&:nth-of-type(odd)': {
                            backgroundColor: isDarkMode ? '#1a1a1a' : '#f9f9f9',
                        },
                        '&:nth-of-type(even)': {
                            backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff',
                        },
                        '&:hover': {
                            backgroundColor: isDarkMode ? '#2d2d2d' : '#f0f0f0',
                        },
                    },
                },
            },
            MuiTableCell: {
                styleOverrides: {
                    root: {
                        borderBottom: isDarkMode ? '1px solid #333' : '1px solid #e0e0e0',
                        color: isDarkMode ? '#ffffff' : '#000000',
                    },
                    head: {
                        backgroundColor: isDarkMode ? '#2d2d2d' : '#f5f5f5',
                        color: isDarkMode ? '#ffffff' : '#000000',
                        fontWeight: 600,
                    },
                },
            },
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '& .MuiOutlinedInput-root': {
                            backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff',
                            '& fieldset': {
                                borderColor: isDarkMode ? '#444' : '#e0e0e0',
                            },
                            '&:hover fieldset': {
                                borderColor: isDarkMode ? '#666' : '#b0b0b0',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#1976d2',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: isDarkMode ? '#ffffff' : '#000000',
                        },
                        '& .MuiOutlinedInput-input': {
                            color: isDarkMode ? '#ffffff' : '#000000',
                        },
                    },
                },
            },
            MuiFormControl: {
                styleOverrides: {
                    root: {
                        '& .MuiOutlinedInput-root': {
                            backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff',
                            '& fieldset': {
                                borderColor: isDarkMode ? '#444' : '#e0e0e0',
                            },
                            '&:hover fieldset': {
                                borderColor: isDarkMode ? '#666' : '#b0b0b0',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#1976d2',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: isDarkMode ? '#ffffff' : '#000000',
                        },
                        '& .MuiOutlinedInput-input': {
                            color: isDarkMode ? '#ffffff' : '#000000',
                        },
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        '&.MuiButton-outlined': {
                            borderColor: isDarkMode ? '#444' : '#e0e0e0',
                            color: isDarkMode ? '#ffffff' : '#1976d2',
                            '&:hover': {
                                borderColor: isDarkMode ? '#666' : '#b0b0b0',
                                backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.04)' : 'rgba(25, 118, 210, 0.04)',
                            },
                        },
                    },
                },
            },
        },
    });

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
