import React from "react";
import { Box } from "@mui/material";

const Block = ({ block }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        background: "rgba(0, 0, 0, 0.12)",
        padding: "8px",
        marginBottom: "8px",
      }}
    >
      <Box
        sx={{
          fontWeight: 700,
          fontSize: "12px",
          lineHeight: "16px",
          letterSpacing: "1.5px",
          color: "#304FFE",
          paddingBottom: "5px",
        }}
      >
        {block?.id}
      </Box>
      <div>{block?.description}</div>
    </Box>
  );
};

export default Block;
