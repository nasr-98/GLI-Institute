import React, { useMemo, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Box, CssBaseline, createTheme, ThemeProvider } from "@mui/material";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Prices from "./pages/Prices";
import Contact from "./pages/Contact";
import Registration from "./pages/Registration";
import GermanTest from "./pages/GermanTest";
import LegalPage from "./pages/LegalPage";
import About from "./pages/About";

import "./styles.css";

function AppContent() {
  const [mode, setMode] = useState("light");
  const [lang, setLang] = useState("en");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#1E3A8A",
          },
          secondary: {
            main: "#FBBF24",
          },
          background:
            mode === "light"
              ? {
                  default: "#F7F9FC",
                  paper: "#FFFFFF",
                }
              : {
                  default: "#0B1220",
                  paper: "#111A2B",
                },
        },

        typography: {
          fontFamily: '"Inter", "Noto Sans Arabic", system-ui, sans-serif',

          h1: {
            fontWeight: 800,
            letterSpacing: "-0.04em",
          },

          h2: {
            fontWeight: 800,
            letterSpacing: "-0.03em",
          },

          h3: {
            fontWeight: 750,
          },
        },

        shape: {
          borderRadius: 18,
        },

        components: {
          MuiChip: {
            styleOverrides: {
              outlined: {
                color: mode === "light" ? "#1E3A8A" : "#FFFFFF",
                borderColor: mode === "light" ? "#1E3A8A" : "#FFFFFF",
              },
            },
          },
          MuiAvatar: {
            styleOverrides: {
              root: {
                color: mode === "light" ? "#FFFFFF" : "#FFFFFF",
                borderColor: mode === "light" ? "#1E3A8A" : "#FFFFFF",
              },
            },
          },
          MuiSvgIcon: {
            styleOverrides: {
              root: {
                color: mode === "light" ? "#1E3A8A" : "#FBBF24",
                borderColor: mode === "light" ? "#1E3A8A" : "#FBBF24",
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 12,
                textTransform: "none",
                fontWeight: 700,
              },
              outlined: {
                color: mode === "light" ? "#1E3A8A" : "#FFFFFF",
                borderColor: mode === "light" ? "#1E3A8A" : "#FFFFFF",
              },
            },
          },

          MuiCard: {
            styleOverrides: {
              root: {
                border: "1px solid rgba(128,145,170,.18)",
                boxShadow: "0 12px 36px rgba(20,40,80,.08)",
              },
            },
          },
          MuiTypography: {
            styleOverrides: {
              h5: {
                color: mode === "light" ? "#1E3A8A" : "#FBBF24",
              },
            },
          },
        },
      }),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollToTop />

      <Box dir={lang === "ar" ? "rtl" : "ltr"}>
        <Header lang={lang} setLang={setLang} mode={mode} setMode={setMode} />

        <Routes>
          <Route path="/" element={<Home lang={lang} />} />

          <Route path="/about" element={<About lang={lang} />} />

          <Route path="/courses" element={<Courses lang={lang} />} />

          <Route path="/prices" element={<Prices lang={lang} />} />

          <Route path="/test" element={<GermanTest lang={lang} />} />

          <Route path="/contact" element={<Contact lang={lang} />} />

          <Route path="/register" element={<Registration lang={lang} />} />

          <Route
            path="/impressum"
            element={<LegalPage title="Impressum" lang={lang} />}
          />

          <Route
            path="/datenschutz"
            element={<LegalPage title="Datenschutz" lang={lang} />}
          />

          <Route path="/agb" element={<LegalPage title="AGB" lang={lang} />} />
        </Routes>

        <Footer lang={lang} />
      </Box>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
