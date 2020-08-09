### Install EarthEngine
[Run either of the following in Git Bash or consult this page for more installation options](https://developers.google.com/earth-engine/python_install)

  - `pip install earthengine-api`
  - `conda install -c conda-forge earthengine-api`

### Autheticate EarthEngine
[Google requires every user to authenticate, here are a few options:](https://developers.google.com/earth-engine/python_install-conda#windows_6)

- In Git Bash, run: `earthengine authenticate`
- In a notebook, (NOT on Colab), run:
  ```
  import ee
  ee.Authenticate()
  ```
You should be prompted to sign into a google account, at which point it'll spit out an authetication string. Copy and paste that into the authentication dialogue in your command line/notebook.

### Verify that it's working
[To test if it's correctly setup:](https://developers.google.com/earth-engine/python_install-conda#testing_the_api)

- open a notebook and run the following
  ```
  import ee
  ee.initialize()
  print(ee.Image('USGS/SRTMGL1_003').getInfo())
  ```
- alternatively, you can check if you're currently running version 0.1.215
```
  import ee
  print(ee.__version__)
```
