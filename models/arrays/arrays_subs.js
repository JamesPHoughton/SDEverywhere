[
  // DimA: A1, A2, A3 -> DimB
  { name: 'DimA', value: [ 'A1', 'A2', 'A3' ],
    mappings: [
      { toDim: 'DimB', value: [ 'A1', 'A2', 'A3' ] },
    ] },
  { name: 'A1', value: 0, family: 'DimA' },
  { name: 'A2', value: 1, family: 'DimA' },
  { name: 'A3', value: 2, family: 'DimA' },
  // DimB: B1, B2, B3
  { name: 'DimB', value: [ 'B1', 'B2', 'B3' ] },
  { name: 'B1', value: 0, family: 'DimB' },
  { name: 'B2', value: 1, family: 'DimB' },
  { name: 'B3', value: 2, family: 'DimB' },
]
