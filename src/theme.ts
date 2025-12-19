import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#2C9CF4" },
    secondary: { main: "#111111" },
    warning: { main: "#f5c400" },
    background: { default: "#f3f3f3" },
    text: {
      primary: "#111111",
      secondary: "#8d8d8d",
    },
  },
  typography: {
    fontFamily: `'SF Pro Text', 'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
    h6: {
      fontWeight: 700,
      fontSize: "1.125rem",
      lineHeight: 1.4,
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
      "@media (max-width:350px)": {
        fontSize: "0.85rem",
      },
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: 1.3,
      "@media (max-width:600px)": {
        fontSize: "0.95rem",
      },
      "@media (max-width:400px)": {
        fontSize: "0.8rem",
      },
      "@media (max-width:350px)": {
        fontSize: "0.7rem",
      },
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.3,
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
      "@media (max-width:350px)": {
        fontSize: "0.85rem",
      },
    },
    body2: {
      fontSize: "0.95rem",
      "@media (max-width:600px)": {
        fontSize: "0.9rem",
      },
      "@media (max-width:400px)": {
        fontSize: "0.8rem",
      },
      "@media (max-width:350px)": {
        fontSize: "0.75rem",
      },
    },
    caption: {
      fontSize: "0.8rem",
      "@media (max-width:600px)": {
        fontSize: "0.75rem",
      },
      "@media (max-width:400px)": {
        fontSize: "0.7rem",
      },
      "@media (max-width:350px)": {
        fontSize: "0.65rem",
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 24,
          fontWeight: 600,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          textTransform: "none",
          borderRadius: 16,
          padding: theme.spacing(1, 1.75),
          border: "none",
          color: "#000000",
          backgroundColor: "#ffffff",
          "&.Mui-selected": {
            backgroundColor: "#111111",
            color: "#ffffff",
            "&:hover": {
              backgroundColor: "#111111",
            },
          },
          "&:hover": {
            backgroundColor: "#f3f3f3",
          },
          [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(1, 1.25),
            fontSize: "0.95rem",
          },
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        sizeSmall: ({ theme }) => ({
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: "#e8e8e8",
          border: "1px solid transparent",
          color: "#000000",
          "&:hover": {
            backgroundColor: "#dcdcdc",
          },
          [theme.breakpoints.down(350)]: {
            width: 20,
            height: 20,
          },
        }),
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        },
        grouped: {
          borderRadius: 16,
          border: "none",
          margin: "0 !important",
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          padding: "10px 14px",
          "@media (max-width:600px)": {
            padding: "9px 12px",
          },
          "@media (max-width:400px)": {
            padding: "8px 10px",
          },
          "@media (max-width:350px)": {
            padding: "8px 8px",
          },
          backgroundColor: "#ffffff",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: "#ffffff",
          paddingRight: 0,
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        },
        input: {
          padding: "6px 0",
          fontSize: "1rem",
          fontWeight: 600,
          color: "#000000",
          "&::placeholder": {
            color: "#000000",
            opacity: 1,
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#f5c400",
          "&.Mui-checked": {
            color: "#f5c400",
            "& .MuiSvgIcon-root": {
              color: "#000000",
            },
          },
          "& .MuiSvgIcon-root": {
            color: "#000000",
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: "#d1d1d1",
          "&.Mui-checked": {
            color: "#f5c400",
          },
        },
      },
    },
  },
});

export default theme;
