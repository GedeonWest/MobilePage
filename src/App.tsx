import React from "react";
import { Box, Container, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import theme from "./theme";
import "./App.css";
import {
  BankCard,
  RequisitesSection,
  SectionHeading,
  ToggleTabs,
  VolumeSection,
} from "./components";
import EditOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="app-shell">
        <Container maxWidth="sm" className="app-container">
          <Stack spacing={3}>
            <Box>
              <Stack spacing={0}>
                <Box mb={2.5}>
                  <SectionHeading title="Способ вывода" />
                </Box>
                <ToggleTabs
                  value="banks"
                  options={[
                    { value: "banks", label: "Банки" },
                    { value: "cash", label: "Наличные" },
                    { value: "courier", label: "Курьер" },
                  ]}
                />
              </Stack>
            </Box>

            <BankCard title="Альфа-банк cash-in" rate="1 USDT = 61.55 RUR" iconLabel="P" />

            <VolumeSection
              leftLabel="Отдаете (лот 1000)"
              rightLabel="Получаете (лот 1000)"
              leftCard={{
                label: "Ethereum, ETH",
                value: "1 300.00000",
                highlighted: true,
              }}
              rightCard={{
                label: "Рубль, RUR",
                value: "1 200.00",
              }}
            />

            <RequisitesSection
              documentOptions={[
                { value: "card", label: "Номер карты", checked: true },
                { value: "contract", label: "Номер договора" },
              ]}
              primaryPlaceholder="Номер карты"
              extraFields={[
                {
                  placeholder: "ФИО владельца",
                  adornment: <EditOutlinedIcon />,
                },
                {
                  placeholder: "Адрес",
                  adornment: <EditOutlinedIcon />,
                },
              ]}
            />
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
