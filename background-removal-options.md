# Background Removal Options for Logos

## Option 1: Online Tools (Free)
1. **remove.bg** - Upload each logo and it will automatically remove backgrounds
2. **Canva Background Remover** - Free with Canva account
3. **PhotoRoom** - Good for logos

## Option 2: Batch Processing
If you have Photoshop:
1. Create an action to remove backgrounds
2. Run batch processing on all logos
3. Save as PNG with transparency

## Option 3: CSS Alternative (Currently Implemented)
- White card backgrounds for consistency
- Special inversion for dark logos
- Professional, uniform appearance

## Recommended Approach:
1. Use remove.bg for the 4 logos with dark backgrounds:
   - BasinGM_logos-BlackBG.png
   - 363441350_128589513625342_4363966892722747186_n.jpg (LTD Builders)
   - 305412056_498544548942255_7992234592442770309_n.png (Cole Stanley)
   - 243167553_4302163136499086_9200571258512949501_n.jpg (Montgomery)

2. Save them with transparent backgrounds
3. Remove the "dark-bg" class from the HTML
4. Update CSS to remove the white card background if desired