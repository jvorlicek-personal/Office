import { Suspense } from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";

function App() {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Box>
        <Typography variant="h1">{t("welcome")}</Typography>
      </Box>
    </Suspense>
  );
}

export default App;
