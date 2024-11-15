# Awesome ERDDAP [![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome)

A curated list of awesome ERDDAP projects and deployments

Inspired by [Bob Simons](https://github.com/BobSimons) and other Awesome lists.

## Contents

- [ERDDAP](#erddap)
- [ERDDAP Clients](#erddap-clients)
- [Tutorials](#tutorials)
- [ArcGIS](#arcgis)
- [Web Mapping Services](#web-mapping-services)
- [Vectors](#vectors)
- [Miscellaneous](#miscellaneous)
- [ERDDAP Deployments](#erddap-deployments)

## ERDDAP

- The [ERDDAP data server](https://github.com/BobSimons/erddap) itself - various instances power all the awesome projects on this list
- [List of ERDDAP instances](https://github.com/IrishMarineInstitute/awesome-erddap/blob/master/erddaps.json) - A JSON file of ERDDAP instances for use in applications which require access to multiple ERDDAP servers. This file is hosted within this repository. To add your ERDDAP server to the JSON file, please see the [guidelines for contributing](#contributing).

## ERDDAP Clients

- [erddapy](https://ioos.github.io/erddapy/) - Python language package for simplified access to ERDDAP servers.
- [rerddap](https://github.com/ropensci/rerddap) - R language package for simplified access to data in any ERDDAP server, can also be installed from CRAN.
- [rerddapXtracto](https://github.com/rmendels/rerddapXtracto) - R language package that uses rerdddap to extract data from ERDDAP servers along a trajectory or inside a polygon.
- [erddap-highstock-viewer](https://github.com/gulfofmaine/erddap-highstock-viewer) -  Simple pure JavaScript example to demonstrate display of long time series in HighCharts from a CORS enabled ERDDAP RESTful API.
- [erddap-python](https://github.com/hmedrano/erddap-python) - Python library for the ERDDAP Restful API, that can obtain status metrics, provides search methods, and it gives tabledap and griddap class objects for metadata and data access.
- [xtractoMatlab](https://github.com/rmendels/xtractoMatlab) - Matlab package that has the same functionality as the R package 'rerddapXtracto'.

## Tutorials

- [Reusing Open Data with ERDDAP and Python](https://k-rns.github.io/workshop_data_reuse/) - Python based tutorial by Karen Soenen ([@k-rns](https://github.com/k-rns)) on using data published through Erddap aimed at the ocean sciences. Around four hours of material.
- [NOAA COASTWATCH Satellite Course : Intro to ERDDAP](https://coastwatch.pfeg.noaa.gov/projects/erddap/) - ERDDAP web interface tutorial by Cara Wilson and Dale Robinson on using satellite data alongside tabular datasets aimed at ocean / atmospheric sciences.  Includes an application of the [rerddapXtracto](https://github.com/rmendels/rerddapXtracto) tool.

## ArcGIS

- [Environmental Data Connector](http://asascience.com/software/downloads/) - The Environmental Data Connector (EDC) extension uses a Java-based browser to allow users to connect to THREDDS/SOS/ERDDAP data servers. The connector leverages existing components from the Unidata libraries so that users can filter large amounts of data in space and time. The data and metadata can automatically be loaded into ArcMap, R, Matlab, or Excel.

## Web Mapping Services

- [erddap-leadlet-velocity-demo](https://github.com/IrishMarineInstitute/erddap-leaflet-velocity-demo) - A demonstration of connecting Erddap to [Leaflet-Velocity](https://github.com/danwild/leaflet-velocity) maps.
- [timeliER](https://irishmarineinstitute.github.io/timeliER/#IMI_CONN_3D) - Smooth playing of ERDDAP WMS data using [LeafletTime.Dimension](https://github.com/socib/Leaflet.TimeDimension).

## Vectors

- [model-v](http://digitalocean.ie/model-v/) - Sea Surface animation of ERDDAP netCDF data using [wind.js](https://github.com/Esri/wind-js) with time interpolation added. Takes a minute to load, or [watch the video](http://digitalocean.ie/model-v/connemara/).

## Miscellaneous

- [Erddap-Voxel-Space](https://irishmarineinstitute.github.io/Erddap-Voxel-Space/VoxelSpace.html) - Terrain rendering using ERDDAP WMS as data, based upon this  [VoxelSpace implementation](https://github.com/s-macke/VoxelSpace) as extended by [John Hawthorn](https://github.com/jhawthorn/VoxelSpace) (see his [Vancouver LIDAR data demo](https://jhawthorn.github.io/VoxelSpace/VoxelSpace.html)).
- [Graphql API to ERDDAP](https://api.digitalocean.ie/) - Contact Irish Marine Institute if interested in this for your site.
- [Search Multiple Erddaps](https://coastwatch.pfeg.noaa.gov/erddap/download/SearchMultipleERDDAPs.html) - Bob Simon's experimental web page for searching ERDDAPs.
- [Search Erddaps](https://github.com/IrishMarineInstitute/search-erddaps) - A tool for searching across instances of NOAA's Erddap data server software.
- [ERDDAP Gold Standard](https://github.com/ioos/erddap-gold-standard) - Example datasets and configuration for ERDDAP.
- [IOOS ERDDAP install gold standards](https://ioos.github.io/erddap-gold-standard/index.html) - A quick start guide for standing up an ERDDAP server
- [ERDDAP Status Metrics Dashboard](https://share.streamlit.io/hmedrano/erddap-status-dashboard/main/dashboard_streamlit_app.py) - An interactive dashboard web app powered by [Streamlit](https://streamlit.io/) that parses ERDDAP status metrics using `erddap-python`, and [altair](https://altair-viz.github.io/) for visualizations.
- [ERDDAP interpolate converter notebook](https://ioos.github.io/ioos_code_lab/content/code_gallery/data_analysis_and_visualization_notebooks/2021-10-25-ERDDAP-interpolate.html) - An example using ERDDAP's interpolate converter to interpolate temperature from the Multi-scale Ultra-high Resolution (MUR) SST Analysis to saildrone track points.
- [ERDDAP docker install](https://github.com/EMODnet-Physics/docker-erddap-install) An easy to use (we hope) procedure to install and configure the axiom/docker-erddap docker container on linux

## ERDDAP Deployments

- [AKFIN](https://erddap.psmfc.org/erddap) - Alaska Fisheries Information Network, Pacific States Marine Fisheries Commission (PSMFC).
- [APDRC](http://apdrc.soest.hawaii.edu/erddap/index.html) - Asia-Pacific Data-Research Center, International Pacific Research Center at the University of Hawaii (UH).
- [BCO-DMO](https://erddap.bco-dmo.org/erddap/) - Biological and Chemical Oceanography Data Management Office at Woods Hole Oceanographic Institution (WHOI).
- [CanWIN](https://canwinerddap.ad.umanitoba.ca/erddap) - The Canadian Watershed Information Network at the University of Manitoba.
- [CSIRO and IMOS](http://rs-data1-mel.csiro.au/erddap/index.html) (Australia's Commonwealth Scientific and Industrial Research Organisation and the Integrated Marine Observing System)
- [EMODnet Physics](http://erddap.emodnet-physics.eu/erddap/index.html) (The European Marine Observation and Data Network - Physics)
- [Hakai Institute](https://catalogue.hakai.org/erddap/index.html) (The Hakai Institute on the Central Coast of British Columbia, Canada)
- [GRIIDC](https://erddap.griidc.org/erddap/index.html) (Gulf of Mexico Research Initiative)
- [ICHEC](https://erddap.ichec.ie/erddap/index.html) (Irish Centre for High-End Computing)
- [INCOIS](http://erddap.incois.gov.in/erddap/index.html) (Indian National Centre for Ocean Information Services)
- IPSC JRC EC - Maritime Affairs Unit, Institute for the Protection and Security of the Citizen, Joint Research Centre of the European Commission
- [JRC EODPP](https://jeodpp.jrc.ec.europa.eu/services/erddap/) - European Commission Joint Research Centre Big Data Platform's ERDDAP server.
- IRD (Institut de Recherche pour le Développement, France)  
- CNRS (Centre National de la Recherche Scientifique, France)  
- UPMC (Université Pierre et Marie CURIE, Paris, France)  
- UCAD (Université Cheikh Anta Diop de Dakar, Sénégal)  
- UGB (Université Gaston Berger - Saint-Louis du Sénégal)  
- UFHB (Université Félix HOUPHOUËT-BOIGNY, Abidjan, Côte d'Ivoire)  
- IPSL (Institut Pierre Simon Laplace des sciences de l'environnement, Paris, France)  
- LMI ECLAIRS (Laboratoire Mixte International Etude du Climat en Afrique de lOuest et de ses Interactions avec lEnvironnement Régional, et appui aux services climatiques)
- [The Marine Institute](https://erddap.marine.ie/erddap/index.html) - Ireland.
- Marine Instruments S.A. (Spain)
- [NCI](http://nrm-erddap.nci.org.au/erddap/index.html) (National Computational Infrastructure)
- [NOAA ATN IOOS](https://atn.ioos.us/erddap/index.html) (Animal Telemetry Network)
- [NOAA CW CGOM](http://cwcgom.aoml.noaa.gov/erddap/index.html) (CoastWatch Caribbean/Gulf of Mexico Node)
- [NOAA CW WC](https://coastwatch.pfeg.noaa.gov/erddap/index.html) - CoastWatch West Coast Node which is co-located with and works with NOAA ERD.  
- [NOAA IOOS Sensors](http://erddap.sensors.ioos.us/erddap/) (Integrated Ocean Observing System)
- [NOAA IOOS CeNCOOS](http://erddap.axiomdatascience.com/erddap/index.html) (Central and Northern California Ocean Observing System, run by Axiom Data Science)
- [NANOOS IOOS](https://wilson.coas.oregonstate.edu/erddap/index.html) (Northwest Association of Networked Ocean Observing Systems)
- [NOAA IOOS NERACOOS](http://www.neracoos.org/erddap/index.html) (Northeastern Regional Association of Coastal and Ocean Observing Systems)
- [NOAA IOOS NGDAC](https://gliders.ioos.us/erddap/index.html) - National Glider Data Assembly Center.
- [NOAA IOOS PacIOOS](https://pae-paha.pacioos.hawaii.edu/erddap/index.html) - Pacific Islands Ocean Observing System) at the University of Hawaii (UH).
- [NOAA IOOS SCCOOS](http://sccoos.org/erddap/index.html) (Southern California Coastal Ocean Observing System)
- [NOAA IOOS SECOORA](http://erddap.secoora.org/erddap/index.html) (Southeast Coastal Ocean Observing Regional Association)
- [NOAA NCEI](https://ecowatch.ncddc.noaa.gov/erddap/index.html) - National Centers for Environmental Information) / NCDDC.
- NOAA NGDC STP (National Geophysical Data Center, Solar - Terrestrial Physics)
- [NOAA Oceanview](https://oceanview.pfeg.noaa.gov/erddap/index.html)
- [NOAA OSMC](http://osmc.noaa.gov/erddap/index.html) (Observing System Monitoring Center)
- [NOAA PW](https://polarwatch.noaa.gov/erddap/index.html)
- [NOAA UAF](https://upwell.pfeg.noaa.gov/erddap/index.html) (Unified Access Framework)
- [Ocean Networks Canada](http://dap.onc.uvic.ca/erddap/index.html)
- [OOI](https://oceanobservatories.org/erddap-server/) - The Ocean Observatories Initiative.
- [Ocean Tracking Network](https://members.oceantrack.org/erddap/index.html)
- Princeton, Hydrometeorology Research Group
- R.Tech Engineering
- [Rutgers University, Department of Marine and Coastal Sciences](http://tds.marine.rutgers.edu/erddap/index.html)
- San Francisco Estuary Institute
- [Scripps Institution of Oceanography, Spray Underwater Gliders](https://spraydata.ucsd.edu/erddap/index.html)
- [Smart Atlantic](https://www.smartatlantic.ca/erddap/)
- South African Environmental Observation Network
- Spyglass Technologies
- Stanford University, Hopkins Marine Station
- [UNESCO IODE Ocean Acidification](https://erddap.oa.iode.org/erddap/index.html)
- [University of British Columbia, Earth, Ocean & Atmospheric Sciences Department](https://salishsea.eos.ubc.ca/erddap/index.html)
- University of California at Davis, Bodega Marine Laboratory
- University of Washington, Applied Physics Laboratory
- [Voice of the Ocean](https://erddap.observations.voiceoftheocean.org/erddap/index.html) - Marine data from the Baltic. Primarily ocean gliders

## Contributing

Sharing, suggestions and contributions are always welcome! If you want to contribute, you are highly encouraged to do so. Please read the [contribution guidelines](CONTRIBUTING.md).

Thanks to all [contributors](https://github.com/IrishMarineInstitute/awesome-erddap/graphs/contributors).
