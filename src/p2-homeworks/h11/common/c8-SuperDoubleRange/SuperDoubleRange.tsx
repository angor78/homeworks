import React from 'react'
import {RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack} from "@chakra-ui/react";

type SuperDoubleRangePropsType = {
  onChangeRange: (value: [number, number]) => void
  min: number
  max: number
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
  {
    onChangeRange,
    min, max
  }
) => {

  return (
    <RangeSlider value={[min, max]}
                 onChange={(value: number[]) => onChangeRange([value[0], value[1]])}
                 w={'197px'}>
      <RangeSliderTrack h={'6px'} border={'1px'} borderColor={"gray"}>
        <RangeSliderFilledTrack/>
      </RangeSliderTrack>
      <RangeSliderThumb index={0}/>
      <RangeSliderThumb index={1}/>
    </RangeSlider>
  )
}

export default SuperDoubleRange
