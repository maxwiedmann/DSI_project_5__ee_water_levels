# Problem Statement

<em>Floods cause damage to infrastructure and homes. The depth of flood waters is a good indicator of the severity of damage. Floods are incredibly difficult to model, and while model outputs are useful to emergency managers, it is crucial to know the actual depth. How can this satellite imagery be used to estimate flood occurrences as well as the depth of water in a given area?</em>

## Executive Summary

Several models were developed and tuned to find the most accurate predictor of flood presence in Oroville, CA. The <i>Google Earth Engine</i> API was used to retrieve map images of Oroville over time while data from <i>NOAA</i> was used for additional feature development and model measurement.

### Contents:
- <a href = "https://github.com/maxwiedmann/DSI_project_5__ee_water_levels/blob/master/main.ipynb#Introduction">Introduction</a>
- <a href = "https://github.com/maxwiedmann/DSI_project_5__ee_water_levels/blob/master/main.ipynb#cleaning">EDA</a>
- <a href = "https://github.com/maxwiedmann/DSI_project_5__ee_water_levels/blob/master/main.ipynb#engineer">Feature Cleaning and Engineering</a>
- <a href = "https://github.com/maxwiedmann/DSI_project_5__ee_water_levels/blob/master/main.ipynb#logreg">Preliminary Classifier</a>
- <a href = "https://github.com/maxwiedmann/DSI_project_5__ee_water_levels/blob/master/main.ipynb#moremodels">Additional Modeling</a>
- <a href = "https://github.com/maxwiedmann/DSI_project_5__ee_water_levels/blob/master/main.ipynb#results">Measurement</a>

### Data Dictionary

|Feature|Type|Dataset|Description|
|---|---|---|---|
|**flood**|*float*|df|Binary classifier indicating the occurrence of a flood, 1 or otherwise, 0.|
|**water_level**|*float*|df|Scaled pixel count from the Google Earth Engine API layered on bodies of water.|
|**water_chg**|*float*|df|Difference of scaled water pixel count from previous period.|
|**water_pct_chg**|*float*|df|Percent difference of scaled water pixel count from previous period.|
|**alert**|*int64*|df|Binary classifier indicating the occurrence of a flood, 1 or otherwise, 0.|

# Conclusion

### Recommendations
Our classifiers look to classify whether a flood will be occurring the following day. The final model detects the whether a flood will occur the following day with approximately 97% accuracy. More importantly we are only overlooking the occurrence of a flood ~9% of the time.

### Next Steps
* Further integrate Google Earth Engine into the 'main.ipynb' notebook and run batch scripts for different locations.
* Improve model *overall* accuracy as well as sensitivity measure to more accurrately predict flooding.
* .
