---
imports:
  ColourGrid: '../../../components/ColourGrid.js'
  Colour: '../../../components/Colour.js'
---
# Colour

The colours specified below should be used for all Westpac user interfaces. It’s important to understand how the colour system works in a multi-brand environment. It’s also very important to adhere to the accessibility guidelines. :cake:

### Primary UI Palette
These are the nine core colours used in the digital brand. It’s important to use these colours correctly for their specified purpose.


```render
<ColourGrid>
  <Colour variable="brand-01" hex="#3d70b2" />
  <Colour variable="brand-02" hex="#5596e6" />
  <Colour variable="brand-03" hex="#41d6c3" />
  <Colour variable="ui-01" hex="#ffffff" border="true" />
</ColourGrid>
```

### Secondary UI Palette
The secondary palette is a collection of bespoke, brand specific colours. Unlike the primary palette secondary colours do not map to the other brands. Secondary colours are generally used for bespoke brand embellishment: headers, promos, charts, diagrams etc. They are unique to the brand and must not be used anywhere else.

``` render
<ColourGrid>
  <Colour variable="brand-01" hex="#3d70b2" />
  <Colour variable="brand-02" hex="#5596e6" />
</ColourGrid>
```