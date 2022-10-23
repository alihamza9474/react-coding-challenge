import React from "react";
import { Box } from "@mui/material";
import colors from "../constants/colors";
import { styled } from "@mui/material/styles";

type Props = {
  online: boolean;
  loading: boolean;
};

const SpanDot = styled("span", {
  shouldForwardProp: (prop: string) => !["online", "loading"].includes(prop),
})<{ online: boolean; loading: boolean }>(({ online, loading }) => {
  const color = loading
    ? colors.warning
    : online
    ? colors.success
    : colors.danger;
  return {
    borderRadius: "50%",
    display: "inline-block",
    width: 5,
    height: 5,
    backgroundColor: color,
  };
});

const SpanText = styled("span", {
  shouldForwardProp: (prop) => prop !== "online",
})<{ online: boolean }>(({ online }) => ({
  fontSize: 14,
  display: "block",
  lineHeight: 1.5,
  fontWeight: 400,
  letterSpacing: 1,
  paddingLeft: 5,
  color: online ? colors.text : colors.faded,
}));

const Status: React.FC<Props> = ({ online, loading }) => {
  return (
    <Box display="flex" alignItems="center">
      <SpanDot online={online} loading={loading}></SpanDot>
      <SpanText online={online}>
        {loading ? "LOADING" : online ? "ONLINE" : "OFFLINE"}
      </SpanText>
    </Box>
  );
};

export default Status;
