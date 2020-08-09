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

