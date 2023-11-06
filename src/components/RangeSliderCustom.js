import {
  Box,
  FormLabel,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from "@chakra-ui/react";
import React from "react";

export const RangeSliderCustom = ({
  max,
  min,
  step,
  trackColor,
  filledTrackColor,
  width,
  height,
  label,
  color,
}) => {
  return (
    <Box w={width}>
      {label && <FormLabel style={{ color: color }}>{label}</FormLabel>}
      <RangeSlider
        aria-label={["min", "max"]}
        defaultValue={[min, max]}
        min={min}
        max={max}
        step={step}
        h={height}
      >
        <RangeSliderTrack bg={trackColor}>
          <RangeSliderFilledTrack bg={filledTrackColor} />
        </RangeSliderTrack>
        <RangeSliderThumb boxSize={4} index={0} />
        <RangeSliderThumb boxSize={4} index={1} />
      </RangeSlider>
    </Box>
  );
};
