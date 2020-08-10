# Problem Statement

<em>Floods cause damage to infrastructure and homes. The depth of flood waters is a good indicator of the severity of damage. Floods are incredibly difficult to model, and while model outputs are useful to emergency managers, it is crucial to know the actual depth. How can this satellite imagery be used to estimate flood occurrences as well as the depth of water in a given area?</em>

## Executive Summary

Several models were developed and tuned to find the most accurate predictor of flood presence in Oroville, CA. The <i>Google Earth Engine</i> API was used to retrieve map images of Oroville over time while data from <i>NOAA</i> was used for additional feature development and model measurement.

### Contents:
- <a href = "https://git.generalassemb.ly/chrisvolpacchio/project_3/blob/master/CV%20Sub-Reddit%20Classifier.ipynb#top">Introduction</a>
- <a href = "https://git.generalassemb.ly/chrisvolpacchio/project_3/blob/master/CV%20Sub-Reddit%20Classifier.ipynb#scraping">Text Scraping</a>
- <a href = "https://git.generalassemb.ly/chrisvolpacchio/project_3/blob/master/CV%20Sub-Reddit%20Classifier.ipynb#cleaning">Data Cleaning</a>
- <a href = "https://git.generalassemb.ly/chrisvolpacchio/project_3/blob/master/CV%20Sub-Reddit%20Classifier.ipynb#stops">Preliminary Model Development</a>
- <a href = "https://git.generalassemb.ly/chrisvolpacchio/project_3/blob/master/CV%20Sub-Reddit%20Classifier.ipynb#moremodels">Advanced Modeling</a>

### Data Dictionary

|Feature|Type|Dataset|Description|
|---|---|---|---|
|**state**|*object*|sat2017|The states that have representatives who have participated in the exams.|


# Conclusion

### Recommendations
Our final model detects the presence of TV–MA content in context approximately 97% of the time. The model is able to intake any number of text blocks of any length and almost perfectly identify the presence of unwanted content.

### Next Steps
* Use alternate sources for inforation surrounding program content such as network websites.
* Improve model *overall* accurracy to avoid withholding TV–Y content as well as any content not considered to be TV–MA.
* Increase our model's TV–MA detection–rate to 1.00 (100%).

https://azpbs.org/2017/11/early-childhood-brain-development-lifelong-impact/

# project_5
Water coverage from Earth Engine

Code outline

1. Specify location (longitude and latitude), default to Houston for now.

2. Get a collection of Landsat images that cover the specified location.

3. Crop images to a specified geometry around the location.

  Should be able to do with in ee.

4. Apply .normalizedDifference() and count water pixels to get water coverage (in numpy or ee?) for each image.

5. Take timestamp and percent water coverage for each image and add them as rows to a dataframe.

6. Do some modeling...
