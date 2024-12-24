import { useMemo } from "react";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Palette from "./light/palette";
import Typography from "./light/typography";

export default function ThemeCustomization({ children }) {

  const themeOptions = useMemo(
    () => ({
      direction: "ltr",
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1536,
        },
      },
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8,
        },
      },
      spacing: (...args) => args.map((multiplicator) => `${multiplicator * 4}px`).join(" "),
      palette: Palette("light").palette,
      typography: {
        ...Typography(),
        D_p1: {
          fontWeight: 400,
          fontSize: "20px",
          lineHeight: "28px",
        },
      },
      border: {
        xxl: "16px",
        xl: "14px",
        lg: "12px",
        md: "10px",
        sm: "8px",
        xs: "6px",
      },
      icon: {
        size: {
          xs: 9,
          sm: 14,
          md: 16,
          lg: 20,
          xl: 40,
        },
        stroke: {
          sm: 1.6,
          md: 2,
          lg: 2.5,
        },
      },
      shadows: {
        0: "none",
        error: "0px 1px 2px 0px rgba(233, 53, 53, 0.08)",
        focusError: "0px 0px 0px 2px #FFF, 0px 0px 0px 4px #FFECEB",
        success: "0px 1px 2px 0px rgba(55, 93, 251, 0.08)",
      },
      components: {
        MuiTypography: {
          styleOverrides: {
            root: {
              "&.MuiTypography-labelXXL": Typography().labelXXL,
              "&.MuiTypography-labelXL": Typography().labelXL,
              "&.MuiTypography-labelLG": Typography().labelLG,
              "&.MuiTypography-labelMD": Typography().labelMD,
              "&.MuiTypography-labelSM": Typography().labelSM,
              "&.MuiTypography-labelXS": Typography().labelXS,
              "&.MuiTypography-paragraphXL": Typography().paragraphXL,
              "&.MuiTypography-paragraphLG": Typography().paragraphLG,
              "&.MuiTypography-paragraphMD": Typography().paragraphMD,
              "&.MuiTypography-paragraphSM": Typography().paragraphSM,
              "&.MuiTypography-paragraphXS": Typography().paragraphXS,
              "&.MuiTypography-subHeadingMD": Typography().subHeadingMD,
              // "&.MuiTypography-D_p1": Typography().D_p1,
              "&.MuiTypography-D_p2": Typography().D_p2,
              "&.MuiTypography-D_p3": Typography().D_p3,
              "&.MuiTypography-M_Caption": Typography().M_Caption,
              "&.MuiTypography-Buttons_LC": Typography().Buttons_LC,
              "&.MuiTypography-Desktop_Menu": Typography().Desktop_Menu,
            },
          },
          defaultProps: {
            variantMapping: {
              labelXXL: "span",
              labelXL: "span",
              labelLG: "span",
              labelMD: "span",
              labelSM: "span",
              labelXS: "span",
              subHeadingMD: "span",
              paragraphMD: "p",
              D_p1: "p",
              D_p2: "p",
              D_p3: "p",
              M_Caption: "p",
              Buttons_LC: "button",
              Desktop_Menu: "span",
            },
          },
        },
      },
    }),
    []
  );

  const themes = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
